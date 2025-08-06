# 🏗️ ארכיטקטורת המאגר - תיעוד טכני

## GitMCP Search Keywords  
repository architecture, file structure, מבנה מאגר, ארכיטקטורה, תיעוד טכני, gitMCP optimization, AI repository structure, hierarchical organization

## 📐 עקרונות עיצוב

### עיצוב היררכי GitMCP
המאגר תוכנן ליעילות מקסימלית עם כלי GitMCP וחיפוש סמנטי:
- **README בכל רמה** - מידע מיידי בכל תיקייה
- **מטאדטה מובנית** - JSON עקבי לעיבוד אוטומטי  
- **מילות מפתח אופטימליות** - בעברית ובאנגלית
- **קישורים פנימיים** - ניווט מהיר בין רכיבים

### אופטימיזציה למודלי AI
- **סיכומים מנהלים** - תשובות מהירות לשאלות כלליות
- **נתונים מובנים** - שדות סטנדרטיים לחיפוש מדויק
- **הקשר רב-שכבתי** - מידע מקומי וארצי
- **תמיכה בשפות** - עברית, אנגלית וביטויים מקצועיים

## 🗂️ מבנה התיקיות המלא

```
israeli-planning-repository/
│
├── 📄 README.md                     # מדריך ראשי + GitMCP keywords
├── 📄 SEARCH_GUIDE.md               # מדריך חיפוש מפורט
├── 📄 ARCHITECTURE.md               # מסמך זה
├── 📄 API_REFERENCE.md              # תיעוד API וכלים
├── 📄 llms.txt                      # אופטימיזציה למודלי שפה
├── 📄 CHANGELOG.md                  # היסטוריית שינויים
│
├── 📁 metadata/                     # מטאדטה ואינדקסים
│   ├── 📊 plans_master_index.json   # אינדקס מרכזי לכל התוכניות
│   ├── 📊 cities_index.json         # אינדקס ערים
│   ├── 📊 search_keywords.json      # מילות מפתח מאורגנות
│   ├── 📊 statistics.json           # נתונים סטטיסטיים
│   └── 📊 processing_log.json       # יומן עיבוד
│
├── 📁 cities/                       # תוכניות לפי ערים
│   ├── 📄 README.md                 # הסבר ארגון הערים
│   ├── 📄 CITIES_OVERVIEW.md        # סקירת כל הערים
│   │
│   ├── 📁 or-yehuda/               # אור יהודה
│   │   ├── 📄 README.md             # מבוא לעיר
│   │   ├── 📊 city_metadata.json    # נתוני עיר מובנים
│   │   ├── 📄 CITY_PROFILE.md       # פרופיל עירוני מפורט
│   │   │
│   │   └── 📁 plans/                # תוכניות העיר
│   │       ├── 📄 INDEX.md          # רשימת כל התוכניות
│   │       │
│   │       └── 📁 552-0137539/      # תוכנית ספציפית
│   │           ├── 📄 README.md     # סיכום התוכנית
│   │           ├── 📊 plan_metadata.json  # נתונים מובנים
│   │           ├── 📄 SUMMARY.md     # סיכום מנהלים
│   │           ├── 📄 TECHNICAL.md   # פרטים טכניים
│   │           ├── 📄 IMPACT.md      # ניתוח השפעות
│   │           │
│   │           ├── 📁 documents/     # מסמכים מקוריים
│   │           │   ├── 📄 README.md  # הסבר המסמכים
│   │           │   ├── 📁 regulations/    # תקנונים
│   │           │   ├── 📁 drawings/       # תשריטים
│   │           │   ├── 📁 appendices/     # נספחים
│   │           │   └── 📁 maps/           # מפות
│   │           │
│   │           ├── 📁 extracted/     # תוכן מחולץ
│   │           │   ├── 📄 README.md  # הסבר החילוץ
│   │           │   ├── 📄 full_text.md    # טקסט מלא
│   │           │   ├── 📄 key_sections.md # קטעים מרכזיים
│   │           │   └── 📊 entities.json  # ישויות מזוהות
│   │           │
│   │           └── 📁 analysis/      # ניתוחים
│   │               ├── 📄 README.md  # הסבר הניתוחים
│   │               ├── 📄 executive_summary.md # סיכום מנהלים
│   │               ├── 📄 compliance_check.md  # בדיקת תקינות
│   │               └── 📄 impact_assessment.md # הערכת השפעה
│   │
│   ├── 📁 abu-ghosh/               # אבו גוש
│   ├── 📁 ofakim/                  # אופקים  
│   └── 📁 [cities...]/             # ערים נוספות
│
├── 📁 tools/                       # כלי עיבוד וחיפוש
│   ├── 📄 README.md                # הסבר הכלים
│   ├── 🔧 search_api.js            # API חיפוש מתקדם
│   ├── 🔧 data_processor.py        # עיבוד נתונים
│   ├── 🔧 metadata_generator.js    # יצירת מטאדטה
│   ├── 🔧 text_extractor.py        # חילוץ טקסט מPDF
│   └── 🔧 validation_tools.py      # בדיקת תקינות
│
├── 📁 templates/                   # תבניות לעיבוד
│   ├── 📄 README.md                # הסבר התבניות
│   ├── 📄 plan_template.md         # תבנית תוכנית
│   ├── 📄 city_template.md         # תבנית עיר
│   ├── 📊 metadata_schema.json     # סכמת מטאדטה
│   └── 📊 analysis_template.json   # תבנית ניתוח
│
└── 📁 exports/                     # יצואים ודוחות
    ├── 📄 README.md                # הסבר היצואים
    ├── 📊 national_report.json     # דוח ארצי
    ├── 📊 cities_comparison.json   # השוואת ערים
    └── 📄 insights_summary.md      # תובנות מרכזיות
```

