var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
//totals
var callTotalSettings = document.querySelector(".callTotalSettings")
var smsTotalSettings = document.querySelector(".smsTotalSettings")
var totalSettings = document.querySelector(".totalSettings")
var callCostSetting = document.querySelector(".callCostSetting")
var smsCostSetting = document.querySelector(".smsCostSetting")
var warningLevelSetting = document.querySelector(".warningLevelSetting")
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")
var addSettings = document.querySelector(".addSettings")
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
//settings

//buttons



//setting values
var callSetting = 2.55;
var smsSetting = 0.65;
var warningSetting = 30.00;
var criticalSetting = 65.00;

//totalSettings
var callSettingTotal = 0;
var smsSettingTotal = 0;

function settingsBillTotal(){

document.getElementById("setting-button").disabled = false;

    // get the value entered in the billType textfield
    if(parseFloat(callCostSetting.value) < 0 || parseFloat(callCostSetting.value) > 0){
     callSetting = parseFloat(callCostSetting.value);
   }

   if (parseFloat(smsCostSetting.value) < 0 || parseFloat(smsCostSetting.value) > 0) {
     smsSetting = parseFloat(smsCostSetting.value);
   }

     warningSetting = parseFloat(warningLevelSetting.value);
     criticalSetting = parseFloat(criticalLevelSetting.value);



}

function radioBillTotalSettings(){

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
       if (checkedRadioBtn){
        var billItemTypeSettings = checkedRadioBtn.value
      }

      if (billItemTypeSettings === "call"){
          callSettingTotal += callSetting;
      }
      else if (billItemTypeSettings === "sms"){
          smsSettingTotal += smsSetting;
      }

      callTotalSettings.innerHTML = callSettingTotal.toFixed(2);
      smsTotalSettings.innerHTML = smsSettingTotal.toFixed(2);
      var settingTotal = callSettingTotal + smsSettingTotal;
      totalSettings.innerHTML = settingTotal.toFixed(2);



       if (settingTotal >= criticalSetting){
        document.getElementById("setting-button").disabled = true;
              // adding the danger class will make the text red
              totalSettings.classList.add("danger");
         setTimeout(function(){alert("Bill with settings critical level reached")}, 100);


          }

          else if (settingTotal >= warningSetting){
               totalSettings.classList.remove("danger");
             totalSettings.classList.add("warning");
            
          }

else {
  totalSettings.classList.remove("danger");
  totalSettings.classList.remove("warning");
}
}

updateSettings.addEventListener('click', settingsBillTotal);
addSettings.addEventListener("click", radioBillTotalSettings);
// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
