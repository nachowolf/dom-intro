var calculateBillEvent = function(){

  var billTotal = 0;

var calculatebill = function(input){
  var billString = input
  var billItems = billString.split(",");


  for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim();
    if (billItem === "call"){
      billTotal += 2.75;
    };
     if (billItem === "sms"){
      billTotal += 0.75;
    };
    };
};
var calculateTotal = function(input){
    var roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal
}
return{
calculatebill : calculatebill,
Total : calculateTotal

};
};
