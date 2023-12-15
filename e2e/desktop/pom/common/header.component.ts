import { Locator, Page } from "@playwright/test";
import { LeftNavComponent } from "../../index";

export class HeaderComponent extends LeftNavComponent {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  get hamburgerMenuButton(): Locator {
    return this.page.locator('button[id="react-burger-menu-btn"]');
  }

  async isHamburgerMenuButtonVisible(): Promise<boolean> {
    await this.hamburgerMenuButton.waitFor({ state: "visible" });
    return await this.hamburgerMenuButton.isVisible();
  }
}
