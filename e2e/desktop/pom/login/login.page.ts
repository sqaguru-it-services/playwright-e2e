import type { Locator, Page } from "@playwright/test";
import { UserTestData, IUserInfo } from "../../data/user-details/index";
import { HeaderComponent } from "../common/header.component";

export class LoginPage extends HeaderComponent {
  readonly page: Page;
  readonly appConfig: any;
  readonly testDataUsers: UserTestData;

  constructor(page: Page, appConfig: any) {
    super(page);
    this.page = page;
    this.appConfig = appConfig;
    this.testDataUsers = new UserTestData();
  }

  async goto() {
    await this.page.goto(`${this.appConfig.baseUrl}${this.appConfig.loginUrl}`);
  }

  public get username(): Locator {
    return this.page.locator('//input[@id="user-name"]');
  }

  public get password(): Locator {
    return this.page.locator('input[id="password"]');
  }

  public get signIn(): Locator {
    return this.page.locator('input[id="login-button"]');
  }

  async login(userProfile?: string): Promise<void> {
    const userInfo: IUserInfo = this.testDataUsers.getUserInfo({
      profile: userProfile,
    });
    await this.username.clear();
    await this.username.fill(userInfo.username);
    await this.password.clear();
    await this.password.fill(userInfo.password);
    await this.signIn.click();
  }

  async waitUntilPageLoaded(): Promise<void> {
    await this.signIn.waitFor({ state: "visible" });
  }

  async isSigninButtonVisible(): Promise<boolean> {
    await this.signIn.waitFor({ state: "visible" });
    return await this.signIn.isVisible();
  }
}
