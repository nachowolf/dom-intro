//get a reference to the calculate button
var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");


function calculateBtnClicked(){

  var billString = billStringElement.value;
  var billItems = billString.split(",");
  var billTotal = 0;


  for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim();
    if (billItem === "call"){
      billTotal += 2.75;
    }
    else if (billItem === "sms"){
      billTotal += 0.75;
      }
    }
    var roundedBillTotal = billTotal.toFixed(2);
        billTotalElement.innerHTML = roundedBillTotal;

        if (billTotal >= 30){
                // adding the danger class will make the text red
                billTotalElement.classList.add("danger");
                setTimeout(function(){alert("Calculate bill critical level reached")}, 100);

            }

            else if (billTotal >= 20){
                billTotalElement.classList.add("warning");
            }
            else {
              totalSettings.classList.remove("danger");
              totalSettings.classList.remove("warning");
}
    }

calculateBtnElement.addEventListener('click', calculateBtnClicked);






//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
