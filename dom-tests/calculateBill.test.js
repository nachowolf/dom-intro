describe('Tests calculate bill function' , function(){

/*  it("shoud return 0" , function(){
    var calculateBill = calculateBillEvent()
    calculateBill.calculatebill("")
    assert.equal(calculateBill.Total(), 0)
  })*/

    it('Should return the price of 5 calls (13.75)' , function(){
      var calculateBill = calculateBillEvent()
        calculateBill.calculatebill("call,call,call,call,call")
        assert.equal(calculateBill.Total(), 13.75);
});

it('Should return the price of 7 sms (5.25)' , function(){
  var calculateBill = calculateBillEvent()
  calculateBill.calculatebill("sms,sms,sms,sms,sms,sms,sms")
    assert.equal(calculateBill.Total(), 5.25);
});

it("Should return the price of 4 sms and 5 calls (16.75)",function(){
  var calculateBill = calculateBillEvent()
  calculateBill.calculatebill("sms,call,sms,call,sms,call,sms,call,call")
  assert.equal(calculateBill.Total(), 16.75)
})
});
