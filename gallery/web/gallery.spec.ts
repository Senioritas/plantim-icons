import { expect, test } from "@playwright/test";

test.use({ colorScheme: "light" });

test("renders the complete semantic icon gallery", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Semantic icon gallery" })).toBeVisible();
  await expect(page.locator(".icon-card")).toHaveCount(154);
  await expect(page).toHaveScreenshot("icon-gallery-light.png", { fullPage: true });
});

test("renders the gallery in dark mode", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator(".icon-card")).toHaveCount(154);
  await expect(page).toHaveScreenshot("icon-gallery-dark.png", { fullPage: true });
});
