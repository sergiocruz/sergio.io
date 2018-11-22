(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(135),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(147),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(43);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},139:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(137),s=a.n(o),m=a(134),u=a(148),d=a(160),p=a(161),f=a(149),h=(a(163),a(164),a(150)),g=(new Date).getFullYear(),E=function(){return i.a.createElement("div",{className:"bg-gray-200 py-3 text-dark"},i.a.createElement("div",{className:"container d-flex flex-column align-items-center justify-content-center"},i.a.createElement(h.a,null),i.a.createElement("p",{className:"font-size-xs m-0"},"Copyright © ",g," Sergio Cruz. All rights reserved.")))};u.b.add(d.a,p.a);var v=function(e){var t=e.children,a=e.header,r=void 0===a||a;return i.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),r&&i.a.createElement(f.a,null),i.a.createElement("div",null,t),i.a.createElement(E,null))},data:n})};v.propTypes={children:l.a.node.isRequired};t.a=v},147:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(136),c=a.n(i),l=a(134),o=a(162),s=a.n(o);t.a=function(e){e.siteTitle;var t=e.className,a=void 0===t?"":t;return r.a.createElement("div",{className:c()(s.a.header,a)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center justify-content-md-end"},r.a.createElement("nav",{className:"nav nav-dark py-2 px-0"},r.a.createElement(l.Link,{className:"nav-link",activeClassName:"active",to:"/"},"Home"),r.a.createElement(l.Link,{className:"nav-link",activeClassName:"active",to:"/resume"},"Resume"),r.a.createElement(l.Link,{className:"nav-link",activeClassName:"active",to:"/talks-and-publications"},"Talks & Publications")))))}},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(136),c=a.n(i),l=a(141),o=a(142),s=a(165),m=a.n(s),u=function(){return r.a.createElement("div",{itemScope:"",itemType:"http://schema.org/Person"},r.a.createElement("meta",{itemProp:"gender",content:"Male"}),r.a.createElement("meta",{itemProp:"jobTitle",content:"Software Engineering Manager"}),r.a.createElement("meta",{itemProp:"url",content:"https://sergio.io/"}),r.a.createElement("meta",{itemProp:"memberOf",content:"Orlando Devs, Inc."}),r.a.createElement("meta",{itemProp:"memberOf",content:"OrlandoJS"}),r.a.createElement("meta",{itemProp:"image",content:"https://twitter.com/hashtagserg/profile_image?size=original"}),r.a.createElement("span",{itemProp:"name",className:"font-size-sm"},r.a.createElement("link",{itemProp:"sameAs",href:"https://twitter.com/hashtagserg"}),r.a.createElement("link",{itemProp:"sameAs",href:"https://github.com/sergiocruz"}),r.a.createElement("link",{itemProp:"sameAs",href:"https://www.linkedin.com/in/sergiorlcruz"}),"Sergio Cruz"))};t.a=function(){return r.a.createElement("div",{className:c()(m.a.socialmedia,"mt-3")},r.a.createElement(o.OutboundLink,{href:"https://twitter.com/hashtagserg",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(l.a,{icon:["fab","twitter"]}),r.a.createElement("span",null,"Twitter")),r.a.createElement(o.OutboundLink,{href:"https://github.com/sergiocruz",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(l.a,{icon:["fab","github"]}),r.a.createElement("span",null,"GitHub")),r.a.createElement(o.OutboundLink,{href:"https://www.linkedin.com/in/sergiorlcruz",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(l.a,{icon:["fab","linkedin"]}),r.a.createElement("span",null,"LinkedIn")),r.a.createElement(o.OutboundLink,{href:"mailto:hello@sergiocruz.me",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(l.a,{icon:["fas","envelope"]}),r.a.createElement("span",null,"Email")),r.a.createElement(u,null))}},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Sergio Cruz "}}}}},159:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(63),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},162:function(e,t,a){e.exports={header:"header-module--header--nTqsH"}},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){e.exports={socialmedia:"socialmedia-module--socialmedia--3XwYK"}}}]);
//# sourceMappingURL=1-f144196c714de5b058e4.js.map