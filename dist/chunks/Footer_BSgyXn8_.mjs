import { b as createAstro, c as createComponent, a as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute, m as maybeRenderHead, r as renderComponent, g as renderScript } from './astro/server_BeUWCS7u.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sergio.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Sergio Pereira - Software Engineer, Tech Lead, and Digital Creator", image = "/og-image.jpg", canonical } = Astro2.props;
  const canonicalURL = canonical || new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- SEO Meta Tags --><title>", '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', `><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Theme Script --><script>
      const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      })();
      
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      
      window.localStorage.setItem('theme', theme);
    <\/script>`, '</head> <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"> ', " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/project/src/layouts/BaseLayout.astro", void 0);

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200",
      "aria-label": "Toggle theme",
      children: theme === "light" ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }) })
    }
  );
}

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <!-- Logo --> <div class="flex-shrink-0"> <a href="/" class="text-xl font-bold text-gray-900 dark:text-white hover:text-brand-link dark:hover:text-brand-link transition-colors">
sergio.io
</a> </div> <!-- Desktop Navigation --> <div class="hidden md:block"> <div class="ml-10 flex items-baseline space-x-8"> <a href="/" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link px-3 py-2 text-sm font-medium transition-colors">
Home
</a> <a href="/about" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link px-3 py-2 text-sm font-medium transition-colors">
About
</a> <a href="/blog" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link px-3 py-2 text-sm font-medium transition-colors">
Blog
</a> <a href="/talks-and-publications" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link px-3 py-2 text-sm font-medium transition-colors">
Talks & Publications
</a> <a href="/resume" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link px-3 py-2 text-sm font-medium transition-colors">
Resume
</a> </div> </div> <!-- Theme Toggle & Mobile Menu Button --> <div class="flex items-center space-x-4"> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/ThemeToggle.jsx", "client:component-export": "default" })} <!-- Mobile menu button --> <div class="md:hidden"> <button type="button" class="mobile-menu-button text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link focus:outline-none focus:text-brand-link dark:focus:text-brand-link transition-colors" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> </div> <!-- Mobile menu --> <div class="mobile-menu hidden md:hidden"> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"> <a href="/" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link block px-3 py-2 text-base font-medium transition-colors">Home</a> <a href="/about" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link block px-3 py-2 text-base font-medium transition-colors">About</a> <a href="/blog" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link block px-3 py-2 text-base font-medium transition-colors">Blog</a> <a href="/talks-and-publications" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link block px-3 py-2 text-base font-medium transition-colors">Talks & Publications</a> <a href="/resume" class="text-gray-700 dark:text-gray-300 hover:text-brand-link dark:hover:text-brand-link block px-3 py-2 text-base font-medium transition-colors">Resume</a> </div> </div> </nav> ${renderScript($$result, "/home/project/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Brand --> <div class="col-span-1 md:col-span-2"> <div class="flex items-center"> <span class="text-xl font-bold text-gray-900 dark:text-white">sergio.io</span> </div> <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
Software Engineer, Tech Lead, and Digital Creator sharing insights about technology, leadership, and building great products.
</p> <div class="flex space-x-6 mt-6"> <a href="https://twitter.com/sergioio" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> <span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a href="https://github.com/sergioio" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> <span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> <a href="https://linkedin.com/in/sergioio" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> <span class="sr-only">LinkedIn</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clip-rule="evenodd"></path> </svg> </a> </div> </div> <!-- Quick Links --> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Quick Links</h3> <ul class="mt-4 space-y-4"> <li><a href="/about" class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li> <li><a href="/blog" class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li> <li><a href="/talks-and-publications" class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Talks & Publications</a></li> <li><a href="/resume" class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Resume</a></li> </ul> </div> <!-- Resources --> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Resources</h3> <ul class="mt-4 space-y-4"> <li><a href="/newsletter" class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Newsletter</a></li> <li><a href="/speaking" class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Speaking</a></li> <li><a href="/uses" class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Uses</a></li> <li><a href="/rss.xml" class="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">RSS Feed</a></li> </ul> </div> </div> <div class="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8"> <p class="text-base text-gray-500 dark:text-gray-400 text-center">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Sergio Pereira. All rights reserved.
</p> </div> </div> </footer>`;
}, "/home/project/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Navigation as a, $$Footer as b };
