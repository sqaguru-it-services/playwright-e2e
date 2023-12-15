# Playwright End-to-End Testing Project (playwright-e2e)

## Overview

This project is designed for end-to-end testing using Playwright, a powerful tool for browser automation. It allows you to run tests on various environments, platforms, and locales, ensuring the reliability of your web applications.

## Prerequisites

Before running the tests, make sure you have the following prerequisites installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Playwright: [Installation guide](https://playwright.dev/docs/intro#installation)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/sqa/playwright-e2e.git
    cd playwright-e2e
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables. Create a file named `.env` in the root directory and add the following:

    ```bash
    export TEST_LOCALE=en-US
    export TEST_ENV=qa/uat/prod
    export TEST_PLATFORM=desktop
    ```

    Modify the values as needed.

4. Source the environment variables:

    ```bash
    source .env
    ```

## Running Tests

To execute the tests, use the following command:

```bash
npm run test-chromium
```

This will run the Playwright tests with the specified configuration.

## Environment Variables

Ensure the following environment variables are set before running the tests:

```bash
export TEST_LOCALE=en-US
export TEST_ENV=qa/uat/prod
export TEST_PLATFORM=desktop
```

Modify these variables based on your testing requirements.

## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Your contributions are highly appreciated!

## License

This project is licensed under the MIT [Licence](./License).
