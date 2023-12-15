import { Locator, Page } from "@playwright/test";
import { HeaderComponent } from "../../index";

export class DashboardPage extends HeaderComponent {
  readonly page: Page;
  readonly appConfig: any;

  constructor(page: Page, appConfig: any) {
    super(page);
    this.page = page;
    this.appConfig = appConfig;
  }

  async goto(): Promise<void> {
    await this.page.goto(`${this.appConfig.baseUrl}`);
  }

  public get dashboardTitle(): Locator {
    return this.page.locator("");
  }

  async waitUntilPageLoaded(): Promise<void> {
    await this.dashboardTitle.waitFor({ state: "visible" });
  }
}
