# Translator-system-testing-assignment-ITPM
Singlish-Sinhala translator system testing

## Tools & Technologies

* Playwright – End-to-end test automation framework
* Node.js – JavaScript runtime environment
* JavaScript / TypeScript – Test scripting languages
* Git & GitHub – Version control and repository hosting

---


## Prerequisites

Ensure the following are installed on your system:

* Node.js (v18 or later recommended)
* Git
* A modern web browser (Chrome / Edge)

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/Harshavidath12/playwright-testing.git
```

2. Navigate to the project directory

```bash
cd playwright-testing
```

3. Install dependencies

```bash
npm install
```

4. Install Playwright browsers

```bash
npx playwright install
```

---

## Running the Tests

Run pass.spec.js file:

```bash
npx playwright test tests/pass.spec.js  
```

Run fail.spec.js file:

```bash
npx playwright test tests/fail.spec.js  
```



Run ui.spec.js file:

```bash
npx playwright test ui.spec.js --headed    
```

---
