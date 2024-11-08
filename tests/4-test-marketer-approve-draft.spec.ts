import { test, expect } from '@playwright/test';

test('test-marketer-approve-draft', async ({ page }) => {
  // Recording...
  await page.goto('https://influlance.vercel.app/');
  await page.waitForTimeout(1000);

  await page.getByText('ฉันเป็น Marketer').click({ delay: 1000 });
  await page.getByText('เข้าสู่ระบบ').click({ delay: 1000 });
  await page.getByPlaceholder('Enter your email').click({ delay: 500 });
  await page.getByPlaceholder('Enter your email').fill('kfc@test.com');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('1234');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Login' }).click({ delay: 1000 });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('งานของฉัน').click({ delay: 1000 });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ตรวจงาน (1)' }).click({ delay: 1000 });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'อนุมัติ', exact: true }).click({ delay: 1000 });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'OK' }).click({ delay: 1000 });
});