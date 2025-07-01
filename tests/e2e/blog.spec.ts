import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('blog page loads and displays posts', async ({ page }) => {
    await page.goto('/blog');

    // Check page title and heading
    await expect(page).toHaveTitle(/Blog - Sergio Cruz/);
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();

    // Check that blog posts are displayed
    const articles = page.locator('article');
    await expect(articles).toHaveCount(8); // Based on the content files

    // Check that the first post is visible
    await expect(
      page.getByText('Unit test SailsJS with Mocha and generate code coverage with Istanbul')
    ).toBeVisible();
  });

  test('blog post navigation works', async ({ page }) => {
    await page.goto('/blog');

    // Click on the first blog post
    await page
      .getByRole('link', {
        name: 'Unit test SailsJS with Mocha and generate code coverage with Istanbul',
      })
      .first()
      .click();

    // Should navigate to the blog post
    await expect(page).toHaveURL(/.*unit-test-sails/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Unit test SailsJS');
  });

  test('blog post content is properly displayed', async ({ page }) => {
    await page.goto('/blog/unit-test-sailsjs-with-mocha-and-instanbul-for-code-coverage');

    // Check that the post content is visible
    await expect(page.locator('.prose')).toBeVisible();

    // Check author information - be more specific to avoid the strict mode violation
    await expect(page.getByText('By Sergio Cruz')).toBeVisible();

    // Check that code blocks are rendered
    const codeBlocks = page.locator('pre code');
    await expect(codeBlocks.first()).toBeVisible();
  });

  test('blog post sharing links work', async ({ page }) => {
    await page.goto('/blog/unit-test-sailsjs-with-mocha-and-instanbul-for-code-coverage');

    // Check that sharing links are present
    const twitterShare = page.getByRole('link', { name: 'Share on X' });
    const linkedinShare = page.getByRole('link', { name: 'Share on LinkedIn' });

    await expect(twitterShare).toBeVisible();
    await expect(linkedinShare).toBeVisible();

    // Verify the links have correct href patterns
    await expect(twitterShare).toHaveAttribute('href', /twitter\.com\/intent\/tweet/);
    await expect(linkedinShare).toHaveAttribute('href', /linkedin\.com\/sharing/);
  });

  test('back to blog navigation works', async ({ page }) => {
    await page.goto('/blog/unit-test-sailsjs-with-mocha-and-instanbul-for-code-coverage');

    // Click back to blog
    await page.getByRole('link', { name: '← Back to Blog' }).click();

    // Should return to blog page
    await expect(page).toHaveURL('/blog');
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
  });

  test('blog posts have proper metadata', async ({ page }) => {
    await page.goto('/blog');

    // Wait for all article cards to appear
    await page.locator('article').last().waitFor();

    const lastArticle = page.locator('article').last();
    console.log(await lastArticle.innerHTML());

    // Check that posts have dates and reading time
    await expect(lastArticle.getByText('May 20, 2014')).toBeVisible();
    await expect(lastArticle.getByText('5 min read')).toBeVisible();

    // Check that tags are displayed
    await expect(lastArticle.locator('.bg-primary-100, .bg-primary-900').first()).toBeVisible();
  });
});