## 📊 סכמת מטאדטה סטנדרטית

### תוכנית יחידה (plan_metadata.json)
```json
{
  "basic_info": {
    "plan_number": "string",
    "plan_id": "number", 
    "city": "string",
    "city_en": "string",
    "city_code": "number",
    "status": "string",
    "status_en": "string",
    "status_date": "string",
    "plan_type": "string",
    "plan_type_en": "string"
  },
  "location": {
    "coordinates": "object",
    "boundaries": "object", 
    "area_hectares": "number",
    "neighborhoods": "array"
  },
  "planning_details": {
    "building_rights": "object",
    "land_use_distribution": "object",
    "density_requirements": "object"
  },
  "documents_inventory": {
    "takanon": "object",
    "tasritim": "array",
    "nispachim": "array", 
    "maps": "array"
  },
  "ai_analysis": {
    "summary": "string",
    "key_points": "array",
    "opportunities": "array",
    "challenges": "array",
    "stakeholder_impact": "object"
  },
  "search_keywords": "array",
  "processing_metadata": "object"
}
```

### עיר (city_metadata.json)  
```json
{
  "city_info": {
    "name": "string",
    "name_en": "string", 
    "city_code": "number",
    "population": "number",
    "region": "string",
    "characteristics": "array"
  },
  "planning_statistics": {
    "total_plans": "number",
    "by_status": "object",
    "by_type": "object",
    "avg_building_height": "string"
  },
  "processing_info": "object"
}
```

## 🔍 אסטרטגיית חיפוש רב-שכבתית

### רמה 1: חיפוש מהיר (אינדקס מרכזי)
- **קובץ:** `/metadata/plans_master_index.json`
- **זמן תגובה:** < 100ms
- **תוצאות:** סיכום בסיסי + קישורים
- **שימוש:** חיפושים כלליים ומהירים

### רמה 2: חיפוש עירוני (מטאדטה מקומית)
- **קבצים:** `/cities/[city]/README.md`, `city_metadata.json`
- **זמן תגובה:** < 500ms  
- **תוצאות:** מידע עירוני מפורט
- **שימוש:** חיפוש ספציפי לעיר

### רמה 3: חיפוש תוכנית (נתונים מלאים)
- **קבצים:** `plan_metadata.json`, `README.md`
- **זמן תגובה:** < 1s
- **תוצאות:** כל הפרטים על התוכנית
- **שימוש:** מידע מפורט על תוכנית ספציפית

### רמה 4: חיפוש תוכן (טקסט מחולץ)
- **קבצים:** `/extracted/full_text.md`
- **זמן תגובה:** 1-5s
- **תוצאות:** חיפוש בתוכן מלא של מסמכים
- **שימוש:** שאלות מורכבות וחיפוש עמוק

## 🤖 אינטגרציה עם כלי AI

### GitMCP אופטימיזציה
- **מילות מפתח בכל קובץ README**
- **מבנה היררכי עקבי** 
- **קישורים פנימיים לניווט מהיר**
- **תמיכה בחיפוש סמנטי**

### API לאינטגרציה
```javascript
// דוגמאות לשימוש עם AI
const search = new SmartPlanningSearch('./israeli-planning-repository');

// חיפוש בסיסי
const results = search.quickSearch("מגורים אור יהודה");

// חיפוש מובנה  
const filtered = search.structuredSearch({
  city: "אור יהודה",
  status: "מאושר",
  maxHeight: 4
});

// המלצות מבוססות AI
const recommendations = search.getRecommendations("552-0137539");

// אנליטיקה ותובנות
const insights = search.getInsights("אור יהודה");
```

## 📈 מדדי ביצועים

### זמני טעינה יעד
- **אינדקס מרכזי:** < 100ms
- **מטאדטה עירונית:** < 300ms  
- **תוכנית מפורטת:** < 1s
- **חיפוש טקסט מלא:** < 5s

### כיסוי נתונים יעד
- **תוכניות מעובדות:** > 95%
- **מטאדטה מלאה:** > 90%
- **טקסט מחולץ:** > 85%
- **ניתוח AI:** > 80%

### איכות נתונים
- **דיוק מטאדטה:** > 95%
- **שלמות מסמכים:** > 90%
- **מילות מפתח רלוונטיות:** > 85%
- **קישורים פעילים:** > 95%

## 🔧 כלי פיתוח וכלים

### עיבוד נתונים
- **data_processor.py** - עיבוד קבצי מקור לפורמט חדש
- **text_extractor.py** - חילוץ טקסט מ-PDF באמצעות OCR
- **metadata_generator.js** - יצירת מטאדטה אוטומטית

### חיפוש ומתקדם
- **search_api.js** - API חיפוש חכם עם פילטרים
- **validation_tools.py** - בדיקת תקינות נתונים
- **export_tools.js** - יצוא לפורמטים שונים

### פיקוח ותחזוקה
- **processing_monitor.py** - ניטור תהליכי עיבוד
- **integrity_checker.js** - בדיקת שלמות קבצים
- **update_manager.py** - ניהול עדכונים

## 🚀 תכנון עתידי

### שיפורים קצרי טווח
- **הרחבת כיסוי ערים** - הוספת ערים נוספות
- **שיפור חילוץ טקסט** - OCR מתקדם יותר
- **אוטומציה מלאה** - עיבוד אוטומטי של תוכניות חדשות

### שיפורים ארוכי טווח
- **ממשק ויזואלי** - דפדפן ומפות אינטראקטיביות  
- **API מלא** - שירות REST מלא
- **אינטגרציה חיצונית** - חיבור למערכות ממשלתיות

---

*תיעוד זה מתעדכן בהתאם לפיתוח המאגר | גרסה: 1.0 | תאריך: אוגוסט 2025*