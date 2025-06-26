import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BeUWCS7u.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_BhaTmHQR.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About - Sergio Pereira", "description": "Learn more about Sergio Pereira, Software Engineer and Tech Lead with over 10 years of experience building scalable products and leading high-performing teams." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="pt-16"> <!-- Hero Section --> <section class="bg-white dark:bg-gray-900 py-24"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
About Me
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
I'm a passionate software engineer and tech lead with over 10 years of experience building scalable products and leading high-performing teams.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"> <!-- Profile Image --> <div class="lg:col-span-1"> <div class="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-lg"></div> </div> <!-- Content --> <div class="lg:col-span-2 space-y-6"> <div class="prose prose-lg dark:prose-invert max-w-none"> <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
I'm currently a Senior Engineering Manager at a fast-growing tech company, where I lead a team of 15+ engineers building products used by millions of users worldwide. My journey in tech started over a decade ago, and I've had the privilege of working with amazing teams to solve complex problems and deliver impactful solutions.
</p> <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
Throughout my career, I've worn many hats - from individual contributor to team lead to engineering manager. This diverse experience has given me a unique perspective on what it takes to build great products and foster thriving engineering cultures.
</p> <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
When I'm not coding or leading teams, you'll find me writing about technology, speaking at conferences, or mentoring the next generation of engineers. I believe in the power of sharing knowledge and giving back to the community that has given me so much.
</p> </div> </div> </div> </div> </section> <!-- Experience Timeline --> <section class="bg-gray-50 dark:bg-gray-800 py-24"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-16">
Professional Journey
</h2> <div class="space-y-12"> <!-- Experience Item --> <div class="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"> <div class="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div> <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Senior Engineering Manager</h3> <span class="text-sm text-gray-500 dark:text-gray-400">2022 - Present</span> </div> <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">TechCorp Inc.</p> <p class="text-gray-600 dark:text-gray-300">
Leading a team of 15+ engineers across multiple product areas. Responsible for technical strategy, team growth, and delivery of features used by millions of users. Implemented new processes that improved team velocity by 40%.
</p> </div> </div> <!-- Experience Item --> <div class="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"> <div class="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div> <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Tech Lead</h3> <span class="text-sm text-gray-500 dark:text-gray-400">2020 - 2022</span> </div> <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">TechCorp Inc.</p> <p class="text-gray-600 dark:text-gray-300">
Led the technical direction for the core platform team. Architected and implemented a new microservices infrastructure that improved system reliability by 99.9% uptime. Mentored junior engineers and established coding standards.
</p> </div> </div> <!-- Experience Item --> <div class="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"> <div class="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div> <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Senior Software Engineer</h3> <span class="text-sm text-gray-500 dark:text-gray-400">2018 - 2020</span> </div> <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">StartupXYZ</p> <p class="text-gray-600 dark:text-gray-300">
Built the initial product from ground up using React and Node.js. Scaled the platform to handle 100k+ daily active users. Implemented CI/CD pipelines and established development best practices for the growing engineering team.
</p> </div> </div> <!-- Experience Item --> <div class="relative pl-8"> <div class="absolute -left-2 top-0 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full"></div> <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Software Engineer</h3> <span class="text-sm text-gray-500 dark:text-gray-400">2015 - 2018</span> </div> <p class="text-primary-600 dark:text-primary-400 font-medium mb-3">BigTech Solutions</p> <p class="text-gray-600 dark:text-gray-300">
Developed and maintained enterprise web applications using Java and Angular. Collaborated with cross-functional teams to deliver features on time and within budget. Gained experience in agile methodologies and software architecture.
</p> </div> </div> </div> </div> </section> <!-- Values & Philosophy --> <section class="bg-white dark:bg-gray-900 py-24"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Values & Philosophy
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
The principles that guide my approach to engineering and leadership.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="text-center p-6"> <div class="w-16 h-16 mx-auto mb-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center"> <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Continuous Learning</h3> <p class="text-gray-600 dark:text-gray-300">
Technology evolves rapidly, and staying curious and adaptable is essential for long-term success in engineering.
</p> </div> <div class="text-center p-6"> <div class="w-16 h-16 mx-auto mb-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center"> <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">People First</h3> <p class="text-gray-600 dark:text-gray-300">
Great products are built by great teams. Investing in people and fostering inclusive environments drives the best outcomes.
</p> </div> <div class="text-center p-6"> <div class="w-16 h-16 mx-auto mb-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center"> <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quality & Craft</h3> <p class="text-gray-600 dark:text-gray-300">
Taking pride in the craft of software engineering means building solutions that are not just functional, but elegant and maintainable.
</p> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/about.astro", void 0);

const $$file = "/home/project/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
