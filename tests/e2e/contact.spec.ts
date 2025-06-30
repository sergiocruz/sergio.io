import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test('contact page loads successfully', async ({ page }) => {
    await page.goto('/contact');
    
    // Check page title
    await expect(page).toHaveTitle(/Contact - Sergio Cruz/);
    
    // Check main heading
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
  });

  test('contact form displays correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Find the contact form section
    const formSection = page.getByRole('heading', { name: 'Send me a message' }).locator('..');
    
    // Check form fields
    await expect(formSection.getByLabel('Name')).toBeVisible();
    await expect(formSection.getByLabel('Email')).toBeVisible();
    await expect(formSection.getByLabel('Subject')).toBeVisible();
    await expect(formSection.getByLabel('Message')).toBeVisible();
    
    // Check submit button
    await expect(formSection.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('contact methods section displays correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Find the contact methods section
    const contactMethodsSection = page.getByRole('heading', { name: 'Other ways to reach me' }).locator('..');
    
    // Check contact methods
    await expect(contactMethodsSection.getByText('hi@sergio.io')).toBeVisible();
    await expect(contactMethodsSection.getByText('@sergioio')).toBeVisible();
    await expect(contactMethodsSection.getByText('linkedin.com/in/sergioio')).toBeVisible();
  });

  test('availability section displays correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Find the availability section
    const availabilitySection = page.getByRole('heading', { name: 'Current Availability' }).locator('..');
    
    // Check availability indicators
    await expect(availabilitySection.getByText('Available for speaking engagements')).toBeVisible();
    await expect(availabilitySection.getByText('Limited consulting availability')).toBeVisible();
    await expect(availabilitySection.getByText('Open to mentoring opportunities')).toBeVisible();
  });

  test('response time section displays correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Check response time information
    await expect(page.getByText('Response Time')).toBeVisible();
    await expect(page.getByText('I typically respond within 24-48 hours')).toBeVisible();
  });

  test('form validation works', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    const submitButton = page.getByRole('button', { name: 'Send Message' });
    await submitButton.click();
    
    // Check that HTML5 validation prevents submission
    const nameField = page.getByLabel('Name');
    await expect(nameField).toHaveAttribute('required');
    
    const emailField = page.getByLabel('Email');
    await expect(emailField).toHaveAttribute('required');
    await expect(emailField).toHaveAttribute('type', 'email');
  });

  test('subject dropdown has correct options', async ({ page }) => {
    await page.goto('/contact');
    
    const subjectSelect = page.getByLabel('Subject');
    await expect(subjectSelect).toBeVisible();
    
    // Check that it has the expected options
    await expect(subjectSelect.locator('option[value="speaking"]')).toBeVisible();
    await expect(subjectSelect.locator('option[value="consulting"]')).toBeVisible();
    await expect(subjectSelect.locator('option[value="collaboration"]')).toBeVisible();
    await expect(subjectSelect.locator('option[value="mentoring"]')).toBeVisible();
    await expect(subjectSelect.locator('option[value="other"]')).toBeVisible();
  });

  test('page is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact');
    
    // Check that content is still visible on mobile
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
    
    // Check that form is still accessible
    await expect(page.getByLabel('Name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
  });
});