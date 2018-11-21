(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{132:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(136),s=a.n(n),l=a(138),o=a(6),c=a.n(o),d=a(135),u=a.n(d),A=a(133),m=a(139),f=a(148),p=a(147),h=a(164),g=a.n(h),E=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:u()(g.a.hero,"hero pb-5")},i.a.createElement("div",{className:u()(g.a.heroContent)},i.a.createElement(p.a,{className:"mb-3"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-center"},i.a.createElement("div",null,i.a.createElement("h1",{className:u()(g.a.heroName,"mb-3 d-flex align-items-center justify-content-center")},"Sergio Cruz",i.a.createElement("img",{src:"https://pbs.twimg.com/profile_images/702647112815652866/AJi5Gajh_400x400.jpg",className:u()(g.a.heroAvatar,"rounded-circle ml-4 my-2"),alt:"Sergio's avatar"})),i.a.createElement("div",{className:u()(g.a.heroQualities,"px-2 py-1 extra-rounded d-flex align-items-center justify-content-center")},i.a.createElement("span",{className:"list-inline-item mb-0"},"Engineer"),i.a.createElement("span",{className:u()(g.a.heroQualitiesSeparator,"list-inline-item my-0 ml-2 mr-3")},i.a.createElement(m.a,{icon:["fas","star"]})),i.a.createElement("span",{className:"list-inline-item my-0"},"Speaker"),i.a.createElement("span",{className:u()(g.a.heroQualitiesSeparator,"list-inline-item my-0 ml-2 mr-3")},i.a.createElement(m.a,{icon:["fas","star"]})),i.a.createElement("span",{className:"list-inline-item mb-0"},"Mentor")),i.a.createElement(f.a,null),i.a.createElement("div",{className:"mt-3"},i.a.createElement(A.Link,{to:"/resume",className:"btn btn-outline-light extra-rounded px-4"},"View Resume")))))))},t}(r.Component),b=(a(29),a(165)),y=a(142),w=a.n(y),v=function(e){return i.a.createElement(A.StaticQuery,{query:"4020906092",render:function(t){return i.a.createElement(w.a,Object.assign({},e,{fluid:t.placeholderImage.childImageSharp.fluid}))},data:b})},N=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"py-5 bg-gray-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8 body-content font-size-sm"},i.a.createElement("h2",null,i.a.createElement("span",{className:"bg-blue text-white px-1 rounded"},"About Sergio")),i.a.createElement("p",{className:"lead"},"Full stack developer in Orlando, FL."),i.a.createElement("p",null,"Hey there"," ",i.a.createElement("span",{role:"img","aria-label":"Waving hand"},"👋"),", thanks for dropping by! I’m a software engineer who has a great passion for the art of writing code. I'm a big fan of shipping beautiful experiences and observing how they impact the people using them."),i.a.createElement("p",null,"I also enjoy helping fellow developers learn new technologies."," ","That’s why I"," ",i.a.createElement("a",{href:"https://www.meetup.com/OrlandoDevs",target:"_blank",rel:"noopener noreferrer"},"organize meetups"),","," ",i.a.createElement("a",{href:"https://youtu.be/WHMyaTy7PME",target:"_blank",rel:"noopener noreferrer"},"speak at conferences"),", and even"," ",i.a.createElement("a",{href:"https://www.pluralsight.com/courses/code-school-powering-up-with-react",target:"_blank",rel:"noopener noreferrer"},"teach online courses")," ","occasionally. To further augment my desire to help other engineers succeed, I have most recently taken on management and leadership positions."),i.a.createElement("p",null,"Please feel free to contact me at any time with questions:",i.a.createElement("br",null),i.a.createElement("strong",null,"E.")," hello [at] sergiocruz.me",i.a.createElement("br",null),i.a.createElement("strong",null,"P.")," (407) six-nine-four 8175"),i.a.createElement("p",{className:"mt-4 mb-md-0"},i.a.createElement(A.Link,{to:"/resume",className:"btn btn-outline-blue extra-rounded px-4"},"View resume"))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement(v,{className:"img-fluid rounded mt-3 mt-md-0",alt:"Sergio speaking at ng-conf 2018"})))))},t}(r.Component),S=a(4),I=a.n(S),x=a(137),j=a.n(x),B=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props.articles;return i.a.createElement("div",{className:"pt-4 pb-0 pt-lg-5 pb-lg-5 bg-blue text-white"},i.a.createElement("div",{className:"container mb-5"},i.a.createElement("h2",null,i.a.createElement("span",{className:"bg-pink text-white px-1 rounded"},"Blog Articles")),i.a.createElement("p",{className:"lead"},"Explore some articles I wrote along the course of my career.")),i.a.createElement("div",null,i.a.createElement("ul",{className:"list-unstyled mb-0"},e.map(function(e,t){return i.a.createElement("li",{key:t,className:u()(j.a.articleItem,"py-4")},i.a.createElement("div",{className:"container"},i.a.createElement("h6",null,i.a.createElement(A.Link,{to:e.frontmatter.path,className:"text-white"},e.frontmatter.title)),i.a.createElement("p",null,e.excerpt),i.a.createElement(A.Link,{to:e.frontmatter.path,className:"btn btn-sm btn-outline-light extra-rounded"},"Read Article")))}))))},t}(r.Component);B.propTypes={articles:I.a.arrayOf(I.a.shape({excerpt:I.a.string.isRequired,frontmatter:I.a.shape({path:I.a.string.isRequired,title:I.a.string.isRequired})})).isRequired};var Q=B;a.d(t,"pageQuery",function(){return k});t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return e.node});return i.a.createElement(l.a,{header:!1},i.a.createElement(s.a,null,i.a.createElement("title",null,"Sergio Cruz, full stack application developer in Orlando, FL"),i.a.createElement("meta",{name:"description",content:"Software engineer in Orlando, FL with over a decade of experience. Sergio regularly organizes tech events, speak at conferences, and teaches online courses."}),i.a.createElement("meta",{name:"og:image",content:"https://sergiocruz.me/img/sergiocruz-speaker.jpg"}),i.a.createElement("meta",{name:"og:tite",content:"Sergio Cruz: Software Engineer"})),i.a.createElement(E,null),i.a.createElement(N,null),i.a.createElement(Q,{articles:t}))};var k="2389915034"},137:function(e,t,a){e.exports={articleItem:"article-list-module--articleItem--1w5sx"}},142:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(6)),s=r(a(46)),l=r(a(140)),o=r(a(141)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!A[a]||(A[a]=!0,!1)},f=[];var p=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){f.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),f.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+l+o+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!0,n=!1,l=t.fadeIn,o=m(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,n=!0),"undefined"==typeof window&&(r=!1,i=!1),t.critical&&(r=!0,i=!1,n=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:i,IOSupported:n,fadeIn:l,hasNoScript:d,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,m=e.placeholderClassName,f=e.fluid,p=e.fixed,E=e.backgroundColor,b=e.Tag,y="boolean"==typeof E?"lightgray":E,w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,A),v=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),N={title:t,alt:this.state.isVisible?"":a,style:w,className:m};if(f){var S=f;return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&c.default.createElement(g,(0,o.default)({src:S.base64},N)),S.tracedSVG&&c.default.createElement(g,(0,o.default)({src:S.tracedSVG},N)),y&&c.default.createElement(b,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,S.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),c.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),c.default.createElement(g,{alt:a,title:t,src:S.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},S))}}))}if(p){var I=p,x=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},n);return"inherit"===n.display&&delete x.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&c.default.createElement(g,(0,o.default)({src:I.base64},N)),I.tracedSVG&&c.default.createElement(g,(0,o.default)({src:I.tracedSVG},N)),y&&c.default.createElement(b,{title:t,style:{backgroundColor:y,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),c.default.createElement(g,{alt:a,title:t,width:I.width,height:I.height,src:I.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var w=E;t.default=w},164:function(e,t,a){e.exports={hero:"home-module--hero--2vZsp",heroContent:"home-module--heroContent--2Rw6_",heroAvatar:"home-module--heroAvatar--3r8t3",heroName:"home-module--heroName--1kcQz",heroQualities:"home-module--heroQualities--3XIX_",heroQualitiesSeparator:"home-module--heroQualitiesSeparator--1M9Vj"}},165:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAdABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIE/9oADAMBAAIQAxAAAAHkW1pEiXmhIj1YgwCLr//EABwQAQACAwADAAAAAAAAAAAAAAIAAQMEERIiMf/aAAgBAQABBQInqyiiuT5adqz7UT5xHHUq+TXx00tY9yGg/wD/xAAYEQADAQEAAAAAAAAAAAAAAAAAARESE//aAAgBAwEBPwGo50ppn//EABoRAAICAwAAAAAAAAAAAAAAAAECABARISL/2gAIAQIBAT8BY9QJndBjP//EAB8QAAIBAgcAAAAAAAAAAAAAAAABEQIhEBIiM1Fxgf/aAAgBAQAGPwJItjLJJz0rs3J8LVDT4FqZB//EAB0QAAMAAgIDAAAAAAAAAAAAAAABESExEGFBUZH/2gAIAQEAAT8hpHlwiVi9W8W9GykMiRCafosNEl2QLWM+DeGthaGQaFzD/9oADAMBAAIAAwAAABAH+0z/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhUf/aAAgBAwEBPxCGMUKiOCRiZ//EABkRAQADAQEAAAAAAAAAAAAAAAEAETFBkf/aAAgBAgEBPxAQ1hsEA7EVu4IoX2f/xAAcEAEBAQADAQEBAAAAAAAAAAABEQAhMVFhccH/2gAIAQEAAT8QBNA02duZMDirUc4w3Bzd9TC+vuIA77/cULDKBxEONUgfBdw+Leck8pJ7Q/u40NDQusEANfpv/9k=",aspectRatio:.685215493726132,src:"/sergio.io/static/099050c1b183b31d6139af7027e1161a/53b4a/sergiocruz-speaker.jpg",srcSet:"/sergio.io/static/099050c1b183b31d6139af7027e1161a/bf99b/sergiocruz-speaker.jpg 75w,\n/sergio.io/static/099050c1b183b31d6139af7027e1161a/9d7df/sergiocruz-speaker.jpg 150w,\n/sergio.io/static/099050c1b183b31d6139af7027e1161a/53b4a/sergiocruz-speaker.jpg 300w,\n/sergio.io/static/099050c1b183b31d6139af7027e1161a/3d205/sergiocruz-speaker.jpg 450w,\n/sergio.io/static/099050c1b183b31d6139af7027e1161a/14a2b/sergiocruz-speaker.jpg 600w,\n/sergio.io/static/099050c1b183b31d6139af7027e1161a/a8e6b/sergiocruz-speaker.jpg 900w,\n/sergio.io/static/099050c1b183b31d6139af7027e1161a/7da07/sergiocruz-speaker.jpg 1256w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-f51af6920469dbb4c919.js.map