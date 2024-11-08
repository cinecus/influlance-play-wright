import { test, expect } from '@playwright/test';

test('test-enroll-flow', async ({ page }) => {
  // Set slower actions
  page.setDefaultTimeout(10000); // 10 seconds timeout
  page.setDefaultNavigationTimeout(10000);
  
  // Configure slower typing
  const slowType = { delay: 100 }; // 100ms delay between keystrokes
  
  await page.goto('https://influlance.vercel.app/');
  await page.waitForTimeout(2000);

  await page.getByText('ฉันเป็น Influencer').click({ delay: 1000 }); 
  await page.waitForTimeout(1000);
  await page.getByText('เข้าสู่ระบบ').click({ delay: 1000 });
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Enter your email').click({ delay: 500 });
  await page.getByPlaceholder('Enter your email').fill('cinecus@test.com');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Enter your password').click({ delay: 500 });
  await page.getByPlaceholder('Enter your password').fill('1234');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Login' }).click({ delay: 1000 });
  await page.waitForTimeout(1000);
  await page.getByText('ค้นหางาน').click({ delay: 1000 });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'สมัครงาน' }).first().click({ delay: 2000 });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'OK' }).click({ delay: 1000 });
  await page.waitForTimeout(1000);
  await page.getByText('งานของฉัน').click({ delay: 1000 });
  await page.waitForTimeout(2000);

  // Check that there is exactly 1 item in the tab
  const tabCount = await page.locator('#rc-tabs-0-tab-1 > span > sup > bdi > span > span').textContent();
  expect(tabCount).toBe('1');
});