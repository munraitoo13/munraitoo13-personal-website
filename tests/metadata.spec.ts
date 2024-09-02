import { test, expect } from "@playwright/test";

test.describe("check metadata", () => {
  test("home metadata", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page).toHaveTitle("Home | munraitoo13");
  });

  test.describe("professional metadata", () => {
    test("experiences metadata", async ({ page }) => {
      await page.goto("http://localhost:3000/professional/experiences");
      await expect(page).toHaveTitle("Experiences | munraitoo13");
    });

    test("skills and Tools metadata", async ({ page }) => {
      await page.goto("http://localhost:3000/professional/skills-and-tools");
      await expect(page).toHaveTitle("Skills and Tools | munraitoo13");
    });
  });

  test.describe("personal metadata", () => {
    test("blog metadata", async ({ page }) => {
      await page.goto("http://localhost:3000/personal/blog");
      await expect(page).toHaveTitle("Blog | munraitoo13");
    });

    test("projects metadata", async ({ page }) => {
      await page.goto("http://localhost:3000/personal/projects");
      await expect(page).toHaveTitle("Projects | munraitoo13");
    });

    test("contact metadata", async ({ page }) => {
      await page.goto("http://localhost:3000/personal/contact");
      await expect(page).toHaveTitle("Contact | munraitoo13");
    });
  });
});
