# דף ההקלטה לספר

האתר: https://idandvd.github.io/book-page/ (GitHub Pages, ענף `main`, תיקיית השורש).
ה-QR שבספר מפנה לכתובת הזו, ולכן **אסור לשנות את שם המשתמש ב-GitHub או את שם הריפו**.

## קבצים
- `index.html` הדף עם הנגן.
- `recording.mp3` ההקלטה. כדי להחליף הקלטה מעלים קובץ חדש באותו שם.
- `apps-script.gs` הסקריפט שרושם האזנות לגיליון Google Sheets.
- `qr.svg` / `qr.png` הקוד להדפסה.
- `next-year-redirect.html` תבנית להפניה לאתר אחר בעתיד.

## סטטיסטיקה (Google Sheets)
1. ליצור גיליון חדש (sheets.new).
2. Extensions ← Apps Script, למחוק את מה שיש ולהדביק את התוכן של `apps-script.gs`.
3. Deploy ← New deployment ← Web app. Execute as: **Me**, Who has access: **Anyone**. לאשר הרשאות.
4. להעתיק את ה-Web app URL (מסתיים ב-`/exec`) לתוך `LOG_URL` ב-`index.html`.

בגיליון תיווצר לשונית "האזנות" עם שורה לכל אירוע:
`visit` (נכנס לדף), `play` (לחץ להשמיע), `ended` (שמע עד הסוף), `left` (יצא באמצע, עם מספר השניות), `download`.
"מזהה מאזין" הוא מספר אקראי שנשמר בדפדפן, כדי להבדיל בין מאזינים שונים לבין האזנות חוזרות. אין זיהוי אישי.

אם משנים את הסקריפט: Deploy ← Manage deployments ← עריכה ← Version: New version (כך הכתובת נשארת זהה).

## בשנה הבאה
לשנות את שם `next-year-redirect.html` ל-`index.html`, להכניס את כתובת היעד ואת `LOG_URL`, ולדחוף.
