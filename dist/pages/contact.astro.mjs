import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BeUWCS7u.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout, a as $$Navigation, b as $$Footer } from '../chunks/Footer_CwlHWvQx.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact - Sergio Pereira", "description": "Get in touch with Sergio Pereira for speaking opportunities, consulting, or collaboration." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${maybeRenderHead()}<main class="pt-16"> <!-- Hero Section --> <section class="bg-white dark:bg-gray-900 py-24"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
Get In Touch
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
I'm always interested in hearing about new opportunities, speaking engagements, or just connecting with fellow engineers.
</p> </div> </section> <!-- Contact Form & Info --> <section class="bg-gray-50 dark:bg-gray-800 py-24"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- Contact Form --> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
Send me a message
</h2> <form class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Name
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-colors" placeholder="Your name"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Email
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-colors" placeholder="your.email@example.com"> </div> <div> <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Subject
</label> <select id="subject" name="subject" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-colors"> <option value="">Select a subject</option> <option value="speaking">Speaking Opportunity</option> <option value="consulting">Consulting Inquiry</option> <option value="collaboration">Collaboration</option> <option value="mentoring">Mentoring</option> <option value="other">Other</option> </select> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Message
</label> <textarea id="message" name="message" rows="6" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-colors resize-none" placeholder="Tell me about your project, opportunity, or how I can help..."></textarea> </div> <button type="submit" class="w-full bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors font-medium">
Send Message
</button> </form> </div> <!-- Contact Info --> <div class="space-y-8"> <!-- Contact Methods --> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
Other ways to reach me
</h3> <div class="space-y-6"> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div class="ml-4"> <h4 class="text-lg font-medium text-gray-900 dark:text-white">Email</h4> <p class="text-gray-600 dark:text-gray-300">hello@sergio.io</p> </div> </div> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </div> <div class="ml-4"> <h4 class="text-lg font-medium text-gray-900 dark:text-white">Twitter</h4> <p class="text-gray-600 dark:text-gray-300">@sergioio</p> </div> </div> <div class="flex items-start"> <div class="flex-shrink-0"> <svg class="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clip-rule="evenodd"></path> </svg> </div> <div class="ml-4"> <h4 class="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h4> <p class="text-gray-600 dark:text-gray-300">linkedin.com/in/sergioio</p> </div> </div> </div> </div> <!-- Availability --> <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
Current Availability
</h3> <div class="space-y-4"> <div class="flex items-center"> <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div> <span class="text-gray-600 dark:text-gray-300">Available for speaking engagements</span> </div> <div class="flex items-center"> <div class="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div> <span class="text-gray-600 dark:text-gray-300">Limited consulting availability</span> </div> <div class="flex items-center"> <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div> <span class="text-gray-600 dark:text-gray-300">Open to mentoring opportunities</span> </div> </div> </div> <!-- Response Time --> <div class="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6"> <div class="flex items-center"> <svg class="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <div> <h4 class="font-medium text-gray-900 dark:text-white">Response Time</h4> <p class="text-sm text-gray-600 dark:text-gray-300">I typically respond within 24-48 hours</p> </div> </div> </div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/contact.astro", void 0);

const $$file = "/home/project/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
