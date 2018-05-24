var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");


 var radioFun = RadioFactory();


    function radioBillTotal(){
      document.getElementById("radio-button").disabled = false;
      var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

      if (checkedRadioBtn){
          var billItemType = checkedRadioBtn.value
        }

         radioFun.radioAdd(billItemType)

         var radioCallsTotal = radioFun.callTotal()
         var radioSmsTotal = radioFun.smsTotal()
         var radioTotalCost = radioFun.total()

        // get the value entered in the billType textfie


        //update the totals that is displayed on the screen.
        callTotalTwoElement.innerHTML = radioCallsTotal
        smsTotalTwoElement.innerHTML = radioSmsTotal
        totalTwoElement.innerHTML = radioTotalCost

        if (radioTotalCost >= 50){
                // adding the danger class will make the text red
                totalTwoElement.classList.add("danger");
                document.getElementById("radio-button").disabled = true;
                setTimeout(function(){alert("Radio bill critical level reached")}, 100);

            }

            else if (radioTotalCost >= 30){
                totalTwoElement.classList.add("warning");
            }
            else {
              totalTwoElement.classList.remove("danger");
              totalTwoElement.classList.remove("warning");
            }
    }

    radioBillAddBtnElement.addEventListener('click', radioBillTotal);
