var textBillCalculator = function(){

  var textCallsTotal = 0;
  var textSmsTotal = 0;

var textBillTotal = function(text){

    if (text === "call"){
     textCallsTotal += 2.75;
  }

      else if (text === "sms"){
        textSmsTotal += 0.75;
      }
    };

/*var callTotal = function() {
  return textCallsTotal
  }

  var smsTotal = function(){
    return textSmsTotal
  }*/

    var total = function(){
      var fullTotal = textSmsTotal + textCallsTotal
      return fullTotal
    }


return {
  add : textBillTotal,
  total : total,
  //callTotal : callTotal,
  //smsTotal : smsTotal
}
};
