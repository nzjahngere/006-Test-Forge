# 🛍️ Rakuten Coupons Automation Project

![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen) ![Masai](https://img.shields.io/badge/Masai-School-red)

## 📌 Introduction 🚀

The project automates end-to-end testing of the Rakuten Coupons platform using Cypress. It focuses on validating critical user flows such as navigation, coupon discovery, cashback, and account management. The goal is to create a modular, maintainable automation suite with reliable execution logs and reports.

---

## 🔹 Project Overview

✅ End-to-end testing automation using Cypress
✅ UI Testing, Functional Testing, and Negative Scenarios
✅ Page Object Model (POM) for scalable architecture
✅ Generates Mochawesome HTML reports for visual execution insights
✅ CI-ready structure for easy pipeline integration

---

## 📂 Project Structure

```
RakutenAutomation/
│── cypress/
│   ├── e2e/                  # Test specs
│   ├── pages/                # POM class files
│   ├── support/              # Commands & configs
│   ├── fixtures/             # Test data
│   ├── screenshots/          # Captures on failure
│   ├── videos/               # Optional video logs
│── mochawesome-report/       # Test execution report
│── cypress.config.js         # Cypress configuration
│── package.json              # Project dependencies
│── README.md                 # Documentation
│── .gitignore
```

---

## 🛠️ Tech Stack Used

| Technology    | Purpose                                    |
| ------------- | ------------------------------------------ |
| JavaScript    | Core scripting language                    |
| Cypress       | UI and E2E automation framework            |
| Mochawesome   | Rich HTML report generation                |
| POM           | Scalable test structure                    |
| Node.js / NPM | Runtime environment and dependency manager |

---

## ⚙️ Setup & Installation

### 🔹 Prerequisites

* Node.js v16+
* Git
* VS Code or preferred IDE
* Chrome browser (recommended)

### 🔹 Clone the Repository

```bash
git clone https://github.com/yourusername/rakuten-coupons-automation.git
cd rakuten-coupons-automation
```

### 🔹 Install Dependencies

```bash
npm install
```

---

## 🚀 Running the Tests

### 1️⃣ Interactive Mode (GUI)

```bash
npx cypress open
```

### 2️⃣ CLI Mode (Headless)

```bash
npx cypress run
```

### 3️⃣ Generate Mochawesome Reports

```bash
npx cypress run --reporter mochawesome
```

📍 **Report Path:** `./mochawesome-report/mochawesome.html`

Open in a browser to view detailed test results.

---
## 🧾 Test Coverage Report

| Scenario                 | Test Cases | Automated | Passed | Failed | Remarks                        |
| ------------------------ | ---------- | --------- | ------ | ------ | ------------------------------ |
| Homepage Navigation      | 3          | 3         | 1      | 2      | CAPTCHA blocked TC1.1 & 1.2 / Partially covered   |
| Store & Product Browsing | 2          | 2         | 2      | 0      | Fully covered                  |
| Coupons & Cashback       | 1          | 1         | 0      | 1      | CAPTCHA blocked flow           |
| Cashback Flow            | 2          | 2         | 0      | 2      | CAPTCHA blocked automation     |
| Account Management       | 4          | 4         | 0      | 4      | CAPTCHA blocked all operations |
| **Total**                | 12         | 12        | 2      | 10     |                                |

---

## 🐞 Known Issues & Automation Limitations

### ❌ CAPTCHA Blocking Automation

* **Issue:** reCAPTCHA prevents Cypress from performing key UI flows
* **Effect:** Buttons hidden or intercepted
* **Cause:** reCAPTCHA's anti-bot system triggers on Cypress automation
* **Status:** Tests fail where CAPTCHA is involved; no workaround could be implemented.

---

## 🤝 Contributors

**Nazish Jehangir** — Masai School Student
Aspiring Software Developer | Passionate about Automation and Quality Engineering

> Special thanks to the Masai mentors and instructional team for continuous support and valuable feedback.

---

## 📃 License

This project is developed for academic learning and demonstration. Open for use, forking, and improvement with attribution.
