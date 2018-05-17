var textCallsTotal = 0;
var textSmsTotal = 0;
var TextBillCalculator = function(){


var textBillTotal = function(input){
var text = input.trim();
    if (text === "call"){
     textCallsTotal += 2.75;
  }

      else if (text === "sms"){
        textSmsTotal += 0.75;
      }
    };

var callTotal = function() {
  return textCallsTotal.toFixed(2);
  }

  var smsTotal = function(){
    return textSmsTotal.toFixed(2);
  }

    var total = function(){
      var fullTotal = textSmsTotal + textCallsTotal
      return fullTotal.toFixed(2);
    }


return {
  add : textBillTotal,
  textTotal : total,
  callTotal : callTotal,
  smsTotal : smsTotal
}
};
