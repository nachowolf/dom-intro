var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");



    var radioCallsTotal = 0;
    var radioSmsTotal = 0;


    function radioBillTotal(){
      document.getElementById("radio-button").disabled = false;
      var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

      if (checkedRadioBtn){
          var billItemType = checkedRadioBtn.value
        }

      if (billItemType === "call"){
          radioCallsTotal += 2.75;
      }
      else if (billItemType === "sms") {
          radioSmsTotal += 0.75;
      }
        // get the value entered in the billType textfie


        //update the totals that is displayed on the screen.
        callTotalTwoElement.innerHTML = radioCallsTotal.toFixed(2);
        smsTotalTwoElement.innerHTML = radioSmsTotal.toFixed(2);
        var radioTotalCost = radioCallsTotal + radioSmsTotal;
        totalTwoElement.innerHTML = radioTotalCost.toFixed(2);

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
              totalSettings.classList.remove("danger");
              totalSettings.classList.remove("warning");
            }
    }

    radioBillAddBtnElement.addEventListener('click', radioBillTotal);


    // billItemType will be 'call' or 'sms'

// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
