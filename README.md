# 犬貓行為與就診壓力篩檢

這是獨立於原本 QOL 網站的新問卷網站，整合三份行為工具：

- 犬行為與氣質篩檢 (C-BARQ 架構參考版)
- 犬短版行為篩檢 (C-BARQ(S) / mini C-BARQ 架構參考版，42 題)
- 貓行為與就診壓力篩檢 (Fe-BARQ 架構參考版)

本網站依文獻架構整理為院內篩檢/追蹤工具，並非官方 C-BARQ、C-BARQ(S) 或 Fe-BARQ 題本逐字重製。結果用於問診、行為諮詢、低壓力就診計畫與 PVPs 調整參考，不取代獸醫師診斷或治療建議。

## 路由

- `/c-barq`
- `/short-cbarq`
- `/fe-barq`

## Firebase

前端使用匿名登入寫入 Firestore collection：`behaviorRecords`。建議規則：

```txt
match /behaviorRecords/{recordId} {
  allow create: if request.auth != null
    && request.resource.data.anonymousUid == request.auth.uid
    && request.resource.data.schemaVersion == 1
    && request.resource.data.assessmentId is string
    && request.resource.data.answers is list
    && request.resource.data.answers.size() <= 120;
  allow read, update, delete: if false;
}
```

## Google Sheet / Drive 匯出

部署此子專案時，`api/export-record.js` 會呼叫 Google Apps Script Web App，依問卷追加到：

- `C-BARQ`
- `Short C-BARQ`
- `Fe-BARQ`

需要在此 Vercel 專案設定：

- `GOOGLE_APPS_SCRIPT_WEBAPP_URL`
- `GOOGLE_APPS_SCRIPT_SECRET`，也要在 Apps Script Script Properties 設定同值 `EXPORT_SECRET`
- `GOOGLE_SHEET_ID`
- `GOOGLE_DRIVE_FOLDER_ID`

可選的問卷專屬資料夾：

- `GOOGLE_DRIVE_FOLDER_C_BARQ`
- `GOOGLE_DRIVE_FOLDER_SHORT_CBARQ`
- `GOOGLE_DRIVE_FOLDER_FE_BARQ`

`google-apps-script/Code.gs` 有更新時，需在 Apps Script 重新部署新 Web App 版本。

## Vercel 部署

如果和原本 QOL repo 放在同一個 GitHub repository，請在 Vercel 新增另一個 Project，Root Directory 設為 `behavior-screening`。Build Command 留空，Output Directory 留空。
