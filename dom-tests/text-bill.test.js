describe("Testing the text bill function", function(){

  it("should return the price of just 7 calls (19.25)", function(){
    var callAndSms = TextBillCalculator();
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
    callAndSms.add("call");
assert.equal(callAndSms.textTotal(), 19.25);
});

it("should return the price of just 3 sms (2.25)", function(){
  var callAndSms = TextBillCalculator();
  callAndSms.add("sms");
  callAndSms.add("sms");
  callAndSms.add("sms");
  assert.equal(callAndSms.smsTotal(), 2.25)

})

it("should return the price of the total cost of 3 sms and 7 calls (21.50)", function(){
var callAndSms = TextBillCalculator();

assert.equal(callAndSms.textTotal(), 21.50)
})
});
