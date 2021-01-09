

function myFunction1() {
  var URL="https://docs.google.com/spreadsheets/d/1jbK2kOg7jiNPmTEIRFrK5chvHAz-394GgbxaLpAswCQ/edit#gid=1276377031";
     
  var sss=SpreadsheetApp.openByUrl(URL);
  var sheet =sss.getSheetByName("mentor");
  
  //Logger.log(mentor);
  var lr=2;
  var mentee_sheet=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("mentee");
  var recent_mentee=mentee_sheet.getLastRow();
   //Logger.log(recent_mentee);
  var name_mentee=mentee_sheet.getRange(recent_mentee,2).getValue();
  var email_id=mentee_sheet.getRange(recent_mentee,3).getValue();

  var templateBody=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheet2").getRange(1,1).getValue();
 
  while(true)
  {
    var count=sheet.getRange(lr,5).getValue();
    var menteemax=sheet.getRange(lr,3).getValue();
    if(count<menteemax)
     {  var mailmentor=sheet.getRange(lr,4).getValue();
      var mentor=sheet.getRange(lr,2).getValue();
     //Logger.log(email_id);
       var message_body=templateBody.replace("{name}",name_mentee).replace("{name1}",mentor);
   MailApp.sendEmail(email_id,"Regarding  ASpire for Her",message_body);
    MailApp.sendEmail(mailmentor,"Regarding Aspire for her", "Got a new mentee"+name_mentee);
     ++count;
      sheet.getRange(lr,5).setValue(count);
     break;
     }
   else
     lr++;
  }
  

}
