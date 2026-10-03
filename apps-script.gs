// רישום האזנות לגיליון Google Sheets.
// מדביקים את הקוד הזה ב: הגיליון ← Extensions ← Apps Script, ואז Deploy ← New deployment ← Web app
// (Execute as: Me, Who has access: Anyone). את הכתובת שמתקבלת מכניסים ל-LOG_URL ב-index.html.

const SHEET_NAME = 'האזנות';
const HEADERS = ['תאריך ושעה', 'אירוע', 'מזהה מאזין', 'שניות שהושמעו', 'מכשיר', 'שפה', 'אזור זמן', 'הגיע מ'];

function doPost(e) {
  let d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) {}
  // חיתוך אורך, ומניעת טקסט שהגיליון יפרש כנוסחה
  const clip = v => String(v == null ? '' : v).slice(0, 200).replace(/^[=+\-@]/, "'$&");

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
      sheet.setRightToLeft(true);
    }
    sheet.appendRow([
      new Date(), clip(d.event), clip(d.visitor), Number(d.seconds) || 0,
      clip(d.device), clip(d.lang), clip(d.tz), clip(d.ref)
    ]);
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput('ok');
}

function doGet() {
  return ContentService.createTextOutput('ok');
}
