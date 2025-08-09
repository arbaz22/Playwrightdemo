import { test, expect } from "@playwright/test";

test("download functionality", async ({ page }) => {
  await page.goto("https://ash-speed.hetzner.com/");

  const downloadButtonSelector = 'a[href$=".iso"]';

  const [download] = await Promise.all([
    page.waitForEvent("download"), // Wait for the download event
    page.click(downloadButtonSelector), // Click the download button
  ]);

  const path = await download.path();

  console.log(`File downloaded to: ${path}`); // Output the file path
});
