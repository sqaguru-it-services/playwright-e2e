import { Locator, Page } from "@playwright/test";

export class LeftNavComponent {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
