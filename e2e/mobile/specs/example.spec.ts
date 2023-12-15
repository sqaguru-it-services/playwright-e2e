import { test, expect } from "@playwright/test";

test.describe("User", () => {
  test.beforeAll(async ({}) => {});

  test.beforeEach(async ({ page }) => {});

  test(`test 1`, async ({ page }) => {
    expect(false).toBeTruthy();
  });
});
