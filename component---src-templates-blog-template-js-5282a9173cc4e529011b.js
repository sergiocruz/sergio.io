(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o}),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),i=a(138),l=a.n(i),c=a(141);function o(e){var t=e.data.markdownRemark,a=t.excerpt,n=t.frontmatter,i=t.html;return r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement("title",null,n.title," - Sergio Cruz Blog"),r.a.createElement("meta",{name:"description",content:a}),r.a.createElement("meta",{name:"og:tite",content:n.title})),r.a.createElement("div",{className:"bg-gray-200 text-dark py-4"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,n.title))),r.a.createElement("div",{className:"bg-light text-dark py-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"body-content font-size-sm",dangerouslySetInnerHTML:{__html:i}}))))}var s="2013514231"},136:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(135),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(139),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(30);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},139:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},141:function(e,t,a){"use strict";var n=a(145),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(138),s=a.n(o),m=a(136),u=a(152),d=a(154),p=a(155),f=a(142),g=(a(148),a(149),function(){return i.a.createElement("div",{itemScope:"",itemType:"http://schema.org/Person"},i.a.createElement("meta",{itemProp:"gender",content:"Male"}),i.a.createElement("meta",{itemProp:"jobTitle",content:"Software Engineering Manager"}),i.a.createElement("meta",{itemProp:"url",content:"https://sergio.io/"}),i.a.createElement("meta",{itemProp:"memberOf",content:"Orlando Devs, Inc."}),i.a.createElement("meta",{itemProp:"memberOf",content:"OrlandoJS"}),i.a.createElement("meta",{itemProp:"image",content:"https://twitter.com/hashtagserg/profile_image?size=original"}),i.a.createElement("span",{itemProp:"name",className:"font-size-sm"},i.a.createElement("link",{itemProp:"sameAs",href:"https://twitter.com/hashtagserg"}),i.a.createElement("link",{itemProp:"sameAs",href:"https://github.com/sergiocruz"}),i.a.createElement("link",{itemProp:"sameAs",href:"https://www.linkedin.com/in/sergiorlcruz"}),"Sergio Cruz"))}),h=a(143),E=(new Date).getFullYear(),v=function(){return i.a.createElement("div",{className:"bg-gray-200 py-3 text-dark"},i.a.createElement("div",{className:"container d-flex flex-column align-items-center justify-content-center"},i.a.createElement(h.a,null),i.a.createElement(g,null),i.a.createElement("p",{className:"font-size-xs m-0"},"Copyright © ",E," Sergio Cruz. All rights reserved.")))};u.b.add(d.a,d.b,d.c,d.d,p.a,p.b,d.e,d.f,p.c);var b=function(e){var t=e.children,a=e.header,r=void 0===a||a;return i.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),r&&i.a.createElement(f.a,null),i.a.createElement("div",null,t),i.a.createElement(v,null))},data:n})};b.propTypes={children:c.a.node.isRequired};t.a=b},142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(137),l=a.n(i),c=a(136),o=a(147),s=a.n(o);t.a=function(e){e.siteTitle;var t=e.className,a=void 0===t?"":t;return r.a.createElement("div",{className:l()(s.a.header,a)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center justify-content-md-end"},r.a.createElement("nav",{className:"nav nav-dark py-2 px-0"},r.a.createElement(c.Link,{className:"nav-link",activeClassName:"active",to:"/"},"Home"),r.a.createElement(c.Link,{className:"nav-link",activeClassName:"active",to:"/resume"},"Resume"),r.a.createElement(c.Link,{className:"nav-link",activeClassName:"active",to:"/talks-and-publications"},"Talks & Publications")))))}},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(137),l=a.n(i),c=a(140),o=a(144),s=a(150),m=a.n(s);t.a=function(){return r.a.createElement("div",{className:l()(m.a.socialmedia,"mt-3")},r.a.createElement(o.OutboundLink,{href:"https://twitter.com/hashtagserg",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(c.a,{icon:["fab","twitter"]}),r.a.createElement("span",null,"Twitter")),r.a.createElement(o.OutboundLink,{href:"https://github.com/sergiocruz",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(c.a,{icon:["fab","github"]}),r.a.createElement("span",null,"GitHub")),r.a.createElement(o.OutboundLink,{href:"https://www.linkedin.com/in/sergiorlcruz",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(c.a,{icon:["fab","linkedin"]}),r.a.createElement("span",null,"LinkedIn")),r.a.createElement(o.OutboundLink,{href:"mailto:hello@sergiocruz.me",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(c.a,{icon:["fas","envelope"]}),r.a.createElement("span",null,"Email")))}},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Sergio Cruz "}}}}},146:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(47),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},147:function(e,t,a){e.exports={header:"header-module--header--nTqsH"}},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){e.exports={socialmedia:"socialmedia-module--socialmedia--3XwYK"}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-5282a9173cc4e529011b.js.map