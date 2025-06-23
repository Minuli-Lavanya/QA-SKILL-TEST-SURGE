import { test, expect } from '@playwright/test';

test('should show up to 6 related best-seller wallets', async ({ page }) => {
  await page.goto('https://www.ebay.com/itm/314177180488?_skw=wallet&itmmeta=01JYDN28QEGGYVDVW71TRCB9D9&hash=item49266b5348:g:zMUAAOSw~mxj~LtV&itmprp=enc%3AAQAKAAAA4FkggFvd1GGDu0w3yXCmi1eQYBqw%2FdJJiw0fOTu8Su64E5T8JBI--6UbPVTumYLPt4rT5rRUfX%2BPE%2Btzm%2Fe9e3EDMmlc2M25xZBBamOM1i51RB91xaBO%2FtvDaG0jiXcvkIy%2FogJG4rQXiR2ppjAece3MZM4Raaoc0q4G%2Fss41%2F5qs6pVPIRy0u%2FvtT7b2GeGim9q3EDeZqZ3UuCU%2B9aCtrIilLhj8sJdJksLz25sKM77lJXKqyKyfoijj78aY59N8XZIOfpc2yXEMm%2B0ZzGnOIU9gjoYHEAQvw5tWXuC653J%7Ctkp%3ABk9SR-iMibXzZQ'); 
  await page.fill('#search', 'wallet');
  await page.click('#searchBtn');
  await page.click('.main-product');

  const relatedProducts = await page.$$('.related-product');
  expect(relatedProducts.length).toBeLessThanOrEqual(6);

  for (const product of relatedProducts) {
    const category = await product.getAttribute('data-category');
    expect(category).toBe('wallet');
    const label = await product.textContent();
    expect(label).toContain('Best Seller');
  }
});
