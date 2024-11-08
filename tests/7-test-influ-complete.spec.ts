import { test, expect } from '@playwright/test';

test('test-influ-save-post', async ({ page }) => {
  // Recording...
  await page.goto('https://influlance.vercel.app/');
  await page.waitForTimeout(1000);

  await page.getByText('ฉันเป็น Influencer').click({ delay: 1000 }); // Add delay to clicks
  await page.getByText('เข้าสู่ระบบ').click({ delay: 1000 });
  await page.getByPlaceholder('Enter your email').click({ delay: 500 });
  await page.getByPlaceholder('Enter your email').fill('cinecus@test.com');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Enter your password').click({ delay: 500 });

  await page.getByPlaceholder('Enter your password').fill('1234');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Login' }).click({ delay: 1000 });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('งานของฉัน').click({ delay: 1000 });

  await page.getByRole('tab', { name: 'งานที่เสร็จสิ้น' }).click({ delay: 1000 });
  await page.waitForTimeout(1000);

  await page.getByText('ธุรกรรมการเงิน').click({ delay: 1000 });
});