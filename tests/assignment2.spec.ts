//form automation

import {test , expect} from "@playwright/test";
test('Form Automation', async({ page })=>{
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Rohit');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Sharma');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rohit45@gmail.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('1845070163');
  await page.getByRole('checkbox', { name: 'Sports' }).check();
  await page.getByRole('checkbox', { name: 'Reading' }).check();
  await page.locator('#state svg').click();
  await page.getByRole('option', { name: 'Rajasthan' }).click();
  await page.locator('#city svg').click();
  await page.getByRole('option', { name: 'Jaipur' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Rohit Sharma' })).toBeVisible();
});