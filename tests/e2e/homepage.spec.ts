import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads successfully and has correct title', async ({ page }) => {
    await page.goto('/');
    
    // Check the page title
    await expect(page).toHaveTitle(/Sergio Cruz/);
    
    // Check that the main heading is visible
    await expect(page.getByRole('heading', { name: 'Sergio Cruz' })).toBeVisible();
  });

  test('navigation links are present and visible', async ({ page }) => {
    await page.goto('/');

    // Scope to the <nav> element
    const nav = page.locator('nav');

    
    // Check main navigation links
    await expect(nav.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Featured Work' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Resume' })).toBeVisible();
  });

  test('hero section displays correct content', async ({ page }) => {
    await page.goto('/');
    
    // Check hero content
    await expect(page.getByText('I help engineering teams deliver real product outcomes—and teach others how to do the same.')).toBeVisible();
    
    // Check CTA buttons are present
    await expect(page.locator('a[href="/blog"]').getByText('Read My Articles')).toBeVisible();
    await expect(page.locator('a[href="/talks-and-publications"]').getByText('View My Work')).toBeVisible();
  });

  test('what I do section displays three main areas', async ({ page }) => {
    await page.goto('/');
    
    // Find the section that contains the "What I Do" heading
    const whatIDoSection = page.locator('section').filter({ has: page.getByRole('heading', { name: 'What I Do' }) });
    
    await expect(whatIDoSection.getByText('🧭 Engineering Leadership')).toBeVisible();
    await expect(whatIDoSection.getByText('🧪 Product Strategy')).toBeVisible();
    await expect(whatIDoSection.getByText('📊 Scaled Teams & Systems')).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to blog page
    await page.locator('nav').getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL('/blog');
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
  });

  test('theme toggle works', async ({ page }) => {
    await page.goto('/');
    
    // Find theme toggle button
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });
    await expect(themeToggle).toBeVisible();
    
    // Test theme switching
    await themeToggle.click();
    // Note: We can't easily test the actual theme change without more complex setup
    // but we can at least verify the button is interactive
  });

  test('mobile menu works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Mobile menu button should be visible on mobile
    const mobileMenuButton = page.locator('.mobile-menu-button');
    await expect(mobileMenuButton).toBeVisible();
    
    // Click mobile menu button
    await mobileMenuButton.click();
    
    // Mobile menu should now be visible
    const mobileMenu = page.locator('.mobile-menu');
    await expect(mobileMenu).not.toHaveClass('hidden');
  });
});