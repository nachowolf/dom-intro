


var RadioFactory = function(){

  var radioCallsTotal = 0;
  var radioSmsTotal = 0;

  var radioBill = function (input){

    if (input === "call"){
        radioCallsTotal += 2.75;
    }
    else if (input === "sms") {
        radioSmsTotal += 0.75;
    }
  }

  var radioCall = function(){
    return radioCallsTotal.toFixed(2);
  }

  var radioSms = function(){
    return radioSmsTotal.toFixed(2);
  }

var radioTotal = function(){
  var total = radioCallsTotal + radioSmsTotal
  return total.toFixed(2);
}

return{
  radioAdd : radioBill,
  callTotal : radioCall,
  smsTotal : radioSms,
  total : radioTotal
}

}
