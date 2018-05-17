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


//totalSettings


function settingsBillTotal(){
var settings = SettingsBillFactory();
document.getElementById("setting-button").disabled = false;

var callCost = callCostSetting.value
var smsCost = smsCostSetting.value
var warningSetting = warningLevelSetting.value
var criticalSetting = criticalLevelSetting.value

settings.call(callCost)
settings.sms(smsCost)
settings.warning(warningSetting)
settings.critical(criticalSetting)


}

function radioBillTotalSettings(){
var settings = SettingsBillFactory();
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
       if (checkedRadioBtn){
        var billItemTypeSettings = checkedRadioBtn.value
      }

settings.settingsAdd(billItemTypeSettings)

      var callSettingTotal = settings.callTotal()
      var smsSettingTotal = settings.smsTotal()
      var settingTotal = settings.total()

      callTotalSettings.innerHTML = callSettingTotal
      smsTotalSettings.innerHTML = smsSettingTotal
      totalSettings.innerHTML = settingTotal



       if (settingTotal >= criticalSetting){
        document.getElementById("setting-button").disabled = true;
              // adding the danger class will make the text red
              totalSettings.classList.add("danger");
         setTimeout(function(){alert("Bill with settings critical level reached")}, 100);


          }

          else if (settingTotal >= warningSetting){
             totalSettings.classList.add("warning");
             totalSettings.classList.remove("danger");
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
