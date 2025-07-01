# sergio.io

Personal website and blog for Sergio Cruz, Senior Engineering Leader. Built with
Astro, React, TypeScript, and Tailwind CSS.

🌐 **Live Site**: [https://sergio.io/](https://sergio.io/)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator with
  component islands
- **UI Library**: [React](https://reactjs.org/) - For interactive components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
  framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe
  JavaScript
- **Testing**: [Playwright](https://playwright.dev/) - End-to-end testing
- **Deployment**: GitHub Pages via GitHub Actions
- **Content**: Markdown-based content collections

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sergiocruz/sergio.io.git
   cd sergio.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

## 🧑‍💻 Development

### Available Scripts

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Start development server with hot reload |
| `npm run start`       | Alias for `npm run dev`                  |
| `npm run build`       | Build for production                     |
| `npm run preview`     | Preview production build locally         |
| `npm run test`        | Run all Playwright tests                 |
| `npm run test:headed` | Run tests with browser UI visible        |
| `npm run test:ui`     | Run tests in interactive UI mode         |

### Development Workflow

1. **Start the dev server**: `npm run dev`
2. **Make your changes** in the `src/` directory
3. **See live updates** at `http://localhost:4321`
4. **Run tests** to ensure everything works: `npm test`

### Project Structure

```
sergio.io/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.astro # Main navigation
│   │   ├── Footer.astro     # Site footer
│   │   └── ThemeToggle.tsx  # Dark/light mode toggle
│   ├── content/            # Content collections
│   │   ├── blog/           # Blog posts (Markdown)
│   │   ├── courses/        # Course content
│   │   ├── publications/   # Publications & articles
│   │   └── videos/         # Speaking engagements
│   ├── layouts/            # Page layouts
│   │   └── BaseLayout.astro # Base HTML template
│   ├── pages/              # Route pages
│   │   ├── index.astro     # Homepage
│   │   ├── blog.astro      # Blog listing
│   │   ├── about.astro     # About page
│   │   ├── featured-work.astro # Featured work
│   │   ├── resume.astro    # Resume page
│   │   └── contact.astro   # Contact page
│   ├── styles/             # Global styles
│   ├── config/             # Configuration files
│   ├── utils/              # Utility functions
│   └── data/               # Static data files
├── tests/                  # Playwright test files
├── public/                 # Static assets
└── dist/                   # Build output
```

### Content Management

#### Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'Brief description of the post'
date: 2025-01-20
tags: ['tag1', 'tag2']
readingTime: '5 min read'
slug: 'your-post-slug'
---

# Your content here

Write your blog post content in Markdown.
```

#### Adding Featured Work

- **Courses**: Add to `src/content/courses/`
- **Videos**: Add to `src/content/videos/`
- **Publications**: Add to `src/content/publications/`

Each content type has its own schema defined in `src/content.config.ts`.

### Styling Guidelines

This project uses a design system built with Tailwind CSS:

#### Brand Colors

- `brand-light`: Light background (#F6F5F4)
- `brand-dark`: Dark background (#121212)
- `brand-primary`: Primary text (#2A2A2A)
- `brand-accent`: Accent color (#8C735B)
- `brand-link`: Link color (#4D6EA8)

#### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Code**: System monospace

#### Best Practices

- Use semantic HTML elements
- Ensure proper color contrast ratios
- Follow responsive design principles
- Maintain consistent spacing (8px grid system)

## 🧪 Testing

### Running Tests

```bash
# Run all tests (headless)
npm test

# Run tests with browser visible
npm run test:headed

# Run tests in interactive UI mode
npm run test:ui
```

### Test Coverage

The test suite covers:

- **Homepage**: Navigation, hero section, theme toggle
- **Blog**: Post listing, individual posts, sharing
- **About**: Profile sections, timeline, statistics
- **Featured Work**: Courses, videos, publications
- **Navigation**: All navigation flows, mobile menu
- **Responsive Design**: Mobile and desktop layouts

### Writing Tests

Tests are located in the `tests/` directory and use Playwright. Example test:

```typescript
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Sergio Cruz' })
  ).toBeVisible();
});
```

### Cross-Browser Testing

Tests run on:

- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: Chrome (Pixel 5), Safari (iPhone 12)

## 🏗️ Building

### Production Build

```bash
npm run build
```

This creates a `dist/` directory with:

- Optimized HTML, CSS, and JavaScript
- Compressed images and assets
- Static files ready for deployment

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally at `http://localhost:4321`.

### Build Optimization

The build process automatically:

- Minifies CSS and JavaScript
- Optimizes images
- Generates sitemap
- Inlines critical CSS
- Creates service worker (if configured)

## 🚢 Deployment

### Automatic Deployment

The site automatically deploys to GitHub Pages when you:

1. **Push to main branch**

   ```bash
   git push origin main
   ```

2. **GitHub Actions workflow runs**:
   - Installs dependencies
   - Builds the project
   - Runs all tests
   - Deploys to GitHub Pages (only if tests pass)

### Manual Deployment

You can also trigger deployment manually:

1. Go to the **Actions** tab in GitHub
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**

### Deployment Requirements

- Tests must pass for deployment to proceed
- Only the `main` branch triggers deployment
- GitHub Pages must be enabled in repository settings

### Custom Domain Setup

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory:

   ```
   yourdomain.com
   ```

2. Configure DNS records with your domain provider:

   ```
   CNAME www yourusername.github.io
   ```

3. Enable custom domain in repository settings

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit your changes: `git commit -m "Add your feature"`
6. Push to the branch: `git push origin feature/your-feature`
7. Submit a pull request

### Code Style

- Use TypeScript for all JavaScript code
- Follow existing naming conventions
- Write tests for new features
- Ensure responsive design
- Maintain accessibility standards

### Commit Convention

Use conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Formatting changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

## 🔧 Configuration

### Environment Variables

The project uses these configuration files:

- `astro.config.ts` - Astro configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `playwright.config.ts` - Test configuration
- `src/config/site.ts` - Site metadata and navigation

### Site Configuration

Edit `src/config/site.ts` to update:

- Site title and description
- Navigation menu items
- Social media links
- Contact information

### Content Collections

Content types are defined in `src/content.config.ts`:

- Blog posts schema
- Course information
- Video/speaking content
- Publication details

## 📊 Performance

### Lighthouse Scores

The site aims for:

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Performance Features

- Static site generation
- Image optimization
- CSS/JS minification
- Font optimization
- Lazy loading
- Service worker caching

## 🐛 Troubleshooting

### Common Issues

**Development server won't start**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Tests failing locally**

```bash
# Ensure the preview server is running
npm run build
npm run preview
# In another terminal:
npm test
```

**Build errors**

```bash
# Check TypeScript errors
npx tsc --noEmit
```

**Styling issues**

```bash
# Rebuild Tailwind CSS
npm run build
```

### Getting Help

- Check existing [GitHub Issues](https://github.com/sergiocruz/sergio.io/issues)
- Review [Astro documentation](https://docs.astro.build/)
- Check [Playwright documentation](https://playwright.dev/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

---

**Built with ❤️ by [Sergio Cruz](https://sergio.io)**
