//get a reference to the calculate button
var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");


var calculateBtnClicked = function(){
var calculateBillFunc = calculateBillEvent();
var billString = billStringElement.value;

calculateBillFunc.calculatebill(billString);
var billTotal = calculateBillFunc.Total();
        billTotalElement.innerHTML = billTotal

        if (billTotal >= 30){
                // adding the danger class will make the text red
                billTotalElement.classList.add("danger");
                setTimeout(function(){alert("Calculate bill critical level reached")}, 100);

            }

            else if (billTotal >= 20){
              billTotalElement.classList.remove("danger");
                billTotalElement.classList.add("warning");
            }
            else {
              billTotalElement.classList.remove("danger");
              billTotalElement.classList.remove("warning");
}
}

calculateBtnElement.addEventListener('click', calculateBtnClicked);
