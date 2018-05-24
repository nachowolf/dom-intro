describe("Testing the text bill function", function(){

  it("should return 19.25 for call and total and 0 for sms", function(){
    var callAndSms = TextBillCalculator();
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
    assert.equal(callAndSms.smsTotal(), 0);
    assert.equal(callAndSms.callTotal(), 19.25);
assert.equal(callAndSms.textTotal(), 19.25);
});

it("should return 2.25 for sms and total and 0 for call", function(){
  var callAndSms = TextBillCalculator();
  callAndSms.add("sms");
  callAndSms.add("sms");
  callAndSms.add("sms");
  assert.equal(callAndSms.smsTotal(), 2.25);
  assert.equal(callAndSms.callTotal(), 0);
  assert.equal(callAndSms.textTotal(), 2.25);
});

it("should return 4.50 for sms, 13.75 for call and 18.25 for total", function(){
var callAndSms = TextBillCalculator();
callAndSms.add("sms");
callAndSms.add("sms");
callAndSms.add("sms");
callAndSms.add("sms");
callAndSms.add("sms");
callAndSms.add("sms");
callAndSms.add("call");
callAndSms.add("call");
callAndSms.add("call");
callAndSms.add("call");
callAndSms.add("call");
assert.equal(callAndSms.smsTotal(), 4.50);
assert.equal(callAndSms.callTotal(), 13.75);
assert.equal(callAndSms.textTotal(), 18.25);
});
});
