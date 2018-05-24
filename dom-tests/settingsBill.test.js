describe("Tests the setting bill factory", function(){

/*  it("should return 0 for call, sms and total", function(){
    var settings = SettingsBillFactory()
    assert.equal(settings.callTotal(), 0)
    assert.equal(settings.smsTotal(), 0)
    assert.equal(settings.total(), 0)

  })*/

  it("should update sms,call, warning and critical setiings and return the call total, sms total and overall total", function(){
    var settings = SettingsBillFactory();
    settings.call(5);
    settings.sms(2.50);
    settings.warning(30);
    settings.critical(40);
    settings.settingsAdd("sms");
    settings.settingsAdd("call");
    assert.equal(settings.callTotal(), 5.00);
    assert.equal(settings.smsTotal(), 2.50);
    assert.equal(settings.total(), 7.50);
  });


  it("should return 30.00 for 6 calls, 0 for 0 sms and 30.00 for overall total", function(){
var settings = SettingsBillFactory();
settings.call(5);
settings.sms(2.50);
settings.warning(30);
settings.critical(40);
settings.settingsAdd("call");
settings.settingsAdd("call");
settings.settingsAdd("call");
settings.settingsAdd("call");
settings.settingsAdd("call");
settings.settingsAdd("call");
assert.equal(settings.callTotal(), 30.00);
assert.equal(settings.smsTotal(), 0);
    assert.equal(settings.total(), 30.00);

  });

  it("should return 0 for 0 calls, 15.00 for 6 sms and 15.00 for total", function(){
var settings = SettingsBillFactory();
settings.call(5);
settings.sms(2.50);
settings.warning(30);
settings.critical(40);
settings.settingsAdd("sms");
settings.settingsAdd("sms");
settings.settingsAdd("sms");
settings.settingsAdd("sms");
settings.settingsAdd("sms");
settings.settingsAdd("sms");
assert.equal(settings.callTotal(), 0);
assert.equal(settings.smsTotal(), 15.00);
    assert.equal(settings.total(), 15.00);
});

it("should return 30.00 for 5 calls, 10 for 4 sms and 35.00 for overall total", function(){
var settings = SettingsBillFactory();
settings.call(5);
settings.sms(2.50);
settings.warning(30);
settings.critical(40);
settings.settingsAdd("call");
settings.settingsAdd("call");
settings.settingsAdd("call");
settings.settingsAdd("call");
settings.settingsAdd("call");
settings.settingsAdd("sms");
settings.settingsAdd("sms");
settings.settingsAdd("sms");
settings.settingsAdd("sms");
assert.equal(settings.callTotal(), 25.00);
assert.equal(settings.smsTotal(), 10.00);
  assert.equal(settings.total(), 35.00);

});

});
