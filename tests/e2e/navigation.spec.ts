import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('all main navigation links work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test Blog navigation
    await page.getByRole('link', { name: 'Blog' }).click();
    await expect(page).toHaveURL('/blog');
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
    
    // Test About navigation
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    
    // Test Featured Work navigation
    await page.getByRole('link', { name: 'Featured Work' }).click();
    await expect(page).toHaveURL('/featured-work');
    await expect(page.getByRole('heading', { name: 'Featured Work' })).toBeVisible();
    
    // Test Resume navigation
    await page.getByRole('link', { name: 'Resume' }).click();
    await expect(page).toHaveURL('/resume');
    await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible();
  });

  test('home logo link works from all pages', async ({ page }) => {
    // Test from blog page
    await page.goto('/blog');
    await page.getByRole('link', { name: 'sergio.io' }).click();
    await expect(page).toHaveURL('/');
    
    // Test from about page
    await page.goto('/about');
    await page.getByRole('link', { name: 'sergio.io' }).click();
    await expect(page).toHaveURL('/');
    
    // Test from featured work page
    await page.goto('/featured-work');
    await page.getByRole('link', { name: 'sergio.io' }).click();
    await expect(page).toHaveURL('/');
  });

  test('footer navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Test footer links
    const footerAboutLink = page.locator('footer').getByRole('link', { name: 'About' });
    const footerBlogLink = page.locator('footer').getByRole('link', { name: 'Blog' });
    const footerWorkLink = page.locator('footer').getByRole('link', { name: 'Featured Work' });
    
    await expect(footerAboutLink).toBeVisible();
    await expect(footerBlogLink).toBeVisible();
    await expect(footerWorkLink).toBeVisible();
    
    // Test one footer link
    await footerAboutLink.click();
    await expect(page).toHaveURL('/about');
  });

  test('social media links in footer work', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check social media links
    const twitterLink = page.locator('footer a[href*="twitter.com"], footer a[href*="x.com"]');
    const githubLink = page.locator('footer a[href*="github.com"]');
    const linkedinLink = page.locator('footer a[href*="linkedin.com"]');
    
    await expect(twitterLink).toBeVisible();
    await expect(githubLink).toBeVisible();
    await expect(linkedinLink).toBeVisible();
    
    // Verify they open in new tabs
    await expect(twitterLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  test('mobile navigation works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Mobile menu should be hidden initially
    const mobileMenu = page.locator('.mobile-menu');
    await expect(mobileMenu).toHaveClass(/hidden/);
    
    // Click mobile menu button
    const mobileMenuButton = page.locator('.mobile-menu-button');
    await mobileMenuButton.click();
    
    // Mobile menu should now be visible
    await expect(mobileMenu).not.toHaveClass(/hidden/);
    
    // Test mobile navigation links
    const mobileBlogLink = mobileMenu.getByRole('link', { name: 'Blog' });
    await expect(mobileBlogLink).toBeVisible();
    
    await mobileBlogLink.click();
    await expect(page).toHaveURL('/blog');
  });

  test('breadcrumb-style navigation works in blog posts', async ({ page }) => {
    await page.goto('/blog/unit-test-sailsjs-with-mocha-and-instanbul-for-code-coverage');
    
    // Check that back to blog link works
    const backToBlogLink = page.getByRole('link', { name: '← Back to Blog' });
    await expect(backToBlogLink).toBeVisible();
    
    await backToBlogLink.click();
    await expect(page).toHaveURL('/blog');
  });

  test('navigation persistence across page loads', async ({ page }) => {
    await page.goto('/');
    
    // Navigation should be visible on homepage
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    
    // Navigate to different page
    await page.goto('/about');
    
    // Navigation should still be visible
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Featured Work' })).toBeVisible();
  });

  test('sticky navigation works on scroll', async ({ page }) => {
    await page.goto('/about');
    
    // Check that navigation has fixed positioning class
    const nav = page.locator('nav');
    await expect(nav).toHaveClass(/fixed/);
    
    // Scroll down the page
    await page.evaluate(() => window.scrollTo(0, 1000));
    
    // Navigation should still be visible
    await expect(page.getByRole('link', { name: 'sergio.io' })).toBeVisible();
  });
});