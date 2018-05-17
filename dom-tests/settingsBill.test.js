describe("Tests the setting bill factory", function(){
  it("should return 0 for call, sms and total", function(){
    var settings = SettingsBillFactory()
    assert.equal(settings.total(), 0)
    assert.equal(settings.callTotal(), 0)
    assert.equal(settings.smsTotal(), 0)
  })

  it("should return 15.30 for 6 calls and total and return 0 for sms", function(){
var settings = SettingsBillFactory()
settings.settingsAdd("call")
settings.settingsAdd("call")
settings.settingsAdd("call")
settings.settingsAdd("call")
settings.settingsAdd("call")
settings.settingsAdd("call")
    assert.equal(settings.total(), 15.30)
    assert.equal(settings.callTotal(), 15.30)
    assert.equal(settings.smsTotal(), 0)
  })

  it("should return 15.30 for 6 calls, 6.50 for 10 sms and 21.80 for total", function(){
var settings = SettingsBillFactory()
settings.settingsAdd("sms")
settings.settingsAdd("sms")
settings.settingsAdd("sms")
settings.settingsAdd("sms")
settings.settingsAdd("sms")
settings.settingsAdd("sms")
settings.settingsAdd("sms")
settings.settingsAdd("sms")
settings.settingsAdd("sms")
settings.settingsAdd("sms")
    assert.equal(settings.total(), 21.80)
    assert.equal(settings.callTotal(), 15.30)
    assert.equal(settings.smsTotal(), 6.50)
  })
})