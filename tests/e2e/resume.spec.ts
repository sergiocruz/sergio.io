import { test, expect } from '@playwright/test';

test.describe('Resume Page', () => {
  test('resume page loads successfully', async ({ page }) => {
    await page.goto('/resume');
    
    // Check page title
    await expect(page).toHaveTitle(/Resume - Sergio Cruz/);
    
    // Check main heading
    await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible();
  });

  test('hero section displays correctly', async ({ page }) => {
    await page.goto('/resume');
    
    // Check hero description
    await expect(page.getByText('Senior engineering leader with experience scaling teams, shaping product strategy')).toBeVisible();
    
    // Check CTA buttons
    await expect(page.getByRole('link', { name: 'Download PDF' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact Me' })).toBeVisible();
  });

  test('professional experience section displays correctly', async ({ page }) => {
    await page.goto('/resume');
    
    // Check experience section heading
    const experienceSection = page.getByRole('heading', { name: 'Professional Experience' }).locator('..');
    
    // Check current role at Ramsey Solutions - be specific about which mention we're looking for
    const ramseyExperience = experienceSection.locator('[class*="border-l"]').filter({ hasText: 'Senior Director of Software Engineering' });
    await expect(ramseyExperience.getByText('Ramsey Solutions')).toBeVisible();
    await expect(ramseyExperience.getByText('Franklin, Tennessee, United States')).toBeVisible();
    
    // Check other companies
    const traziExperience = experienceSection.locator('[class*="border-l"]').filter({ hasText: 'Engineering Manager' });
    await expect(traziExperience.getByText('Trazi Ventures')).toBeVisible();
    
    const pluralsightExperience = experienceSection.locator('[class*="border-l"]').filter({ hasText: 'Tech Lead' });
    await expect(pluralsightExperience.getByText('Pluralsight')).toBeVisible();
  });

  test('community involvement section displays correctly', async ({ page }) => {
    await page.goto('/resume');
    
    // Check community section heading
    await expect(page.getByRole('heading', { name: 'Community Involvement & Leadership' })).toBeVisible();
    
    // Find the community section and check organizations within it
    const communitySection = page.getByRole('heading', { name: 'Community Involvement & Leadership' }).locator('..');
    
    await expect(communitySection.getByText('Orlando Devs, Inc.')).toBeVisible();
    await expect(communitySection.getByText('OrlandoJS')).toBeVisible();
  });

  test('toggle older experience functionality works', async ({ page }) => {
    await page.goto('/resume');
    
    // Find the toggle button
    const toggleButton = page.getByRole('button', { name: 'Show Earlier Experience' });
    await expect(toggleButton).toBeVisible();
    
    // Click to expand
    await toggleButton.click();
    
    // Check that button text changes
    await expect(page.getByRole('button', { name: 'Show Less Experience' })).toBeVisible();
    
    // Check that older experience is now visible
    const experienceSection = page.getByRole('heading', { name: 'Professional Experience' }).locator('..');
    await expect(experienceSection.getByText('TravelClick')).toBeVisible();
  });

  test('download PDF link works', async ({ page }) => {
    await page.goto('/resume');
    
    // Check PDF download link
    const pdfLink = page.getByRole('link', { name: 'Download PDF' });
    await expect(pdfLink).toHaveAttribute('href', '/downloads/cruzresume.pdf');
    await expect(pdfLink).toHaveAttribute('target', '_blank');
  });

  test('contact link works', async ({ page }) => {
    await page.goto('/resume');
    
    // Check contact link
    const contactLink = page.getByRole('link', { name: 'Contact Me' });
    await expect(contactLink).toHaveAttribute('href', 'mailto:hi@sergio.io');
  });

  test('page is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/resume');
    
    // Check that content is still visible on mobile
    await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible();
    
    // Check that buttons stack properly on mobile
    const heroSection = page.locator('section').first();
    await expect(heroSection.getByRole('link', { name: 'Download PDF' })).toBeVisible();
    await expect(heroSection.getByRole('link', { name: 'Contact Me' })).toBeVisible();
  });
});