function myFunction() {
  var ss=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("mentor");
  var lr=ss.getLastRow();
  var data=0;
  var new_count=ss.getRange(lr,5).setValue(data);
}
