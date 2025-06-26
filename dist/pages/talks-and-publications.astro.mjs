import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BeUWCS7u.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_BhaTmHQR.mjs';
export { renderers } from '../renderers.mjs';

const $$TalksAndPublications = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Talks & Publications - Sergio Pereira", "description": "Speaking engagements, conference talks, and publications by Sergio Pereira." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="pt-16"> <!-- Hero Section --> <section class="bg-white dark:bg-gray-900 py-24"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
Talks & Publications
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Sharing knowledge through speaking engagements, conference talks, and written publications on software engineering and leadership.
</p> </div> </section> <!-- Speaking Engagements --> <section class="bg-gray-50 dark:bg-gray-800 py-24"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Speaking Engagements
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
I regularly speak at conferences, meetups, and corporate events about software engineering, team leadership, and building great products.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <!-- Talk 1 --> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"> <div class="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative"> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path> </svg> </div> </div> <div class="p-6"> <div class="flex items-center justify-between mb-4"> <span class="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">Conference</span> <span class="text-gray-500 dark:text-gray-400 text-sm">2024</span> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
Building High-Performance Engineering Teams
</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
A deep dive into the strategies and practices that enable engineering teams to scale effectively while maintaining quality and velocity.
</p> <div class="flex items-center justify-between"> <span class="text-sm text-gray-500 dark:text-gray-400">ReactConf 2024</span> <a href="#" class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
Watch Talk →
</a> </div> </div> </div> <!-- Talk 2 --> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"> <div class="h-48 bg-gradient-to-br from-green to-primary-500 relative"> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> </div> </div> <div class="p-6"> <div class="flex items-center justify-between mb-4"> <span class="bg-green/20 text-gray-800 dark:text-green px-3 py-1 rounded-full text-sm font-medium">Meetup</span> <span class="text-gray-500 dark:text-gray-400 text-sm">2024</span> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
Modern React Patterns and Performance
</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Exploring the latest React patterns, hooks, and performance optimization techniques for building scalable applications.
</p> <div class="flex items-center justify-between"> <span class="text-sm text-gray-500 dark:text-gray-400">Nashville JS</span> <a href="#" class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
View Slides →
</a> </div> </div> </div> <!-- Talk 3 --> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"> <div class="h-48 bg-gradient-to-br from-pink to-primary-600 relative"> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> </div> <div class="p-6"> <div class="flex items-center justify-between mb-4"> <span class="bg-pink/20 text-gray-800 dark:text-pink px-3 py-1 rounded-full text-sm font-medium">Workshop</span> <span class="text-gray-500 dark:text-gray-400 text-sm">2023</span> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
Engineering Leadership Workshop
</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
A hands-on workshop covering the transition from individual contributor to engineering leader, including team dynamics and technical decision-making.
</p> <div class="flex items-center justify-between"> <span class="text-sm text-gray-500 dark:text-gray-400">TechLeaders Summit</span> <a href="#" class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
Learn More →
</a> </div> </div> </div> <!-- Talk 4 --> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"> <div class="h-48 bg-gradient-to-br from-yellow to-primary-500 relative"> <div class="absolute inset-0 flex items-center justify-center"> <svg class="w-16 h-16 text-gray-800 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> </div> <div class="p-6"> <div class="flex items-center justify-between mb-4"> <span class="bg-yellow/20 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Keynote</span> <span class="text-gray-500 dark:text-gray-400 text-sm">2023</span> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
The Future of Web Development
</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Keynote presentation exploring emerging trends in web development, from edge computing to AI-powered development tools.
</p> <div class="flex items-center justify-between"> <span class="text-sm text-gray-500 dark:text-gray-400">WebDev Conference</span> <a href="#" class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
Watch Keynote →
</a> </div> </div> </div> </div> </div> </section> <!-- Publications --> <section class="bg-white dark:bg-gray-900 py-24"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Publications & Articles
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
Written contributions to the software engineering community through articles, tutorials, and technical publications.
</p> </div> <div class="space-y-8"> <!-- Publication 1 --> <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between"> <div class="flex-1"> <div class="flex items-center mb-3"> <span class="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium mr-3">Technical Article</span> <span class="text-gray-500 dark:text-gray-400 text-sm">Published in IEEE Software</span> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
Scaling Engineering Teams: Lessons from High-Growth Startups
</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
A comprehensive analysis of scaling challenges and solutions based on real-world experience leading engineering teams through rapid growth phases.
</p> </div> <div class="lg:ml-8 lg:flex-shrink-0"> <a href="#" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
Read Article
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> </div> <!-- Publication 2 --> <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between"> <div class="flex-1"> <div class="flex items-center mb-3"> <span class="bg-green/20 text-gray-800 dark:text-green px-3 py-1 rounded-full text-sm font-medium mr-3">Tutorial Series</span> <span class="text-gray-500 dark:text-gray-400 text-sm">Dev.to</span> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
Modern React Architecture: A Complete Guide
</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
A 10-part tutorial series covering modern React architecture patterns, state management, and performance optimization techniques.
</p> </div> <div class="lg:ml-8 lg:flex-shrink-0"> <a href="#" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
View Series
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> </div> <!-- Publication 3 --> <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"> <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between"> <div class="flex-1"> <div class="flex items-center mb-3"> <span class="bg-pink/20 text-gray-800 dark:text-pink px-3 py-1 rounded-full text-sm font-medium mr-3">Book Chapter</span> <span class="text-gray-500 dark:text-gray-400 text-sm">O'Reilly Media</span> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
"Engineering Leadership in the Digital Age"
</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Contributing author to "The Modern Engineering Manager" - a comprehensive guide covering the evolving role of engineering leadership.
</p> </div> <div class="lg:ml-8 lg:flex-shrink-0"> <a href="#" class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
View Book
<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> </div> </div> </div> </section> <!-- Speaking Availability --> <section class="bg-primary-950 text-white py-24"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold mb-6">
Interested in Having Me Speak?
</h2> <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
I'm always excited to share knowledge and connect with the community. Let's discuss how I can contribute to your event.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="mailto:hello@sergio.io" class="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-primary-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors">
Get In Touch
</a> <a href="/resume" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-950 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
View Speaker Bio
</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/talks-and-publications.astro", void 0);

const $$file = "/home/project/src/pages/talks-and-publications.astro";
const $$url = "/talks-and-publications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TalksAndPublications,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
