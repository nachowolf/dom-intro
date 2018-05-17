var billTypeTextElement = document.querySelector(".billTypeText")
var addToBillBtnElement = document.querySelector(".addToBillBtn")
var callTotalOneElement = document.querySelector(".callTotalOne")
var smsTotalOneElement = document.querySelector(".smsTotalOne")
var totalOneElement = document.querySelector(".totalOne")


var textBillTotal = function(){
var textBill = TextBillCalculator()
document.getElementById("text-button").disabled = false;
    // get the value entered in the billType textfield
var billTypeEntered = billTypeTextElement.value
textBill.add(billTypeEntered)

var textCallTotal = textBill.callTotal()
var textSmsTotal = textBill.smsTotal()
var textTotalCost = textBill.textTotal()


    //update the totals that is displayed on the screen.
    callTotalOneElement.innerHTML = textCallTotal
    smsTotalOneElement.innerHTML = textSmsTotal
    totalOneElement.innerHTML = textTotalCost

    if (textTotalCost >= 50){
            // adding the danger class will make the text red
            totalOneElement.classList.add("danger");
            document.getElementById("text-button").disabled = true;
            setTimeout(function(){alert("Text bill critical level reached")}, 100);

        }

        else if (textTotalCost >= 30){
            totalOneElement.classList.add("warning");
        }
        else {
          totalOneElement.classList.remove("danger");
          totalOneElement.classList.remove("warning");
        }
}

addToBillBtnElement.addEventListener('click', textBillTotal);


// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
