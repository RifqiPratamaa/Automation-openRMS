# Automation-openRMS WDIO

This repository contains end-to-end web automation tests for the OpenRMS application using [WebdriverIO](https://webdriver.io/).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Tests](#running-the-tests)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- Chrome or Chromium browser (for local runs)

---

## Setup

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd Automation-openRMS
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure WebdriverIO (optional):**
   - Edit `wdio.conf.js` to set your base URL, browser, or other options as needed.

4. **Edit test data (optional):**
   - Update `test/data/login.data.ts` to change input values for your tests.

---

## Running the Tests

To execute all test specs:

```sh
npm run wdio
```
or
```sh
npx wdio run wdio.conf.js
```

Test logs and reports will be shown in the terminal or saved as configured in `wdio.conf.js`.

---

## Project Structure

```
Automation-openRMS/
├── test/
│   ├── controllers/         # Business logic for interacting with page objects
│   │   └── login.controller.ts
│   ├── data/                # Test data (input values, expected results)
│   │   └── login.data.ts
│   ├── pageobjects/         # Page Object Model (selectors and element getters)
│   │   └── login.page.ts
│   ├── resources/           # Static resources (e.g., files for upload)
│   │   └── img/
│   ├── specs/               # Test specifications (test cases)
│   │   └── login.specs.ts
│   └── usecases/            # Business use cases (flows)
│       └── login.usecase.ts
├── wdio.conf.js             # WebdriverIO configuration
├── package.json             # Project dependencies and scripts
└── README.md                # This file
```

---

## How It Works

- **Page Objects (`test/pageobjects/`)**  
  Define selectors and element getters for each web page.  
  Example: [`login.page.ts`](test/pageobjects/login.page.ts) exposes elements like username input, password input, login button, etc.

- **Controllers (`test/controllers/`)**  
  Encapsulate business actions and assertions using page objects.  
  Example: [`login.controller.ts`](test/controllers/login.controller.ts) provides methods to fill in the login form, select location, and click the login button.

- **Use Cases (`test/usecases/`)**  
  Combine controller actions into high-level business flows.  
  Example: [`login.usecase.ts`](test/usecases/login.usecase.ts) orchestrates the steps for a valid login.

- **Specs (`test/specs/`)**  
  Define test scenarios using Mocha.  
  Example: [`login.specs.ts`](test/specs/login.specs.ts) runs the test cases and checks the results.

- **Test Data (`test/data/`)**  
  Centralized test data for easy maintenance and reusability.  
  Example: [`login.data.ts`](test/data/login.data.ts) contains all input values for the login tests.

- **Resources (`test/resources/`)**  
  Static files used in tests, such as images for file upload.  
  Example: [`img/`](test/resources/img/) contains files referenced in upload scenarios.

- **Configuration (`wdio.conf.js`)**  
  Sets up WebdriverIO, browser capabilities, and test runner options.

**Typical Flow:**  
Specs call use cases, which use controllers to interact with page objects, using data from the test data files and resources as needed.

---

## Troubleshooting

- Ensure Chrome/Chromium is installed and accessible.
- If you encounter selector or element errors, verify your page object selectors match the current web page.
- For file upload issues, ensure the files exist in the specified `test/resources/img/` directory.
- Review the terminal output for stack traces and error messages.

---

**Author:** Rifqi Ardian Pratama

---