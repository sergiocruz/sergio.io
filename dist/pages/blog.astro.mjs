import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BeUWCS7u.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_CwlHWvQx.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog - Sergio Pereira", "description": "Thoughts on software engineering, leadership, and building great products." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="pt-16"> <!-- Hero Section --> <section class="bg-white dark:bg-gray-900 py-24"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
Blog
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
Thoughts on software engineering, leadership, and building great products.
</p> </div> </section> <!-- Blog Posts --> <section class="bg-gray-50 dark:bg-gray-800 py-24"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="space-y-12"> <!-- Blog Post 1 --> <article class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"> <div class="p-8"> <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4"> <time datetime="2024-01-15">January 15, 2024</time> <span class="mx-2">•</span> <span>5 min read</span> <span class="mx-2">•</span> <span class="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-full text-xs font-medium">Leadership</span> </div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> <a href="/blog/building-scalable-teams" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
Building Scalable Engineering Teams
</a> </h2> <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
Lessons learned from scaling engineering teams from 5 to 50+ engineers while maintaining velocity and culture. In this post, I share practical strategies for hiring, onboarding, and creating systems that support rapid team growth without sacrificing quality or team cohesion.
</p> <a href="/blog/building-scalable-teams" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors">
Read full article
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </article> <!-- Blog Post 2 --> <article class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"> <div class="p-8"> <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4"> <time datetime="2024-01-10">January 10, 2024</time> <span class="mx-2">•</span> <span>8 min read</span> <span class="mx-2">•</span> <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium">React</span> </div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> <a href="/blog/modern-react-patterns" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
Modern React Patterns for 2024
</a> </h2> <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
Exploring the latest React patterns and best practices that are shaping how we build applications today. From server components to concurrent features, learn how to leverage React's newest capabilities to build better user experiences.
</p> <a href="/blog/modern-react-patterns" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors">
Read full article
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </article> <!-- Blog Post 3 --> <article class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"> <div class="p-8"> <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4"> <time datetime="2024-01-05">January 5, 2024</time> <span class="mx-2">•</span> <span>6 min read</span> <span class="mx-2">•</span> <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs font-medium">Performance</span> </div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> <a href="/blog/performance-optimization" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
Web Performance Optimization: A Practical Guide
</a> </h2> <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
Practical strategies for optimizing web application performance and delivering exceptional user experiences. Learn about Core Web Vitals, lazy loading, code splitting, and other techniques that can dramatically improve your site's performance.
</p> <a href="/blog/performance-optimization" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors">
Read full article
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </article> <!-- Blog Post 4 --> <article class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"> <div class="p-8"> <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4"> <time datetime="2023-12-28">December 28, 2023</time> <span class="mx-2">•</span> <span>7 min read</span> <span class="mx-2">•</span> <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">Architecture</span> </div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> <a href="/blog/microservices-lessons" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
Microservices: Lessons from the Trenches
</a> </h2> <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
Real-world experiences and lessons learned from implementing microservices architecture at scale. What works, what doesn't, and when you should (or shouldn't) consider breaking up your monolith.
</p> <a href="/blog/microservices-lessons" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors">
Read full article
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </article> </div> <!-- Newsletter Signup --> <div class="mt-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8 text-center"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
Stay Updated
</h3> <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
Get notified when I publish new articles about software engineering, leadership, and building great products.
</p> <form class="max-w-md mx-auto flex gap-4"> <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white" required> <button type="submit" class="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors">
Subscribe
</button> </form> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/blog.astro", void 0);

const $$file = "/home/project/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
