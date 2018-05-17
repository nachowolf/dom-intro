describe("Tests the radio bill function", function(){

  it("Should return 0 for call, sms and total", function(){
    var radioFun = RadioFactory()
    assert.equal(radioFun.total(), 0)
assert.equal(radioFun.callTotal(), 0)
assert.equal(radioFun.smsTotal(), 0)

  })

  it("should return 0 for sms and 13.75 for total and 5 calls", function(){
    var radioFun = RadioFactory()
    radioFun.radioAdd("call"),
    radioFun.radioAdd("call"),
    radioFun.radioAdd("call"),
    radioFun.radioAdd("call"),
    radioFun.radioAdd("call"),
    assert.equal(radioFun.total(), 13.75)
    assert.equal(radioFun.callTotal(), 13.75)
    assert.equal(radioFun.smsTotal(), 0)

  })

  it("should return 2.25 for 3 sms, 16 for total and 13.75 for calls", function(){
    var radioFun = RadioFactory()

    radioFun.radioAdd("sms"),
    radioFun.radioAdd("sms"),
    radioFun.radioAdd("sms"),
    assert.equal(radioFun.total(), 16)
    assert.equal(radioFun.callTotal(), 13.75)
    assert.equal(radioFun.smsTotal(), 2.25)

  })
})
