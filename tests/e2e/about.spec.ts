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
    
    // Find the section that contains the "What I Do Best" heading
    const expertiseSection = page.locator('section').filter({ has: page.getByRole('heading', { name: 'What I Do Best' }) });
    
    await expect(expertiseSection.getByText('Engineering Leadership')).toBeVisible();
    await expect(expertiseSection.getByText('Product Strategy')).toBeVisible();
    await expect(expertiseSection.getByText('Scaled Systems')).toBeVisible();
  });

  test('professional journey timeline is visible', async ({ page }) => {
    await page.goto('/about');
    
    // Find the section that contains the "Professional Journey" heading
    const journeySection = page.locator('section').filter({ has: page.getByRole('heading', { name: 'Professional Journey' }) });
    
    // Check current role - be more specific by finding the exact heading first
    const seniorDirectorContainer = journeySection.getByRole('heading', { name: 'Senior Director of Software Engineering', level: 3 }).locator('xpath=ancestor::div[contains(@class, "relative") and contains(@class, "pl-8")]');
    await expect(seniorDirectorContainer.locator('p.text-brand-accent.dark\\:text-brand-accent.font-medium.mb-3', { hasText: 'Ramsey Solutions' })).toBeVisible();
    
    // Check Director role - use exact heading match to avoid confusion with Associate Director
    const directorContainer = journeySection.getByRole('heading', { name: 'Director of Software Engineering', level: 3 }).locator('xpath=ancestor::div[contains(@class, "relative") and contains(@class, "pl-8")]');
    await expect(directorContainer.locator('p.text-brand-accent.dark\\:text-brand-accent.font-medium.mb-3', { hasText: 'Ramsey Solutions' })).toBeVisible();
    
    // Check Engineering Manager role at different company
    const engineeringManagerContainer = journeySection.getByRole('heading', { name: 'Engineering Manager', level: 3 }).locator('xpath=ancestor::div[contains(@class, "relative") and contains(@class, "pl-8")]');
    await expect(engineeringManagerContainer.locator('p.text-brand-accent.dark\\:text-brand-accent.font-medium.mb-3', { hasText: 'Trazi Ventures' })).toBeVisible();
  });

  test('leadership philosophy section is present', async ({ page }) => {
    await page.goto('/about');
    
    // Check leadership philosophy heading
    await expect(page.getByRole('heading', { name: 'My Leadership Philosophy' })).toBeVisible();
    
    // Find the section that contains the "My Leadership Philosophy" heading
    const philosophySection = page.locator('section').filter({ has: page.getByRole('heading', { name: 'My Leadership Philosophy' }) });
    
    await expect(philosophySection.getByText('Shared Ownership')).toBeVisible();
    await expect(philosophySection.getByText('Craft with Purpose')).toBeVisible();
    await expect(philosophySection.getByText('Cross-Functional Partnership')).toBeVisible();
  });

  test('quick stats are displayed', async ({ page }) => {
    await page.goto('/about');
    
    // Find the stats section by looking for the grid layout containing stats
    const statsSection = page.locator('.grid.grid-cols-2.md\\:grid-cols-4');
    
    // Check that statistics are visible within the stats section
    await expect(statsSection.getByText('9+')).toBeVisible();
    await expect(statsSection.getByText('Years Leading Teams')).toBeVisible();
    await expect(statsSection.getByText('50+')).toBeVisible();
    await expect(statsSection.getByText('Engineers Mentored')).toBeVisible();
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