var callSetting = 2.55;
var smsSetting = 0.65;
var warningSetting = 30.00;
var criticalSetting = 65.00;

var callSettingTotal = 0;
var smsSettingTotal = 0;

var SettingsBillFactory = function(){

  var settingCall = function(input){
     if(parseFloat(input) < 0 || parseFloat(input) > 0){
     callSetting = parseFloat(input);
   }
  }

  var settingSms = function(input){
    if (parseFloat(input) < 0 || parseFloat(input) > 0) {
      smsSetting = parseFloat(input);
    }
  }

var settingWarning = function(input){
  warningSetting = parseFloat(input);
}

var settingCritical = function(input){
  criticalSetting = parseFloat(input);
}

var settingsBill = function(input){
  if (input === "call"){
      callSettingTotal += callSetting;
  }
  else if (input === "sms"){
      smsSettingTotal += smsSetting;
  }
}

var callTotal = function(){
  return callSettingTotal.toFixed(2);
}

var smsTotal = function(){
  return smsSettingTotal.toFixed(2);
}

var settingTotal = function(){
  var total = callSettingTotal + smsSettingTotal
  return total.toFixed(2)
}
return{
  call : settingCall,
  sms : settingSms,
  warning : settingWarning,
  critical : settingCritical,
  callTotal : callTotal,
  smsTotal : smsTotal,
  total : settingTotal,
  settingsAdd : settingsBill
}

}
