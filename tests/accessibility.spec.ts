import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility (WCAG 2.2)', () => {
  test('перевірка головної сторінки на відповідність стандартам', async ({ page }) => {
    await page.goto('/');
    // Чекаємо завершення анімацій та стабілізації сторінки
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    // Аналіз сторінки за допомогою Axe
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});