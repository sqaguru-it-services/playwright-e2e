import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pom/login/login.page";
import { getAppConfig } from "../../index";
import { TestConfig } from "../../index";
import { DashboardPage } from "../../pom/home/dashboard.page";

let appConfig: any;
let testConfig: TestConfig = new TestConfig();

test.describe("User", () => {
  testConfig.initTestSuite(test, ["e2e.desktop.loginPage"]);

  test.beforeAll(async ({}) => {
    appConfig = await getAppConfig();
  });

  test.beforeEach(async ({ page }) => {});

  test(`should login ${testConfig.getTestConfig(
    test,
    ["@login", "@auth", "@smoke"],
    ["e2e.desktop.loginPage.login"]
  )}`, async ({ page }) => {
    const loginpage = new LoginPage(page, appConfig);
    const dashboardPage = new DashboardPage(page, appConfig);

    await loginpage.goto();

    await loginpage.login("default");

    expect(await dashboardPage.isHamburgerMenuButtonVisible()).toBeTruthy();
  });
});
