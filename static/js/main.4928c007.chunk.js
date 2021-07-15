(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Preview.b9c7deb3.svg"},,,function(e){e.exports=JSON.parse('{"_colorDesc":{"lilac":"#C0B3BC","red":"#EF9A9A","blue":"#18B2D8","yellow":"#FCC418","grey":"#D9DEDF"},"colors":{"default":"#C0B3BC","error":"#EF9A9A","Rain":"#18B2D8","Clear":"#FCC418","Haze":"#D9DEDF","Thunderstorm":"#D9DEDF","Snow":"#D9DEDF","Drizzle":"#18B2D8","Clouds":"#FCC418"},"icons":{"Rain":"Rain.svg","Drizzle":"Drizzle.svg","Clouds":"Clouds.svg","Clear":"Clear.svg","Snow":"Snow.svg","Thunderstorm":"Thunderstorm.svg"}}')},,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){var r={"./Clear.svg":24,"./Cloud-wind.svg":25,"./Clouds.svg":26,"./Drizzle.svg":27,"./Haze.svg":28,"./Moon.svg":29,"./Night-rainy.svg":30,"./Night.svg":31,"./Preview.svg":5,"./Rain.svg":32,"./Snow.svg":33,"./Thunderstorm.svg":34,"./Tonado.svg":35};function a(e){var t=n(e);return c(t)}function n(e){if(!c.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id=23},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Clear.eec1aaac.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Cloud-wind.784e245c.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Clouds.fd8c0fe3.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Drizzle.43286041.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Haze.5460cfea.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Moon.29f7c01b.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Night-rainy.96679237.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Night.45d6f5d1.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Rain.e8330033.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Snow.2ccf24fc.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Thunderstorm.80dfe35c.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Tonado.83799022.svg"},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(6),s=c.n(n),i=(c(13),c(4)),o=c.n(i),u=c(7),d=c(2),l=(c(15),c(8)),f=(c(16),c(17),c(0)),j=function(e){var t=e.colorScheme;return Object(f.jsx)("h1",{className:t+" logo",children:"WEATHER APP"})},p=function(e){var t=e.color;return Object(f.jsx)("header",{className:"header",style:{backgroundColor:t},children:Object(f.jsx)(j,{colorScheme:"light"})})},v=a.a.memo(p),h=(c(19),function(e){var t=e.value,c=e.onChange;return Object(f.jsx)("div",{className:"searchBarWrapper",children:Object(f.jsxs)("div",{className:"inputFieldWrapper",children:[Object(f.jsx)("label",{htmlFor:"city",children:"Location"}),Object(f.jsx)("input",{value:t,onChange:function(e){return c(e.target.value)},type:"text",id:"city",placeholder:"Enter a city",required:!0})]})})}),m=(c(20),function(e){return Object(f.jsx)("div",{className:"dateWrapper",children:"Tuesday, July 13"})}),b=(c(21),function(e){var t=e.desc;return Object(f.jsx)("div",{className:"descriptionWrapper",children:t})}),O=(c(22),function(e){var t=e.temp;return Object(f.jsxs)("div",{className:"temperatureWrapper",children:[Math.round(t),Object(f.jsx)("span",{className:"temperatureSymbol",children:"\xb0"})]})}),g=function(e){var t=e.weatherDetails;return Object(f.jsxs)("div",{className:"weatherDetailsWrapper",children:[Object(f.jsx)("div",{className:"weatherIconWrapper",children:Object(f.jsx)("img",{src:c(23)("./".concat(t.desc,".svg")).default,alt:"weather icon"})}),Object(f.jsxs)("div",{className:"weatherDataWrapper",children:[Object(f.jsx)(O,{temp:t.temp}),Object(f.jsx)(b,{desc:t.desc}),Object(f.jsx)(m,{})]})]})},x=(c(36),function(e){var t=e.children;return Object(f.jsx)("div",{className:"cardWrapper",children:t})}),C=(c(37),function(e){return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsx)(j,{colorScheme:"dark"}),Object(f.jsx)("div",{className:"footerSeparator"})]})}),w=(c(38),function(){return Object(f.jsx)("img",{className:"preview",src:c(5).default,alt:"preview img"})}),N=(c(39),function(e){var t=e.onClick;return Object(f.jsxs)("div",{className:"errorWrapper",children:[Object(f.jsx)("h1",{className:"errorCode",children:"404"}),Object(f.jsxs)("div",{className:"errorDetails",children:[Object(f.jsx)("h2",{className:"detailsHeading",children:"Oops!"}),Object(f.jsx)("p",{className:"errorDetails",children:"We can't find the city you are looking for."}),Object(f.jsx)("div",{className:"buttonWrapper",children:Object(f.jsx)("button",{onClick:t,children:"Try Again"})})]})]})});var D=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(""),s=Object(d.a)(n,2),i=s[0],j=s[1],p=Object(r.useState)(""),m=Object(d.a)(p,2),b=m[0],O=m[1],D=function(e){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("270c098c9fb6257986ba3644d1aa5177","&units=metric");fetch(t).then((function(e){return e.json()})).then((function(e){if(200!==e.cod)throw O("error"),e.cod;a({temp:e.main.temp,desc:e.weather[0].main})})).catch((function(e){return console.log(e)}))};Object(r.useEffect)((function(){var e=setTimeout(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i&&D(i);case 1:case"end":return e.stop()}}),e)}))),500);return function(){return clearTimeout(e)}}),[i]);var y,S=Object(f.jsx)(w,{});if(b&&i)S=Object(f.jsx)(N,{onClick:function(){a({temp:void 0,desc:null}),O(""),j("")}});else if(i&&c&&c.desc&&c.temp){var W=c;S=Object(f.jsx)(g,{weatherDetails:W})}return y=b&&i?"error":c&&c.desc?c.desc:"default",Object(f.jsxs)("div",{className:"appWrapper",children:[Object(f.jsx)(v,{color:l.colors[y]}),Object(f.jsxs)("main",{className:"appMain",children:[Object(f.jsx)(h,{value:i,onChange:function(e){j(e)}}),Object(f.jsx)(x,{children:S})]}),Object(f.jsx)(C,{})]})};c(40);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root"))}],[[41,1,2]]]);
//# sourceMappingURL=main.4928c007.chunk.js.map