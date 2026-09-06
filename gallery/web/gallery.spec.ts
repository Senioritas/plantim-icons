import { expect, test } from "@playwright/test";

test.use({ colorScheme: "light" });

// Baselines are reviewed artifacts. A small ratio tolerance is required because
// macOS and Ubuntu render system fonts with different anti-aliasing; layout,
// icon count, and geometry changes still exceed this threshold.
const screenshotOptions = { fullPage: true, maxDiffPixelRatio: 0.015 } as const;

test("renders the complete semantic icon gallery", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Semantic icon gallery" })).toBeVisible();
  await expect(page.locator(".icon-card")).toHaveCount(154);
  await expect(page.locator(".icon-sample")).toHaveCount(770);
  await expect(page).toHaveScreenshot("icon-gallery-light.png", screenshotOptions);
});

test("renders the gallery in dark mode", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator(".icon-card")).toHaveCount(154);
  await expect(page.locator(".icon-sample")).toHaveCount(770);
  await expect(page).toHaveScreenshot("icon-gallery-dark.png", screenshotOptions);
});
