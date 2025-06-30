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
    await expect(page.getByText('Senior engineering leader with experience scaling teams')).toBeVisible();
  });

  test('core expertise section displays three areas', async ({ page }) => {
    await page.goto('/about');
    
    // Check the three core areas
    await expect(page.getByText('Engineering Leadership')).toBeVisible();
    await expect(page.getByText('Product Strategy')).toBeVisible();
    await expect(page.getByText('Scaled Systems')).toBeVisible();
  });

  test('professional journey timeline is visible', async ({ page }) => {
    await page.goto('/about');
    
    // Check that current role is displayed
    await expect(page.getByText('Senior Director of Software Engineering')).toBeVisible();
    await expect(page.getByText('Ramsey Solutions')).toBeVisible();
    
    // Check that other roles are visible
    await expect(page.getByText('Director of Software Engineering')).toBeVisible();
    await expect(page.getByText('Engineering Manager')).toBeVisible();
  });

  test('leadership philosophy section is present', async ({ page }) => {
    await page.goto('/about');
    
    // Check leadership philosophy heading
    await expect(page.getByRole('heading', { name: 'My Leadership Philosophy' })).toBeVisible();
    
    // Check the three philosophy points
    await expect(page.getByText('Shared Ownership')).toBeVisible();
    await expect(page.getByText('Craft with Purpose')).toBeVisible();
    await expect(page.getByText('Cross-Functional Partnership')).toBeVisible();
  });

  test('quick stats are displayed', async ({ page }) => {
    await page.goto('/about');
    
    // Check that statistics are visible
    await expect(page.getByText('9+')).toBeVisible();
    await expect(page.getByText('Years Leading Teams')).toBeVisible();
    await expect(page.getByText('50+')).toBeVisible();
    await expect(page.getByText('Engineers Mentored')).toBeVisible();
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
    
    // Check that the layout adapts (stats should stack on mobile)
    const statsSection = page.locator('.grid.grid-cols-2.md\\:grid-cols-4');
    await expect(statsSection).toBeVisible();
  });
});