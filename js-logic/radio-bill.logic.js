


    var radioCallsTotal = 0;
    var radioSmsTotal = 0;


    function radioBillTotal(){




      if (billItemType === "call"){
          radioCallsTotal += 2.75;
      }
      else if (billItemType === "sms") {
          radioSmsTotal += 0.75;
      }
}
