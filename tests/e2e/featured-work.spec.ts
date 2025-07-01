import { test, expect } from '@playwright/test';

test.describe('Featured Work Page', () => {
  test('featured work page loads successfully', async ({ page }) => {
    await page.goto('/featured-work');

    // Check page title
    await expect(page).toHaveTitle(/Featured Work - Sergio Cruz/);

    // Check main heading
    await expect(page.getByRole('heading', { name: 'Featured Work' })).toBeVisible();
  });

  test('courses section displays correctly', async ({ page }) => {
    await page.goto('/featured-work');

    // Check courses section heading
    await expect(
      page.getByRole('heading', { name: 'Courses & Educational Content' })
    ).toBeVisible();

    // Check that featured courses are displayed
    await expect(page.getByText('Product Management for Engineering Managers')).toBeVisible();
    await expect(
      page.getByText('Engineering Management Processes & Tools Fundamentals')
    ).toBeVisible();
  });

  test('speaking engagements section displays videos', async ({ page }) => {
    await page.goto('/featured-work');

    // Check speaking section heading
    await expect(page.getByRole('heading', { name: 'Speaking Engagements' })).toBeVisible();

    // Check that video content is displayed
    await expect(page.getByText('The MOST Important Engineering Manager Skills?')).toBeVisible();
  });

  test('publications section displays articles', async ({ page }) => {
    await page.goto('/featured-work');

    // Check publications section
    await expect(page.getByRole('heading', { name: 'Publications & Articles' })).toBeVisible();

    // Check that publications are listed
    await expect(page.getByText('Course - Code School: Powering up with React')).toBeVisible();
  });

  test('course links are functional', async ({ page }) => {
    await page.goto('/featured-work');

    // Find course links
    const courseLinks = page.getByText('View Course →');
    await expect(courseLinks.first()).toBeVisible();

    // Verify they have proper href attributes
    const firstCourseLink = page.getByRole('link', { name: 'View Course →' }).first();
    await expect(firstCourseLink).toHaveAttribute('href', /pluralsight\.com/);
  });

  test('video links work correctly', async ({ page }) => {
    await page.goto('/featured-work');

    // Find video links
    const videoLinks = page.getByText('Watch Video →');
    if ((await videoLinks.count()) > 0) {
      await expect(videoLinks.first()).toBeVisible();

      // Check that they point to YouTube or other video platforms
      const firstVideoLink = page.getByRole('link', { name: 'Watch Video →' }).first();
      await expect(firstVideoLink).toHaveAttribute('href', /youtu\.be|youtube\.com/);
    }
  });

  test('speaking availability section is present', async ({ page }) => {
    await page.goto('/featured-work');

    // Check speaking availability section
    await expect(
      page.getByRole('heading', { name: 'Interested in Having Me Speak?' })
    ).toBeVisible();

    // Check contact links
    await expect(page.getByRole('link', { name: 'Get In Touch' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Speaker Bio' })).toBeVisible();
  });

  test('contact links have correct mailto and internal URLs', async ({ page }) => {
    await page.goto('/featured-work');

    // Check mailto link
    const contactLink = page.getByRole('link', { name: 'Get In Touch' });
    await expect(contactLink).toHaveAttribute('href', 'mailto:hi@sergio.io');

    // Check resume link
    const resumeLink = page.getByRole('link', { name: 'View Speaker Bio' });
    await expect(resumeLink).toHaveAttribute('href', '/about');
  });

  test('page content is accessible', async ({ page }) => {
    await page.goto('/featured-work');

    // Check the main heading specifically instead of relying on first() which can be ambiguous
    await expect(page.getByRole('heading', { name: 'Featured Work', level: 1 })).toBeVisible();

    // Check that images have alt text (if any)
    const images = page.locator('img[src]');
    const imageCount = await images.count();

    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        await expect(img).toHaveAttribute('alt');
      }
    }
  });

  test('external links open in new tabs', async ({ page }) => {
    await page.goto('/featured-work');

    // Check that external links have proper target attributes
    const externalLinks = page.locator(
      'a[href*="pluralsight.com"], a[href*="youtube.com"], a[href*="youtu.be"]'
    );
    const linkCount = await externalLinks.count();

    if (linkCount > 0) {
      for (let i = 0; i < linkCount; i++) {
        const link = externalLinks.nth(i);
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', /noopener/);
      }
    }
  });
});
