import { test, expect } from "@playwright/test";

var logintestdata = JSON.parse(
  JSON.stringify(require("../loginTestData.json"))
);

test.describe("data driven testing", function () {
  for (const data of logintestdata) {
    test.describe(`login with users ${data.id}`, function () {
      test("login to application", async ({ page }) => {
        await page.goto("https://freelance-learn-automation.vercel.app/login");

        await page.getByPlaceholder('Enter Email').fill(data.username);

        await page
          .getByPlaceholder('Enter Password')
          .fill(data.password);
      });
    });
  }
});
