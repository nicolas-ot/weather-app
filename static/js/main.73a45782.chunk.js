(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Preview.b9c7deb3.svg"},,,,function(e){e.exports=JSON.parse('{"_colorDesc":{"lilac":"#C0B3BC","red":"#EF9A9A","blue":"#18B2D8","yellow":"#FCC418","grey":"#D9DEDF"},"colors":{"default":"#C0B3BC","error":"#EF9A9A","Rain":"#18B2D8","Clear":"#FCC418","Haze":"#D9DEDF","Thunderstorm":"#D9DEDF","Snow":"#D9DEDF","Drizzle":"#18B2D8","Clouds":"#FCC418"},"icons":{"Rain":"Rain.svg","Drizzle":"Drizzle.svg","Clouds":"Clouds.svg","Clear":"Clear.svg","Snow":"Snow.svg","Thunderstorm":"Thunderstorm.svg"}}')},,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){var r={"./Clear.svg":34,"./Cloud-wind.svg":35,"./Clouds.svg":36,"./Drizzle.svg":37,"./Haze.svg":38,"./Mist.svg":39,"./Moon.svg":40,"./Night-rainy.svg":41,"./Night.svg":42,"./Preview.svg":8,"./Rain.svg":43,"./Snow.svg":44,"./Thunderstorm.svg":45,"./Tonado.svg":46};function n(e){var t=a(e);return c(t)}function a(e){if(!c.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=33},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Clear.eec1aaac.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Cloud-wind.784e245c.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Clouds.fd8c0fe3.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Drizzle.43286041.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Haze.5460cfea.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Mist.e81a616c.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Moon.29f7c01b.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Night-rainy.96679237.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Night.45d6f5d1.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Rain.e8330033.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Snow.2ccf24fc.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Thunderstorm.80dfe35c.svg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Tonado.83799022.svg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(10),s=c.n(a),i=(c(19),c(7)),o=c.n(i),u=c(11),d=c(4),l=(c(21),c(12)),f=(c(22),c(0)),j=function(e){var t=e.children;return Object(f.jsx)("div",{className:"cardWrapper",children:t})},p=(c(24),function(e){var t=e.onClick;return Object(f.jsxs)("div",{className:"errorWrapper",children:[Object(f.jsx)("h1",{className:"errorCode",children:"404"}),Object(f.jsxs)("div",{className:"errorDetails",children:[Object(f.jsx)("h2",{className:"detailsHeading",children:"Oops!"}),Object(f.jsx)("p",{className:"errorDetails",children:"We can't find the city you are looking for."}),Object(f.jsx)("div",{className:"buttonWrapper",children:Object(f.jsx)("button",{onClick:t,children:"Try Again"})})]})]})}),v=(c(25),c(26),function(e){var t=e.colorScheme,c=e.onClick;return Object(f.jsx)("h1",{onClick:function(){return c()},className:t+" logo",children:"WEATHER APP"})}),m=function(e){var t=e.onClick;return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsx)(v,{onClick:t,colorScheme:"dark"}),Object(f.jsx)("div",{className:"footerSeparator"})]})},h=(c(27),function(e){var t=e.onClick,c=e.color;return Object(f.jsx)("header",{className:"header",style:{backgroundColor:c},children:Object(f.jsx)(v,{onClick:t,colorScheme:"light"})})}),b=n.a.memo(h),O=c(14),g=(c(28),function(){return Object(f.jsx)("img",{className:"preview",src:c(8).default,alt:"preview img"})}),x=(c(29),function(e){var t=e.value,c=e.onChange;return Object(f.jsx)("div",{className:"searchBarWrapper",children:Object(f.jsxs)("div",{className:"inputFieldWrapper",children:[Object(f.jsx)("label",{htmlFor:"city",children:"Location"}),Object(f.jsx)("input",{value:t,onChange:function(e){return c(e.target.value)},type:"text",id:"city",placeholder:"Enter a city",required:!0})]})})}),C=(c(30),c(13)),w=c.n(C),D=function(){var e=new Date;return Object(f.jsx)("div",{className:"dateWrapper",children:w()(e,"dddd, dd mmmm")})},N=(c(31),function(e){var t=e.desc;return Object(f.jsx)("div",{className:"descriptionWrapper",children:t})}),k=(c(32),function(e){var t=e.temp;return Object(f.jsxs)("div",{className:"temperatureWrapper",children:[Math.round(t),Object(f.jsx)("span",{className:"temperatureSymbol",children:"\xb0"})]})}),y=function(e){var t=e.weatherDetails;return Object(f.jsxs)("div",{className:"weatherDetailsWrapper",children:[Object(f.jsx)("div",{className:"weatherIconWrapper",children:Object(f.jsx)("img",{src:c(33)("./".concat(t.desc,".svg")).default,alt:"weather icon"})}),Object(f.jsxs)("div",{className:"weatherDataWrapper",children:[Object(f.jsx)(k,{temp:t.temp}),Object(f.jsx)(N,{desc:t.desc}),Object(f.jsx)(D,{})]})]})};var S=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(""),s=Object(d.a)(a,2),i=s[0],v=s[1],h=Object(r.useState)(""),C=Object(d.a)(h,2),w=C[0],D=C[1],N=Object(r.useState)(!1),k=Object(d.a)(N,2),S=k[0],W=k[1],z=function(e){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("270c098c9fb6257986ba3644d1aa5177","&units=metric");W(!0),fetch(t).then((function(e){return e.json()})).then((function(e){if(W(!1),200!==e.cod)throw D("error"),n({temp:void 0,desc:void 0}),e.cod;n({temp:e.main.temp,desc:e.weather[0].main})})).catch((function(e){console.log(e),W(!1)}))};Object(r.useEffect)((function(){var e=setTimeout(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({temp:void 0,desc:void 0}),D(""),i&&z(i);case 3:case"end":return e.stop()}}),e)}))),500);return function(){return clearTimeout(e)}}),[i]);var E,F=function(){n({temp:void 0,desc:void 0}),D(""),v("")},T=Object(f.jsx)(g,{});if(S)T=Object(f.jsx)(O.MoonLoader,{});else if(w&&i)T=Object(f.jsx)(p,{onClick:function(){F()}});else if(i&&c&&c.desc&&c.temp){var B=c;T=Object(f.jsx)(y,{weatherDetails:B})}return E=w&&i?"error":i&&c&&c.desc?c.desc:"default",Object(f.jsxs)("div",{className:"appWrapper",children:[Object(f.jsx)(b,{onClick:function(){return F()},color:l.colors[E]}),Object(f.jsxs)("main",{className:"appMain",children:[Object(f.jsx)(x,{value:i,onChange:function(e){v(e)}}),Object(f.jsx)(j,{children:T})]}),Object(f.jsx)(m,{onClick:function(){return F()}})]})};c(75);s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}],[[76,1,2]]]);
//# sourceMappingURL=main.73a45782.chunk.js.map