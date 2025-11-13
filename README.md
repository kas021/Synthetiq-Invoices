# Synthetiq Invoices 📄✨

**A privacy-first, offline invoice generator built for freelancers, tradespeople, students, small businesses, and anyone who just needs clean PDF invoices without stress.**

This is the _official open source release_ of the Synthetiq Invoices iOS App, created by **Khubaib Shaikh** and other members of the Synthetiq team.
The version in this repository is the same version submitted to Apple for App Store review.

---

## 🚀 Project Overview

Synthetiq Invoices lets you create invoices quickly **with no accounts, no servers, and no ads**. Everything stays on your device.

This is one of the biggest and most polished open source projects from the Synthetiq team to date.
The goal was simple: **build something useful, beautiful, and fully private.**

---

## 🔐 Privacy First

Your data stays **on your iPhone**.

- No accounts
- No tracking
- No analytics
- No cloud sync
- No servers
Everything is stored locally using browser storage and Capacitor Filesystem.

---

## ✨ Features

- **Offline PDF Generation**
  Create, view, save, and share clean invoice PDFs.
  Includes multiple templates and currencies.
- **Themes**
  Choose from multiple themes including Midnight Blue.
  Changes apply instantly.
- **Profiles**
  Manage both sender profiles and client profiles.
- **Inline PDF Viewer**
  View invoices inside the app with a built-in viewer and a working back button.
- **Smart Search**
  Search invoices by:
  - Client name
  - Invoice number
  - Amount
  - Date
- **Full iOS Share Support**
  Use the native share sheet to send PDFs anywhere.

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Capacitor 6
- Swift (native iOS layer)
- html2canvas for PDF rendering

---

## 📦 Project Structure

```
synthetiq-invoice/
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   ├── pages/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── lib/
│   └── types.ts
├── ios/
│   └── App (Xcode project)
├── public/
├── dist/
├── capacitor.config.ts
└── package.json
```

---

## 🧑‍💻 Build and Run

**Development:**
```bash
npm install
npm run dev
```

**Production Build:**
```bash
npm run build
```

**iOS Build:**
```bash
npx cap sync ios
npx cap open ios
```
_Archive and upload using Xcode._

---

## 📱 How It Works

**Creating Invoices**
1. Tap the plus button
2. Fill out fields
3. Select sender and client profiles
4. Save
5. View or share the PDF

**Profiles**
Store business details and customer details for faster invoice creation.

**Templates**
Choose a template in Settings.
Apply changes to old invoices with the "New Look" button.

**Saving and Sharing**
Invoices are saved locally and can be viewed at any time.

---

## 📄 App Status

- iOS build created
- Submitted to Apple for review
- Open source and publicly available

---

## 🙌 Contributors

- Khubaib Shaikh
- Other members of the Synthetiq team

*If you want to be credited publicly, you can open a pull request.*

---

## 📘 License

This project is **fully open source**.
You are free to modify or reuse any part of it.

---

## 💬 Final Note

This was built with the goal of helping people create invoices quickly without needing complicated accounting software.
The Synthetiq team hopes this becomes a tool that many people rely on.

---
