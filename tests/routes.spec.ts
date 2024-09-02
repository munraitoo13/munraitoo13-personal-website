import { expect, test } from "@playwright/test";

test.describe("protected routes", () => {
  test("/admin redirect to home", async ({ page }) => {
    await page.goto("http://localhost:3000/admin");
    await expect(page).toHaveURL("http://localhost:3000");
  });

  test("/admin/new-post redirect to home", async ({ page }) => {
    await page.goto("http://localhost:3000/admin/new-post");
    await expect(page).toHaveURL("http://localhost:3000");
  });
});
