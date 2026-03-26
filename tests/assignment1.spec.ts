import{ test, expect } from "@playwright/test";

test('Playwright Basics', async({ page })=>{

    await page.goto('https://demoqa.com/');
    await expect(page).toHaveTitle(/demosite/);
});