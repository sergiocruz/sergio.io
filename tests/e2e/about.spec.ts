import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('about page loads successfully', async ({ page }) => {
    await page.goto('/about');

    // Check page title
    await expect(page).toHaveTitle(/About - Sergio Cruz/);

    // Check main heading
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
  });

  test('profile section displays correctly', async ({ page }) => {
    await page.goto('/about');

    // Check that profile image is present
    const profileImage = page.getByAltText('Sergio Cruz');
    await expect(profileImage).toBeVisible();

    // Check that professional summary is visible
    await expect(
      page.locator('main').getByText('Senior Director of Software Engineering at Ramsey Solutions')
    ).toBeVisible();
  });

  test('core expertise section displays three areas', async ({ page }) => {
    await page.goto('/about');

    // Find the section that contains the "What I Do Best" heading
    const expertiseSection = page
      .locator('section')
      .filter({ has: page.getByRole('heading', { name: 'What I Do Best' }) });

    await expect(expertiseSection.getByText('Finding the money in the code')).toBeVisible();
    await expect(expertiseSection.getByText('Growing teams and leaders')).toBeVisible();
    await expect(expertiseSection.getByText('Working with the rest of the business')).toBeVisible();
  });

  test('Director role is displayed correctly', async ({ page }) => {
    await page.goto('/about');

    const directorContainer = page.locator('div.p-6').filter({
      has: page.getByRole('heading', { name: 'Director of Software Engineering', level: 3 }),
    });

    await expect(directorContainer.getByText('Ramsey Solutions').first()).toBeVisible();
  });

  test('leadership philosophy section is present', async ({ page }) => {
    await page.goto('/about');

    // Check leadership philosophy heading
    await expect(page.getByRole('heading', { name: 'My Leadership Philosophy' })).toBeVisible();

    // Find the section that contains the "My Leadership Philosophy" heading
    const philosophySection = page
      .locator('section')
      .filter({ has: page.getByRole('heading', { name: 'My Leadership Philosophy' }) });

    await expect(philosophySection.getByText('Shared Ownership')).toBeVisible();
    await expect(philosophySection.getByText('Craft with Purpose')).toBeVisible();
    await expect(philosophySection.getByText('Cross-Functional Partnership')).toBeVisible();
  });

  test('quick stats are displayed', async ({ page }) => {
    await page.goto('/about');

    // Find the stats section by looking for the grid layout containing stats
    const statsSection = page.locator('.grid.grid-cols-3.border-t');

    // Check that statistics are visible within the stats section
    await expect(statsSection.getByText('15+').first()).toBeVisible();
    await expect(statsSection.getByText('Years in Software')).toBeVisible();
    await expect(statsSection.getByText('Published Courses')).toBeVisible();
  });

  test('view full resume link works', async ({ page }) => {
    await page.goto('/about');

    // Find and click the resume link
    const resumeLink = page.getByRole('link', { name: 'View Full Resume' });
    await expect(resumeLink).toBeVisible();

    await resumeLink.click();
    await expect(page).toHaveURL('/resume');
  });

  test('page is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/about');

    // Check that content is still visible on mobile
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    await expect(page.getByAltText('Sergio Cruz')).toBeVisible();

    // Check that the layout adapts (stats stay in one row on mobile)
    const statsSection = page.locator('.grid.grid-cols-3.border-t');
    await expect(statsSection).toBeVisible();
  });
});
