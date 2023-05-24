import { test, expect } from '@playwright/test';
import { LoginPage } from "../../Pages/login";



test('test', async ({ page }) => {

  const LoginObj = new LoginPage(page);
  await LoginObj.LaunchBrowser();
  await LoginObj.HomePageLogin('tomsmith', 'SuperSecretPassword!');

  await page.screenshot({ "E:\\Automation\\PlayWright_Project_Demo1": 'screenshot.png', fullPage: true });

  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: 'Login' }).click();
});