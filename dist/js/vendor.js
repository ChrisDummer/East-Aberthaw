// Marzipano - a 360° media viewer for the modern web (v0.9.1)
//
// Copyright 2016 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Marzipano=t()}}(function(){var t;return function(){function t(e,r,i){function n(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){return n(e[s][1][t]||t)},l,l.exports,t,e,r,i)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}return t}()({1:[function(e,r,i){!function(e,n){"object"==typeof i&&"object"==typeof r?r.exports=n():"function"==typeof t&&t.amd?t([],n):"object"==typeof i?i.bowser=n():e.bowser=n()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(i,n,function(e){return t[e]}.bind(null,n));return i},e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=90)}({17:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i=r(18),n=function(){function t(){}return t.getFirstMatch=function(t,e){var r=e.match(t);return r&&r.length>0&&r[1]||""},t.getSecondMatch=function(t,e){var r=e.match(t);return r&&r.length>1&&r[2]||""},t.matchAndReturnConst=function(t,e,r){if(t.test(e))return r},t.getWindowsVersionName=function(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},t.getMacOSVersionName=function(t){var e=t.split(".").splice(0,2).map(function(t){return parseInt(t,10)||0});if(e.push(0),10===e[0])switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},t.getAndroidVersionName=function(t){var e=t.split(".").splice(0,2).map(function(t){return parseInt(t,10)||0});if(e.push(0),!(1===e[0]&&e[1]<5))return 1===e[0]&&e[1]<6?"Cupcake":1===e[0]&&e[1]>=6?"Donut":2===e[0]&&e[1]<2?"Eclair":2===e[0]&&2===e[1]?"Froyo":2===e[0]&&e[1]>2?"Gingerbread":3===e[0]?"Honeycomb":4===e[0]&&e[1]<1?"Ice Cream Sandwich":4===e[0]&&e[1]<4?"Jelly Bean":4===e[0]&&e[1]>=4?"KitKat":5===e[0]?"Lollipop":6===e[0]?"Marshmallow":7===e[0]?"Nougat":8===e[0]?"Oreo":9===e[0]?"Pie":void 0},t.getVersionPrecision=function(t){return t.split(".").length},t.compareVersions=function(e,r,i){void 0===i&&(i=!1);var n=t.getVersionPrecision(e),o=t.getVersionPrecision(r),s=Math.max(n,o),a=0,u=t.map([e,r],function(e){var r=s-t.getVersionPrecision(e),i=e+new Array(r+1).join(".0");return t.map(i.split("."),function(t){return new Array(20-t.length).join("0")+t}).reverse()});for(i&&(a=s-Math.min(n,o)),s-=1;s>=a;){if(u[0][s]>u[1][s])return 1;if(u[0][s]===u[1][s]){if(s===a)return 0;s-=1}else if(u[0][s]<u[1][s])return-1}},t.map=function(t,e){var r,i=[];if(Array.prototype.map)return Array.prototype.map.call(t,e);for(r=0;r<t.length;r+=1)i.push(e(t[r]));return i},t.getBrowserAlias=function(t){return i.BROWSER_ALIASES_MAP[t]},t.getBrowserTypeByAlias=function(t){return i.BROWSER_MAP[t]||""},t}();e["default"]=n,t.exports=e["default"]},18:function(t,e,r){"use strict";e.__esModule=!0,e.ENGINE_MAP=e.OS_MAP=e.PLATFORMS_MAP=e.BROWSER_MAP=e.BROWSER_ALIASES_MAP=void 0,e.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},e.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},e.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},e.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},e.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(t,e,r){"use strict";function i(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}e.__esModule=!0,e["default"]=void 0;var n,o=(n=r(91))&&n.__esModule?n:{"default":n},s=r(18),a=function(){function t(){}var e,r,n;return t.getParser=function(t,e){if(void 0===e&&(e=!1),"string"!=typeof t)throw new Error("UserAgent should be a string");return new o["default"](t,e)},t.parse=function(t){return new o["default"](t).getResult()},e=t,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&i(e.prototype,r),n&&i(e,n),t}();e["default"]=a,t.exports=e["default"]},91:function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e["default"]=void 0;var n=i(r(92)),o=i(r(93)),s=i(r(94)),a=i(r(95)),u=i(r(17)),h=function(){function t(t,e){if(void 0===e&&(e=!1),null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==e&&this.parse()}var e=t.prototype;return e.getUA=function(){return this._ua},e.test=function(t){return t.test(this._ua)},e.parseBrowser=function(){var t=this;this.parsedResult.browser={};var e=n["default"].find(function(e){if("function"==typeof e.test)return e.test(t);if(e.test instanceof Array)return e.test.some(function(e){return t.test(e)});throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser},e.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},e.getBrowserName=function(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},e.getBrowserVersion=function(){return this.getBrowser().version},e.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},e.parseOS=function(){var t=this;this.parsedResult.os={};var e=o["default"].find(function(e){if("function"==typeof e.test)return e.test(t);if(e.test instanceof Array)return e.test.some(function(e){return t.test(e)});throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os},e.getOSName=function(t){var e=this.getOS().name;return t?String(e).toLowerCase()||"":e||""},e.getOSVersion=function(){return this.getOS().version},e.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},e.getPlatformType=function(t){void 0===t&&(t=!1);var e=this.getPlatform().type;return t?String(e).toLowerCase()||"":e||""},e.parsePlatform=function(){var t=this;this.parsedResult.platform={};var e=s["default"].find(function(e){if("function"==typeof e.test)return e.test(t);if(e.test instanceof Array)return e.test.some(function(e){return t.test(e)});throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform},e.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},e.getEngineName=function(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},e.parseEngine=function(){var t=this;this.parsedResult.engine={};var e=a["default"].find(function(e){if("function"==typeof e.test)return e.test(t);if(e.test instanceof Array)return e.test.some(function(e){return t.test(e)});throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine},e.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},e.getResult=function(){return Object.assign({},this.parsedResult)},e.satisfies=function(t){var e=this,r={},i=0,n={},o=0;if(Object.keys(t).forEach(function(e){var s=t[e];"string"==typeof s?(n[e]=s,o+=1):"object"==typeof s&&(r[e]=s,i+=1)}),i>0){var s=Object.keys(r),a=s.find(function(t){return e.isOS(t)});if(a){var u=this.satisfies(r[a]);if(void 0!==u)return u}var h=s.find(function(t){return e.isPlatform(t)});if(h){var l=this.satisfies(r[h]);if(void 0!==l)return l}}if(o>0){var c=Object.keys(n).find(function(t){return e.isBrowser(t,!0)});if(void 0!==c)return this.compareVersion(n[c])}},e.isBrowser=function(t,e){void 0===e&&(e=!1);var r=this.getBrowserName().toLowerCase(),i=t.toLowerCase(),n=u["default"].getBrowserTypeByAlias(i);return e&&n&&(i=n.toLowerCase()),i===r},e.compareVersion=function(t){var e=[0],r=t,i=!1,n=this.getBrowserVersion();if("string"==typeof n)return">"===t[0]||"<"===t[0]?(r=t.substr(1),"="===t[1]?(i=!0,r=t.substr(2)):e=[],">"===t[0]?e.push(1):e.push(-1)):"="===t[0]?r=t.substr(1):"~"===t[0]&&(i=!0,r=t.substr(1)),e.indexOf(u["default"].compareVersions(n,r,i))>-1},e.isOS=function(t){return this.getOSName(!0)===String(t).toLowerCase()},e.isPlatform=function(t){return this.getPlatformType(!0)===String(t).toLowerCase()},e.isEngine=function(t){return this.getEngineName(!0)===String(t).toLowerCase()},e.is=function(t){return this.isBrowser(t)||this.isOS(t)||this.isPlatform(t)},e.some=function(t){var e=this;return void 0===t&&(t=[]),t.some(function(t){return e.is(t)})},t}();e["default"]=h,t.exports=e["default"]},92:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i,n=(i=r(17))&&i.__esModule?i:{"default":i},o=/version\/(\d+(\.?_?\d+)+)/i,s=[{test:[/googlebot/i],describe:function(t){var e={name:"Googlebot"},r=n["default"].getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/opera/i],describe:function(t){var e={name:"Opera"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/opr\/|opios/i],describe:function(t){var e={name:"Opera"},r=n["default"].getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/SamsungBrowser/i],describe:function(t){var e={name:"Samsung Internet for Android"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/Whale/i],describe:function(t){var e={name:"NAVER Whale Browser"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/MZBrowser/i],describe:function(t){var e={name:"MZ Browser"},r=n["default"].getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/focus/i],describe:function(t){var e={name:"Focus"},r=n["default"].getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/swing/i],describe:function(t){var e={name:"Swing"},r=n["default"].getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/coast/i],describe:function(t){var e={name:"Opera Coast"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/yabrowser/i],describe:function(t){var e={name:"Yandex Browser"},r=n["default"].getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/ucbrowser/i],describe:function(t){var e={name:"UC Browser"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/Maxthon|mxios/i],describe:function(t){var e={name:"Maxthon"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/epiphany/i],describe:function(t){var e={name:"Epiphany"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/puffin/i],describe:function(t){var e={name:"Puffin"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/sleipnir/i],describe:function(t){var e={name:"Sleipnir"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/k-meleon/i],describe:function(t){var e={name:"K-Meleon"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/micromessenger/i],describe:function(t){var e={name:"WeChat"},r=n["default"].getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/qqbrowser/i],describe:function(t){var e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},r=n["default"].getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/msie|trident/i],describe:function(t){var e={name:"Internet Explorer"},r=n["default"].getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/\sedg\//i],describe:function(t){var e={name:"Microsoft Edge"},r=n["default"].getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/edg([ea]|ios)/i],describe:function(t){var e={name:"Microsoft Edge"},r=n["default"].getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/vivaldi/i],describe:function(t){var e={name:"Vivaldi"},r=n["default"].getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/seamonkey/i],describe:function(t){var e={name:"SeaMonkey"},r=n["default"].getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/sailfish/i],describe:function(t){var e={name:"Sailfish"},r=n["default"].getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return r&&(e.version=r),e}},{test:[/silk/i],describe:function(t){var e={name:"Amazon Silk"},r=n["default"].getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/phantom/i],describe:function(t){var e={name:"PhantomJS"},r=n["default"].getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/slimerjs/i],describe:function(t){var e={name:"SlimerJS"},r=n["default"].getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var e={name:"BlackBerry"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var e={name:"WebOS Browser"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/bada/i],describe:function(t){var e={name:"Bada"},r=n["default"].getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/tizen/i],describe:function(t){var e={name:"Tizen"},r=n["default"].getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/qupzilla/i],describe:function(t){var e={name:"QupZilla"},r=n["default"].getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/firefox|iceweasel|fxios/i],describe:function(t){var e={name:"Firefox"},r=n["default"].getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/chromium/i],describe:function(t){var e={name:"Chromium"},r=n["default"].getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/chrome|crios|crmo/i],describe:function(t){var e={name:"Chrome"},r=n["default"].getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/GSA/i],describe:function(t){var e={name:"Google Search"},r=n["default"].getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:function(t){var e=!t.test(/like android/i),r=t.test(/android/i);return e&&r},describe:function(t){var e={name:"Android Browser"},r=n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/playstation 4/i],describe:function(t){var e={name:"PlayStation 4"},r=n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/safari|applewebkit/i],describe:function(t){var e={name:"Safari"},r=n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/.*/i],describe:function(t){var e=-1!==t.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:n["default"].getFirstMatch(e,t),version:n["default"].getSecondMatch(e,t)}}}];e["default"]=s,t.exports=e["default"]},93:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i,n=(i=r(17))&&i.__esModule?i:{"default":i},o=r(18),s=[{test:[/Roku\/DVP/],describe:function(t){var e=n["default"].getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:o.OS_MAP.Roku,version:e}}},{test:[/windows phone/i],describe:function(t){var e=n["default"].getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.WindowsPhone,version:e}}},{test:[/windows/i],describe:function(t){var e=n["default"].getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),r=n["default"].getWindowsVersionName(e);return{name:o.OS_MAP.Windows,version:e,versionName:r}}},{test:[/macintosh/i],describe:function(t){var e=n["default"].getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),r=n["default"].getMacOSVersionName(e),i={name:o.OS_MAP.MacOS,version:e};return r&&(i.versionName=r),i}},{test:[/(ipod|iphone|ipad)/i],describe:function(t){var e=n["default"].getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:o.OS_MAP.iOS,version:e}}},{test:function(t){var e=!t.test(/like android/i),r=t.test(/android/i);return e&&r},describe:function(t){var e=n["default"].getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),r=n["default"].getAndroidVersionName(e),i={name:o.OS_MAP.Android,version:e};return r&&(i.versionName=r),i}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var e=n["default"].getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),r={name:o.OS_MAP.WebOS};return e&&e.length&&(r.version=e),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var e=n["default"].getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||n["default"].getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||n["default"].getFirstMatch(/\bbb(\d+)/i,t);return{name:o.OS_MAP.BlackBerry,version:e}}},{test:[/bada/i],describe:function(t){var e=n["default"].getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.Bada,version:e}}},{test:[/tizen/i],describe:function(t){var e=n["default"].getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.Tizen,version:e}}},{test:[/linux/i],describe:function(){return{name:o.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:o.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(t){var e=n["default"].getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.PlayStation4,version:e}}}];e["default"]=s,t.exports=e["default"]},94:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i,n=(i=r(17))&&i.__esModule?i:{"default":i},o=r(18),s=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(t){var e=n["default"].getFirstMatch(/(can-l01)/i,t)&&"Nova",r={type:o.PLATFORMS_MAP.mobile,vendor:"Huawei"};return e&&(r.model=e),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(t){var e=t.test(/ipod|iphone/i),r=t.test(/like (ipod|iphone)/i);return e&&!r},describe:function(t){var e=n["default"].getFirstMatch(/(ipod|iphone)/i,t);return{type:o.PLATFORMS_MAP.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(t){return"blackberry"===t.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(t){return"bada"===t.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(t){return"windows phone"===t.getBrowserName()},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(t){var e=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&e>=3},describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(t){return"android"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(t){return"macos"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(t){return"windows"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(t){return"linux"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(t){return"playstation 4"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}},{test:function(t){return"roku"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}}];e["default"]=s,t.exports=e["default"]},95:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i,n=(i=r(17))&&i.__esModule?i:{"default":i},o=r(18),s=[{test:function(t){return"microsoft edge"===t.getBrowserName(!0)},describe:function(t){if(/\sedg\//i.test(t))return{name:o.ENGINE_MAP.Blink};var e=n["default"].getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:o.ENGINE_MAP.EdgeHTML,version:e}}},{test:[/trident/i],describe:function(t){var e={name:o.ENGINE_MAP.Trident},r=n["default"].getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:function(t){return t.test(/presto/i)},describe:function(t){var e={name:o.ENGINE_MAP.Presto},r=n["default"].getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:function(t){var e=t.test(/gecko/i),r=t.test(/like gecko/i);return e&&!r},describe:function(t){var e={name:o.ENGINE_MAP.Gecko},r=n["default"].getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:o.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(t){var e={name:o.ENGINE_MAP.WebKit},r=n["default"].getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}}];e["default"]=s,t.exports=e["default"]}})})},{}],2:[function(t,e,r){"use strict";function i(t){r.ARRAY_TYPE=a=t}function n(t){return t*h}function o(t,e){return Math.abs(t-e)<=s*Math.max(1,Math.abs(t),Math.abs(e))}Object.defineProperty(r,"__esModule",{value:!0}),r.setMatrixArrayType=i,r.toRadian=n,r.equals=o,r.RANDOM=r.ARRAY_TYPE=r.EPSILON=void 0;var s=1e-6;r.EPSILON=s;var a="undefined"!=typeof Float32Array?Float32Array:Array;r.ARRAY_TYPE=a;var u=Math.random;r.RANDOM=u;var h=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)})},{}],3:[function(t,e,r){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}Object.defineProperty(r,"__esModule",{value:!0}),r.vec4=r.vec3=r.vec2=r.quat2=r.quat=r.mat4=r.mat3=r.mat2d=r.mat2=r.glMatrix=void 0;var n=i(t("./common.js"));r.glMatrix=n;var o=i(t("./mat2.js"));r.mat2=o;var s=i(t("./mat2d.js"));r.mat2d=s;var a=i(t("./mat3.js"));r.mat3=a;var u=i(t("./mat4.js"));r.mat4=u;var h=i(t("./quat.js"));r.quat=h;var l=i(t("./quat2.js"));r.quat2=l;var c=i(t("./vec2.js"));r.vec2=c;var p=i(t("./vec3.js"));r.vec3=p;var f=i(t("./vec4.js"));r.vec4=f},{"./common.js":2,"./mat2.js":4,"./mat2d.js":5,"./mat3.js":6,"./mat4.js":7,"./quat.js":8,"./quat2.js":9,"./vec2.js":10,"./vec3.js":11,"./vec4.js":12}],4:[function(t,e,r){"use strict";function i(){var t=new L.ARRAY_TYPE(4);return L.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function n(t){var e=new L.ARRAY_TYPE(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function s(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function a(t,e,r,i){var n=new L.ARRAY_TYPE(4);return n[0]=t,n[1]=e,n[2]=r,n[3]=i,n}function u(t,e,r,i,n){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t}function h(t,e){if(t===e){var r=e[1];t[1]=e[2],t[2]=r}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t}function l(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r*o-n*i;return s?(s=1/s,t[0]=o*s,t[1]=-i*s,t[2]=-n*s,t[3]=r*s,t):null}function c(t,e){var r=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=r,t}function p(t){return t[0]*t[3]-t[2]*t[1]}function f(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[0],u=r[1],h=r[2],l=r[3];return t[0]=i*a+o*u,t[1]=n*a+s*u,t[2]=i*h+o*l,t[3]=n*h+s*l,t}function d(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),u=Math.cos(r);return t[0]=i*u+o*a,t[1]=n*u+s*a,t[2]=i*-a+o*u,t[3]=n*-a+s*u,t}function m(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[0],u=r[1];return t[0]=i*a,t[1]=n*a,t[2]=o*u,t[3]=s*u,t}function v(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=r,t[2]=-r,t[3]=i,t}function _(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t}function y(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function g(t){return Math.hypot(t[0],t[1],t[2],t[3])}function w(t,e,r,i){return t[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-t[2]*r[1],[t,e,r]}function M(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function b(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function x(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function E(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=e[0],a=e[1],u=e[2],h=e[3];return Math.abs(r-s)<=L.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-a)<=L.EPSILON*Math.max(1,Math.abs(i),Math.abs(a))&&Math.abs(n-u)<=L.EPSILON*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(o-h)<=L.EPSILON*Math.max(1,Math.abs(o),Math.abs(h))}function T(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function P(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.copy=o,r.identity=s,r.fromValues=a,r.set=u,r.transpose=h,r.invert=l,r.adjoint=c,r.determinant=p,r.multiply=f,r.rotate=d,r.scale=m,r.fromRotation=v,r.fromScaling=_,r.str=y,r.frob=g,r.LDU=w,r.add=M,r.subtract=b,r.exactEquals=x,r.equals=E,r.multiplyScalar=T,r.multiplyScalarAndAdd=P,r.sub=r.mul=void 0;var L=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),S=f;r.mul=S;var A=b;r.sub=A},{"./common.js":2}],5:[function(t,e,r){"use strict";function i(){var t=new P.ARRAY_TYPE(6);return P.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t}function n(t){var e=new P.ARRAY_TYPE(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function s(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function a(t,e,r,i,n,o){var s=new P.ARRAY_TYPE(6);return s[0]=t,s[1]=e,s[2]=r,s[3]=i,s[4]=n,s[5]=o,s}function u(t,e,r,i,n,o,s){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=o,t[5]=s,t}function h(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=r*o-i*n;return u?(u=1/u,t[0]=o*u,t[1]=-i*u,t[2]=-n*u,t[3]=r*u,t[4]=(n*a-o*s)*u,t[5]=(i*s-r*a)*u,t):null}function l(t){return t[0]*t[3]-t[1]*t[2]}function c(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=r[0],l=r[1],c=r[2],p=r[3],f=r[4],d=r[5];return t[0]=i*h+o*l,t[1]=n*h+s*l,t[2]=i*c+o*p,t[3]=n*c+s*p,t[4]=i*f+o*d+a,t[5]=n*f+s*d+u,t}function p(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=Math.sin(r),l=Math.cos(r);return t[0]=i*l+o*h,t[1]=n*l+s*h,t[2]=i*-h+o*l,t[3]=n*-h+s*l,t[4]=a,t[5]=u,t}function f(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=r[0],l=r[1];return t[0]=i*h,t[1]=n*h,t[2]=o*l,t[3]=s*l,t[4]=a,t[5]=u,t}function d(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=r[0],l=r[1];return t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=i*h+o*l+a,t[5]=n*h+s*l+u,t}function m(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=r,t[2]=-r,t[3]=i,t[4]=0,t[5]=0,t}function v(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t[4]=0,t[5]=0,t}function _(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=e[0],t[5]=e[1],t}function y(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function g(t){
return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)}function w(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t}function M(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t}function b(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t}function x(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t[4]=e[4]+r[4]*i,t[5]=e[5]+r[5]*i,t}function E(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]}function T(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],u=e[0],h=e[1],l=e[2],c=e[3],p=e[4],f=e[5];return Math.abs(r-u)<=P.EPSILON*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(i-h)<=P.EPSILON*Math.max(1,Math.abs(i),Math.abs(h))&&Math.abs(n-l)<=P.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(o-c)<=P.EPSILON*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(s-p)<=P.EPSILON*Math.max(1,Math.abs(s),Math.abs(p))&&Math.abs(a-f)<=P.EPSILON*Math.max(1,Math.abs(a),Math.abs(f))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.copy=o,r.identity=s,r.fromValues=a,r.set=u,r.invert=h,r.determinant=l,r.multiply=c,r.rotate=p,r.scale=f,r.translate=d,r.fromRotation=m,r.fromScaling=v,r.fromTranslation=_,r.str=y,r.frob=g,r.add=w,r.subtract=M,r.multiplyScalar=b,r.multiplyScalarAndAdd=x,r.exactEquals=E,r.equals=T,r.sub=r.mul=void 0;var P=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),L=c;r.mul=L;var S=M;r.sub=S},{"./common.js":2}],6:[function(t,e,r){"use strict";function i(){var t=new I.ARRAY_TYPE(9);return I.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function n(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function o(t){var e=new I.ARRAY_TYPE(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function a(t,e,r,i,n,o,s,a,u){var h=new I.ARRAY_TYPE(9);return h[0]=t,h[1]=e,h[2]=r,h[3]=i,h[4]=n,h[5]=o,h[6]=s,h[7]=a,h[8]=u,h}function u(t,e,r,i,n,o,s,a,u,h){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=o,t[5]=s,t[6]=a,t[7]=u,t[8]=h,t}function h(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function l(t,e){if(t===e){var r=e[1],i=e[2],n=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=i,t[7]=n}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function c(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8],c=l*s-a*h,p=-l*o+a*u,f=h*o-s*u,d=r*c+i*p+n*f;return d?(d=1/d,t[0]=c*d,t[1]=(-l*i+n*h)*d,t[2]=(a*i-n*s)*d,t[3]=p*d,t[4]=(l*r-n*u)*d,t[5]=(-a*r+n*o)*d,t[6]=f*d,t[7]=(-h*r+i*u)*d,t[8]=(s*r-i*o)*d,t):null}function p(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8];return t[0]=s*l-a*h,t[1]=n*h-i*l,t[2]=i*a-n*s,t[3]=a*u-o*l,t[4]=r*l-n*u,t[5]=n*o-r*a,t[6]=o*h-s*u,t[7]=i*u-r*h,t[8]=r*s-i*o,t}function f(t){var e=t[0],r=t[1],i=t[2],n=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8];return e*(h*o-s*u)+r*(-h*n+s*a)+i*(u*n-o*a)}function d(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=r[0],f=r[1],d=r[2],m=r[3],v=r[4],_=r[5],y=r[6],g=r[7],w=r[8];return t[0]=p*i+f*s+d*h,t[1]=p*n+f*a+d*l,t[2]=p*o+f*u+d*c,t[3]=m*i+v*s+_*h,t[4]=m*n+v*a+_*l,t[5]=m*o+v*u+_*c,t[6]=y*i+g*s+w*h,t[7]=y*n+g*a+w*l,t[8]=y*o+g*u+w*c,t}function m(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=r[0],f=r[1];return t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=a,t[5]=u,t[6]=p*i+f*s+h,t[7]=p*n+f*a+l,t[8]=p*o+f*u+c,t}function v(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=Math.sin(r),f=Math.cos(r);return t[0]=f*i+p*s,t[1]=f*n+p*a,t[2]=f*o+p*u,t[3]=f*s-p*i,t[4]=f*a-p*n,t[5]=f*u-p*o,t[6]=h,t[7]=l,t[8]=c,t}function _(t,e,r){var i=r[0],n=r[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function y(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t}function g(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=r,t[2]=0,t[3]=-r,t[4]=i,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function w(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function M(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t}function b(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r+r,a=i+i,u=n+n,h=r*s,l=i*s,c=i*a,p=n*s,f=n*a,d=n*u,m=o*s,v=o*a,_=o*u;return t[0]=1-c-d,t[3]=l-_,t[6]=p+v,t[1]=l+_,t[4]=1-h-d,t[7]=f-m,t[2]=p-v,t[5]=f+m,t[8]=1-h-c,t}function x(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8],c=e[9],p=e[10],f=e[11],d=e[12],m=e[13],v=e[14],_=e[15],y=r*a-i*s,g=r*u-n*s,w=r*h-o*s,M=i*u-n*a,b=i*h-o*a,x=n*h-o*u,E=l*m-c*d,T=l*v-p*d,P=l*_-f*d,L=c*v-p*m,S=c*_-f*m,A=p*_-f*v,R=y*A-g*S+w*L+M*P-b*T+x*E;return R?(R=1/R,t[0]=(a*A-u*S+h*L)*R,t[1]=(u*P-s*A-h*T)*R,t[2]=(s*S-a*P+h*E)*R,t[3]=(n*S-i*A-o*L)*R,t[4]=(r*A-n*P+o*T)*R,t[5]=(i*P-r*S-o*E)*R,t[6]=(m*x-v*b+_*M)*R,t[7]=(v*w-d*x-_*g)*R,t[8]=(d*b-m*w+_*y)*R,t):null}function E(t,e,r){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function T(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function P(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}function L(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function S(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t}function A(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function R(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t[4]=e[4]+r[4]*i,t[5]=e[5]+r[5]*i,t[6]=e[6]+r[6]*i,t[7]=e[7]+r[7]*i,t[8]=e[8]+r[8]*i,t}function C(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]}function O(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],u=t[6],h=t[7],l=t[8],c=e[0],p=e[1],f=e[2],d=e[3],m=e[4],v=e[5],_=e[6],y=e[7],g=e[8];return Math.abs(r-c)<=I.EPSILON*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(i-p)<=I.EPSILON*Math.max(1,Math.abs(i),Math.abs(p))&&Math.abs(n-f)<=I.EPSILON*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(o-d)<=I.EPSILON*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(s-m)<=I.EPSILON*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(a-v)<=I.EPSILON*Math.max(1,Math.abs(a),Math.abs(v))&&Math.abs(u-_)<=I.EPSILON*Math.max(1,Math.abs(u),Math.abs(_))&&Math.abs(h-y)<=I.EPSILON*Math.max(1,Math.abs(h),Math.abs(y))&&Math.abs(l-g)<=I.EPSILON*Math.max(1,Math.abs(l),Math.abs(g))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.fromMat4=n,r.clone=o,r.copy=s,r.fromValues=a,r.set=u,r.identity=h,r.transpose=l,r.invert=c,r.adjoint=p,r.determinant=f,r.multiply=d,r.translate=m,r.rotate=v,r.scale=_,r.fromTranslation=y,r.fromRotation=g,r.fromScaling=w,r.fromMat2d=M,r.fromQuat=b,r.normalFromMat4=x,r.projection=E,r.str=T,r.frob=P,r.add=L,r.subtract=S,r.multiplyScalar=A,r.multiplyScalarAndAdd=R,r.exactEquals=C,r.equals=O,r.sub=r.mul=void 0;var I=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),F=d;r.mul=F;var z=S;r.sub=z},{"./common.js":2}],7:[function(t,e,r){"use strict";function i(){var t=new U.ARRAY_TYPE(16);return U.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function n(t){var e=new U.ARRAY_TYPE(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function s(t,e,r,i,n,o,s,a,u,h,l,c,p,f,d,m){var v=new U.ARRAY_TYPE(16);return v[0]=t,v[1]=e,v[2]=r,v[3]=i,v[4]=n,v[5]=o,v[6]=s,v[7]=a,v[8]=u,v[9]=h,v[10]=l,v[11]=c,v[12]=p,v[13]=f,v[14]=d,v[15]=m,v}function a(t,e,r,i,n,o,s,a,u,h,l,c,p,f,d,m,v){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=o,t[5]=s,t[6]=a,t[7]=u,t[8]=h,t[9]=l,t[10]=c,t[11]=p,t[12]=f,t[13]=d,t[14]=m,t[15]=v,t}function u(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function h(t,e){if(t===e){var r=e[1],i=e[2],n=e[3],o=e[6],s=e[7],a=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=r,t[6]=e[9],t[7]=e[13],t[8]=i,t[9]=o,t[11]=e[14],t[12]=n,t[13]=s,t[14]=a}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}function l(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8],c=e[9],p=e[10],f=e[11],d=e[12],m=e[13],v=e[14],_=e[15],y=r*a-i*s,g=r*u-n*s,w=r*h-o*s,M=i*u-n*a,b=i*h-o*a,x=n*h-o*u,E=l*m-c*d,T=l*v-p*d,P=l*_-f*d,L=c*v-p*m,S=c*_-f*m,A=p*_-f*v,R=y*A-g*S+w*L+M*P-b*T+x*E;return R?(R=1/R,t[0]=(a*A-u*S+h*L)*R,t[1]=(n*S-i*A-o*L)*R,t[2]=(m*x-v*b+_*M)*R,t[3]=(p*b-c*x-f*M)*R,t[4]=(u*P-s*A-h*T)*R,t[5]=(r*A-n*P+o*T)*R,t[6]=(v*w-d*x-_*g)*R,t[7]=(l*x-p*w+f*g)*R,t[8]=(s*S-a*P+h*E)*R,t[9]=(i*P-r*S-o*E)*R,t[10]=(d*b-m*w+_*y)*R,t[11]=(c*w-l*b-f*y)*R,t[12]=(a*T-s*L-u*E)*R,t[13]=(r*L-i*T+n*E)*R,t[14]=(m*g-d*M-v*y)*R,t[15]=(l*M-c*g+p*y)*R,t):null}function c(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8],c=e[9],p=e[10],f=e[11],d=e[12],m=e[13],v=e[14],_=e[15];return t[0]=a*(p*_-f*v)-c*(u*_-h*v)+m*(u*f-h*p),t[1]=-(i*(p*_-f*v)-c*(n*_-o*v)+m*(n*f-o*p)),t[2]=i*(u*_-h*v)-a*(n*_-o*v)+m*(n*h-o*u),t[3]=-(i*(u*f-h*p)-a*(n*f-o*p)+c*(n*h-o*u)),t[4]=-(s*(p*_-f*v)-l*(u*_-h*v)+d*(u*f-h*p)),t[5]=r*(p*_-f*v)-l*(n*_-o*v)+d*(n*f-o*p),t[6]=-(r*(u*_-h*v)-s*(n*_-o*v)+d*(n*h-o*u)),t[7]=r*(u*f-h*p)-s*(n*f-o*p)+l*(n*h-o*u),t[8]=s*(c*_-f*m)-l*(a*_-h*m)+d*(a*f-h*c),t[9]=-(r*(c*_-f*m)-l*(i*_-o*m)+d*(i*f-o*c)),t[10]=r*(a*_-h*m)-s*(i*_-o*m)+d*(i*h-o*a),t[11]=-(r*(a*f-h*c)-s*(i*f-o*c)+l*(i*h-o*a)),t[12]=-(s*(c*v-p*m)-l*(a*v-u*m)+d*(a*p-u*c)),t[13]=r*(c*v-p*m)-l*(i*v-n*m)+d*(i*p-n*c),t[14]=-(r*(a*v-u*m)-s*(i*v-n*m)+d*(i*u-n*a)),t[15]=r*(a*p-u*c)-s*(i*p-n*c)+l*(i*u-n*a),t}function p(t){var e=t[0],r=t[1],i=t[2],n=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],l=t[9],c=t[10],p=t[11],f=t[12],d=t[13],m=t[14],v=t[15];return(e*s-r*o)*(c*v-p*m)-(e*a-i*o)*(l*v-p*d)+(e*u-n*o)*(l*m-c*d)+(r*a-i*s)*(h*v-p*f)-(r*u-n*s)*(h*m-c*f)+(i*u-n*a)*(h*d-l*f)}function f(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=e[9],f=e[10],d=e[11],m=e[12],v=e[13],_=e[14],y=e[15],g=r[0],w=r[1],M=r[2],b=r[3];return t[0]=g*i+w*a+M*c+b*m,t[1]=g*n+w*u+M*p+b*v,t[2]=g*o+w*h+M*f+b*_,t[3]=g*s+w*l+M*d+b*y,g=r[4],w=r[5],M=r[6],b=r[7],t[4]=g*i+w*a+M*c+b*m,t[5]=g*n+w*u+M*p+b*v,t[6]=g*o+w*h+M*f+b*_,t[7]=g*s+w*l+M*d+b*y,g=r[8],w=r[9],M=r[10],b=r[11],t[8]=g*i+w*a+M*c+b*m,t[9]=g*n+w*u+M*p+b*v,t[10]=g*o+w*h+M*f+b*_,t[11]=g*s+w*l+M*d+b*y,g=r[12],w=r[13],M=r[14],b=r[15],t[12]=g*i+w*a+M*c+b*m,t[13]=g*n+w*u+M*p+b*v,t[14]=g*o+w*h+M*f+b*_,t[15]=g*s+w*l+M*d+b*y,t}function d(t,e,r){var i,n,o,s,a,u,h,l,c,p,f,d,m=r[0],v=r[1],_=r[2];return e===t?(t[12]=e[0]*m+e[4]*v+e[8]*_+e[12],t[13]=e[1]*m+e[5]*v+e[9]*_+e[13],t[14]=e[2]*m+e[6]*v+e[10]*_+e[14],t[15]=e[3]*m+e[7]*v+e[11]*_+e[15]):(i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=e[9],f=e[10],d=e[11],t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=a,t[5]=u,t[6]=h,t[7]=l,t[8]=c,t[9]=p,t[10]=f,t[11]=d,t[12]=i*m+a*v+c*_+e[12],t[13]=n*m+u*v+p*_+e[13],t[14]=o*m+h*v+f*_+e[14],t[15]=s*m+l*v+d*_+e[15]),t}function m(t,e,r){var i=r[0],n=r[1],o=r[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function v(t,e,r,i){var n,o,s,a,u,h,l,c,p,f,d,m,v,_,y,g,w,M,b,x,E,T,P,L,S=i[0],A=i[1],R=i[2],C=Math.hypot(S,A,R);return C<U.EPSILON?null:(C=1/C,S*=C,A*=C,R*=C,n=Math.sin(r),o=Math.cos(r),s=1-o,a=e[0],u=e[1],h=e[2],l=e[3],c=e[4],p=e[5],f=e[6],d=e[7],m=e[8],v=e[9],_=e[10],y=e[11],g=S*S*s+o,w=A*S*s+R*n,M=R*S*s-A*n,b=S*A*s-R*n,x=A*A*s+o,E=R*A*s+S*n,T=S*R*s+A*n,P=A*R*s-S*n,L=R*R*s+o,t[0]=a*g+c*w+m*M,t[1]=u*g+p*w+v*M,t[2]=h*g+f*w+_*M,t[3]=l*g+d*w+y*M,t[4]=a*b+c*x+m*E,t[5]=u*b+p*x+v*E,t[6]=h*b+f*x+_*E,t[7]=l*b+d*x+y*E,t[8]=a*T+c*P+m*L,t[9]=u*T+p*P+v*L,t[10]=h*T+f*P+_*L,t[11]=l*T+d*P+y*L,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function _(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[4],s=e[5],a=e[6],u=e[7],h=e[8],l=e[9],c=e[10],p=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*n+h*i,t[5]=s*n+l*i,t[6]=a*n+c*i,t[7]=u*n+p*i,t[8]=h*n-o*i,t[9]=l*n-s*i,t[10]=c*n-a*i,t[11]=p*n-u*i,t}function y(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[0],s=e[1],a=e[2],u=e[3],h=e[8],l=e[9],c=e[10],p=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n-h*i,t[1]=s*n-l*i,t[2]=a*n-c*i,t[3]=u*n-p*i,t[8]=o*i+h*n,t[9]=s*i+l*n,t[10]=a*i+c*n,t[11]=u*i+p*n,t}function g(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[0],s=e[1],a=e[2],u=e[3],h=e[4],l=e[5],c=e[6],p=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n+h*i,t[1]=s*n+l*i,t[2]=a*n+c*i,t[3]=u*n+p*i,t[4]=h*n-o*i,t[5]=l*n-s*i,t[6]=c*n-a*i,t[7]=p*n-u*i,t}function w(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function M(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function b(t,e,r){var i,n,o,s=r[0],a=r[1],u=r[2],h=Math.hypot(s,a,u);return h<U.EPSILON?null:(h=1/h,s*=h,a*=h,u*=h,i=Math.sin(e),n=Math.cos(e),o=1-n,t[0]=s*s*o+n,t[1]=a*s*o+u*i,t[2]=u*s*o-a*i,t[3]=0,t[4]=s*a*o-u*i,t[5]=a*a*o+n,t[6]=u*a*o+s*i,t[7]=0,t[8]=s*u*o+a*i,t[9]=a*u*o-s*i,t[10]=u*u*o+n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function x(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function E(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function T(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function P(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=i+i,u=n+n,h=o+o,l=i*a,c=i*u,p=i*h,f=n*u,d=n*h,m=o*h,v=s*a,_=s*u,y=s*h;return t[0]=1-(f+m),t[1]=c+y,t[2]=p-_,t[3]=0,t[4]=c-y,t[5]=1-(l+m),t[6]=d+v,t[7]=0,t[8]=p+_,t[9]=d-v,t[10]=1-(l+f),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function L(t,e){var r=new U.ARRAY_TYPE(3),i=-e[0],n=-e[1],o=-e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=i*i+n*n+o*o+s*s;return c>0?(r[0]=2*(a*s+l*i+u*o-h*n)/c,r[1]=2*(u*s+l*n+h*i-a*o)/c,r[2]=2*(h*s+l*o+a*n-u*i)/c):(r[0]=2*(a*s+l*i+u*o-h*n),r[1]=2*(u*s+l*n+h*i-a*o),r[2]=2*(h*s+l*o+a*n-u*i)),P(t,e,r),t}function S(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function A(t,e){var r=e[0],i=e[1],n=e[2],o=e[4],s=e[5],a=e[6],u=e[8],h=e[9],l=e[10];return t[0]=Math.hypot(r,i,n),t[1]=Math.hypot(o,s,a),t[2]=Math.hypot(u,h,l),t}function R(t,e){var r=new U.ARRAY_TYPE(3);A(r,e);var i=1/r[0],n=1/r[1],o=1/r[2],s=e[0]*i,a=e[1]*n,u=e[2]*o,h=e[4]*i,l=e[5]*n,c=e[6]*o,p=e[8]*i,f=e[9]*n,d=e[10]*o,m=s+l+d,v=0;return m>0?(v=2*Math.sqrt(m+1),t[3]=.25*v,t[0]=(c-f)/v,t[1]=(p-u)/v,t[2]=(a-h)/v):s>l&&s>d?(v=2*Math.sqrt(1+s-l-d),t[3]=(c-f)/v,t[0]=.25*v,t[1]=(a+h)/v,t[2]=(p+u)/v):l>d?(v=2*Math.sqrt(1+l-s-d),t[3]=(p-u)/v,t[0]=(a+h)/v,t[1]=.25*v,t[2]=(c+f)/v):(v=2*Math.sqrt(1+d-s-l),t[3]=(a-h)/v,t[0]=(p+u)/v,t[1]=(c+f)/v,t[2]=.25*v),t}function C(t,e,r,i){var n=e[0],o=e[1],s=e[2],a=e[3],u=n+n,h=o+o,l=s+s,c=n*u,p=n*h,f=n*l,d=o*h,m=o*l,v=s*l,_=a*u,y=a*h,g=a*l,w=i[0],M=i[1],b=i[2];return t[0]=(1-(d+v))*w,t[1]=(p+g)*w,t[2]=(f-y)*w,t[3]=0,t[4]=(p-g)*M,t[5]=(1-(c+v))*M,t[6]=(m+_)*M,t[7]=0,t[8]=(f+y)*b,t[9]=(m-_)*b,t[10]=(1-(c+d))*b,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function O(t,e,r,i,n){var o=e[0],s=e[1],a=e[2],u=e[3],h=o+o,l=s+s,c=a+a,p=o*h,f=o*l,d=o*c,m=s*l,v=s*c,_=a*c,y=u*h,g=u*l,w=u*c,M=i[0],b=i[1],x=i[2],E=n[0],T=n[1],P=n[2],L=(1-(m+_))*M,S=(f+w)*M,A=(d-g)*M,R=(f-w)*b,C=(1-(p+_))*b,O=(v+y)*b,I=(d+g)*x,F=(v-y)*x,z=(1-(p+m))*x;return t[0]=L,t[1]=S,t[2]=A,t[3]=0,t[4]=R,t[5]=C,t[6]=O,t[7]=0,t[8]=I,t[9]=F,t[10]=z,t[11]=0,t[12]=r[0]+E-(L*E+R*T+I*P),t[13]=r[1]+T-(S*E+C*T+F*P),t[14]=r[2]+P-(A*E+O*T+z*P),t[15]=1,t}function I(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r+r,a=i+i,u=n+n,h=r*s,l=i*s,c=i*a,p=n*s,f=n*a,d=n*u,m=o*s,v=o*a,_=o*u;return t[0]=1-c-d,t[1]=l+_,t[2]=p-v,t[3]=0,t[4]=l-_,t[5]=1-h-d,t[6]=f+m,t[7]=0,t[8]=p+v,t[9]=f-m,t[10]=1-h-c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function F(t,e,r,i,n,o,s){var a=1/(r-e),u=1/(n-i),h=1/(o-s);return t[0]=2*o*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*u,t[6]=0,t[7]=0,t[8]=(r+e)*a,t[9]=(n+i)*u,t[10]=(s+o)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*o*2*h,t[15]=0,t}function z(t,e,r,i,n){var o,s=1/Math.tan(e/2);return t[0]=s/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=n&&n!==Infinity?(o=1/(i-n),t[10]=(n+i)*o,t[14]=2*n*i*o):(t[10]=-1,t[14]=-2*i),t}function D(t,e,r,i){var n=Math.tan(e.upDegrees*Math.PI/180),o=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),a=Math.tan(e.rightDegrees*Math.PI/180),u=2/(s+a),h=2/(n+o);return t[0]=u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-(s-a)*u*.5,t[9]=(n-o)*h*.5,t[10]=i/(r-i),t[11]=-1,t[12]=0,t[13]=0,t[14]=i*r/(r-i),t[15]=0,t}function k(t,e,r,i,n,o,s){var a=1/(e-r),u=1/(i-n),h=1/(o-s);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+r)*a,t[13]=(n+i)*u,t[14]=(s+o)*h,t[15]=1,t}function N(t,e,r,i){var n,o,s,a,h,l,c,p,f,d,m=e[0],v=e[1],_=e[2],y=i[0],g=i[1],w=i[2],M=r[0],b=r[1],x=r[2];return Math.abs(m-M)<U.EPSILON&&Math.abs(v-b)<U.EPSILON&&Math.abs(_-x)<U.EPSILON?u(t):(c=m-M,p=v-b,f=_-x,d=1/Math.hypot(c,p,f),c*=d,p*=d,f*=d,n=g*f-w*p,o=w*c-y*f,s=y*p-g*c,d=Math.hypot(n,o,s),d?(d=1/d,n*=d,o*=d,s*=d):(n=0,o=0,s=0),a=p*s-f*o,h=f*n-c*s,l=c*o-p*n,d=Math.hypot(a,h,l),d?(d=1/d,a*=d,h*=d,l*=d):(a=0,h=0,l=0),t[0]=n,t[1]=a,t[2]=c,t[3]=0,t[4]=o,t[5]=h,t[6]=p,t[7]=0,t[8]=s,t[9]=l,t[10]=f,t[11]=0,t[12]=-(n*m+o*v+s*_),t[13]=-(a*m+h*v+l*_),t[14]=-(c*m+p*v+f*_),t[15]=1,t)}function j(t,e,r,i){var n=e[0],o=e[1],s=e[2],a=i[0],u=i[1],h=i[2],l=n-r[0],c=o-r[1],p=s-r[2],f=l*l+c*c+p*p;f>0&&(f=1/Math.sqrt(f),l*=f,c*=f,p*=f);var d=u*p-h*c,m=h*l-a*p,v=a*c-u*l;return f=d*d+m*m+v*v,f>0&&(f=1/Math.sqrt(f),d*=f,m*=f,v*=f),t[0]=d,t[1]=m,t[2]=v,t[3]=0,t[4]=c*v-p*m,t[5]=p*d-l*v,t[6]=l*m-c*d,t[7]=0,t[8]=l,t[9]=c,t[10]=p,t[11]=0,t[12]=n,t[13]=o,t[14]=s,t[15]=1,t}function H(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function B(t){return Math.hypot(t[0],t[1],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function Y(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t[9]=e[9]+r[9],t[10]=e[10]+r[10],t[11]=e[11]+r[11],t[12]=e[12]+r[12],t[13]=e[13]+r[13],t[14]=e[14]+r[14],t[15]=e[15]+r[15],t}function q(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t[9]=e[9]-r[9],t[10]=e[10]-r[10],t[11]=e[11]-r[11],t[12]=e[12]-r[12],t[13]=e[13]-r[13],t[14]=e[14]-r[14],t[15]=e[15]-r[15],t}function W(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12]*r,t[13]=e[13]*r,t[14]=e[14]*r,t[15]=e[15]*r,t}function V(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t[4]=e[4]+r[4]*i,t[5]=e[5]+r[5]*i,t[6]=e[6]+r[6]*i,t[7]=e[7]+r[7]*i,t[8]=e[8]+r[8]*i,t[9]=e[9]+r[9]*i,t[10]=e[10]+r[10]*i,t[11]=e[11]+r[11]*i,t[12]=e[12]+r[12]*i,t[13]=e[13]+r[13]*i,t[14]=e[14]+r[14]*i,t[15]=e[15]+r[15]*i,t}function X(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function G(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],u=t[6],h=t[7],l=t[8],c=t[9],p=t[10],f=t[11],d=t[12],m=t[13],v=t[14],_=t[15],y=e[0],g=e[1],w=e[2],M=e[3],b=e[4],x=e[5],E=e[6],T=e[7],P=e[8],L=e[9],S=e[10],A=e[11],R=e[12],C=e[13],O=e[14],I=e[15];return Math.abs(r-y)<=U.EPSILON*Math.max(1,Math.abs(r),Math.abs(y))&&Math.abs(i-g)<=U.EPSILON*Math.max(1,Math.abs(i),Math.abs(g))&&Math.abs(n-w)<=U.EPSILON*Math.max(1,Math.abs(n),Math.abs(w))&&Math.abs(o-M)<=U.EPSILON*Math.max(1,Math.abs(o),Math.abs(M))&&Math.abs(s-b)<=U.EPSILON*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(a-x)<=U.EPSILON*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(u-E)<=U.EPSILON*Math.max(1,Math.abs(u),Math.abs(E))&&Math.abs(h-T)<=U.EPSILON*Math.max(1,Math.abs(h),Math.abs(T))&&Math.abs(l-P)<=U.EPSILON*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(c-L)<=U.EPSILON*Math.max(1,Math.abs(c),Math.abs(L))&&Math.abs(p-S)<=U.EPSILON*Math.max(1,Math.abs(p),Math.abs(S))&&Math.abs(f-A)<=U.EPSILON*Math.max(1,Math.abs(f),Math.abs(A))&&Math.abs(d-R)<=U.EPSILON*Math.max(1,Math.abs(d),Math.abs(R))&&Math.abs(m-C)<=U.EPSILON*Math.max(1,Math.abs(m),Math.abs(C))&&Math.abs(v-O)<=U.EPSILON*Math.max(1,Math.abs(v),Math.abs(O))&&Math.abs(_-I)<=U.EPSILON*Math.max(1,Math.abs(_),Math.abs(I))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.copy=o,r.fromValues=s,r.set=a,r.identity=u,r.transpose=h,r.invert=l,r.adjoint=c,r.determinant=p,r.multiply=f,r.translate=d,r.scale=m,r.rotate=v,r.rotateX=_,r.rotateY=y,r.rotateZ=g,r.fromTranslation=w,r.fromScaling=M,r.fromRotation=b,r.fromXRotation=x,r.fromYRotation=E,r.fromZRotation=T,r.fromRotationTranslation=P,r.fromQuat2=L,r.getTranslation=S,r.getScaling=A,r.getRotation=R,r.fromRotationTranslationScale=C,r.fromRotationTranslationScaleOrigin=O,r.fromQuat=I,r.frustum=F,r.perspective=z,r.perspectiveFromFieldOfView=D,r.ortho=k,r.lookAt=N,r.targetTo=j,r.str=H,r.frob=B,r.add=Y,r.subtract=q,r.multiplyScalar=W,r.multiplyScalarAndAdd=V,r.exactEquals=X,r.equals=G,r.sub=r.mul=void 0;var U=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),Z=f;r.mul=Z;var K=q;r.sub=K},{"./common.js":2}],8:[function(t,e,r){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}function n(){var t=new E.ARRAY_TYPE(4);return E.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function o(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function s(t,e,r){r*=.5;var i=Math.sin(r);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(r),t}function a(t,e){var r=2*Math.acos(e[3]),i=Math.sin(r/2);return i>E.EPSILON?(t[0]=e[0]/i,t[1]=e[1]/i,t[2]=e[2]/i):(t[0]=1,t[1]=0,t[2]=0),r}function u(t,e){var r=z(t,e);return Math.acos(2*r*r-1)}function h(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[0],u=r[1],h=r[2],l=r[3];return t[0]=i*l+s*a+n*h-o*u,t[1]=n*l+s*u+o*a-i*h,t[2]=o*l+s*h+i*u-n*a,t[3]=s*l-i*a-n*u-o*h,t}function l(t,e,r){r*=.5;var i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),u=Math.cos(r);return t[0]=i*u+s*a,t[1]=n*u+o*a,t[2]=o*u-n*a,t[3]=s*u-i*a,t}function c(t,e,r){r*=.5;var i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),u=Math.cos(r);return t[0]=i*u-o*a,t[1]=n*u+s*a,t[2]=o*u+i*a,t[3]=s*u-n*a,t}function p(t,e,r){r*=.5;var i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),u=Math.cos(r);return t[0]=i*u+n*a,t[1]=n*u-i*a,t[2]=o*u+s*a,t[3]=s*u-o*a,t}function f(t,e){var r=e[0],i=e[1],n=e[2];return t[0]=r,t[1]=i,t[2]=n,t[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),t}function d(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=Math.sqrt(r*r+i*i+n*n),a=Math.exp(o),u=s>0?a*Math.sin(s)/s:0;return t[0]=r*u,t[1]=i*u,t[2]=n*u,t[3]=a*Math.cos(s),t}function m(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=Math.sqrt(r*r+i*i+n*n),a=s>0?Math.atan2(s,o)/s:0;return t[0]=r*a,t[1]=i*a,t[2]=n*a,t[3]=.5*Math.log(r*r+i*i+n*n+o*o),t}function v(t,e,r){return m(t,e),F(t,t,r),d(t,t),t}function _(t,e,r,i){var n,o,s,a,u,h=e[0],l=e[1],c=e[2],p=e[3],f=r[0],d=r[1],m=r[2],v=r[3];return o=h*f+l*d+c*m+p*v,o<0&&(o=-o,f=-f,d=-d,m=-m,v=-v),1-o>E.EPSILON?(n=Math.acos(o),s=Math.sin(n),a=Math.sin((1-i)*n)/s,u=Math.sin(i*n)/s):(a=1-i,u=i),t[0]=a*h+u*f,t[1]=a*l+u*d,t[2]=a*c+u*m,t[3]=a*p+u*v,t}function y(t){var e=E.RANDOM(),r=E.RANDOM(),i=E.RANDOM(),n=Math.sqrt(1-e),o=Math.sqrt(e);return t[0]=n*Math.sin(2*Math.PI*r),t[1]=n*Math.cos(2*Math.PI*r),t[2]=o*Math.sin(2*Math.PI*i),t[3]=o*Math.cos(2*Math.PI*i),t}function g(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r*r+i*i+n*n+o*o,a=s?1/s:0;return t[0]=-r*a,t[1]=-i*a,t[2]=-n*a,t[3]=o*a,t}function w(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function M(t,e){var r,i=e[0]+e[4]+e[8];if(i>0)r=Math.sqrt(i+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{var n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);var o=(n+1)%3,s=(n+2)%3;r=Math.sqrt(e[3*n+n]-e[3*o+o]-e[3*s+s]+1),t[n]=.5*r,r=.5/r,t[3]=(e[3*o+s]-e[3*s+o])*r,t[o]=(e[3*o+n]+e[3*n+o])*r,t[s]=(e[3*s+n]+e[3*n+s])*r}return t}function b(t,e,r,i){var n=.5*Math.PI/180;e*=n,r*=n,i*=n;var o=Math.sin(e),s=Math.cos(e),a=Math.sin(r),u=Math.cos(r),h=Math.sin(i),l=Math.cos(i);return t[0]=o*u*l-s*a*h,t[1]=s*a*l+o*u*h,t[2]=s*u*h-o*a*l,t[3]=s*u*l+o*a*h,t}function x(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}Object.defineProperty(r,"__esModule",{value:!0}),r.create=n,r.identity=o,r.setAxisAngle=s,r.getAxisAngle=a,r.getAngle=u,r.multiply=h,r.rotateX=l,r.rotateY=c,r.rotateZ=p,r.calculateW=f,r.exp=d,r.ln=m,r.pow=v,r.slerp=_,r.random=y,r.invert=g,r.conjugate=w,r.fromMat3=M,r.fromEuler=b,r.str=x,r.setAxes=r.sqlerp=r.rotationTo=r.equals=r.exactEquals=r.normalize=r.sqrLen=r.squaredLength=r.len=r.length=r.lerp=r.dot=r.scale=r.mul=r.add=r.set=r.copy=r.fromValues=r.clone=void 0;var E=i(t("./common.js")),T=i(t("./mat3.js")),P=i(t("./vec3.js")),L=i(t("./vec4.js")),S=L.clone;r.clone=S;var A=L.fromValues;r.fromValues=A;var R=L.copy;r.copy=R;var C=L.set;r.set=C;var O=L.add;r.add=O;var I=h;r.mul=I;var F=L.scale;r.scale=F;var z=L.dot;r.dot=z;var D=L.lerp;r.lerp=D;var k=L.length;r.length=k;var N=k;r.len=N;var j=L.squaredLength;r.squaredLength=j;var H=j;r.sqrLen=H;var B=L.normalize;r.normalize=B;var Y=L.exactEquals;r.exactEquals=Y;var q=L.equals;r.equals=q;var W=function(){var t=P.create(),e=P.fromValues(1,0,0),r=P.fromValues(0,1,0);return function(i,n,o){var a=P.dot(n,o);return a<-.999999?(P.cross(t,e,n),P.len(t)<1e-6&&P.cross(t,r,n),P.normalize(t,t),s(i,t,Math.PI),i):a>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(P.cross(t,n,o),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=1+a,B(i,i))}}();r.rotationTo=W;var V=function(){var t=n(),e=n();return function(r,i,n,o,s,a){return _(t,i,s,a),_(e,n,o,a),_(r,t,e,2*a*(1-a)),r}}();r.sqlerp=V;var X=function(){var t=T.create();return function(e,r,i,n){return t[0]=i[0],t[3]=i[1],t[6]=i[2],t[1]=n[0],t[4]=n[1],t[7]=n[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],B(e,M(e,t))}}();r.setAxes=X},{"./common.js":2,"./mat3.js":6,"./vec3.js":11,"./vec4.js":12}],9:[function(t,e,r){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}function n(){var t=new z.ARRAY_TYPE(8);return z.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t}function o(t){var e=new z.ARRAY_TYPE(8);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e}function s(t,e,r,i,n,o,s,a){var u=new z.ARRAY_TYPE(8);return u[0]=t,u[1]=e,u[2]=r,u[3]=i,u[4]=n,u[5]=o,u[6]=s,u[7]=a,u}function a(t,e,r,i,n,o,s){var a=new z.ARRAY_TYPE(8);a[0]=t,a[1]=e,a[2]=r,a[3]=i;var u=.5*n,h=.5*o,l=.5*s;return a[4]=u*i+h*r-l*e,a[5]=h*i+l*t-u*r,a[6]=l*i+u*e-h*t,a[7]=-u*t-h*e-l*r,a}function u(t,e,r){var i=.5*r[0],n=.5*r[1],o=.5*r[2],s=e[0],a=e[1],u=e[2],h=e[3];return t[0]=s,t[1]=a,t[2]=u,t[3]=h,t[4]=i*h+n*u-o*a,t[5]=n*h+o*s-i*u,t[6]=o*h+i*a-n*s,t[7]=-i*s-n*a-o*u,t}function h(t,e){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*e[0],t[5]=.5*e[1],t[6]=.5*e[2],t[7]=0,t}function l(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function c(t,e){var r=D.create();k.getRotation(r,e);var i=new z.ARRAY_TYPE(3);return k.getTranslation(i,e),u(t,r,i),t}function p(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t}function f(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function d(t,e,r,i,n,o,s,a,u){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=o,t[5]=s,t[6]=a,t[7]=u,t}function m(t,e){return t[0]=e[4],t[1]=e[5],t[2]=e[6],t[3]=e[7],t}function v(t,e){return t[4]=e[0],t[5]=e[1],t[6]=e[2],t[7]=e[3],t}function _(t,e){var r=e[4],i=e[5],n=e[6],o=e[7],s=-e[0],a=-e[1],u=-e[2],h=e[3];return t[0]=2*(r*h+o*s+i*u-n*a),t[1]=2*(i*h+o*a+n*s-r*u),t[2]=2*(n*h+o*u+r*a-i*s),t}function y(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=.5*r[0],u=.5*r[1],h=.5*r[2],l=e[4],c=e[5],p=e[6],f=e[7];return t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=s*a+n*h-o*u+l,t[5]=s*u+o*a-i*h+c,t[6]=s*h+i*u-n*a+p,t[7]=-i*a-n*u-o*h+f,t}function g(t,e,r){var i=-e[0],n=-e[1],o=-e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=a*s+l*i+u*o-h*n,p=u*s+l*n+h*i-a*o,f=h*s+l*o+a*n-u*i,d=l*s-a*i-u*n-h*o;return D.rotateX(t,e,r),i=t[0],n=t[1],o=t[2],s=t[3],t[4]=c*s+d*i+p*o-f*n,t[5]=p*s+d*n+f*i-c*o,t[6]=f*s+d*o+c*n-p*i,t[7]=d*s-c*i-p*n-f*o,t}function w(t,e,r){var i=-e[0],n=-e[1],o=-e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=a*s+l*i+u*o-h*n,p=u*s+l*n+h*i-a*o,f=h*s+l*o+a*n-u*i,d=l*s-a*i-u*n-h*o;return D.rotateY(t,e,r),i=t[0],n=t[1],o=t[2],s=t[3],t[4]=c*s+d*i+p*o-f*n,t[5]=p*s+d*n+f*i-c*o,t[6]=f*s+d*o+c*n-p*i,t[7]=d*s-c*i-p*n-f*o,t}function M(t,e,r){var i=-e[0],n=-e[1],o=-e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=a*s+l*i+u*o-h*n,p=u*s+l*n+h*i-a*o,f=h*s+l*o+a*n-u*i,d=l*s-a*i-u*n-h*o;return D.rotateZ(t,e,r),i=t[0],n=t[1],o=t[2],s=t[3],t[4]=c*s+d*i+p*o-f*n,t[5]=p*s+d*n+f*i-c*o,t[6]=f*s+d*o+c*n-p*i,t[7]=d*s-c*i-p*n-f*o,t}function b(t,e,r){
var i=r[0],n=r[1],o=r[2],s=r[3],a=e[0],u=e[1],h=e[2],l=e[3];return t[0]=a*s+l*i+u*o-h*n,t[1]=u*s+l*n+h*i-a*o,t[2]=h*s+l*o+a*n-u*i,t[3]=l*s-a*i-u*n-h*o,a=e[4],u=e[5],h=e[6],l=e[7],t[4]=a*s+l*i+u*o-h*n,t[5]=u*s+l*n+h*i-a*o,t[6]=h*s+l*o+a*n-u*i,t[7]=l*s-a*i-u*n-h*o,t}function x(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[0],u=r[1],h=r[2],l=r[3];return t[0]=i*l+s*a+n*h-o*u,t[1]=n*l+s*u+o*a-i*h,t[2]=o*l+s*h+i*u-n*a,t[3]=s*l-i*a-n*u-o*h,a=r[4],u=r[5],h=r[6],l=r[7],t[4]=i*l+s*a+n*h-o*u,t[5]=n*l+s*u+o*a-i*h,t[6]=o*l+s*h+i*u-n*a,t[7]=s*l-i*a-n*u-o*h,t}function E(t,e,r,i){if(Math.abs(i)<z.EPSILON)return p(t,e);var n=Math.hypot(r[0],r[1],r[2]);i*=.5;var o=Math.sin(i),s=o*r[0]/n,a=o*r[1]/n,u=o*r[2]/n,h=Math.cos(i),l=e[0],c=e[1],f=e[2],d=e[3];t[0]=l*h+d*s+c*u-f*a,t[1]=c*h+d*a+f*s-l*u,t[2]=f*h+d*u+l*a-c*s,t[3]=d*h-l*s-c*a-f*u;var m=e[4],v=e[5],_=e[6],y=e[7];return t[4]=m*h+y*s+v*u-_*a,t[5]=v*h+y*a+_*s-m*u,t[6]=_*h+y*u+m*a-v*s,t[7]=y*h-m*s-v*a-_*u,t}function T(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t}function P(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[4],u=r[5],h=r[6],l=r[7],c=e[4],p=e[5],f=e[6],d=e[7],m=r[0],v=r[1],_=r[2],y=r[3];return t[0]=i*y+s*m+n*_-o*v,t[1]=n*y+s*v+o*m-i*_,t[2]=o*y+s*_+i*v-n*m,t[3]=s*y-i*m-n*v-o*_,t[4]=i*l+s*a+n*h-o*u+c*y+d*m+p*_-f*v,t[5]=n*l+s*u+o*a-i*h+p*y+d*v+f*m-c*_,t[6]=o*l+s*h+i*u-n*a+f*y+d*_+c*v-p*m,t[7]=s*l-i*a-n*u-o*h+d*y-c*m-p*v-f*_,t}function L(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t}function S(t,e,r,i){var n=1-i;return B(e,r)<0&&(i=-i),t[0]=e[0]*n+r[0]*i,t[1]=e[1]*n+r[1]*i,t[2]=e[2]*n+r[2]*i,t[3]=e[3]*n+r[3]*i,t[4]=e[4]*n+r[4]*i,t[5]=e[5]*n+r[5]*i,t[6]=e[6]*n+r[6]*i,t[7]=e[7]*n+r[7]*i,t}function A(t,e){var r=W(e);return t[0]=-e[0]/r,t[1]=-e[1]/r,t[2]=-e[2]/r,t[3]=e[3]/r,t[4]=-e[4]/r,t[5]=-e[5]/r,t[6]=-e[6]/r,t[7]=e[7]/r,t}function R(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=e[7],t}function C(t,e){var r=W(e);if(r>0){r=Math.sqrt(r);var i=e[0]/r,n=e[1]/r,o=e[2]/r,s=e[3]/r,a=e[4],u=e[5],h=e[6],l=e[7],c=i*a+n*u+o*h+s*l;t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=(a-i*c)/r,t[5]=(u-n*c)/r,t[6]=(h-o*c)/r,t[7]=(l-s*c)/r}return t}function O(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"}function I(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]}function F(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],u=t[6],h=t[7],l=e[0],c=e[1],p=e[2],f=e[3],d=e[4],m=e[5],v=e[6],_=e[7];return Math.abs(r-l)<=z.EPSILON*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(i-c)<=z.EPSILON*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(n-p)<=z.EPSILON*Math.max(1,Math.abs(n),Math.abs(p))&&Math.abs(o-f)<=z.EPSILON*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(s-d)<=z.EPSILON*Math.max(1,Math.abs(s),Math.abs(d))&&Math.abs(a-m)<=z.EPSILON*Math.max(1,Math.abs(a),Math.abs(m))&&Math.abs(u-v)<=z.EPSILON*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(h-_)<=z.EPSILON*Math.max(1,Math.abs(h),Math.abs(_))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=n,r.clone=o,r.fromValues=s,r.fromRotationTranslationValues=a,r.fromRotationTranslation=u,r.fromTranslation=h,r.fromRotation=l,r.fromMat4=c,r.copy=p,r.identity=f,r.set=d,r.getDual=m,r.setDual=v,r.getTranslation=_,r.translate=y,r.rotateX=g,r.rotateY=w,r.rotateZ=M,r.rotateByQuatAppend=b,r.rotateByQuatPrepend=x,r.rotateAroundAxis=E,r.add=T,r.multiply=P,r.scale=L,r.lerp=S,r.invert=A,r.conjugate=R,r.normalize=C,r.str=O,r.exactEquals=I,r.equals=F,r.sqrLen=r.squaredLength=r.len=r.length=r.dot=r.mul=r.setReal=r.getReal=void 0;var z=i(t("./common.js")),D=i(t("./quat.js")),k=i(t("./mat4.js")),N=D.copy;r.getReal=N;var j=D.copy;r.setReal=j;var H=P;r.mul=H;var B=D.dot;r.dot=B;var Y=D.length;r.length=Y;var q=Y;r.len=q;var W=D.squaredLength;r.squaredLength=W;var V=W;r.sqrLen=V},{"./common.js":2,"./mat4.js":7,"./quat.js":8}],10:[function(t,e,r){"use strict";function i(){var t=new H.ARRAY_TYPE(2);return H.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0),t}function n(t){var e=new H.ARRAY_TYPE(2);return e[0]=t[0],e[1]=t[1],e}function o(t,e){var r=new H.ARRAY_TYPE(2);return r[0]=t,r[1]=e,r}function s(t,e){return t[0]=e[0],t[1]=e[1],t}function a(t,e,r){return t[0]=e,t[1]=r,t}function u(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t}function h(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t}function l(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t}function c(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t}function p(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t}function f(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t}function d(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t}function m(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t}function v(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t}function _(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t}function y(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t}function g(t,e){var r=e[0]-t[0],i=e[1]-t[1];return Math.hypot(r,i)}function w(t,e){var r=e[0]-t[0],i=e[1]-t[1];return r*r+i*i}function M(t){var e=t[0],r=t[1];return Math.hypot(e,r)}function b(t){var e=t[0],r=t[1];return e*e+r*r}function x(t,e){return t[0]=-e[0],t[1]=-e[1],t}function E(t,e){return t[0]=1/e[0],t[1]=1/e[1],t}function T(t,e){var r=e[0],i=e[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n)),t[0]=e[0]*n,t[1]=e[1]*n,t}function P(t,e){return t[0]*e[0]+t[1]*e[1]}function L(t,e,r){var i=e[0]*r[1]-e[1]*r[0];return t[0]=t[1]=0,t[2]=i,t}function S(t,e,r,i){var n=e[0],o=e[1];return t[0]=n+i*(r[0]-n),t[1]=o+i*(r[1]-o),t}function A(t,e){e=e||1;var r=2*H.RANDOM()*Math.PI;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t}function R(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n,t[1]=r[1]*i+r[3]*n,t}function C(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n+r[4],t[1]=r[1]*i+r[3]*n+r[5],t}function O(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[3]*n+r[6],t[1]=r[1]*i+r[4]*n+r[7],t}function I(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[4]*n+r[12],t[1]=r[1]*i+r[5]*n+r[13],t}function F(t,e,r,i){var n=e[0]-r[0],o=e[1]-r[1],s=Math.sin(i),a=Math.cos(i);return t[0]=n*a-o*s+r[0],t[1]=n*s+o*a+r[1],t}function z(t,e){var r=t[0],i=t[1],n=e[0],o=e[1],s=r*r+i*i;s>0&&(s=1/Math.sqrt(s));var a=n*n+o*o;a>0&&(a=1/Math.sqrt(a));var u=(r*n+i*o)*s*a;return u>1?0:u<-1?Math.PI:Math.acos(u)}function D(t){return t[0]=0,t[1]=0,t}function k(t){return"vec2("+t[0]+", "+t[1]+")"}function N(t,e){return t[0]===e[0]&&t[1]===e[1]}function j(t,e){var r=t[0],i=t[1],n=e[0],o=e[1];return Math.abs(r-n)<=H.EPSILON*Math.max(1,Math.abs(r),Math.abs(n))&&Math.abs(i-o)<=H.EPSILON*Math.max(1,Math.abs(i),Math.abs(o))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.fromValues=o,r.copy=s,r.set=a,r.add=u,r.subtract=h,r.multiply=l,r.divide=c,r.ceil=p,r.floor=f,r.min=d,r.max=m,r.round=v,r.scale=_,r.scaleAndAdd=y,r.distance=g,r.squaredDistance=w,r.length=M,r.squaredLength=b,r.negate=x,r.inverse=E,r.normalize=T,r.dot=P,r.cross=L,r.lerp=S,r.random=A,r.transformMat2=R,r.transformMat2d=C,r.transformMat3=O,r.transformMat4=I,r.rotate=F,r.angle=z,r.zero=D,r.str=k,r.exactEquals=N,r.equals=j,r.forEach=r.sqrLen=r.sqrDist=r.dist=r.div=r.mul=r.sub=r.len=void 0;var H=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),B=M;r.len=B;var Y=h;r.sub=Y;var q=l;r.mul=q;var W=c;r.div=W;var V=g;r.dist=V;var X=w;r.sqrDist=X;var G=b;r.sqrLen=G;var U=function(){var t=i();return function(e,r,i,n,o,s){var a,u;for(r||(r=2),i||(i=0),u=n?Math.min(n*r+i,e.length):e.length,a=i;a<u;a+=r)t[0]=e[a],t[1]=e[a+1],o(t,t,s),e[a]=t[0],e[a+1]=t[1];return e}}();r.forEach=U},{"./common.js":2}],11:[function(t,e,r){"use strict";function i(){var t=new q.ARRAY_TYPE(3);return q.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function n(t){var e=new q.ARRAY_TYPE(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function o(t){var e=t[0],r=t[1],i=t[2];return Math.hypot(e,r,i)}function s(t,e,r){var i=new q.ARRAY_TYPE(3);return i[0]=t,i[1]=e,i[2]=r,i}function a(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function u(t,e,r,i){return t[0]=e,t[1]=r,t[2]=i,t}function h(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function l(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function c(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function p(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function f(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function d(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function m(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function v(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function _(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}function y(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function g(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t}function w(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return Math.hypot(r,i,n)}function M(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return r*r+i*i+n*n}function b(t){var e=t[0],r=t[1],i=t[2];return e*e+r*r+i*i}function x(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function E(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function T(t,e){var r=e[0],i=e[1],n=e[2],o=r*r+i*i+n*n;return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}function P(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function L(t,e,r){var i=e[0],n=e[1],o=e[2],s=r[0],a=r[1],u=r[2];return t[0]=n*u-o*a,t[1]=o*s-i*u,t[2]=i*a-n*s,t}function S(t,e,r,i){var n=e[0],o=e[1],s=e[2];return t[0]=n+i*(r[0]-n),t[1]=o+i*(r[1]-o),t[2]=s+i*(r[2]-s),t}function A(t,e,r,i,n,o){var s=o*o,a=s*(2*o-3)+1,u=s*(o-2)+o,h=s*(o-1),l=s*(3-2*o);return t[0]=e[0]*a+r[0]*u+i[0]*h+n[0]*l,t[1]=e[1]*a+r[1]*u+i[1]*h+n[1]*l,t[2]=e[2]*a+r[2]*u+i[2]*h+n[2]*l,t}function R(t,e,r,i,n,o){var s=1-o,a=s*s,u=o*o,h=a*s,l=3*o*a,c=3*u*s,p=u*o;return t[0]=e[0]*h+r[0]*l+i[0]*c+n[0]*p,t[1]=e[1]*h+r[1]*l+i[1]*c+n[1]*p,t[2]=e[2]*h+r[2]*l+i[2]*c+n[2]*p,t}function C(t,e){e=e||1;var r=2*q.RANDOM()*Math.PI,i=2*q.RANDOM()-1,n=Math.sqrt(1-i*i)*e;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t[2]=i*e,t}function O(t,e,r){var i=e[0],n=e[1],o=e[2],s=r[3]*i+r[7]*n+r[11]*o+r[15];return s=s||1,t[0]=(r[0]*i+r[4]*n+r[8]*o+r[12])/s,t[1]=(r[1]*i+r[5]*n+r[9]*o+r[13])/s,t[2]=(r[2]*i+r[6]*n+r[10]*o+r[14])/s,t}function I(t,e,r){var i=e[0],n=e[1],o=e[2];return t[0]=i*r[0]+n*r[3]+o*r[6],t[1]=i*r[1]+n*r[4]+o*r[7],t[2]=i*r[2]+n*r[5]+o*r[8],t}function F(t,e,r){var i=r[0],n=r[1],o=r[2],s=r[3],a=e[0],u=e[1],h=e[2],l=n*h-o*u,c=o*a-i*h,p=i*u-n*a,f=n*p-o*c,d=o*l-i*p,m=i*c-n*l,v=2*s;return l*=v,c*=v,p*=v,f*=2,d*=2,m*=2,t[0]=a+l+f,t[1]=u+c+d,t[2]=h+p+m,t}function z(t,e,r,i){var n=[],o=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],o[0]=n[0],o[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),o[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function D(t,e,r,i){var n=[],o=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],o[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),o[1]=n[1],o[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function k(t,e,r,i){var n=[],o=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],o[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),o[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),o[2]=n[2],t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function N(t,e){var r=s(t[0],t[1],t[2]),i=s(e[0],e[1],e[2]);T(r,r),T(i,i);var n=P(r,i);return n>1?0:n<-1?Math.PI:Math.acos(n)}function j(t){return t[0]=0,t[1]=0,t[2]=0,t}function H(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function B(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function Y(t,e){var r=t[0],i=t[1],n=t[2],o=e[0],s=e[1],a=e[2];return Math.abs(r-o)<=q.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(i-s)<=q.EPSILON*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(n-a)<=q.EPSILON*Math.max(1,Math.abs(n),Math.abs(a))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.length=o,r.fromValues=s,r.copy=a,r.set=u,r.add=h,r.subtract=l,r.multiply=c,r.divide=p,r.ceil=f,r.floor=d,r.min=m,r.max=v,r.round=_,r.scale=y,r.scaleAndAdd=g,r.distance=w,r.squaredDistance=M,r.squaredLength=b,r.negate=x,r.inverse=E,r.normalize=T,r.dot=P,r.cross=L,r.lerp=S,r.hermite=A,r.bezier=R,r.random=C,r.transformMat4=O,r.transformMat3=I,r.transformQuat=F,r.rotateX=z,r.rotateY=D,r.rotateZ=k,r.angle=N,r.zero=j,r.str=H,r.exactEquals=B,r.equals=Y,r.forEach=r.sqrLen=r.len=r.sqrDist=r.dist=r.div=r.mul=r.sub=void 0;var q=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),W=l;r.sub=W;var V=c;r.mul=V;var X=p;r.div=X;var G=w;r.dist=G;var U=M;r.sqrDist=U;var Z=o;r.len=Z;var K=b;r.sqrLen=K;var Q=function(){var t=i();return function(e,r,i,n,o,s){var a,u;for(r||(r=3),i||(i=0),u=n?Math.min(n*r+i,e.length):e.length,a=i;a<u;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}}();r.forEach=Q},{"./common.js":2}],12:[function(t,e,r){"use strict";function i(){var t=new D.ARRAY_TYPE(4);return D.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function n(t){var e=new D.ARRAY_TYPE(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function o(t,e,r,i){var n=new D.ARRAY_TYPE(4);return n[0]=t,n[1]=e,n[2]=r,n[3]=i,n}function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function a(t,e,r,i,n){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t}function u(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function h(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function l(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t}function c(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t[3]=e[3]/r[3],t}function p(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t}function f(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t}function d(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t[3]=Math.min(e[3],r[3]),t}function m(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t[3]=Math.max(e[3],r[3]),t}function v(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t}function _(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function y(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t}function g(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2],o=e[3]-t[3];return Math.hypot(r,i,n,o)}function w(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2],o=e[3]-t[3];return r*r+i*i+n*n+o*o}function M(t){var e=t[0],r=t[1],i=t[2],n=t[3];return Math.hypot(e,r,i,n)}function b(t){var e=t[0],r=t[1],i=t[2],n=t[3];return e*e+r*r+i*i+n*n}function x(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t}function E(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t}function T(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r*r+i*i+n*n+o*o;return s>0&&(s=1/Math.sqrt(s)),t[0]=r*s,t[1]=i*s,t[2]=n*s,t[3]=o*s,t}function P(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function L(t,e,r,i){var n=r[0]*i[1]-r[1]*i[0],o=r[0]*i[2]-r[2]*i[0],s=r[0]*i[3]-r[3]*i[0],a=r[1]*i[2]-r[2]*i[1],u=r[1]*i[3]-r[3]*i[1],h=r[2]*i[3]-r[3]*i[2],l=e[0],c=e[1],p=e[2],f=e[3];return t[0]=c*h-p*u+f*a,t[1]=-l*h+p*s-f*o,t[2]=l*u-c*s+f*n,t[3]=-l*a+c*o-p*n,t}function S(t,e,r,i){var n=e[0],o=e[1],s=e[2],a=e[3];return t[0]=n+i*(r[0]-n),t[1]=o+i*(r[1]-o),t[2]=s+i*(r[2]-s),t[3]=a+i*(r[3]-a),t}function A(t,e){e=e||1;var r,i,n,o,s,a;do{r=2*D.RANDOM()-1,i=2*D.RANDOM()-1,s=r*r+i*i}while(s>=1);do{n=2*D.RANDOM()-1,o=2*D.RANDOM()-1,a=n*n+o*o}while(a>=1);var u=Math.sqrt((1-s)/a);return t[0]=e*r,t[1]=e*i,t[2]=e*n*u,t[3]=e*o*u,t}function R(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3];return t[0]=r[0]*i+r[4]*n+r[8]*o+r[12]*s,t[1]=r[1]*i+r[5]*n+r[9]*o+r[13]*s,t[2]=r[2]*i+r[6]*n+r[10]*o+r[14]*s,t[3]=r[3]*i+r[7]*n+r[11]*o+r[15]*s,t}function C(t,e,r){var i=e[0],n=e[1],o=e[2],s=r[0],a=r[1],u=r[2],h=r[3],l=h*i+a*o-u*n,c=h*n+u*i-s*o,p=h*o+s*n-a*i,f=-s*i-a*n-u*o;return t[0]=l*h+f*-s+c*-u-p*-a,t[1]=c*h+f*-a+p*-s-l*-u,t[2]=p*h+f*-u+l*-a-c*-s,t[3]=e[3],t}function O(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function I(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function F(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function z(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=e[0],a=e[1],u=e[2],h=e[3];return Math.abs(r-s)<=D.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-a)<=D.EPSILON*Math.max(1,Math.abs(i),Math.abs(a))&&Math.abs(n-u)<=D.EPSILON*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(o-h)<=D.EPSILON*Math.max(1,Math.abs(o),Math.abs(h))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.fromValues=o,r.copy=s,r.set=a,r.add=u,r.subtract=h,r.multiply=l,r.divide=c,r.ceil=p,r.floor=f,r.min=d,r.max=m,r.round=v,r.scale=_,r.scaleAndAdd=y,r.distance=g,r.squaredDistance=w,r.length=M,r.squaredLength=b,r.negate=x,r.inverse=E,r.normalize=T,r.dot=P,r.cross=L,r.lerp=S,r.random=A,r.transformMat4=R,r.transformQuat=C,r.zero=O,r.str=I,r.exactEquals=F,r.equals=z,r.forEach=r.sqrLen=r.len=r.sqrDist=r.dist=r.div=r.mul=r.sub=void 0;var D=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),k=h;r.sub=k;var N=l;r.mul=N;var j=c;r.div=j;var H=g;r.dist=H;var B=w;r.sqrDist=B;var Y=M;r.len=Y;var q=b;r.sqrLen=q;var W=function(){var t=i();return function(e,r,i,n,o,s){var a,u;for(r||(r=4),i||(i=0),u=n?Math.min(n*r+i,e.length):e.length,a=i;a<u;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],t[3]=e[a+3],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2],e[a+3]=t[3];return e}}();r.forEach=W},{"./common.js":2}],13:[function(e,r,i){!function(e,i,n,o){"use strict";function s(t,e,r){return setTimeout(p(t,r),e)}function a(t,e,r){return!!Array.isArray(t)&&(u(t,r[e],r),!0)}function u(t,e,r){var i;if(t)if(t.forEach)t.forEach(e,r);else if(t.length!==o)for(i=0;i<t.length;)e.call(r,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(r,t[i],i,t)}function h(t,e,r){for(var i=Object.keys(e),n=0;n<i.length;)(!r||r&&t[i[n]]===o)&&(t[i[n]]=e[i[n]]),n++;return t}function l(t,e){return h(t,e,!0)}function c(t,e,r){var i,n=e.prototype;i=t.prototype=Object.create(n),i.constructor=t,i._super=n,r&&h(i,r)}function p(t,e){return function(){return t.apply(e,arguments)}}function f(t,e){return typeof t==pt?t.apply(e?e[0]||o:o,e):t}function d(t,e){return t===o?e:t}function m(t,e,r){u(g(e),function(e){t.addEventListener(e,r,!1)})}function v(t,e,r){u(g(e),function(e){t.removeEventListener(e,r,!1)})}function _(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function y(t,e){return t.indexOf(e)>-1}function g(t){return t.trim().split(/\s+/g)}function w(t,e,r){if(t.indexOf&&!r)return t.indexOf(e);for(var i=0;i<t.length;){if(r&&t[i][r]==e||!r&&t[i]===e)return i;i++}return-1}function M(t){return Array.prototype.slice.call(t,0)}function b(t,e,r){for(var i=[],n=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];w(n,s)<0&&i.push(t[o]),n[o]=s,o++}return r&&(i=e?i.sort(function(t,r){return t[e]>r[e]}):i.sort()),i}function x(t,e){for(var r,i,n=e[0].toUpperCase()+e.slice(1),s=0;s<lt.length;){if(r=lt[s],(i=r?r+n:e)in t)return i;s++}return o}function E(){return vt++}function T(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function P(t,e){var r=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){f(t.options.enable,[t])&&r.handler(e)},this.init()}function L(t){var e=t.options.inputClass;return new(e||(gt?B:wt?W:yt?X:H))(t,S)}function S(t,e,r){var i=r.pointers.length,n=r.changedPointers.length,o=e&bt&&i-n==0,s=e&(Et|Tt)&&i-n==0;r.isFirst=!!o,r.isFinal=!!s,o&&(t.session={}),r.eventType=e,A(t,r),t.emit("hammer.input",r),t.recognize(r),t.session.prevInput=r}function A(t,e){var r=t.session,i=e.pointers,n=i.length;r.firstInput||(r.firstInput=O(e)),n>1&&!r.firstMultiple?r.firstMultiple=O(e):1===n&&(r.firstMultiple=!1);var o=r.firstInput,s=r.firstMultiple,a=s?s.center:o.center,u=e.center=I(i);e.timeStamp=mt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=k(a,u),e.distance=D(a,u),R(r,e),e.offsetDirection=z(e.deltaX,e.deltaY),e.scale=s?j(s.pointers,i):1,e.rotation=s?N(s.pointers,i):0,C(r,e);var h=t.element;_(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function R(t,e){var r=e.center,i=t.offsetDelta||{},n=t.prevDelta||{},o=t.prevInput||{};e.eventType!==bt&&o.eventType!==Et||(n=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:r.x,y:r.y}),e.deltaX=n.x+(r.x-i.x),e.deltaY=n.y+(r.y-i.y)}function C(t,e){var r,i,n,s,a=t.lastInterval||e,u=e.timeStamp-a.timeStamp;if(e.eventType!=Tt&&(u>Mt||a.velocity===o)){var h=a.deltaX-e.deltaX,l=a.deltaY-e.deltaY,c=F(u,h,l);i=c.x,n=c.y,r=dt(c.x)>dt(c.y)?c.x:c.y,s=z(h,l),t.lastInterval=e}else r=a.velocity,i=a.velocityX,n=a.velocityY,s=a.direction;e.velocity=r,e.velocityX=i,e.velocityY=n,e.direction=s}function O(t){for(var e=[],r=0;r<t.pointers.length;)e[r]={clientX:ft(t.pointers[r].clientX),clientY:ft(t.pointers[r].clientY)},r++;return{timeStamp:mt(),pointers:e,center:I(e),deltaX:t.deltaX,deltaY:t.deltaY}}function I(t){var e=t.length;if(1===e)return{x:ft(t[0].clientX),y:ft(t[0].clientY)};for(var r=0,i=0,n=0;n<e;)r+=t[n].clientX,i+=t[n].clientY,n++;return{x:ft(r/e),y:ft(i/e)}}function F(t,e,r){return{x:e/t||0,y:r/t||0}}function z(t,e){return t===e?Pt:dt(t)>=dt(e)?t>0?Lt:St:e>0?At:Rt}function D(t,e,r){r||(r=Ft);var i=e[r[0]]-t[r[0]],n=e[r[1]]-t[r[1]];return Math.sqrt(i*i+n*n)}function k(t,e,r){r||(r=Ft);var i=e[r[0]]-t[r[0]],n=e[r[1]]-t[r[1]];return 180*Math.atan2(n,i)/Math.PI}function N(t,e){return k(e[1],e[0],zt)-k(t[1],t[0],zt)}function j(t,e){return D(e[0],e[1],zt)/D(t[0],t[1],zt)}function H(){this.evEl=kt,this.evWin=Nt,this.allow=!0,this.pressed=!1,P.apply(this,arguments)}function B(){this.evEl=Bt,this.evWin=Yt,P.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Y(){this.evTarget=Wt,this.evWin=Vt,this.started=!1,P.apply(this,arguments)}function q(t,e){var r=M(t.touches),i=M(t.changedTouches);return e&(Et|Tt)&&(r=b(r.concat(i),"identifier",!0)),[r,i]}function W(){this.evTarget=Gt,this.targetIds={},P.apply(this,arguments)}function V(t,e){var r=M(t.touches),i=this.targetIds;if(e&(bt|xt)&&1===r.length)return i[r[0].identifier]=!0,[r,r];var n,o,s=M(t.changedTouches),a=[],u=this.target;if(o=r.filter(function(t){return _(t.target,u)}),e===bt)for(n=0;n<o.length;)i[o[n].identifier]=!0,n++;for(n=0;n<s.length;)i[s[n].identifier]&&a.push(s[n]),e&(Et|Tt)&&delete i[s[n].identifier],n++;return a.length?[b(o.concat(a),"identifier",!0),a]:void 0}function X(){P.apply(this,arguments);var t=p(this.handler,this);this.touch=new W(this.manager,t),this.mouse=new H(this.manager,t)}function G(t,e){this.manager=t,this.set(e)}function U(t){if(y(t,$t))return $t;var e=y(t,Jt),r=y(t,te);return e&&r?Jt+" "+te:e||r?e?Jt:te:y(t,Qt)?Qt:Kt}function Z(t){this.id=E(),this.manager=null,this.options=l(t||{},this.defaults),this.options.enable=d(this.options.enable,!0),this.state=ee,this.simultaneous={},this.requireFail=[]}function K(t){return t&se?"cancel":t&ne?"end":t&ie?"move":t&re?"start":""}function Q(t){return t==Rt?"down":t==At?"up":t==Lt?"left":t==St?"right":""}function $(t,e){var r=e.manager;return r?r.get(t):t}function J(){Z.apply(this,arguments)}function tt(){J.apply(this,arguments),this.pX=null,this.pY=null}function et(){J.apply(this,arguments)}function rt(){Z.apply(this,arguments),this._timer=null,this._input=null}function it(){J.apply(this,arguments)}function nt(){J.apply(this,arguments)}function ot(){Z.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function st(t,e){return e=e||{},e.recognizers=d(e.recognizers,st.defaults.preset),new at(t,e)}function at(t,e){e=e||{},this.options=l(e,st.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=L(this),this.touchAction=new G(this,this.options.touchAction),ut(this,!0),u(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ut(t,e){var r=t.element;u(t.options.cssProps,function(t,i){r.style[x(r.style,i)]=e?t:""})}function ht(t,e){var r=i.createEvent("Event");r.initEvent(t,!0,!0),r.gesture=e,e.target.dispatchEvent(r)}var lt=["","webkit","moz","MS","ms","o"],ct=i.createElement("div"),pt="function",ft=Math.round,dt=Math.abs,mt=Date.now,vt=1,_t=/mobile|tablet|ip(ad|hone|od)|android/i,yt="ontouchstart"in e,gt=x(e,"PointerEvent")!==o,wt=yt&&_t.test(navigator.userAgent),Mt=25,bt=1,xt=2,Et=4,Tt=8,Pt=1,Lt=2,St=4,At=8,Rt=16,Ct=Lt|St,Ot=At|Rt,It=Ct|Ot,Ft=["x","y"],zt=["clientX","clientY"];P.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(T(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&v(this.element,this.evEl,this.domHandler),this.evTarget&&v(this.target,this.evTarget,this.domHandler),this.evWin&&v(T(this.element),this.evWin,this.domHandler)}};var Dt={mousedown:bt,mousemove:xt,mouseup:Et},kt="mousedown",Nt="mousemove mouseup";c(H,P,{handler:function(t){var e=Dt[t.type];e&bt&&0===t.button&&(this.pressed=!0),e&xt&&1!==t.which&&(e=Et),this.pressed&&this.allow&&(e&Et&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var jt={pointerdown:bt,pointermove:xt,pointerup:Et,pointercancel:Tt,pointerout:Tt},Ht={2:"touch",3:"pen",4:"mouse",5:"kinect"},Bt="pointerdown",Yt="pointermove pointerup pointercancel";e.MSPointerEvent&&(Bt="MSPointerDown",Yt="MSPointerMove MSPointerUp MSPointerCancel"),c(B,P,{handler:function(t){var e=this.store,r=!1,i=t.type.toLowerCase().replace("ms",""),n=jt[i],o=Ht[t.pointerType]||t.pointerType,s="touch"==o,a=w(e,t.pointerId,"pointerId");n&bt&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):n&(Et|Tt)&&(r=!0),a<0||(e[a]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),r&&e.splice(a,1))}});var qt={touchstart:bt,touchmove:xt,touchend:Et,touchcancel:Tt},Wt="touchstart",Vt="touchstart touchmove touchend touchcancel";c(Y,P,{handler:function(t){var e=qt[t.type];if(e===bt&&(this.started=!0),this.started){var r=q.call(this,t,e);e&(Et|Tt)&&r[0].length-r[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:r[0],changedPointers:r[1],pointerType:"touch",srcEvent:t})}}});var Xt={touchstart:bt,touchmove:xt,touchend:Et,touchcancel:Tt},Gt="touchstart touchmove touchend touchcancel";c(W,P,{handler:function(t){var e=Xt[t.type],r=V.call(this,t,e);r&&this.callback(this.manager,e,{pointers:r[0],changedPointers:r[1],pointerType:"touch",srcEvent:t})}}),c(X,P,{handler:function(t,e,r){var i="touch"==r.pointerType,n="mouse"==r.pointerType;if(i)this.mouse.allow=!1;else if(n&&!this.mouse.allow)return;e&(Et|Tt)&&(this.mouse.allow=!0),this.callback(t,e,r)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ut=x(ct.style,"touchAction"),Zt=Ut!==o,Kt="auto",Qt="manipulation",$t="none",Jt="pan-x",te="pan-y";G.prototype={set:function(t){"compute"==t&&(t=this.compute()),Zt&&(this.manager.element.style[Ut]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return u(this.manager.recognizers,function(e){f(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),U(t.join(" "))},preventDefaults:function(t){if(!Zt){var e=t.srcEvent,r=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,n=y(i,$t),o=y(i,te),s=y(i,Jt);return n||o&&r&Ct||s&&r&Ot?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ee=1,re=2,ie=4,ne=8,oe=ne,se=16;Z.prototype={defaults:{},set:function(t){return h(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(a(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=$(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return a(t,"dropRecognizeWith",this)?this:(t=$(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(a(t,"requireFailure",this))return this;var e=this.requireFail;return t=$(t,this),-1===w(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(a(t,"dropRequireFailure",this))return this;t=$(t,this);var e=w(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){r.manager.emit(r.options.event+(e?K(i):""),t)}var r=this,i=this.state;i<ne&&e(!0),e(),i>=ne&&e(!0)},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ee)))return!1;t++}return!0},recognize:function(t){var e=h({},t);if(!f(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(oe|se|32)&&(this.state=ee),this.state=this.process(e),this.state&(re|ie|ne|se)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},c(J,Z,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,r=t.eventType,i=e&(re|ie),n=this.attrTest(t);return i&&(r&Tt||!n)?e|se:i||n?r&Et?e|ne:e&re?e|ie:re:32}}),c(tt,J,{defaults:{event:"pan",threshold:10,pointers:1,direction:It},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ct&&e.push(te),t&Ot&&e.push(Jt),e},directionTest:function(t){var e=this.options,r=!0,i=t.distance,n=t.direction,o=t.deltaX,s=t.deltaY;return n&e.direction||(e.direction&Ct?(n=0===o?Pt:o<0?Lt:St,r=o!=this.pX,i=Math.abs(t.deltaX)):(n=0===s?Pt:s<0?At:Rt,r=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=n,r&&i>e.threshold&&n&e.direction},attrTest:function(t){return J.prototype.attrTest.call(this,t)&&(this.state&re||!(this.state&re)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Q(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),c(et,J,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[$t]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&re)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),c(rt,Z,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kt]},process:function(t){var e=this.options,r=t.pointers.length===e.pointers,i=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!i||!r||t.eventType&(Et|Tt)&&!n)this.reset();else if(t.eventType&bt)this.reset(),this._timer=s(function(){
this.state=oe,this.tryEmit()},e.time,this);else if(t.eventType&Et)return oe;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===oe&&(t&&t.eventType&Et?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=mt(),this.manager.emit(this.options.event,this._input)))}}),c(it,J,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[$t]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&re)}}),c(nt,J,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ct|Ot,pointers:1},getTouchAction:function(){return tt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,r=this.options.direction;return r&(Ct|Ot)?e=t.velocity:r&Ct?e=t.velocityX:r&Ot&&(e=t.velocityY),this._super.attrTest.call(this,t)&&r&t.direction&&t.distance>this.options.threshold&&dt(e)>this.options.velocity&&t.eventType&Et},emit:function(t){var e=Q(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(ot,Z,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Qt]},process:function(t){var e=this.options,r=t.pointers.length===e.pointers,i=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&bt&&0===this.count)return this.failTimeout();if(i&&n&&r){if(t.eventType!=Et)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||D(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,a&&o?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=s(function(){this.state=oe,this.tryEmit()},e.interval,this),re):oe}return 32},failTimeout:function(){return this._timer=s(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==oe&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),st.VERSION="2.0.4",st.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[it,{enable:!1}],[et,{enable:!1},["rotate"]],[nt,{direction:Ct}],[tt,{direction:Ct},["swipe"]],[ot],[ot,{event:"doubletap",taps:2},["tap"]],[rt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};at.prototype={set:function(t){return h(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var r,i=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&oe)&&(n=e.curRecognizer=null);for(var o=0;o<i.length;)r=i[o],2===e.stopped||n&&r!=n&&!r.canRecognizeWith(n)?r.reset():r.recognize(t),!n&&r.state&(re|ie|ne)&&(n=e.curRecognizer=r),o++}},get:function(t){if(t instanceof Z)return t;for(var e=this.recognizers,r=0;r<e.length;r++)if(e[r].options.event==t)return e[r];return null},add:function(t){if(a(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(a(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(w(e,t),1),this.touchAction.update(),this},on:function(t,e){var r=this.handlers;return u(g(t),function(t){r[t]=r[t]||[],r[t].push(e)}),this},off:function(t,e){var r=this.handlers;return u(g(t),function(t){e?r[t].splice(w(r[t],e),1):delete r[t]}),this},emit:function(t,e){this.options.domEvents&&ht(t,e);var r=this.handlers[t]&&this.handlers[t].slice();if(r&&r.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<r.length;)r[i](e),i++}},destroy:function(){this.element&&ut(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(st,{INPUT_START:bt,INPUT_MOVE:xt,INPUT_END:Et,INPUT_CANCEL:Tt,STATE_POSSIBLE:ee,STATE_BEGAN:re,STATE_CHANGED:ie,STATE_ENDED:ne,STATE_RECOGNIZED:oe,STATE_CANCELLED:se,STATE_FAILED:32,DIRECTION_NONE:Pt,DIRECTION_LEFT:Lt,DIRECTION_RIGHT:St,DIRECTION_UP:At,DIRECTION_DOWN:Rt,DIRECTION_HORIZONTAL:Ct,DIRECTION_VERTICAL:Ot,DIRECTION_ALL:It,Manager:at,Input:P,TouchAction:G,TouchInput:W,MouseInput:H,PointerEventInput:B,TouchMouseInput:X,SingleTouchInput:Y,Recognizer:Z,AttrRecognizer:J,Tap:ot,Pan:tt,Swipe:nt,Pinch:et,Rotate:it,Press:rt,on:m,off:v,each:u,merge:l,extend:h,inherit:c,bindFn:p,prefixed:x}),typeof t==pt&&t.amd?t(function(){return st}):void 0!==r&&r.exports?r.exports=st:e.Hammer=st}(window,document)},{}],14:[function(t,e,r){"use strict";function i(){}function n(t){for(var e in i.prototype)i.prototype.hasOwnProperty(e)&&(t.prototype[e]=i.prototype[e])}i.prototype.addEventListener=function(t,e){var r=this.__events=this.__events||{},i=r[t]=r[t]||[];i.indexOf(e)<0&&i.push(e)},i.prototype.removeEventListener=function(t,e){var r=this.__events=this.__events||{},i=r[t];if(i){var n=i.indexOf(e);n>=0&&i.splice(n,1)}},i.prototype.emit=function(t,e){var r=this.__events=this.__events||{},i=r[t],n=Array.prototype.slice.call(arguments,1);if(i)for(var o=0;o<i.length;o++){var s=i[o];s.apply(this,n)}},e.exports=n},{}],15:[function(t,e,r){"use strict";function i(t,e,r,i,n){if(n=n||{},n.perspective=n.perspective||{},n.perspective.extraTransforms=null!=n.perspective.extraTransforms?n.perspective.extraTransforms:"",(n.perspective.radius||n.perspective.extraTransforms)&&!o())throw new Error("CSS transforms on hotspots are not supported on this browser");this._domElement=t,this._parentDomElement=e,this._view=r,this._coords={},this._perspective={},this.setPosition(i),this._parentDomElement.appendChild(this._domElement),this.setPerspective(n.perspective),this._visible=!0,this._position={x:0,y:0}}var n=t("minimal-event-emitter"),o=t("./support/Css"),s=t("./util/positionAbsolutely"),a=t("./util/dom").setTransform,u=t("./util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._parentDomElement.removeChild(this._domElement),u(this)},i.prototype.domElement=function(){return this._domElement},i.prototype.position=function(){return this._coords},i.prototype.setPosition=function(t){for(var e in t)this._coords[e]=t[e];this._update()},i.prototype.perspective=function(){return this._perspective},i.prototype.setPerspective=function(t){for(var e in t)this._perspective[e]=t[e];this._update()},i.prototype.show=function(){this._visible||(this._visible=!0,this._update())},i.prototype.hide=function(){this._visible&&(this._visible=!1,this._update())},i.prototype._update=function(){var t,e,r=this._domElement,i=this._coords,n=this._position,o=!1;if(this._visible){var s=this._view;this._perspective.radius?(o=!0,this._setEmbeddedPosition(s,i)):(s.coordinatesToScreen(i,n),t=n.x,e=n.y,null!=t&&null!=e&&(o=!0,this._setPosition(t,e)))}o?(r.style.display="block",r.style.position="absolute"):(r.style.display="none",r.style.position="")},i.prototype._setEmbeddedPosition=function(t,e){var r=t.coordinatesToPerspectiveTransform(e,this._perspective.radius,this._perspective.extraTransforms);a(this._domElement,r)},i.prototype._setPosition=function(t,e){s(this._domElement,t,e,this._perspective.extraTransforms)},e.exports=i},{"./support/Css":82,"./util/clearOwnProperties":91,"./util/dom":100,"./util/positionAbsolutely":111,"minimal-event-emitter":14}],16:[function(t,e,r){"use strict";function i(t,e,r,i,n){n=n||{},this._parentDomElement=t,this._stage=e,this._view=r,this._renderLoop=i,this._hotspots=[],this._visible=!0,this._rect=n.rect,this._visibilityOrRectChanged=!0,this._stageWidth=null,this._stageHeight=null,this._tmpRect={},this._hotspotContainerWrapper=document.createElement("div"),h(this._hotspotContainerWrapper),d(this._hotspotContainerWrapper,"none"),this._parentDomElement.appendChild(this._hotspotContainerWrapper),this._hotspotContainer=document.createElement("div"),h(this._hotspotContainer),d(this._hotspotContainer,"all"),this._hotspotContainerWrapper.appendChild(this._hotspotContainer),this._updateHandler=this._update.bind(this),this._renderLoop.addEventListener("afterRender",this._updateHandler)}var n=t("minimal-event-emitter"),o=t("./Hotspot"),s=t("./util/calcRect"),a=t("./support/cssPointerEvents"),u=t("./util/positionAbsolutely"),h=t("./util/dom").setAbsolute,l=t("./util/dom").setOverflowHidden,c=t("./util/dom").setOverflowVisible,p=t("./util/dom").setNullSize,f=t("./util/dom").setPixelSize,d=t("./util/dom").setWithVendorPrefix("pointer-events"),m=t("./util/clearOwnProperties");n(i),i.prototype.destroy=function(){for(;this._hotspots.length;)this.destroyHotspot(this._hotspots[0]);this._parentDomElement.removeChild(this._hotspotContainerWrapper),this._renderLoop.removeEventListener("afterRender",this._updateHandler),m(this)},i.prototype.domElement=function(){return this._hotspotContainer},i.prototype.setRect=function(t){t&&!a()&&"undefined"!=typeof console&&console.warn("Using a rect effect is not fully supported on this browser. Hotspots may not be shown."),this._rect=t,this._visibilityOrRectChanged=!0},i.prototype.rect=function(){return this._rect},i.prototype.createHotspot=function(t,e,r){e=e||{};var i=new o(t,this._hotspotContainer,this._view,e,r);return this._hotspots.push(i),i._update(),this.emit("hotspotsChange"),i},i.prototype.hasHotspot=function(t){return this._hotspots.indexOf(t)>=0},i.prototype.listHotspots=function(){return[].concat(this._hotspots)},i.prototype.destroyHotspot=function(t){var e=this._hotspots.indexOf(t);if(e<0)throw new Error("No such hotspot");this._hotspots.splice(e,1),t.destroy(),this.emit("hotspotsChange")},i.prototype.hide=function(){this._visible&&(this._visible=!1,this._visibilityOrRectChanged=!0,this._update())},i.prototype.show=function(){this._visible||(this._visible=!0,this._visibilityOrRectChanged=!0,this._update())},i.prototype._update=function(){var t=this._hotspotContainerWrapper,e=this._stage.width(),r=this._stage.height(),i=this._tmpRect;if(this._visibilityOrRectChanged||this._rect&&(e!==this._stageWidth||r!==this._stageHeight)){var n=this._visible&&!(this._rect&&!a());t.style.display=n?"block":"none",n&&(this._rect?(s(e,r,this._rect,i),u(t,e*i.x,r*i.y),f(t,e*i.width,r*i.height),l(t)):(u(t,0,0),p(t),c(t))),this._stageWidth=e,this._stageHeight=r,this._visibilityOrRectChanged=!1}for(var o=0;o<this._hotspots.length;o++)this._hotspots[o]._update()},e.exports=i},{"./Hotspot":15,"./support/cssPointerEvents":85,"./util/calcRect":87,"./util/clearOwnProperties":91,"./util/dom":100,"./util/positionAbsolutely":111,"minimal-event-emitter":14}],17:[function(t,e,r){"use strict";function i(t,e,r,i,n){n=n||{};var o=this;this._source=t,this._geometry=e,this._view=r,this._textureStore=i,this._effects=n.effects||{},this._fixedLevelIndex=null,this._viewChangeHandler=function(){o.emit("viewChange",o.view())},this._view.addEventListener("change",this._viewChangeHandler),this._textureStoreChangeHandler=function(){o.emit("textureStoreChange",o.textureStore())},this._textureStore.addEventListener("textureLoad",this._textureStoreChangeHandler),this._textureStore.addEventListener("textureError",this._textureStoreChangeHandler),this._textureStore.addEventListener("textureInvalid",this._textureStoreChangeHandler)}var n=t("minimal-event-emitter"),o=t("./util/extend"),s=t("./util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._view.removeEventListener("change",this._viewChangeHandler),this._textureStore.removeEventListener("textureLoad",this._textureStoreChangeHandler),this._textureStore.removeEventListener("textureError",this._textureStoreChangeHandler),this._textureStore.removeEventListener("textureInvalid",this._textureStoreChangeHandler),s(this)},i.prototype.source=function(){return this._source},i.prototype.geometry=function(){return this._geometry},i.prototype.view=function(){return this._view},i.prototype.textureStore=function(){return this._textureStore},i.prototype.effects=function(){return this._effects},i.prototype.setEffects=function(t){this._effects=t,this.emit("effectsChange",this._effects)},i.prototype.mergeEffects=function(t){o(this._effects,t),this.emit("effectsChange",this._effects)},i.prototype.fixedLevel=function(){return this._fixedLevelIndex},i.prototype.setFixedLevel=function(t){if(t!==this._fixedLevelIndex){if(null!=t&&(t>=this._geometry.levelList.length||t<0))throw new Error("Level index out of range: "+t);this._fixedLevelIndex=t,this.emit("fixedLevelChange",this._fixedLevelIndex)}},i.prototype._selectLevel=function(){return null!=this._fixedLevelIndex?this._geometry.levelList[this._fixedLevelIndex]:this._view.selectLevel(this._geometry.selectableLevelList)},i.prototype.visibleTiles=function(t){var e=this._selectLevel();return this._geometry.visibleTiles(this._view,e,t)},i.prototype.pinLevel=function(t){for(var e=this._geometry.levelList[t],r=this._geometry.levelTiles(e),i=0;i<r.length;i++)this._textureStore.pin(r[i])},i.prototype.unpinLevel=function(t){for(var e=this._geometry.levelList[t],r=this._geometry.levelTiles(e),i=0;i<r.length;i++)this._textureStore.unpin(r[i])},i.prototype.pinFirstLevel=function(){return this.pinLevel(0)},i.prototype.unpinFirstLevel=function(){return this.unpinLevel(0)},e.exports=i},{"./util/clearOwnProperties":91,"./util/extend":101,"minimal-event-emitter":14}],18:[function(t,e,r){"use strict";function i(t){this.constructor.super_.apply(this,arguments),this.message=t}t("./util/inherits")(i,Error),e.exports=i},{"./util/inherits":104}],19:[function(t,e,r){"use strict";function i(t){var e=this;this._stage=t,this._running=!1,this._rendering=!1,this._requestHandle=null,this._boundLoop=this._loop.bind(this),this._renderInvalidHandler=function(){e._rendering||e.renderOnNextFrame()},this._stage.addEventListener("renderInvalid",this._renderInvalidHandler)}var n=t("minimal-event-emitter"),o=t("./util/clearOwnProperties");n(i),i.prototype.destroy=function(){this.stop(),this._stage.removeEventListener("renderInvalid",this._renderInvalidHandler),o(this)},i.prototype.stage=function(){return this._stage},i.prototype.start=function(){this._running=!0,this.renderOnNextFrame()},i.prototype.stop=function(){this._requestHandle&&(window.cancelAnimationFrame(this._requestHandle),this._requestHandle=null),this._running=!1},i.prototype.renderOnNextFrame=function(){this._running&&!this._requestHandle&&(this._requestHandle=window.requestAnimationFrame(this._boundLoop))},i.prototype._loop=function(){if(!this._running)throw new Error("Render loop running while in stopped state");this._requestHandle=null,this._rendering=!0,this.emit("beforeRender"),this._rendering=!1,this._stage.render(),this.emit("afterRender")},e.exports=i},{"./util/clearOwnProperties":91,"minimal-event-emitter":14}],20:[function(t,e,r){"use strict";function i(t,e){this._viewer=t,this._view=e,this._layers=[],this._hotspotContainer=new s(t._controlContainer,t.stage(),this._view,t.renderLoop()),this._movement=null,this._movementStartTime=null,this._movementStep=null,this._movementParams=null,this._movementCallback=null,this._updateMovementHandler=this._updateMovement.bind(this),this._updateHotspotContainerHandler=this._updateHotspotContainer.bind(this),this._viewer.addEventListener("sceneChange",this._updateHotspotContainerHandler),this._viewChangeHandler=this.emit.bind(this,"viewChange"),this._view.addEventListener("change",this._viewChangeHandler),this._updateHotspotContainer()}var n=t("./Layer"),o=t("./TextureStore"),s=t("./HotspotContainer"),a=t("minimal-event-emitter"),u=t("./util/now"),h=t("./util/noop"),l=t("./util/type"),c=t("./util/defaults"),p=t("./util/clearOwnProperties");a(i),i.prototype.destroy=function(){this._view.removeEventListener("change",this._viewChangeHandler),this._viewer.removeEventListener("sceneChange",this._updateHotspotContainerHandler),this._movement&&this.stopMovement(),this._hotspotContainer.destroy(),this.destroyAllLayers(),p(this)},i.prototype.hotspotContainer=function(){return this._hotspotContainer},i.prototype.layer=function(){return this._layers[0]},i.prototype.listLayers=function(){return[].concat(this._layers)},i.prototype.view=function(){return this._view},i.prototype.viewer=function(){return this._viewer},i.prototype.visible=function(){return this._viewer.scene()===this},i.prototype.createLayer=function(t){t=t||{};var e=t.textureStoreOpts||{},r=t.layerOpts||{},i=t.source,s=t.geometry,a=this._view,u=this._viewer.stage(),h=new o(i,u,e),l=new n(i,s,a,h,r);return this._layers.push(l),t.pinFirstLevel&&l.pinFirstLevel(),this.emit("layerChange"),l},i.prototype.destroyLayer=function(t){var e=this._layers.indexOf(t);if(e<0)throw new Error("No such layer in scene");this._layers.splice(e,1),this.emit("layerChange"),t.textureStore().destroy(),t.destroy()},i.prototype.destroyAllLayers=function(){for(;this._layers.length>0;)this.destroyLayer(this._layers[0])},i.prototype.switchTo=function(t,e){return this._viewer.switchScene(this,t,e)},i.prototype.lookTo=function(t,e,r){if(e=e||{},r=r||h,"object"!==l(t))throw new Error("Target view parameters must be an object");var i=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},n=null!=e.ease?e.ease:i,o=null!=e.controlsInterrupt&&e.controlsInterrupt,s=null!=e.transitionDuration?e.transitionDuration:1e3,a=null==e.shortest||e.shortest,u=this._view,p=u.parameters(),f={};c(f,t),c(f,p),a&&u.normalizeToClosest&&u.normalizeToClosest(f,f);var d=function(){var t=!1;return function(e,r){if(r>=s&&t)return null;var i=Math.min(r/s,1);for(var o in e){var a=p[o],u=f[o];e[o]=a+n(i)*(u-a)}return t=r>=s,e}},m=this._viewer.controls().enabled();o||this._viewer.controls().disable(),this.startMovement(d,function(){m&&this._viewer.controls().enable(),r()})},i.prototype.startMovement=function(t,e){var r=this._viewer.renderLoop();this._movement&&this.stopMovement();var i=t();if("function"!=typeof i)throw new Error("Bad movement");this._movement=t,this._movementStep=i,this._movementStartTime=u(),this._movementParams={},this._movementCallback=e,r.addEventListener("beforeRender",this._updateMovementHandler),r.renderOnNextFrame()},i.prototype.stopMovement=function(){var t=this._viewer.renderLoop();this._movement&&(this._movementCallback&&this._movementCallback(),t.removeEventListener("beforeRender",this._updateMovementHandler),this._movement=null,this._movementStep=null,this._movementStartTime=null,this._movementParams=null,this._movementCallback=null)},i.prototype.movement=function(){return this._movement},i.prototype._updateMovement=function(){if(!this._movement)throw new Error("Should not call update");var t=this._viewer.renderLoop(),e=this._view,r=u()-this._movementStartTime,i=this._movementStep,n=this._movementParams;n=e.parameters(n),n=i(n,r),null==n?this.stopMovement():(e.setParameters(n),t.renderOnNextFrame())},i.prototype._updateHotspotContainer=function(){this.visible()?this._hotspotContainer.show():this._hotspotContainer.hide()},e.exports=i},{"./HotspotContainer":16,"./Layer":17,"./TextureStore":21,"./util/clearOwnProperties":91,"./util/defaults":96,"./util/noop":107,"./util/now":108,"./util/type":116,"minimal-event-emitter":14}],21:[function(t,e,r){"use strict";function i(){}function n(t,e){var r=this,n=y++;r._id=n,r._store=t,r._tile=e,r._asset=null,r._texture=null,r._changeHandler=function(){t.emit("textureInvalid",e)};var o=t.source(),s=t.stage(),a=o.loadAsset.bind(o),u=s.createTexture.bind(s),h=p(c(a),u);t.emit("textureStartLoad",e),m&&console.log("loading",n,e),r._cancel=h(s,e,function(o,s,a,u){if(r._cancel=null,o)return a&&a.destroy(),u&&u.destroy(),void(o instanceof i?(t.emit("textureCancel",e),m&&console.log("cancel",n,e)):(t.emit("textureError",e,o),m&&console.log("error",n,e)));r._texture=u,a.isDynamic()?(r._asset=a,a.addEventListener("change",r._changeHandler)):a.destroy(),t.emit("textureLoad",e),m&&console.log("load",n,e)})}function o(t,e,r){r=l(r||{},_),this._source=t,this._stage=e,this._state=v.IDLE,this._delimCount=0,this._itemMap=new s,this._visible=new a,this._previouslyVisible=new u(r.previouslyVisibleCacheSize),this._pinMap=new s,this._newVisible=new a,this._noLongerVisible=[],this._visibleAgain=[],this._evicted=[]}var s=t("./collections/Map"),a=t("./collections/Set"),u=t("./collections/LruSet"),h=t("minimal-event-emitter"),l=t("./util/defaults"),c=t("./util/retry"),p=t("./util/chain"),f=t("./util/inherits"),d=t("./util/clearOwnProperties"),m="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.textureStore,v={IDLE:0,START:1,MARK:2,END:3},_={previouslyVisibleCacheSize:512},y=0;f(i,Error),n.prototype.asset=function(){return this._asset},n.prototype.texture=function(){return this._texture},n.prototype.destroy=function(){var t=this._id,e=this._store,r=this._tile,n=this._asset,o=this._texture,s=this._cancel;if(s)return void s(new i("Texture load cancelled"));n&&(n.removeEventListener("change",this._changeHandler),n.destroy()),o&&o.destroy(),e.emit("textureUnload",r),m&&console.log("unload",t,r),d(this)},h(n),h(o),o.prototype.destroy=function(){this.clear(),d(this)},o.prototype.stage=function(){return this._stage},o.prototype.source=function(){return this._source},o.prototype.clear=function(){var t=this;t._evicted.length=0,t._itemMap.forEach(function(e){t._evicted.push(e)}),t._evicted.forEach(function(e){t._unloadTile(e)}),t._itemMap.clear(),t._visible.clear(),t._previouslyVisible.clear(),t._pinMap.clear(),t._newVisible.clear(),t._noLongerVisible.length=0,t._visibleAgain.length=0,t._evicted.length=0},o.prototype.clearNotPinned=function(){var t=this;t._evicted.length=0,t._itemMap.forEach(function(e){t._pinMap.has(e)||t._evicted.push(e)}),t._evicted.forEach(function(e){t._unloadTile(e)}),t._visible.clear(),t._previouslyVisible.clear(),t._evicted.length=0},o.prototype.startFrame=function(){if(this._state!==v.IDLE&&this._state!==v.START)throw new Error("TextureStore: startFrame called out of sequence");this._state=v.START,this._delimCount++},o.prototype.markTile=function(t){if(this._state!==v.START&&this._state!==v.MARK)throw new Error("TextureStore: markTile called out of sequence");this._state=v.MARK;var e=this._itemMap.get(t),r=e&&e.texture(),i=e&&e.asset();r&&i&&r.refresh(t,i),this._newVisible.add(t)},o.prototype.endFrame=function(){if(this._state!==v.START&&this._state!==v.MARK&&this._state!==v.END)throw new Error("TextureStore: endFrame called out of sequence");this._state=v.END,--this._delimCount||(this._update(),this._state=v.IDLE)},o.prototype._update=function(){var t=this;t._noLongerVisible.length=0,t._visible.forEach(function(e){t._newVisible.has(e)||t._noLongerVisible.push(e)}),t._visibleAgain.length=0,t._newVisible.forEach(function(e){t._previouslyVisible.has(e)&&t._visibleAgain.push(e)}),t._visibleAgain.forEach(function(e){t._previouslyVisible.remove(e)}),t._evicted.length=0,t._noLongerVisible.forEach(function(e){var r=t._itemMap.get(e);if(r&&r.texture()){var i=t._previouslyVisible.add(e);null!=i&&t._evicted.push(i)}else r&&t._unloadTile(e)}),t._evicted.forEach(function(e){t._pinMap.has(e)||t._unloadTile(e)}),t._newVisible.forEach(function(e){t._itemMap.get(e)||t._loadTile(e)});var e=t._visible;t._visible=t._newVisible,t._newVisible=e,t._newVisible.clear(),t._noLongerVisible.length=0,t._visibleAgain.length=0,t._evicted.length=0},o.prototype._loadTile=function(t){if(this._itemMap.has(t))throw new Error("TextureStore: loading texture already in cache");var e=new n(this,t);this._itemMap.set(t,e)},o.prototype._unloadTile=function(t){var e=this._itemMap.del(t);if(!e)throw new Error("TextureStore: unloading texture not in cache");e.destroy()},o.prototype.asset=function(t){var e=this._itemMap.get(t);return e?e.asset():null},o.prototype.texture=function(t){var e=this._itemMap.get(t);return e?e.texture():null},o.prototype.pin=function(t){var e=(this._pinMap.get(t)||0)+1;return this._pinMap.set(t,e),this._itemMap.has(t)||this._loadTile(t),e},o.prototype.unpin=function(t){var e=this._pinMap.get(t);if(!e)throw new Error("TextureStore: unpin when not pinned");return e--,e>0?this._pinMap.set(t,e):(this._pinMap.del(t),this._visible.has(t)||this._previouslyVisible.has(t)||this._unloadTile(t)),e},o.prototype.query=function(t){var e=this._itemMap.get(t),r=this._pinMap.get(t)||0;return{visible:this._visible.has(t),previouslyVisible:this._previouslyVisible.has(t),hasAsset:null!=e&&null!=e.asset(),hasTexture:null!=e&&null!=e.texture(),pinned:0!==r,pinCount:r}},e.exports=o},{"./collections/LruSet":30,"./collections/Map":31,"./collections/Set":32,"./util/chain":89,"./util/clearOwnProperties":91,"./util/defaults":96,"./util/inherits":104,"./util/retry":114,"minimal-event-emitter":14}],22:[function(t,e,r){"use strict";function i(){this._stack=[],this._visited=new n,this._vertices=null}var n=t("./collections/Set");i.prototype.search=function(t,e,r){var i=this._stack,n=this._visited,o=this._vertices,s=0;for(this._clear(),i.push(e);i.length>0;){var a=i.pop();if(!n.has(a)&&t.intersects(a.vertices(o))){n.add(a);for(var u=a.neighbors(),h=0;h<u.length;h++)i.push(u[h]);r.push(a),s++}}return this._vertices=o,this._clear(),s},i.prototype._clear=function(){this._stack.length=0,this._visited.clear()},e.exports=i},{"./collections/Set":32}],23:[function(t,e,r){"use strict";function i(t){t=o(t||{},a),this._duration=t.duration,this._startTime=null,this._handle=null,this._check=this._check.bind(this)}var n=t("minimal-event-emitter"),o=t("./util/defaults"),s=t("./util/now"),a={duration:Infinity};n(i),i.prototype.start=function(){this._startTime=s(),null==this._handle&&this._duration<Infinity&&this._setup(this._duration)},i.prototype.started=function(){return null!=this._startTime},i.prototype.stop=function(){this._startTime=null,null!=this._handle&&(clearTimeout(this._handle),this._handle=null)},i.prototype._setup=function(t){this._handle=setTimeout(this._check,t)},i.prototype._teardown=function(){clearTimeout(this._handle),this._handle=null},i.prototype._check=function(){var t=s(),e=t-this._startTime,r=this._duration-e;this._teardown(),r<=0?(this.emit("timeout"),this._startTime=null):r<Infinity&&this._setup(r)},i.prototype.duration=function(){return this._duration},i.prototype.setDuration=function(t){this._duration=t,null!=this._startTime&&this._check()},e.exports=i},{"./util/defaults":96,"./util/now":108,"minimal-event-emitter":14}],24:[function(t,e,r){"use strict";function i(t,e){e=e||{},this._domElement=t,y(t);var r;if(e.stageType){if(!(r=T[e.stageType]))throw new Error("Unknown stage type: "+e.stageType)}else{for(var i=0;i<P.length;i++)if(P[i].supported()){r=P[i];break}if(!r)throw new Error("None of the stage types are supported")}this._stage=new r(e.stage),_(this._stage),this._domElement.appendChild(this._stage.domElement()),this._controlContainer=document.createElement("div"),g(this._controlContainer),w(this._controlContainer),o.ios&&this._controlContainer.addEventListener("touchmove",function(t){t.preventDefault()});var n=document.createElement("div");g(n),w(n),M(n),this._controlContainer.appendChild(n),t.appendChild(this._controlContainer),this._size={},this.updateSize(),this._updateSizeListener=this.updateSize.bind(this),window.addEventListener("resize",this._updateSizeListener),this._renderLoop=new a(this._stage),this._controls=new u,this._controlMethods=v(this._controls,this._controlContainer,e.controls),this._controls.attach(this._renderLoop),this._hammerManagerTouch=m.get(this._controlContainer,"touch"),this._hammerManagerMouse=m.get(this._controlContainer,"mouse"),this._dragCursor=new d(this._controls,"mouseViewDrag",t,e.cursors&&e.cursors.drag||{}),this._renderLoop.start(),this._scenes=[],this._currentScene=null,this._replacedScene=null,this._cancelCurrentTween=null,this._layerChangeHandler=this._updateSceneLayers.bind(this),this._viewChangeHandler=this.emit.bind(this,"viewChange"),this._idleTimer=new l,this._idleTimer.start(),this._resetIdleTimerHandler=this._resetIdleTimer.bind(this),this.addEventListener("viewChange",this._resetIdleTimerHandler),this._triggerIdleTimerHandler=this._triggerIdleTimer.bind(this),this._idleTimer.addEventListener("timeout",this._triggerIdleTimerHandler),this._stopMovementHandler=this.stopMovement.bind(this),this._controls.addEventListener("active",this._stopMovementHandler),this.addEventListener("sceneChange",this._stopMovementHandler),this._idleMovement=null}function n(t,e,r){e.listLayers().forEach(function(e){e.mergeEffects({opacity:t})}),e._hotspotContainer.domElement().style.opacity=t}var o=t("bowser"),s=t("minimal-event-emitter"),a=t("./RenderLoop"),u=t("./controls/Controls"),h=t("./Scene"),l=t("./Timer"),c=t("./stages/WebGl"),p=t("./stages/Css"),f=t("./stages/Flash"),d=t("./controls/ControlCursor"),m=t("./controls/HammerGestures"),v=t("./controls/registerDefaultControls"),_=t("./renderers/registerDefaultRenderers"),y=t("./util/dom").setOverflowHidden,g=t("./util/dom").setAbsolute,w=t("./util/dom").setFullSize,M=t("./util/dom").setBlocking,b=t("./util/tween"),x=t("./util/noop"),E=t("./util/clearOwnProperties"),T={webgl:c,css:p,flash:f},P=[c,p,f];s(i),i.prototype.destroy=function(){window.removeEventListener("resize",this._updateSizeListener),this._currentScene&&this._removeSceneEventListeners(this._currentScene),this._replacedScene&&this._removeSceneEventListeners(this._replacedScene),this._dragCursor.destroy();for(var t in this._controlMethods)this._controlMethods[t].destroy();for(;this._scenes.length;)this.destroyScene(this._scenes[0]);this._domElement.removeChild(this._stage.domElement()),this._stage.destroy(),this._renderLoop.destroy(),this._controls.destroy(),this._controls=null,this._cancelCurrentTween&&this._cancelCurrentTween(),E(this)},i.prototype.updateSize=function(){var t=this._size;t.width=this._domElement.clientWidth,t.height=this._domElement.clientHeight,this._stage.setSize(t)},i.prototype.stage=function(){return this._stage},i.prototype.renderLoop=function(){return this._renderLoop},i.prototype.controls=function(){return this._controls},i.prototype.domElement=function(){return this._domElement},i.prototype.createScene=function(t){t=t||{};var e=this.createEmptyScene({view:t.view});return e.createLayer({source:t.source,geometry:t.geometry,pinFirstLevel:t.pinFirstLevel,textureStoreOpts:t.textureStoreOpts,layerOpts:t.layerOpts}),e},i.prototype.createEmptyScene=function(t){t=t||{};var e=new h(this,t.view);return this._scenes.push(e),e},i.prototype._updateSceneLayers=function(){var t,e,r=this._stage,i=this._currentScene,n=this._replacedScene,o=r.listLayers(),s=[];if(n&&(s=s.concat(n.listLayers())),i&&(s=s.concat(i.listLayers())),1!==Math.abs(o.length-s.length))throw new Error("Stage and scene out of sync");if(s.length<o.length)for(t=0;t<o.length;t++)if(e=o[t],s.indexOf(e)<0){this._removeLayerFromStage(e);break}if(s.length>o.length)for(t=0;t<s.length;t++)e=s[t],o.indexOf(e)<0&&this._addLayerToStage(e,t)},i.prototype._addLayerToStage=function(t,e){t.pinFirstLevel(),this._stage.addLayer(t,e)},i.prototype._removeLayerFromStage=function(t){this._stage.removeLayer(t),t.unpinFirstLevel(),t.textureStore().clearNotPinned()},i.prototype._addSceneEventListeners=function(t){t.addEventListener("layerChange",this._layerChangeHandler),t.addEventListener("viewChange",this._viewChangeHandler)},i.prototype._removeSceneEventListeners=function(t){t.removeEventListener("layerChange",this._layerChangeHandler),t.removeEventListener("viewChange",this._viewChangeHandler)},i.prototype.destroyScene=function(t){var e=this._scenes.indexOf(t);if(e<0)throw new Error("No such scene in viewer");var r,i;if(this._currentScene===t){for(this._removeSceneEventListeners(t),i=t.listLayers(),r=0;r<i.length;r++)this._removeLayerFromStage(i[r]);this._cancelCurrentTween&&(this._cancelCurrentTween(),this._cancelCurrentTween=null),this._currentScene=null,this.emit("sceneChange")}if(this._replacedScene===t){for(this._removeSceneEventListeners(t),i=t.listLayers(),r=0;r<i.length;r++)this._removeLayerFromStage(i[r]);this._replacedScene=null}this._scenes.splice(e,1),t.destroy()
},i.prototype.destroyAllScenes=function(){for(;this._scenes.length>0;)this.destroyScene(this._scenes[0])},i.prototype.hasScene=function(t){return this._scenes.indexOf(t)>=0},i.prototype.listScenes=function(){return[].concat(this._scenes)},i.prototype.scene=function(){return this._currentScene},i.prototype.view=function(){var t=this._currentScene;return t?t.view():null},i.prototype.lookTo=function(t,e,r){var i=this._currentScene;i&&i.lookTo(t,e,r)},i.prototype.startMovement=function(t,e){var r=this._currentScene;r&&r.startMovement(t,e)},i.prototype.stopMovement=function(){var t=this._currentScene;t&&t.stopMovement()},i.prototype.movement=function(){var t=this._currentScene;if(t)return t.movement()},i.prototype.setIdleMovement=function(t,e){this._idleTimer.setDuration(t),this._idleMovement=e},i.prototype.breakIdleMovement=function(){this.stopMovement(),this._resetIdleTimer()},i.prototype._resetIdleTimer=function(){this._idleTimer.start()},i.prototype._triggerIdleTimer=function(){var t=this._idleMovement;t&&this.startMovement(t)};i.prototype.switchScene=function(t,e,r){function i(e){f(e,t,u)}function o(){if(s._replacedScene){s._removeSceneEventListeners(s._replacedScene),h=s._replacedScene.listLayers();for(var t=0;t<h.length;t++)s._removeLayerFromStage(h[t]);s._replacedScene=null}s._cancelCurrentTween=null,r()}var s=this;e=e||{},r=r||x;var a=this._stage,u=this._currentScene;if(u===t)return void r();if(this._scenes.indexOf(t)<0)throw new Error("No such scene in viewer");this._cancelCurrentTween&&(this._cancelCurrentTween(),this._cancelCurrentTween=null);var h=u?u.listLayers():[],l=t.listLayers(),c=a.listLayers();if(u&&(c.length!==h.length||c.length>1&&c[0]!=h[0]))throw new Error("Stage not in sync with viewer");for(var p=null!=e.transitionDuration?e.transitionDuration:1e3,f=null!=e.transitionUpdate?e.transitionUpdate:n,d=0;d<l.length;d++)this._addLayerToStage(l[d]);this._cancelCurrentTween=b(p,i,o),this._currentScene=t,this._replacedScene=u,this.emit("sceneChange"),this.emit("viewChange"),this._addSceneEventListeners(t)},e.exports=i},{"./RenderLoop":19,"./Scene":20,"./Timer":23,"./controls/ControlCursor":37,"./controls/Controls":38,"./controls/HammerGestures":42,"./controls/registerDefaultControls":49,"./renderers/registerDefaultRenderers":70,"./stages/Css":77,"./stages/Flash":78,"./stages/WebGl":81,"./util/clearOwnProperties":91,"./util/dom":100,"./util/noop":107,"./util/tween":115,bowser:1,"minimal-event-emitter":14}],25:[function(t,e,r){"use strict";function i(t){this.constructor.super_.call(this,t),this._timestamp=0}var n=t("./Static"),o=t("../util/inherits"),s=t("minimal-event-emitter"),a=t("../util/clearOwnProperties");o(i,n),s(i),i.prototype.destroy=function(){a(this)},i.prototype.timestamp=function(){return this._timestamp},i.prototype.isDynamic=function(){return!0},i.prototype.markDirty=function(){this._timestamp++,this.emit("change")},e.exports=i},{"../util/clearOwnProperties":91,"../util/inherits":104,"./Static":27,"minimal-event-emitter":14}],26:[function(t,e,r){"use strict";function i(t,e){this._flashElement=t,this._imageId=e}var n=t("minimal-event-emitter"),o=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._flashElement.unloadImage(this._imageId),o(this)},i.prototype.element=function(){return this._imageId},i.prototype.width=function(){return 0},i.prototype.height=function(){return 0},i.prototype.timestamp=function(){return 0},i.prototype.isDynamic=function(){return!1},e.exports=i},{"../util/clearOwnProperties":91,"minimal-event-emitter":14}],27:[function(t,e,r){"use strict";function i(t){var e=!1;for(var r in a)if(n[r]&&t instanceof n[r]){e=!0,this._widthProp=a[r][0],this._heightProp=a[r][1];break}if(!e)throw new Error("Unsupported pixel source");this._element=t}var n=t("../util/global"),o=t("minimal-event-emitter"),s=t("../util/clearOwnProperties"),a={HTMLImageElement:["naturalWidth","naturalHeight"],HTMLCanvasElement:["width","height"],ImageBitmap:["width","height"]};o(i),i.prototype.destroy=function(){s(this)},i.prototype.element=function(){return this._element},i.prototype.width=function(){return this._element[this._widthProp]},i.prototype.height=function(){return this._element[this._heightProp]},i.prototype.timestamp=function(){return 0},i.prototype.isDynamic=function(){return!1},e.exports=i},{"../util/clearOwnProperties":91,"../util/global":102,"minimal-event-emitter":14}],28:[function(t,e,r){"use strict";function i(t){t=n(t||{},o);var e=t.yawSpeed,r=t.pitchSpeed,i=t.fovSpeed,s=t.yawAccel,a=t.pitchAccel,u=t.fovAccel,h=t.targetPitch,l=t.targetFov;return function(){var t,n,o,c,p=0,f=0,d=0,m=0,v=0,_=0,y=0;return function(g,w){if(t=(w-p)/1e3,v=Math.min(f+t*s,e),n=v*t,g.yaw=g.yaw+n,null!=h&&g.pitch!==h){var M=.5*d*d/a;_=Math.abs(h-g.pitch)>M?Math.min(d+t*a,r):Math.max(d-t*a,0),o=_*t,h<g.pitch&&(g.pitch=Math.max(h,g.pitch-o)),h>g.pitch&&(g.pitch=Math.min(h,g.pitch+o))}if(null!=l&&g.fov!==h){var b=.5*m*m/u;y=Math.abs(l-g.fov)>b?Math.min(m+t*u,i):Math.max(m-t*u,0),c=y*t,l<g.fov&&(g.fov=Math.max(l,g.fov-c)),l>g.fov&&(g.fov=Math.min(l,g.fov+c))}return p=w,f=v,d=_,m=y,g}}}var n=t("./util/defaults"),o={yawSpeed:.1,pitchSpeed:.1,fovSpeed:.1,yawAccel:.01,pitchAccel:.01,fovAccel:.01,targetPitch:0,targetFov:null};e.exports=i},{"./util/defaults":96}],29:[function(t,e,r){"use strict";function i(t){if(!isFinite(t)||Math.floor(t)!==t||t<0)throw new Error("LruMap: invalid capacity");this._capacity=t,this._keys=new Array(this._capacity),this._values=new Array(this._capacity),this._start=0,this._size=0}var n=t("../util/mod");i.prototype._index=function(t){return n(this._start+t,this._capacity)},i.prototype.get=function(t){for(var e=0;e<this._size;e++){var r=this._keys[this._index(e)];if(t.equals(r))return this._values[this._index(e)]}return null},i.prototype.set=function(t,e){if(0===this._capacity)return t;this.del(t);var r=this._size===this._capacity?this._keys[this._index(0)]:null;return this._keys[this._index(this._size)]=t,this._values[this._index(this._size)]=e,this._size<this._capacity?this._size++:this._start=this._index(1),r},i.prototype.del=function(t){for(var e=0;e<this._size;e++)if(t.equals(this._keys[this._index(e)])){for(var r=this._values[this._index(e)],i=e;i<this._size-1;i++)this._keys[this._index(i)]=this._keys[this._index(i+1)],this._values[this._index(i)]=this._values[this._index(i+1)];return this._size--,r}return null},i.prototype.has=function(t){for(var e=0;e<this._size;e++)if(t.equals(this._keys[this._index(e)]))return!0;return!1},i.prototype.size=function(){return this._size},i.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._start=0,this._size=0},i.prototype.forEach=function(t){for(var e=0,r=0;r<this._size;r++)t(this._keys[this._index(r)],this._values[this._index(r)]),e+=1;return e},e.exports=i},{"../util/mod":106}],30:[function(t,e,r){"use strict";function i(t){if(!isFinite(t)||Math.floor(t)!==t||t<0)throw new Error("LruSet: invalid capacity");this._capacity=t,this._elements=new Array(this._capacity),this._start=0,this._size=0}var n=t("../util/mod");i.prototype._index=function(t){return n(this._start+t,this._capacity)},i.prototype.add=function(t){if(0===this._capacity)return t;this.remove(t);var e=this._size===this._capacity?this._elements[this._index(0)]:null;return this._elements[this._index(this._size)]=t,this._size<this._capacity?this._size++:this._start=this._index(1),e},i.prototype.remove=function(t){for(var e=0;e<this._size;e++){var r=this._elements[this._index(e)];if(t.equals(r)){for(var i=e;i<this._size-1;i++)this._elements[this._index(i)]=this._elements[this._index(i+1)];return this._size--,r}}return null},i.prototype.has=function(t){for(var e=0;e<this._size;e++)if(t.equals(this._elements[this._index(e)]))return!0;return!1},i.prototype.size=function(){return this._size},i.prototype.clear=function(){this._elements.length=0,this._start=0,this._size=0},i.prototype.forEach=function(t){for(var e=0,r=0;r<this._size;r++)t(this._elements[this._index(r)]),e+=1;return e},e.exports=i},{"../util/mod":106}],31:[function(t,e,r){"use strict";function i(t){if(null!=t&&(!isFinite(t)||Math.floor(t)!==t||t<1))throw new Error("Map: invalid capacity");this._capacity=t||o,this._keyBuckets=[],this._valBuckets=[];for(var e=0;e<this._capacity;e++)this._keyBuckets.push([]),this._valBuckets.push([]);this._size=0}var n=t("../util/mod"),o=64;i.prototype.get=function(t){for(var e=n(t.hash(),this._capacity),r=this._keyBuckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o)){return this._valBuckets[e][i]}}return null},i.prototype.set=function(t,e){for(var r=n(t.hash(),this._capacity),i=this._keyBuckets[r],o=this._valBuckets[r],s=0;s<i.length;s++){var a=i[s];if(t.equals(a)){var u=o[s];return i[s]=t,o[s]=e,u}}return i.push(t),o.push(e),this._size++,null},i.prototype.del=function(t){for(var e=n(t.hash(),this._capacity),r=this._keyBuckets[e],i=this._valBuckets[e],o=0;o<r.length;o++){var s=r[o];if(t.equals(s)){for(var a=i[o],u=o;u<r.length-1;u++)r[u]=r[u+1],i[u]=i[u+1];return r.length=r.length-1,i.length=i.length-1,this._size--,a}}return null},i.prototype.has=function(t){for(var e=n(t.hash(),this._capacity),r=this._keyBuckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o))return!0}return!1},i.prototype.size=function(){return this._size},i.prototype.clear=function(){for(var t=0;t<this._capacity;t++)this._keyBuckets[t].length=0,this._valBuckets[t].length=0;this._size=0},i.prototype.forEach=function(t){for(var e=0,r=0;r<this._capacity;r++)for(var i=this._keyBuckets[r],n=this._valBuckets[r],o=0;o<i.length;o++)t(i[o],n[o]),e+=1;return e},e.exports=i},{"../util/mod":106}],32:[function(t,e,r){"use strict";function i(t){if(null!=t&&(!isFinite(t)||Math.floor(t)!==t||t<1))throw new Error("Set: invalid capacity");this._capacity=this._capacity||o,this._buckets=[];for(var e=0;e<this._capacity;e++)this._buckets.push([]);this._size=0}var n=t("../util/mod"),o=64;i.prototype.add=function(t){for(var e=n(t.hash(),this._capacity),r=this._buckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o))return r[i]=t,o}return r.push(t),this._size++,null},i.prototype.remove=function(t){for(var e=n(t.hash(),this._capacity),r=this._buckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o)){for(var s=i;s<r.length-1;s++)r[s]=r[s+1];return r.length=r.length-1,this._size--,o}}return null},i.prototype.has=function(t){for(var e=n(t.hash(),this._capacity),r=this._buckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o))return!0}return!1},i.prototype.size=function(){return this._size},i.prototype.clear=function(){for(var t=0;t<this._capacity;t++)this._buckets[t].length=0;this._size=0},i.prototype.forEach=function(t){for(var e=0,r=0;r<this._capacity;r++)for(var i=this._buckets[r],n=0;n<i.length;n++)t(i[n]),e+=1;return e},e.exports=i},{"../util/mod":106}],33:[function(t,e,r){"use strict";function i(t){this._concurrency=t&&t.concurrency||1,this._paused=t&&!!t.paused||!1,this._pool=[];for(var e=0;e<this._concurrency;e++)this._pool.push(new n(t));this._next=0}var n=t("./WorkQueue"),o=t("../util/mod");i.prototype.length=function(){for(var t=0,e=0;e<this._pool.length;e++)t+=this._pool[e].length();return t},i.prototype.push=function(t,e){var r=this._next,i=this._pool[r].push(t,e);return this._next=o(this._next+1,this._concurrency),i},i.prototype.pause=function(){if(!this._paused){this._paused=!0;for(var t=0;t<this._concurrency;t++)this._pool[t].pause()}},i.prototype.resume=function(){if(this._paused){this._paused=!1;for(var t=0;t<this._concurrency;t++)this._pool[t].resume()}},e.exports=i},{"../util/mod":106,"./WorkQueue":34}],34:[function(t,e,r){"use strict";function i(t,e){this.fn=t,this.cb=e,this.cfn=null}function n(t){this._queue=[],this._delay=t&&t.delay||0,this._paused=t&&!!t.paused||!1,this._currentTask=null,this._lastFinished=null}var o=t("../util/now");n.prototype.length=function(){return this._queue.length},n.prototype.push=function(t,e){var r=new i(t,e),n=this._cancel.bind(this,r);return this._queue.push(r),this._next(),n},n.prototype.pause=function(){this._paused||(this._paused=!0)},n.prototype.resume=function(){this._paused&&(this._paused=!1,this._next())},n.prototype._start=function(t){if(this._currentTask)throw new Error("WorkQueue: called start while running task");this._currentTask=t;var e=this._finish.bind(this,t);if(t.cfn=t.fn(e),"function"!=typeof t.cfn)throw new Error("WorkQueue: function is not cancellable")},n.prototype._finish=function(t){var e=Array.prototype.slice.call(arguments,1);if(this._currentTask!==t)throw new Error("WorkQueue: called finish on wrong task");t.cb.apply(null,e),this._currentTask=null,this._lastFinished=o(),this._next()},n.prototype._cancel=function(t){var e=Array.prototype.slice.call(arguments,1);if(this._currentTask===t)t.cfn.apply(null,e);else{var r=this._queue.indexOf(t);r>=0&&(this._queue.splice(r,1),t.cb.apply(null,e))}},n.prototype._next=function(){if(!this._paused&&this._queue.length&&!this._currentTask){if(null!=this._lastFinished){var t=o()-this._lastFinished,e=this._delay-t;if(e>0)return void setTimeout(this._next.bind(this),e)}var r=this._queue.shift();this._start(r)}},e.exports=n},{"../util/now":108}],35:[function(t,e,r){"use strict";function i(t){var e=t||{};return e.colorOffset=e.colorOffset||a.create(),e.colorMatrix=e.colorMatrix||u.create(),e}function n(t,e,r){o(r,t,e.colorMatrix),a.add(r,r,e.colorOffset)}function o(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3];return t[0]=r[0]*i+r[1]*n+r[2]*o+r[3]*s,t[1]=r[4]*i+r[5]*n+r[6]*o+r[7]*s,t[2]=r[8]*i+r[9]*n+r[10]*o+r[11]*s,t[3]=r[12]*i+r[13]*n+r[14]*o+r[15]*s,t}function s(t,e){for(var r=t.width,i=t.height,o=t.data,s=0;s<r*i;s++)a.set(h,o[4*s+0]/255,o[4*s+1]/255,o[4*s+2]/255,o[4*s+3]/255),n(h,e,h),o[4*s+0]=255*h[0],o[4*s+1]=255*h[1],o[4*s+2]=255*h[2],o[4*s+3]=255*h[3]}var a=t("gl-matrix").vec4,u=t("gl-matrix").mat4,h=a.create();e.exports={identity:i,applyToPixel:n,applyToImageData:s}},{"gl-matrix":3}],36:[function(t,e,r){"use strict";function i(t){t=t||{},this._methods=[],this._parameters=["x","y","axisScaledX","axisScaledY","zoom","yaw","pitch","roll"],this._now=t.nowForTesting||s,this._composedOffsets={},this._composeReturn={offsets:this._composedOffsets,changing:null}}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("../util/now"),a=t("../util/clearOwnProperties");n(i),i.prototype.add=function(t){if(!this.has(t)){var e={};this._parameters.forEach(function(t){e[t]={dynamics:new o,time:null}});var r=this._updateDynamics.bind(this,e),i={instance:t,dynamics:e,parameterDynamicsHandler:r};t.addEventListener("parameterDynamics",r),this._methods.push(i)}},i.prototype.remove=function(t){var e=this._indexOfInstance(t);if(e>=0){var r=this._methods.splice(e,1)[0];r.instance.removeEventListener("parameterDynamics",r.parameterDynamicsHandler)}},i.prototype.has=function(t){return this._indexOfInstance(t)>=0},i.prototype._indexOfInstance=function(t){for(var e=0;e<this._methods.length;e++)if(this._methods[e].instance===t)return e;return-1},i.prototype.list=function(){for(var t=[],e=0;e<this._methods.length;e++)t.push(this._methods[e].instance);return t},i.prototype._updateDynamics=function(t,e,r){var i=t[e];if(!i)throw new Error("Unknown control parameter "+e);var n=this._now();i.dynamics.update(r,(n-i.time)/1e3),i.time=n,this.emit("change")},i.prototype._resetComposedOffsets=function(){for(var t=0;t<this._parameters.length;t++)this._composedOffsets[this._parameters[t]]=0},i.prototype.offsets=function(){var t,e=!1,r=this._now();this._resetComposedOffsets();for(var i=0;i<this._methods.length;i++)for(var n=this._methods[i].dynamics,o=0;o<this._parameters.length;o++){t=this._parameters[o];var s=n[t],a=s.dynamics;null!=a.offset&&(this._composedOffsets[t]+=a.offset,a.offset=null);var u=(r-s.time)/1e3,h=a.offsetFromVelocity(u);h&&(this._composedOffsets[t]+=h);var l=a.velocityAfter(u);a.velocity=l,l&&(e=!0),s.time=r}return this._composeReturn.changing=e,this._composeReturn},i.prototype.destroy=function(){for(var t=this.list(),e=0;e<t.length;e++)this.remove(t[e]);a(this)},e.exports=i},{"../util/clearOwnProperties":91,"../util/now":108,"./Dynamics":40,"minimal-event-emitter":14}],37:[function(t,e,r){"use strict";function i(t,e,r,i){i=n(i||{},s),this._element=r,this._controls=t,this._id=e,this._attached=!1,this._setActiveCursor=this._setCursor.bind(this,i.active),this._setInactiveCursor=this._setCursor.bind(this,i.inactive),this._setDisabledCursor=this._setCursor.bind(this,i.disabled),this._setOriginalCursor=this._setCursor.bind(this,this._element.style.cursor),this._updateAttachmentHandler=this._updateAttachment.bind(this),t.addEventListener("methodEnabled",this._updateAttachmentHandler),t.addEventListener("methodDisabled",this._updateAttachmentHandler),t.addEventListener("enabled",this._updateAttachmentHandler),t.addEventListener("disabled",this._updateAttachmentHandler),this._updateAttachment()}var n=t("../util/defaults"),o=t("../util/clearOwnProperties"),s={active:"move",inactive:"default",disabled:"default"};i.prototype.destroy=function(){this._detachFromControlMethod(this._controls.method(this._id)),this._setOriginalCursor(),this._controls.removeEventListener("methodEnabled",this._updateAttachmentHandler),this._controls.removeEventListener("methodDisabled",this._updateAttachmentHandler),this._controls.removeEventListener("enabled",this._updateAttachmentHandler),this._controls.removeEventListener("disabled",this._updateAttachmentHandler),o(this)},i.prototype._updateAttachment=function(){var t=this._controls,e=this._id;t.enabled()&&t.method(e).enabled?this._attachToControlMethod(t.method(e)):this._detachFromControlMethod(t.method(e))},i.prototype._attachToControlMethod=function(t){this._attached||(t.instance.addEventListener("active",this._setActiveCursor),t.instance.addEventListener("inactive",this._setInactiveCursor),t.active?this._setActiveCursor():this._setInactiveCursor(),this._attached=!0)},i.prototype._detachFromControlMethod=function(t){this._attached&&(t.instance.removeEventListener("active",this._setActiveCursor),t.instance.removeEventListener("inactive",this._setInactiveCursor),this._setDisabledCursor(),this._attached=!1)},i.prototype._setCursor=function(t){this._element.style.cursor=t},e.exports=i},{"../util/clearOwnProperties":91,"../util/defaults":96}],38:[function(t,e,r){"use strict";function i(t){t=t||{},this._methods={},this._methodGroups={},this._composer=new o,this._enabled=!t||!t.enabled||!!t.enabled,this._activeCount=0,this.updatedViews_=[],this._attachedRenderLoop=null}var n=t("minimal-event-emitter"),o=t("./Composer"),s=t("../util/clearOwnProperties"),a="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.controls;n(i),i.prototype.destroy=function(){this.detach(),this._composer.destroy(),s(this)},i.prototype.methods=function(){var t={};for(var e in this._methods)t[e]=this._methods[e];return t},i.prototype.method=function(t){return this._methods[t]},i.prototype.registerMethod=function(t,e,r){if(this._methods[t])throw new Error("Control method already registered with id "+t);this._methods[t]={instance:e,enabled:!1,active:!1,activeHandler:this._handleActive.bind(this,t),inactiveHandler:this._handleInactive.bind(this,t)},r&&this.enableMethod(t,e)},i.prototype.unregisterMethod=function(t){var e=this._methods[t];if(!e)throw new Error("No control method registered with id "+t);e.enabled&&this.disableMethod(t),delete this._methods[t]},i.prototype.enableMethod=function(t){var e=this._methods[t];if(!e)throw new Error("No control method registered with id "+t);e.enabled||(e.enabled=!0,e.active&&this._incrementActiveCount(),this._listen(t),this._updateComposer(),this.emit("methodEnabled",t))},i.prototype.disableMethod=function(t){var e=this._methods[t];if(!e)throw new Error("No control method registered with id "+t);e.enabled&&(e.enabled=!1,e.active&&this._decrementActiveCount(),this._unlisten(t),this._updateComposer(),this.emit("methodDisabled",t))},i.prototype.addMethodGroup=function(t,e){this._methodGroups[t]=e},i.prototype.removeMethodGroup=function(t){delete this._methodGroups[t]},i.prototype.methodGroups=function(){var t={};for(var e in this._methodGroups)t[e]=this._methodGroups[e];return t},i.prototype.enableMethodGroup=function(t){var e=this;e._methodGroups[t].forEach(function(t){e.enableMethod(t)})},i.prototype.disableMethodGroup=function(t){var e=this;e._methodGroups[t].forEach(function(t){e.disableMethod(t)})},i.prototype.enabled=function(){return this._enabled},i.prototype.enable=function(){this._enabled||(this._enabled=!0,this._activeCount>0&&this.emit("active"),this.emit("enabled"),this._updateComposer())},i.prototype.disable=function(){this._enabled&&(this._enabled=!1,this._activeCount>0&&this.emit("inactive"),this.emit("disabled"),this._updateComposer())},i.prototype.attach=function(t){this._attachedRenderLoop&&this.detach(),this._attachedRenderLoop=t,this._beforeRenderHandler=this._updateViewsWithControls.bind(this),this._changeHandler=t.renderOnNextFrame.bind(t),this._attachedRenderLoop.addEventListener("beforeRender",this._beforeRenderHandler),this._composer.addEventListener("change",this._changeHandler)},i.prototype.detach=function(){this._attachedRenderLoop&&(this._attachedRenderLoop.removeEventListener("beforeRender",this._beforeRenderHandler),this._composer.removeEventListener("change",this._changeHandler),this._beforeRenderHandler=null,this._changeHandler=null,this._attachedRenderLoop=null)},i.prototype.attached=function(){return null!=this._attachedRenderLoop},i.prototype._listen=function(t){var e=this._methods[t];if(!e)throw new Error("Bad method id");e.instance.addEventListener("active",e.activeHandler),e.instance.addEventListener("inactive",e.inactiveHandler)},i.prototype._unlisten=function(t){var e=this._methods[t];if(!e)throw new Error("Bad method id");e.instance.removeEventListener("active",e.activeHandler),e.instance.removeEventListener("inactive",e.inactiveHandler)},i.prototype._handleActive=function(t){var e=this._methods[t];if(!e)throw new Error("Bad method id");if(!e.enabled)throw new Error("Should not receive event from disabled control method");e.active||(e.active=!0,this._incrementActiveCount())},i.prototype._handleInactive=function(t){var e=this._methods[t];if(!e)throw new Error("Bad method id");if(!e.enabled)throw new Error("Should not receive event from disabled control method");e.active&&(e.active=!1,this._decrementActiveCount())},i.prototype._incrementActiveCount=function(){this._activeCount++,a&&this._checkActiveCount(),this._enabled&&1===this._activeCount&&this.emit("active")},i.prototype._decrementActiveCount=function(){this._activeCount--,a&&this._checkActiveCount(),this._enabled&&0===this._activeCount&&this.emit("inactive")},i.prototype._checkActiveCount=function(){var t=0;for(var e in this._methods){var r=this._methods[e];r.enabled&&r.active&&t++}if(t!=this._activeCount)throw new Error("Bad control state")},i.prototype._updateComposer=function(){var t=this._composer;for(var e in this._methods){var r=this._methods[e],i=this._enabled&&r.enabled;i&&!t.has(r.instance)&&t.add(r.instance),!i&&t.has(r.instance)&&t.remove(r.instance)}},i.prototype._updateViewsWithControls=function(){var t=this._composer.offsets();t.changing&&this._attachedRenderLoop.renderOnNextFrame(),this.updatedViews_.length=0;for(var e=this._attachedRenderLoop.stage().listLayers(),r=0;r<e.length;r++){var i=e[r].view();this.updatedViews_.indexOf(i)<0&&(e[r].view().updateWithControlParameters(t.offsets),this.updatedViews_.push(i))}},e.exports=i},{"../util/clearOwnProperties":91,"./Composer":36,"minimal-event-emitter":14}],39:[function(t,e,r){"use strict";function i(t,e,r){this._element=t,this._opts=a(r||{},l),this._startEvent=null,this._lastEvent=null,this._active=!1,this._dynamics={x:new o,y:new o},this._hammer=s.get(t,e),this._hammer.on("hammer.input",this._handleHammerEvent.bind(this)),this._hammer.on("panstart",this._handleStart.bind(this)),this._hammer.on("panmove",this._handleMove.bind(this)),this._hammer.on("panend",this._handleEnd.bind(this)),this._hammer.on("pancancel",this._handleEnd.bind(this))}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("./HammerGestures"),a=t("../util/defaults"),u=t("./util").maxFriction,h=t("../util/clearOwnProperties"),l={friction:6,maxFrictionTime:.3},c="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.controls;n(i),i.prototype.destroy=function(){this._hammer.release(),h(this)},i.prototype._handleHammerEvent=function(t){if(t.isFirst){if(c&&this._active)throw new Error("DragControlMethod active detected when already active");this._active=!0,this.emit("active")}if(t.isFinal){if(c&&!this._active)throw new Error("DragControlMethod inactive detected when already inactive");this._active=!1,this.emit("inactive")}},i.prototype._handleStart=function(t){t.preventDefault(),this._startEvent=t},i.prototype._handleMove=function(t){t.preventDefault(),this._startEvent&&(this._updateDynamicsMove(t),this.emit("parameterDynamics","axisScaledX",this._dynamics.x),this.emit("parameterDynamics","axisScaledY",this._dynamics.y))},i.prototype._handleEnd=function(t){t.preventDefault(),this._startEvent&&(this._updateDynamicsRelease(t),this.emit("parameterDynamics","axisScaledX",this._dynamics.x),this.emit("parameterDynamics","axisScaledY",this._dynamics.y)),this._startEvent=!1,this._lastEvent=!1},i.prototype._updateDynamicsMove=function(t){var e=t.deltaX,r=t.deltaY,i=this._lastEvent||this._startEvent;i&&(e-=i.deltaX,r-=i.deltaY);var n=this._element.getBoundingClientRect(),o=n.right-n.left,s=n.bottom-n.top;e/=o,r/=s,this._dynamics.x.reset(),this._dynamics.y.reset(),this._dynamics.x.offset=-e,this._dynamics.y.offset=-r,this._lastEvent=t};var p=[null,null];i.prototype._updateDynamicsRelease=function(t){var e=this._element.getBoundingClientRect(),r=e.right-e.left,i=e.bottom-e.top,n=1e3*t.velocityX/r,o=1e3*t.velocityY/i;this._dynamics.x.reset(),this._dynamics.y.reset(),this._dynamics.x.velocity=n,this._dynamics.y.velocity=o,u(this._opts.friction,this._dynamics.x.velocity,this._dynamics.y.velocity,this._opts.maxFrictionTime,p),this._dynamics.x.friction=p[0],this._dynamics.y.friction=p[1]},e.exports=i},{"../util/clearOwnProperties":91,"../util/defaults":96,"./Dynamics":40,"./HammerGestures":42,"./util":50,"minimal-event-emitter":14}],40:[function(t,e,r){"use strict";function i(){this.velocity=null,this.friction=null,this.offset=null}function n(t,e){return t<0?Math.min(0,t+e):t>0?Math.max(0,t-e):0}i.equals=function(t,e){return t.velocity===e.velocity&&t.friction===e.friction&&t.offset===e.offset},i.prototype.equals=function(t){return i.equals(this,t)},i.prototype.update=function(t,e){t.offset&&(this.offset=this.offset||0,this.offset+=t.offset);var r=this.offsetFromVelocity(e);r&&(this.offset=this.offset||0,this.offset+=r),this.velocity=t.velocity,this.friction=t.friction},i.prototype.reset=function(){this.velocity=null,this.friction=null,this.offset=null},i.prototype.velocityAfter=function(t){return this.velocity?this.friction?n(this.velocity,this.friction*t):this.velocity:null},i.prototype.offsetFromVelocity=function(t){t=Math.min(t,this.nullVelocityTime());var e=this.velocityAfter(t);return(this.velocity+e)/2*t},i.prototype.nullVelocityTime=function(){return null==this.velocity?0:this.velocity&&!this.friction?Infinity:Math.abs(this.velocity/this.friction)},e.exports=i},{}],41:[function(t,e,r){"use strict";function i(t,e,r,i){if(!t)throw new Error("ElementPressControlMethod: element must be defined");if(!e)throw new Error("ElementPressControlMethod: parameter must be defined");if(!r)throw new Error("ElementPressControlMethod: velocity must be defined");if(!i)throw new Error("ElementPressControlMethod: friction must be defined");this._element=t,this._pressHandler=this._handlePress.bind(this),this._releaseHandler=this._handleRelease.bind(this),t.addEventListener("mousedown",this._pressHandler),t.addEventListener("mouseup",this._releaseHandler),t.addEventListener("mouseleave",this._releaseHandler),t.addEventListener("touchstart",this._pressHandler),t.addEventListener("touchmove",this._releaseHandler),t.addEventListener("touchend",this._releaseHandler),this._parameter=e,this._velocity=r,this._friction=i,this._dynamics=new o,this._pressing=!1}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._element.removeEventListener("mousedown",this._pressHandler),this._element.removeEventListener("mouseup",this._releaseHandler),this._element.removeEventListener("mouseleave",this._releaseHandler),this._element.removeEventListener("touchstart",this._pressHandler),this._element.removeEventListener("touchmove",this._releaseHandler),this._element.removeEventListener("touchend",this._releaseHandler),s(this)},i.prototype._handlePress=function(){this._pressing=!0,this._dynamics.velocity=this._velocity,this._dynamics.friction=0,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("active")},i.prototype._handleRelease=function(){this._pressing&&(this._dynamics.friction=this._friction,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("inactive")),this._pressing=!1},e.exports=i},{"../util/clearOwnProperties":91,"./Dynamics":40,"minimal-event-emitter":14}],42:[function(t,e,r){"use strict";function i(t,e){return t[h]||(t[h]=u++),e+t[h]}function n(){this._managers={},this._refCount={}}function o(t,e,r,i){this._manager=e,this._element=r,this._type=i,this._hammerGestures=t,this._eventHandlers=[]}var s=t("hammerjs"),a=t("bowser"),u=1,h="MarzipanoHammerElementId";n.prototype.get=function(t,e){var r=i(t,e);return this._managers[r]||(this._managers[r]=this._createManager(t,e),this._refCount[r]=0),this._refCount[r]++,new o(this,this._managers[r],t,e)},n.prototype._createManager=function(t,e){var r=new s.Manager(t);return"mouse"===e?r.add(new s.Pan({direction:s.DIRECTION_ALL,threshold:0})):"touch"!==e&&"pen"!==e&&"kinect"!==e||(r.add(new s.Pan({direction:s.DIRECTION_ALL,threshold:20,pointers:1})),a.msie&&parseFloat(a.version)<10||r.add(new s.Pinch)),r},n.prototype._releaseHandle=function(t,e){var r=i(t,e);this._refCount[r]&&(--this._refCount[r]||(this._managers[r].destroy(),delete this._managers[r],delete this._refCount[r]))},o.prototype.on=function(t,e){var r=this._type,i=function(t){r===t.pointerType&&e(t)};this._eventHandlers.push({events:t,handler:i}),this._manager.on(t,i)},o.prototype.release=function(){for(var t=0;t<this._eventHandlers.length;t++){var e=this._eventHandlers[t];this._manager.off(e.events,e.handler)}this._hammerGestures._releaseHandle(this._element,this._type),this._manager=null,this._element=null,this._type=null,this._hammerGestures=null},o.prototype.manager=function(){return this._manager},e.exports=new n},{bowser:1,hammerjs:13}],43:[function(t,e,r){"use strict";function i(t,e,r,i,n){if(!t)throw new Error("KeyControlMethod: keyCode must be defined");if(!e)throw new Error("KeyControlMethod: parameter must be defined");if(!r)throw new Error("KeyControlMethod: velocity must be defined");if(!i)throw new Error("KeyControlMethod: friction must be defined");n=n||document,this._keyCode=t,this._parameter=e,this._velocity=r,this._friction=i,this._element=n,this._keydownHandler=this._handlePress.bind(this),this._keyupHandler=this._handleRelease.bind(this),this._blurHandler=this._handleBlur.bind(this),this._element.addEventListener("keydown",this._keydownHandler),this._element.addEventListener("keyup",this._keyupHandler),window.addEventListener("blur",this._blurHandler),this._dynamics=new o,this._pressing=!1}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._element.removeEventListener("keydown",this._keydownHandler),this._element.removeEventListener("keyup",this._keyupHandler),window.removeEventListener("blur",this._blurHandler),s(this)},i.prototype._handlePress=function(t){t.keyCode===this._keyCode&&(this._pressing=!0,this._dynamics.velocity=this._velocity,this._dynamics.friction=0,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("active"))},i.prototype._handleRelease=function(t){
t.keyCode===this._keyCode&&(this._pressing&&(this._dynamics.friction=this._friction,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("inactive")),this._pressing=!1)},i.prototype._handleBlur=function(){this._dynamics.velocity=0,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("inactive"),this._pressing=!1},e.exports=i},{"../util/clearOwnProperties":91,"./Dynamics":40,"minimal-event-emitter":14}],44:[function(t,e,r){"use strict";function i(t,e,r){this._hammer=s.get(t,e),this._lastEvent=null,this._active=!1,this._dynamics=new o,this._hammer.on("pinchstart",this._handleStart.bind(this)),this._hammer.on("pinch",this._handleEvent.bind(this)),this._hammer.on("pinchend",this._handleEnd.bind(this)),this._hammer.on("pinchcancel",this._handleEnd.bind(this))}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("./HammerGestures"),a=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._hammer.release(),a(this)},i.prototype._handleStart=function(){this._active||(this._active=!0,this.emit("active"))},i.prototype._handleEnd=function(){this._lastEvent=null,this._active&&(this._active=!1,this.emit("inactive"))},i.prototype._handleEvent=function(t){var e=t.scale;this._lastEvent&&(e/=this._lastEvent.scale),this._dynamics.offset=-1*(e-1),this.emit("parameterDynamics","zoom",this._dynamics),this._lastEvent=t},e.exports=i},{"../util/clearOwnProperties":91,"./Dynamics":40,"./HammerGestures":42,"minimal-event-emitter":14}],45:[function(t,e,r){"use strict";function i(t,e,r){this._element=t,this._opts=a(r||{},l),this._active=!1,this._hammer=s.get(t,e),this._dynamics={x:new o,y:new o},this._hammer.on("panstart",this._handleStart.bind(this)),this._hammer.on("panmove",this._handleMove.bind(this)),this._hammer.on("panend",this._handleRelease.bind(this)),this._hammer.on("pancancel",this._handleRelease.bind(this))}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("./HammerGestures"),a=t("../util/defaults"),u=t("./util").maxFriction,h=t("../util/clearOwnProperties"),l={speed:8,friction:6,maxFrictionTime:.3};n(i),i.prototype.destroy=function(){this._hammer.release(),h(this)},i.prototype._handleStart=function(t){t.preventDefault(),this._active||(this._active=!0,this.emit("active"))},i.prototype._handleMove=function(t){t.preventDefault(),this._updateDynamics(t,!1)},i.prototype._handleRelease=function(t){t.preventDefault(),this._updateDynamics(t,!0),this._active&&(this._active=!1,this.emit("inactive"))};var c=[null,null];i.prototype._updateDynamics=function(t,e){var r=this._element.getBoundingClientRect(),i=r.right-r.left,n=r.bottom-r.top,o=Math.max(i,n),s=t.deltaX/o*this._opts.speed,a=t.deltaY/o*this._opts.speed;this._dynamics.x.reset(),this._dynamics.y.reset(),this._dynamics.x.velocity=s,this._dynamics.y.velocity=a,e&&(u(this._opts.friction,this._dynamics.x.velocity,this._dynamics.y.velocity,this._opts.maxFrictionTime,c),this._dynamics.x.friction=c[0],this._dynamics.y.friction=c[1]),this.emit("parameterDynamics","x",this._dynamics.x),this.emit("parameterDynamics","y",this._dynamics.y)},e.exports=i},{"../util/clearOwnProperties":91,"../util/defaults":96,"./Dynamics":40,"./HammerGestures":42,"./util":50,"minimal-event-emitter":14}],46:[function(t,e,r){"use strict";function i(t,e){this._opts=u(e||{},l),this._dynamics=new s,this._eventList=[];var r=this._opts.frictionTime?this.withSmoothing:this.withoutSmoothing;this._wheelListener=new a(t,r.bind(this))}function n(t){var e=1==t.deltaMode?20:1;return t.deltaY*e}var o=t("minimal-event-emitter"),s=t("./Dynamics"),a=t("./WheelListener"),u=t("../util/defaults"),h=t("../util/clearOwnProperties"),l={frictionTime:.2,zoomDelta:.001};o(i),i.prototype.destroy=function(){this._wheelListener.destroy(),h(this)},i.prototype.withoutSmoothing=function(t){this._dynamics.offset=n(t)*this._opts.zoomDelta,this.emit("parameterDynamics","zoom",this._dynamics),t.preventDefault(),this.emit("active"),this.emit("inactive")},i.prototype.withSmoothing=function(t){var e=t.timeStamp;for(this._eventList.push(t);this._eventList[0].timeStamp<e-1e3*this._opts.frictionTime;)this._eventList.shift(0);for(var r=0,i=0;i<this._eventList.length;i++){r+=n(this._eventList[i])*this._opts.zoomDelta/this._opts.frictionTime}this._dynamics.velocity=r,this._dynamics.friction=Math.abs(r)/this._opts.frictionTime,this.emit("parameterDynamics","zoom",this._dynamics),t.preventDefault(),this.emit("active"),this.emit("inactive")},e.exports=i},{"../util/clearOwnProperties":91,"../util/defaults":96,"./Dynamics":40,"./WheelListener":48,"minimal-event-emitter":14}],47:[function(t,e,r){"use strict";function i(t){if(!t)throw new Error("VelocityControlMethod: parameter must be defined");this._parameter=t,this._dynamics=new o}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){s(this)},i.prototype.setVelocity=function(t){this._dynamics.velocity=t,this.emit("parameterDynamics",this._parameter,this._dynamics)},i.prototype.setFriction=function(t){this._dynamics.friction=t,this.emit("parameterDynamics",this._parameter,this._dynamics)},e.exports=i},{"../util/clearOwnProperties":91,"./Dynamics":40,"minimal-event-emitter":14}],48:[function(t,e,r){"use strict";function i(t,e,r){var i=o();if("wheel"===i)this._fun=e,this._elem=t,this._elem.addEventListener("wheel",this._fun,r);else{if("mousewheel"!==i)throw new Error("Browser does not support mouse wheel events");this._fun=n(e),this._elem=t,this._elem.addEventListener("mousewheel",this._fun,r)}}function n(t){return function(e){e||(e=window.event);var r={originalEvent:e,target:e.target||e.srcElement,type:"wheel",deltaMode:1,deltaX:0,deltaZ:0,timeStamp:e.timeStamp||Date.now(),preventDefault:e.preventDefault.bind(e)};return r.deltaY=-.025*e.wheelDelta,e.wheelDeltaX&&(r.deltaX=-.025*e.wheelDeltaX),t(r)}}function o(){return a!==undefined?a:a="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==undefined?"mousewheel":null}var s=t("../util/clearOwnProperties");i.prototype.destroy=function(){this._elem.removeEventListener(o(),this._fun),s(this)};var a;e.exports=i},{"../util/clearOwnProperties":91}],49:[function(t,e,r){"use strict";function i(t,e,r){r=n(r||{},l);var i={mouseViewDrag:new o(e,"mouse"),mouseViewQtvr:new s(e,"mouse"),touchView:new o(e,"touch"),pinch:new u(e,"touch"),leftArrowKey:new h(37,"x",-.7,3),rightArrowKey:new h(39,"x",.7,3),upArrowKey:new h(38,"y",-.7,3),downArrowKey:new h(40,"y",.7,3),plusKey:new h(107,"zoom",-.7,3),minusKey:new h(109,"zoom",.7,3),wKey:new h(87,"y",-.7,3),aKey:new h(65,"x",-.7,3),sKey:new h(83,"y",.7,3),dKey:new h(68,"x",.7,3),qKey:new h(81,"roll",.7,3),eKey:new h(69,"roll",-.7,3)};!1!==r.scrollZoom&&(i.scrollZoom=new a(e));var c={arrowKeys:["leftArrowKey","rightArrowKey","upArrowKey","downArrowKey"],plusMinusKeys:["plusKey","minusKey"],wasdKeys:["wKey","aKey","sKey","dKey"],qeKeys:["qKey","eKey"]},p=["scrollZoom","touchView","pinch"];switch(r.mouseViewMode){case"drag":p.push("mouseViewDrag");break;case"qtvr":p.push("mouseViewQtvr");break;default:throw new Error("Unknown mouse view mode: "+r.mouseViewMode)}for(var f in i){var d=i[f];t.registerMethod(f,d),p.indexOf(f)>=0&&t.enableMethod(f)}for(var m in c){var v=c[m];t.addMethodGroup(m,v)}return i}var n=t("../util/defaults"),o=t("./Drag"),s=t("./Qtvr"),a=t("./ScrollZoom"),u=t("./PinchZoom"),h=t("./Key"),l={mouseViewMode:"drag"};e.exports=i},{"../util/defaults":96,"./Drag":39,"./Key":43,"./PinchZoom":44,"./Qtvr":45,"./ScrollZoom":46}],50:[function(t,e,r){"use strict";function i(t,e,r,i,o){var s=Math.sqrt(Math.pow(e,2)+Math.pow(r,2));t=Math.max(t,s/i),n(e,r,t,o),o[0]=Math.abs(o[0]),o[1]=Math.abs(o[1])}function n(t,e,r,i){var n=Math.atan(e/t);i[0]=r*Math.cos(n),i[1]=r*Math.sin(n)}e.exports={maxFriction:i,changeVectorNorm:n}},{}],51:[function(t,e,r){"use strict";function i(t,e,r,i){e&&_.rotateZ(t,t,b,e),r&&_.rotateX(t,t,b,r),i&&_.rotateY(t,t,b,i)}function n(t,e,r,i,n){this.face=t,this.x=e,this.y=r,this.z=i,this._geometry=n,this._level=n.levelList[i]}function o(t){if(this.constructor.super_.call(this,t),this._size=t.size,this._tileSize=t.tileSize,this._size%this._tileSize!=0)throw new Error("Level size is not multiple of tile size: "+this._size+" "+this._tileSize)}function s(t){if("array"!==v(t))throw new Error("Level list must be an array");this.levelList=p(t,o),this.selectableLevelList=f(this.levelList);for(var e=1;e<this.levelList.length;e++)this.levelList[e]._validateWithParentLevel(this.levelList[e-1]);this._tileSearcher=new h(this),this._neighborsCache=new l(g),this._vec=y.create(),this._viewSize={}}for(var a=t("../util/inherits"),u=t("../util/hash"),h=t("../TileSearcher"),l=t("../collections/LruMap"),c=t("./Level"),p=t("./common").makeLevelList,f=t("./common").makeSelectableLevelList,d=t("../util/clamp"),m=t("../util/cmp"),v=t("../util/type"),_=t("gl-matrix").vec3,y=t("gl-matrix").vec4,g=64,w="fudlrb",M={f:{x:0,y:0},b:{x:0,y:Math.PI},l:{x:0,y:Math.PI/2},r:{x:0,y:-Math.PI/2},u:{x:Math.PI/2,y:0},d:{x:-Math.PI/2,y:0}},b=_.create(),x={},E=0;E<w.length;E++){var T=w[E],P=M[T],L=_.fromValues(0,0,-1);i(L,0,P.x,P.y),x[T]=L}var S={f:["l","r","u","d"],b:["r","l","u","d"],l:["b","f","u","d"],r:["f","b","u","d"],u:["l","r","b","f"],d:["l","r","f","b"]},A=[[0,1],[1,0],[0,-1],[-1,0]];n.prototype.rotX=function(){return M[this.face].x},n.prototype.rotY=function(){return M[this.face].y},n.prototype.centerX=function(){return(this.x+.5)/this._level.numHorizontalTiles()-.5},n.prototype.centerY=function(){return.5-(this.y+.5)/this._level.numVerticalTiles()},n.prototype.scaleX=function(){return 1/this._level.numHorizontalTiles()},n.prototype.scaleY=function(){return 1/this._level.numVerticalTiles()},n.prototype.width=function(){return this._level.tileWidth()},n.prototype.height=function(){return this._level.tileHeight()},n.prototype.levelWidth=function(){return this._level.width()},n.prototype.levelHeight=function(){return this._level.height()},n.prototype.atTopLevel=function(){return 0===this.z},n.prototype.atBottomLevel=function(){return this.z===this._geometry.levelList.length-1},n.prototype.atTopEdge=function(){return 0===this.y},n.prototype.atBottomEdge=function(){return this.y===this._level.numVerticalTiles()-1},n.prototype.atLeftEdge=function(){return 0===this.x},n.prototype.atRightEdge=function(){return this.x===this._level.numHorizontalTiles()-1},n.prototype.padTop=function(){return this.atTopEdge()&&/[fu]/.test(this.face)},n.prototype.padBottom=function(){return!this.atBottomEdge()||/[fd]/.test(this.face)},n.prototype.padLeft=function(){return this.atLeftEdge()&&/[flud]/.test(this.face)},n.prototype.padRight=function(){return!this.atRightEdge()||/[frud]/.test(this.face)},n.prototype.vertices=function(t){function e(t,e,n){_.set(t,e,n,-.5),i(t,0,r.x,r.y)}t||(t=[_.create(),_.create(),_.create(),_.create()]);var r=M[this.face],n=this.centerX()-this.scaleX()/2,o=this.centerX()+this.scaleX()/2,s=this.centerY()-this.scaleY()/2,a=this.centerY()+this.scaleY()/2;return e(t[0],n,a),e(t[1],o,a),e(t[2],o,s),e(t[3],n,s),t},n.prototype.parent=function(){if(this.atTopLevel())return null;var t=this.face,e=this.z,r=this.x,i=this.y,o=this._geometry,s=o.levelList[e],a=o.levelList[e-1];return new n(t,Math.floor(r/s.numHorizontalTiles()*a.numHorizontalTiles()),Math.floor(i/s.numVerticalTiles()*a.numVerticalTiles()),e-1,o)},n.prototype.children=function(t){if(this.atBottomLevel())return null;var e=this.face,r=this.z,i=this.x,o=this.y,s=this._geometry,a=s.levelList[r],u=s.levelList[r+1],h=u.numHorizontalTiles()/a.numHorizontalTiles(),l=u.numVerticalTiles()/a.numVerticalTiles();t=t||[];for(var c=0;c<h;c++)for(var p=0;p<l;p++){var f=h*i+c,d=l*o+p,m=r+1;t.push(new n(e,f,d,m,s))}return t},n.prototype.neighbors=function(){var t=this._geometry,e=t._neighborsCache,r=e.get(this);if(r)return r;for(var o=t._vec,s=this.face,a=this.x,u=this.y,h=this.z,l=this._level,c=l.numHorizontalTiles(),p=l.numVerticalTiles(),f=[],m=0;m<A.length;m++){var v=A[m][0],y=A[m][1],g=a+v,w=u+y,b=h,x=s;if(g<0||g>=c||w<0||w>=p){var E=this.centerX(),T=this.centerY();g<0?(_.set(o,-.5,T,-.5),x=S[s][0]):g>=c?(_.set(o,.5,T,-.5),x=S[s][1]):w<0?(_.set(o,E,.5,-.5),x=S[s][2]):w>=p&&(_.set(o,E,-.5,-.5),x=S[s][3]);var P;P=M[s],i(o,0,P.x,P.y),P=M[x],i(o,0,-P.x,-P.y),g=d(Math.floor((.5+o[0])*c),0,c-1),w=d(Math.floor((.5-o[1])*p),0,p-1)}f.push(new n(x,g,w,b,t))}return e.set(this,f),f},n.prototype.hash=function(){return u(w.indexOf(this.face),this.z,this.y,this.x)},n.prototype.equals=function(t){return this.geometry===t.geometry&&this.face===t.face&&this.z===t.z&&this.y===t.y&&this.x===t.x},n.prototype.cmp=function(t){return m(this.z,t.z)||m(w.indexOf(this.face),w.indexOf(t.face))||m(this.y,t.y)||m(this.x,t.x)},n.prototype.str=function(){return"CubeTile("+tile.face+", "+tile.x+", "+tile.y+", "+tile.z+")"},a(o,c),o.prototype.width=function(){return this._size},o.prototype.height=function(){return this._size},o.prototype.tileWidth=function(){return this._tileSize},o.prototype.tileHeight=function(){return this._tileSize},o.prototype._validateWithParentLevel=function(t){var e=this.width(),r=this.height(),i=this.tileWidth(),n=this.tileHeight(),o=this.numHorizontalTiles(),s=this.numVerticalTiles(),a=t.width(),u=t.height(),h=t.tileWidth(),l=t.tileHeight(),c=t.numHorizontalTiles(),p=t.numVerticalTiles();if(e%a!=0)throw new Error("Level width must be multiple of parent level: "+e+" vs. "+a);if(r%u!=0)throw new Error("Level height must be multiple of parent level: "+r+" vs. "+u);if(o%c!=0)throw new Error("Number of horizontal tiles must be multiple of parent level: "+o+" ("+e+"/"+i+") vs. "+c+" ("+a+"/"+h+")");if(s%p!=0)throw new Error("Number of vertical tiles must be multiple of parent level: "+s+" ("+r+"/"+n+") vs. "+p+" ("+u+"/"+l+")")},s.prototype.maxTileSize=function(){for(var t=0,e=0;e<this.levelList.length;e++){var r=this.levelList[e];t=Math.max(t,r.tileWidth,r.tileHeight)}return t},s.prototype.levelTiles=function(t,e){var r=this.levelList.indexOf(t),i=t.numHorizontalTiles()-1,o=t.numVerticalTiles()-1;e=e||[];for(var s=0;s<w.length;s++)for(var a=w[s],u=0;u<=i;u++)for(var h=0;h<=o;h++)e.push(new n(a,u,h,r,this));return e},s.prototype._closestTile=function(t,e){var r=this._vec;y.set(r,0,0,1,1),y.transformMat4(r,r,t.inverseProjection());var o=Infinity,s=null;for(var a in x){var u=x[a],h=1-_.dot(u,r);h<o&&(o=h,s=a)}for(var l=Math.max(Math.abs(r[0]),Math.abs(r[1]),Math.abs(r[2]))/.5,c=0;c<3;c++)r[c]=r[c]/l;var p=M[s];i(r,0,-p.x,-p.y);var f=this.levelList.indexOf(e),m=e.numHorizontalTiles(),v=e.numVerticalTiles();return new n(s,d(Math.floor((.5+r[0])*m),0,m-1),d(Math.floor((.5-r[1])*v),0,v-1),f,this)},s.prototype.visibleTiles=function(t,e,r){var i=this._viewSize,n=this._tileSearcher;if(r=r||[],t.size(i),0===i.width||0===i.height)return r;var o=this._closestTile(t,e);if(!n.search(t,o,r))throw new Error("Starting tile is not visible");return r},s.Tile=s.prototype.Tile=n,s.type=s.prototype.type="cube",n.type=n.prototype.type="cube",e.exports=s},{"../TileSearcher":22,"../collections/LruMap":29,"../util/clamp":90,"../util/cmp":92,"../util/hash":103,"../util/inherits":104,"../util/type":116,"./Level":54,"./common":55,"gl-matrix":3}],52:[function(t,e,r){"use strict";function i(t,e){this.z=t,this._geometry=e,this._level=e.levelList[t]}function n(t){this.constructor.super_.call(this,t),this._width=t.width}function o(t){if("array"!==c(t))throw new Error("Level list must be an array");this.levelList=h.makeLevelList(t,n),this.selectableLevelList=h.makeSelectableLevelList(this.levelList)}var s=t("../util/inherits"),a=t("../util/hash"),u=t("../util/cmp"),h=t("./common"),l=t("./Level"),c=t("../util/type");i.prototype.rotX=function(){return 0},i.prototype.rotY=function(){return 0},i.prototype.centerX=function(){return.5},i.prototype.centerY=function(){return.5},i.prototype.scaleX=function(){return 1},i.prototype.scaleY=function(){return 1},i.prototype.width=function(){return this._level.tileWidth()},i.prototype.height=function(){return this._level.tileHeight()},i.prototype.levelWidth=function(){return this._level.width()},i.prototype.levelHeight=function(){return this._level.height()},i.prototype.atTopLevel=function(){return 0===this.z},i.prototype.atBottomLevel=function(){return this.z===this._geometry.levelList.length-1},i.prototype.atTopEdge=function(){return!0},i.prototype.atBottomEdge=function(){return!0},i.prototype.atLeftEdge=function(){return!0},i.prototype.atRightEdge=function(){return!0},i.prototype.padTop=function(){return!1},i.prototype.padBottom=function(){return!1},i.prototype.padLeft=function(){return!1},i.prototype.padRight=function(){return!1},i.prototype.parent=function(){return this.atTopLevel()?null:new i(this.z-1,this._geometry)},i.prototype.children=function(t){return this.atBottomLevel()?null:(t=t||[],t.push(new i(this.z+1,this._geometry)),t)},i.prototype.neighbors=function(){return[]},i.prototype.hash=function(){return a(this.z)},i.prototype.equals=function(t){return this.geometry===t.geometry&&this.z===t.z},i.prototype.cmp=function(t){return u(this.z,t.z)},i.prototype.str=function(){return"EquirectTile("+tile.z+")"},s(n,l),n.prototype.width=function(){return this._width},n.prototype.height=function(){return this._width/2},n.prototype.tileWidth=function(){return this._width},n.prototype.tileHeight=function(){return this._width/2},o.prototype.maxTileSize=function(){for(var t=0,e=0;e<this.levelList.length;e++){var r=this.levelList[e];t=Math.max(t,r.tileWidth,r.tileHeight)}return t},o.prototype.levelTiles=function(t,e){var r=this.levelList.indexOf(t);return e=e||[],e.push(new i(r,this)),e},o.prototype.visibleTiles=function(t,e,r){var n=new i(this.levelList.indexOf(e),this);r=r||[],r.length=0,r.push(n)},o.Tile=o.prototype.Tile=i,o.type=o.prototype.type="equirect",i.type=i.prototype.type="equirect",e.exports=o},{"../util/cmp":92,"../util/hash":103,"../util/inherits":104,"../util/type":116,"./Level":54,"./common":55}],53:[function(t,e,r){"use strict";function i(t,e,r,i){this.x=t,this.y=e,this.z=r,this._geometry=i,this._level=i.levelList[r]}function n(t){this.constructor.super_.call(this,t),this._width=t.width,this._height=t.height,this._tileWidth=t.tileWidth,this._tileHeight=t.tileHeight}function o(t){if("array"!==v(t))throw new Error("Level list must be an array");this.levelList=c(t,n),this.selectableLevelList=p(this.levelList);for(var e=1;e<this.levelList.length;e++)this.levelList[e]._validateWithParentLevel(this.levelList[e-1]);this._tileSearcher=new u(this),this._neighborsCache=new h(g),this._vec=y.create(),this._viewSize={}}var s=t("../util/inherits"),a=t("../util/hash"),u=t("../TileSearcher"),h=t("../collections/LruMap"),l=t("./Level"),c=t("./common").makeLevelList,p=t("./common").makeSelectableLevelList,f=t("../util/clamp"),d=t("../util/mod"),m=t("../util/cmp"),v=t("../util/type"),_=t("gl-matrix").vec2,y=t("gl-matrix").vec4,g=64,w=[[0,1],[1,0],[0,-1],[-1,0]];i.prototype.rotX=function(){return 0},i.prototype.rotY=function(){return 0},i.prototype.centerX=function(){var t=this._level.width(),e=this._level.tileWidth();return(this.x*e+.5*this.width())/t-.5},i.prototype.centerY=function(){var t=this._level.height(),e=this._level.tileHeight();return.5-(this.y*e+.5*this.height())/t},i.prototype.scaleX=function(){var t=this._level.width();return this.width()/t},i.prototype.scaleY=function(){var t=this._level.height();return this.height()/t},i.prototype.width=function(){var t=this._level.width(),e=this._level.tileWidth();if(this.atRightEdge()){return d(t,e)||e}return e},i.prototype.height=function(){var t=this._level.height(),e=this._level.tileHeight();if(this.atBottomEdge()){return d(t,e)||e}return e},i.prototype.levelWidth=function(){return this._level.width()},i.prototype.levelHeight=function(){return this._level.height()},i.prototype.atTopLevel=function(){return 0===this.z},i.prototype.atBottomLevel=function(){return this.z===this._geometry.levelList.length-1},i.prototype.atTopEdge=function(){return 0===this.y},i.prototype.atBottomEdge=function(){return this.y===this._level.numVerticalTiles()-1},i.prototype.atLeftEdge=function(){return 0===this.x},i.prototype.atRightEdge=function(){return this.x===this._level.numHorizontalTiles()-1},i.prototype.padTop=function(){return!1},i.prototype.padBottom=function(){return!this.atBottomEdge()},i.prototype.padLeft=function(){return!1},i.prototype.padRight=function(){return!this.atRightEdge()},i.prototype.vertices=function(t){t||(t=[_.create(),_.create(),_.create(),_.create()]);var e=this.centerX()-this.scaleX()/2,r=this.centerX()+this.scaleX()/2,i=this.centerY()-this.scaleY()/2,n=this.centerY()+this.scaleY()/2;return _.set(t[0],e,n),_.set(t[1],r,n),_.set(t[2],r,i),_.set(t[3],e,i),t},i.prototype.parent=function(){if(this.atTopLevel())return null;var t=this._geometry,e=this.z-1;return new i(Math.floor(this.x/2),Math.floor(this.y/2),e,t)},i.prototype.children=function(t){if(this.atBottomLevel())return null;var e=this._geometry,r=this.z+1;return t=t||[],t.push(new i(2*this.x,2*this.y,r,e)),t.push(new i(2*this.x,2*this.y+1,r,e)),t.push(new i(2*this.x+1,2*this.y,r,e)),t.push(new i(2*this.x+1,2*this.y+1,r,e)),t},i.prototype.neighbors=function(){var t=this._geometry,e=t._neighborsCache,r=e.get(this);if(r)return r;for(var n=this.x,o=this.y,s=this.z,a=this._level,u=a.numHorizontalTiles()-1,h=a.numVerticalTiles()-1,l=[],c=0;c<w.length;c++){var p=w[c][0],f=w[c][1],d=n+p,m=o+f,v=s;0<=d&&d<=u&&0<=m&&m<=h&&l.push(new i(d,m,v,t))}return e.set(this,l),l},i.prototype.hash=function(){return a(this.z,this.y,this.x)},i.prototype.equals=function(t){return this.geometry===t.geometry&&this.z===t.z&&this.y===t.y&&this.x===t.x},i.prototype.cmp=function(t){return m(this.z,t.z)||m(this.y,t.y)||m(this.x,t.x)},i.prototype.str=function(){return"FlatTile("+tile.x+", "+tile.y+", "+tile.z+")"},s(n,l),n.prototype.width=function(){return this._width},n.prototype.height=function(){return this._height},n.prototype.tileWidth=function(){return this._tileWidth},n.prototype.tileHeight=function(){return this._tileHeight},n.prototype._validateWithParentLevel=function(t){var e=this.width(),r=this.height(),i=this.tileWidth(),n=this.tileHeight(),o=t.width(),s=t.height(),a=t.tileWidth(),u=t.tileHeight();return e%o!=0?new Error("Level width must be multiple of parent level: "+e+" vs. "+o):r%s!=0?new Error("Level height must be multiple of parent level: "+r+" vs. "+s):i%a!=0?new Error("Level tile width must be multiple of parent level: "+i+" vs. "+a):n%u!=0?new Error("Level tile height must be multiple of parent level: "+n+" vs. "+u):void 0},o.prototype.maxTileSize=function(){for(var t=0,e=0;e<this.levelList.length;e++){var r=this.levelList[e];t=Math.max(t,r.tileWidth,r.tileHeight)}return t},o.prototype.levelTiles=function(t,e){var r=this.levelList.indexOf(t),n=t.numHorizontalTiles()-1,o=t.numVerticalTiles()-1;e||(e=[]);for(var s=0;s<=n;s++)for(var a=0;a<=o;a++)e.push(new i(s,a,r,this));return e},o.prototype._closestTile=function(t,e){var r=this._vec;y.set(r,0,0,1,1),y.transformMat4(r,r,t.inverseProjection());var n=.5+r[0],o=.5-r[1],s=this.levelList.indexOf(e),a=e.width(),u=e.height(),h=e.tileWidth(),l=e.tileHeight(),c=e.numHorizontalTiles(),p=e.numVerticalTiles();return new i(f(Math.floor(n*a/h),0,c-1),f(Math.floor(o*u/l),0,p-1),s,this)},o.prototype.visibleTiles=function(t,e,r){var i=this._viewSize,n=this._tileSearcher;if(r=r||[],t.size(i),0===i.width||0===i.height)return r;var o=this._closestTile(t,e);if(!n.search(t,o,r))throw new Error("Starting tile is not visible");return r},o.Tile=o.prototype.Tile=i,o.type=o.prototype.type="flat",i.type=i.prototype.type="flat",e.exports=o},{"../TileSearcher":22,"../collections/LruMap":29,"../util/clamp":90,"../util/cmp":92,"../util/hash":103,"../util/inherits":104,"../util/mod":106,"../util/type":116,"./Level":54,"./common":55,"gl-matrix":3}],54:[function(t,e,r){"use strict";function i(t){this._fallbackOnly=!!t.fallbackOnly}i.prototype.numHorizontalTiles=function(){return Math.ceil(this.width()/this.tileWidth())},i.prototype.numVerticalTiles=function(){return Math.ceil(this.height()/this.tileHeight())},i.prototype.fallbackOnly=function(){return this._fallbackOnly},e.exports=i},{}],55:[function(t,e,r){"use strict";function i(t,e){for(var r=[],i=0;i<t.length;i++)r.push(new e(t[i]));return r.sort(function(t,e){return o(t.width(),e.width())}),r}function n(t){for(var e=[],r=0;r<t.length;r++)t[r]._fallbackOnly||e.push(t[r]);if(!e.length)throw new Error("No selectable levels in list");return e}var o=t("../util/cmp");e.exports={makeLevelList:i,makeSelectableLevelList:n}},{"../util/cmp":92}],56:[function(t,e,r){"use strict";e.exports={WebGlStage:t("./stages/WebGl"),CssStage:t("./stages/Css"),FlashStage:t("./stages/Flash"),WebGlCubeRenderer:t("./renderers/WebGlCube"),WebGlFlatRenderer:t("./renderers/WebGlFlat"),WebGlEquirectRenderer:t("./renderers/WebGlEquirect"),CssCubeRenderer:t("./renderers/CssCube"),CssFlatRenderer:t("./renderers/CssFlat"),FlashCubeRenderer:t("./renderers/FlashCube"),FlashFlatRenderer:t("./renderers/FlashFlat"),registerDefaultRenderers:t("./renderers/registerDefaultRenderers"),CubeGeometry:t("./geometries/Cube"),FlatGeometry:t("./geometries/Flat"),EquirectGeometry:t("./geometries/Equirect"),RectilinearView:t("./views/Rectilinear"),FlatView:t("./views/Flat"),ImageUrlSource:t("./sources/ImageUrl"),SingleAssetSource:t("./sources/SingleAsset"),StaticAsset:t("./assets/Static"),DynamicAsset:t("./assets/Dynamic"),TextureStore:t("./TextureStore"),Layer:t("./Layer"),RenderLoop:t("./RenderLoop"),KeyControlMethod:t("./controls/Key"),DragControlMethod:t("./controls/Drag"),QtvrControlMethod:t("./controls/Qtvr"),ScrollZoomControlMethod:t("./controls/ScrollZoom"),PinchZoomControlMethod:t("./controls/PinchZoom"),VelocityControlMethod:t("./controls/Velocity"),ElementPressControlMethod:t("./controls/ElementPress"),Controls:t("./controls/Controls"),Dynamics:t("./controls/Dynamics"),Viewer:t("./Viewer"),Scene:t("./Scene"),Hotspot:t("./Hotspot"),HotspotContainer:t("./HotspotContainer"),colorEffects:t("./colorEffects"),registerDefaultControls:t("./controls/registerDefaultControls"),autorotate:t("./autorotate"),util:{async:t("./util/async"),cancelize:t("./util/cancelize"),chain:t("./util/chain"),clamp:t("./util/clamp"),clearOwnProperties:t("./util/clearOwnProperties"),cmp:t("./util/cmp"),compose:t("./util/compose"),convertFov:t("./util/convertFov"),decimal:t("./util/decimal"),defaults:t("./util/defaults"),defer:t("./util/defer"),degToRad:t("./util/degToRad"),delay:t("./util/delay"),dom:t("./util/dom"),extend:t("./util/extend"),hash:t("./util/hash"),inherits:t("./util/inherits"),mod:t("./util/mod"),noop:t("./util/noop"),now:t("./util/now"),once:t("./util/once"),pixelRatio:t("./util/pixelRatio"),radToDeg:t("./util/radToDeg"),real:t("./util/real"),retry:t("./util/retry"),tween:t("./util/tween"),type:t("./util/type")},dependencies:{bowser:t("bowser"),glMatrix:t("gl-matrix"),eventEmitter:t("minimal-event-emitter"),hammerjs:t("hammerjs")}}},{"./Hotspot":15,"./HotspotContainer":16,"./Layer":17,"./RenderLoop":19,"./Scene":20,"./TextureStore":21,"./Viewer":24,"./assets/Dynamic":25,"./assets/Static":27,"./autorotate":28,"./colorEffects":35,"./controls/Controls":38,"./controls/Drag":39,"./controls/Dynamics":40,"./controls/ElementPress":41,"./controls/Key":43,"./controls/PinchZoom":44,"./controls/Qtvr":45,"./controls/ScrollZoom":46,"./controls/Velocity":47,"./controls/registerDefaultControls":49,"./geometries/Cube":51,"./geometries/Equirect":52,"./geometries/Flat":53,"./renderers/CssCube":60,"./renderers/CssFlat":61,"./renderers/FlashCube":63,"./renderers/FlashFlat":64,"./renderers/WebGlCube":67,"./renderers/WebGlEquirect":68,"./renderers/WebGlFlat":69,"./renderers/registerDefaultRenderers":70,"./sources/ImageUrl":75,"./sources/SingleAsset":76,"./stages/Css":77,"./stages/Flash":78,"./stages/WebGl":81,"./util/async":86,"./util/cancelize":88,"./util/chain":89,"./util/clamp":90,"./util/clearOwnProperties":91,"./util/cmp":92,"./util/compose":93,"./util/convertFov":94,"./util/decimal":95,"./util/defaults":96,"./util/defer":97,"./util/degToRad":98,"./util/delay":99,"./util/dom":100,"./util/extend":101,"./util/hash":103,"./util/inherits":104,"./util/mod":106,"./util/noop":107,"./util/now":108,"./util/once":109,"./util/pixelRatio":110,"./util/radToDeg":112,"./util/real":113,"./util/retry":114,"./util/tween":115,"./util/type":116,"./views/Flat":117,"./views/Rectilinear":118,bowser:1,"gl-matrix":3,hammerjs:13,"minimal-event-emitter":14}],57:[function(t,e,r){"use strict";function i(t){if("flash"!==t.type)throw new Error("Stage type incompatible with loader");this._stage=t}var n=t("../assets/Flash"),o=t("../NetworkError"),s=t("../util/once");i.prototype.loadImage=function(t,e,r){function i(e,s){s===d&&(u.removeFlashCallbackListener("imageLoaded",i),e?r(new o("Network error: "+t)):r(null,new n(h,d)))}function a(){h.cancelImage(d),u.removeFlashCallbackListener("imageLoaded",i),r.apply(null,arguments)}var u=this._stage,h=u.flashElement(),l=e&&e.x||0,c=e&&e.y||0,p=e&&e.width||1,f=e&&e.height||1,d=h.loadImage(t,p,f,l,c);return r=s(r),u.addFlashCallbackListener("imageLoaded",i),a},e.exports=i},{"../NetworkError":18,"../assets/Flash":26,"../util/once":109}],58:[function(t,e,r){"use strict";function i(t){if("webgl"!==t.type&&"css"!==t.type)throw new Error("Stage type incompatible with loader");this._stage=t}var n=t("../assets/Static"),o=t("../NetworkError"),s=t("../util/once");i.prototype.loadImage=function(t,e,r){function i(){a.onload=a.onerror=null,a.src="",r.apply(null,arguments)}var a=new Image;a.crossOrigin="anonymous";var u=e&&e.x||0,h=e&&e.y||0,l=e&&e.width||1,c=e&&e.height||1;return r=s(r),a.onload=function(){if(0===u&&0===h&&1===l&&1===c)r(null,new n(a));else{u*=a.naturalWidth,h*=a.naturalHeight,l*=a.naturalWidth,c*=a.naturalHeight;var t=document.createElement("canvas");t.width=l,t.height=c;t.getContext("2d").drawImage(a,u,h,l,c,0,0,l,c),r(null,new n(t))}},a.onerror=function(){r(new o("Network error: "+t))},a.src=t,i},e.exports=i},{"../NetworkError":18,"../assets/Static":27,"../util/once":109}],59:[function(t,e,r){"use strict";function i(t,e){return t.cmp(e)}function n(t,e,r){this._root=t,this._browserQuirks=e;var i=document.createElement("div");t.appendChild(i),i.style.position="absolute",a(i),u(i),this._browserQuirks.useNullTransform&&h(i),this.domElement=i,this._oldTileList=[],this._newTileList=[],this._textureMap=new o}var o=t("../collections/Map"),s=t("../util/decimal"),a=t("../util/dom").setOverflowHidden,u=t("../util/dom").setNoPointerEvents,h=t("../util/dom").setNullTransform,l=t("../util/dom").setTransform,c=t("../util/clearOwnProperties"),p="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.css;n.prototype.destroy=function(){this._root.removeChild(this.domElement),c(this)},n.prototype.startLayer=function(t,e){var r=this.domElement,i=this._root.clientWidth,n=this._root.clientHeight;r.style.left=s(i*e.left)+"px",r.style.top=s(n*e.top)+"px",r.style.width=s(i*e.width)+"px",r.style.height=s(n*e.height)+"px";var o=1,a=t.effects();a&&null!=a.opacity&&(o=a.opacity),r.style.opacity=o,this._newTileList.length=0,this._textureMap.clear()},n.prototype.renderTile=function(t,e){this._newTileList.push(t),this._textureMap.set(t,e)},n.prototype.endLayer=function(t,e){var r,n,o,s,a,u,h,c,f=this.domElement,d=this._oldTileList,m=this._newTileList,v=this._textureMap,_=t.view();if(f.children.length!==d.length)throw new Error("DOM not in sync with tile list");for(m.sort(i),r=0,o=d[r],h=f.firstChild,n=0;n<m.length;n++){for(s=m[n];r<d.length&&!(o.cmp(s)>=0);)c=h.nextSibling,f.removeChild(h),h=c,o=d[++r];if(a=v.get(s),!(u=a?a._canvas:null))throw new Error("Rendering tile with missing texture");if(o&&0===o.cmp(s)){if(u!=h)throw new Error("DOM not in sync with tile list");h=h.nextSibling,o=d[++r]}else f.insertBefore(u,h);l(u,this.calculateTransform(s,a,_)),p&&u.setAttribute("data-tile",s.str())}for(;h;)c=h.nextSibling,f.removeChild(h),h=c;if(f.children.length!==m.length)throw new Error("DOM not in sync with tile list");var y=this._oldTileList
;this._oldTileList=this._newTileList,this._newTileList=y},e.exports=n},{"../collections/Map":31,"../util/clearOwnProperties":91,"../util/decimal":95,"../util/dom":100}],60:[function(t,e,r){"use strict";function i(t,e){this.constructor.super_.call(this,t,e,n)}var n=t("../geometries/Cube").Tile,o=t("./CssBase"),s=t("../util/decimal");t("../util/inherits")(i,o),i.prototype.calculateTransform=function(t,e,r){var i=this._browserQuirks.padSize,n=this._browserQuirks.reverseLevelDepth,o=this._browserQuirks.perspectiveNudge,a="",u=n?256-t.z:t.levelWidth(),h=r.size(),l=h.width,c=h.height;a+="translate3d("+s(l/2)+"px, "+s(c/2)+"px, 0px) ";var p=.5*c/Math.tan(r.fov()/2),f=p+o;a+="perspective("+s(p)+"px) translateZ("+s(f)+"px) ";var d=-r.roll(),m=-r.pitch(),v=r.yaw();a+="rotateZ("+s(d)+"rad) rotateX("+s(m)+"rad) rotateY("+s(v)+"rad) ";var _=-t.rotX(),y=t.rotY();a+="rotateX("+s(_)+"rad) rotateY("+s(y)+"rad) ";var g=t.centerX()-t.scaleX()/2,w=-(t.centerY()+t.scaleY()/2),M=g*u,b=w*u,x=-u/2;if(a+="translate3d("+s(M)+"px, "+s(b)+"px, "+s(x)+"px) ",n){var E=u*t.scaleX()/t.width(),T=u*t.scaleY()/t.height();a+="scale("+s(E)+", "+s(T)+") "}var P=t.padLeft()?i:0,L=t.padTop()?i:0;return 0===P&&0===L||(a+="translate3d("+s(-P)+"px, "+s(-L)+"px, 0) "),a},e.exports=i},{"../geometries/Cube":51,"../util/decimal":95,"../util/inherits":104,"./CssBase":59}],61:[function(t,e,r){"use strict";function i(t,e){this.constructor.super_.call(this,t,e,n)}var n=t("../geometries/Flat").Tile,o=t("./CssBase"),s=t("../util/decimal");t("../util/inherits")(i,o),i.prototype.calculateTransform=function(t,e,r){var i=this._browserQuirks.padSize,n="",o=r.width(),a=r.height();n+="translateX("+s(o/2)+"px) translateY("+s(a/2)+"px) ";var u=o/r._zoomX(),h=a/r._zoomY(),l=t.centerX()-t.scaleX()/2+.5,c=.5-t.centerY()-t.scaleY()/2,p=l*u,f=c*h;n+="translateX("+s(p)+"px) translateY("+s(f)+"px) ";var d=-r.x()*u,m=-r.y()*h;n+="translateX("+s(d)+"px) translateY("+s(m)+"px) ";var v=t.padLeft()?i:0,_=t.padTop()?i:0;0===v&&0===_||(n+="translateX("+s(-v)+"px) translateY("+s(-_)+"px) ");var y=u/t.levelWidth(),g=h/t.levelHeight();return n+="scale("+s(y)+", "+s(g)+") "},e.exports=i},{"../geometries/Flat":53,"../util/decimal":95,"../util/inherits":104,"./CssBase":59}],62:[function(t,e,r){"use strict";function i(t,e){return t.cmp(e)}function n(t,e,r,i){this._flashElement=t,this._layerId=e,this._quirks=r,this._tileList=[],this._textureMap=new o,this._layerCreated=!1}var o=t("../collections/Map"),s=t("../util/clearOwnProperties");n.prototype.destroy=function(){this._layerCreated&&this._flashElement.destroyLayer(this._layerId),s(this)},n.prototype.startLayer=function(t,e){this._flashElement.isReady&&this._flashElement.isReady()&&(this._layerCreated||(this._flashElement.createLayer(this._layerId),this._layerCreated=!0),this._tileList.length=0,this._textureMap.clear())},n.prototype.renderTile=function(t,e){this._tileList.push(t),this._textureMap.set(t,e)},n.prototype.endLayer=function(t,e){if(this._flashElement.isReady&&this._flashElement.isReady()){this._tileList.sort(i),this._renderOnFlash(t,e)}},e.exports=n},{"../collections/Map":31,"../util/clearOwnProperties":91}],63:[function(t,e,r){"use strict";function i(t,e,r){this.constructor.super_.call(this,t,e,r,o),this._flashTileList=[]}var n=t("./FlashBase"),o=t("../geometries/Cube").Tile,s=t("../util/inherits"),a=t("../util/radToDeg");s(i,n),i.prototype._renderOnFlash=function(t,e){var r=this._flashElement,i=this._layerId,n=this._quirks.padSize,o=this._tileList,s=this._textureMap,u=this._flashTileList;u.length=0;for(var h=0;h<o.length;h++){var l=o[h],c=s.get(l);if(!c)throw new Error("Rendering tile with missing texture");var p=l.padTop()?n:0,f=l.padBottom()?n:0,d=l.padLeft()?n:0,m=l.padRight()?n:0;u.push({textureId:c._textureId,face:l.face,width:l.width(),height:l.height(),centerX:l.centerX(),centerY:l.centerY(),rotX:a(l.rotX()),rotY:a(l.rotY()),levelSize:l.levelWidth(),padTop:p,padBottom:f,padLeft:d,padRight:m})}var v=this._flashElement.clientWidth,_=this._flashElement.clientHeight,y=v*e.x,g=_*e.y,w=v*e.width,M=_*e.height,b=1,x=t.effects();x&&null!=x.opacity&&(b=x.opacity);var E=t.view(),T=E.yaw(),P=E.pitch(),L=E.roll(),S=E.fov();r.drawCubeTiles(i,w,M,y,g,b,T,P,L,S,u)},e.exports=i},{"../geometries/Cube":51,"../util/inherits":104,"../util/radToDeg":112,"./FlashBase":62}],64:[function(t,e,r){"use strict";function i(t,e,r){this.constructor.super_.call(this,t,e,r,o),this._flashTileList=[]}var n=t("./FlashBase"),o=t("../geometries/Flat").Tile;t("../util/inherits")(i,n),i.prototype._renderOnFlash=function(t,e){var r=this._flashElement,i=this._layerId,n=this._quirks.padSize,o=this._tileList,s=this._textureMap,a=this._flashTileList;a.length=0;for(var u=0;u<o.length;u++){var h=o[u],l=s.get(h);if(!l)throw new Error("Rendering tile with missing texture");var c=h.padTop()?n:0,p=h.padBottom()?n:0,f=h.padLeft()?n:0,d=h.padRight()?n:0;a.push({textureId:l._textureId,width:h.width(),height:h.height(),centerX:h.centerX(),centerY:h.centerY(),scaleX:h.scaleX(),scaleY:h.scaleY(),levelWidth:h.levelWidth(),levelHeight:h.levelHeight(),padTop:c,padBottom:p,padLeft:f,padRight:d})}var m=this._flashElement.clientWidth,v=this._flashElement.clientHeight,_=m*e.x,y=v*e.y,g=m*e.width,w=v*e.height,M=1,b=t.effects();b&&null!=b.opacity&&(M=b.opacity);var x=t.view(),E=x.x(),T=x.y(),P=x._zoomX(),L=x._zoomY();r.drawFlatTiles(i,g,w,_,y,M,E,T,P,L,a)},e.exports=i},{"../geometries/Flat":53,"../util/inherits":104,"./FlashBase":62}],65:[function(t,e,r){"use strict";function i(t){this.gl=t,this.projMatrix=n.create(),this.viewportMatrix=n.create(),this.translateVector=o.create(),this.scaleVector=o.create(),this.constantBuffers=u(t,w,M,b),this.shaderProgram=l(t,y,g,x,E)}var n=t("gl-matrix").mat4,o=t("gl-matrix").vec3,s=t("../util/clearOwnProperties"),a=t("./WebGlCommon"),u=a.createConstantBuffers,h=a.destroyConstantBuffers,l=a.createShaderProgram,c=a.destroyShaderProgram,p=a.enableAttributes,f=a.disableAttributes,d=a.setViewport,m=a.setupPixelEffectUniforms,v=a.setDepth,_=a.setTexture,y=t("../shaders/vertexNormal"),g=t("../shaders/fragmentNormal"),w=[0,1,2,0,2,3],M=[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],b=[0,0,1,0,1,1,0,1],x=["aVertexPosition","aTextureCoord"],E=["uDepth","uOpacity","uSampler","uProjMatrix","uViewportMatrix","uColorOffset","uColorMatrix"];i.prototype.destroy=function(){h(this.gl,this.constantBuffers),c(this.gl,this.shaderProgram),s(this)},i.prototype.startLayer=function(t,e){var r=this.gl,i=this.shaderProgram,n=this.constantBuffers,o=this.viewportMatrix;r.useProgram(i),p(r,i),d(r,t,e,o),r.uniformMatrix4fv(i.uViewportMatrix,!1,o),r.bindBuffer(r.ARRAY_BUFFER,n.vertexPositions),r.vertexAttribPointer(i.aVertexPosition,3,r.FLOAT,r.FALSE,0,0),r.bindBuffer(r.ARRAY_BUFFER,n.textureCoords),r.vertexAttribPointer(i.aTextureCoord,2,r.FLOAT,r.FALSE,0,0),m(r,t.effects(),{opacity:i.uOpacity,colorOffset:i.uColorOffset,colorMatrix:i.uColorMatrix})},i.prototype.endLayer=function(t,e){var r=this.gl,i=this.shaderProgram;f(r,i)},i.prototype.renderTile=function(t,e,r,i){var o=this.gl,s=this.shaderProgram,a=this.constantBuffers,u=this.projMatrix,h=this.translateVector,l=this.scaleVector;h[0]=t.centerX(),h[1]=t.centerY(),h[2]=-.5,l[0]=t.scaleX(),l[1]=t.scaleY(),l[2]=1,n.copy(u,r.view().projection()),n.rotateX(u,u,t.rotX()),n.rotateY(u,u,t.rotY()),n.translate(u,u,h),n.scale(u,u,l),o.uniformMatrix4fv(s.uProjMatrix,!1,u),v(o,s,i,t.z),_(o,s,e),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,a.vertexIndices),o.drawElements(o.TRIANGLES,w.length,o.UNSIGNED_SHORT,0)},e.exports=i},{"../shaders/fragmentNormal":72,"../shaders/vertexNormal":74,"../util/clearOwnProperties":91,"./WebGlCommon":66,"gl-matrix":3}],66:[function(t,e,r){"use strict";function i(t,e,r){var i=t.createShader(e);if(t.shaderSource(i,r),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS))throw t.getShaderInfoLog(i);return i}function n(t,e,r,n,o){var s=i(t,t.VERTEX_SHADER,e),a=i(t,t.FRAGMENT_SHADER,r),u=t.createProgram();if(t.attachShader(u,s),t.attachShader(u,a),t.linkProgram(u),!t.getProgramParameter(u,t.LINK_STATUS))throw t.getProgramInfoLog(u);for(var h=0;h<n.length;h++){var l=n[h];if(u[l]=t.getAttribLocation(u,l),-1===u[l])throw new Error("Shader program has no "+l+" attribute")}for(var c=0;c<o.length;c++){var p=o[c];if(u[p]=t.getUniformLocation(u,p),-1===u[p])throw new Error("Shader program has no "+p+" uniform")}return u}function o(t,e){for(var r=t.getAttachedShaders(e),i=0;i<r.length;i++){var n=r[i];t.detachShader(e,n),t.deleteShader(n)}t.deleteProgram(e)}function s(t,e,r,i){var n=t.createBuffer();return t.bindBuffer(e,n),t.bufferData(e,i,r),n}function a(t,e,r,i){return{vertexIndices:s(t,t.ELEMENT_ARRAY_BUFFER,t.STATIC_DRAW,new Uint16Array(e)),vertexPositions:s(t,t.ARRAY_BUFFER,t.STATIC_DRAW,new Float32Array(r)),textureCoords:s(t,t.ARRAY_BUFFER,t.STATIC_DRAW,new Float32Array(i))}}function u(t,e){t.deleteBuffer(e.vertexIndices),t.deleteBuffer(e.vertexPositions),t.deleteBuffer(e.textureCoords)}function h(t,e){for(var r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),i=0;i<r;i++)t.enableVertexAttribArray(i)}function l(t,e){for(var r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),i=0;i<r;i++)t.disableVertexAttribArray(i)}function c(t,e,r){t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,r._texture),t.uniform1i(e.uSampler,0)}function p(t,e,r,i){var n=((r+1)*v-i)/(v*m);t.uniform1f(e.uDepth,n)}function f(t,e,r){var i=M;e&&null!=e.opacity&&(i=e.opacity),t.uniform1f(r.opacity,i);var n=b;e&&e.colorOffset&&(n=e.colorOffset),t.uniform4fv(r.colorOffset,n);var o=x;e&&e.colorMatrix&&(o=e.colorMatrix),t.uniformMatrix4fv(r.colorMatrix,!1,o)}function d(t,e,r,i){if(0===r.x&&1===r.width&&0===r.y&&1===r.height)return t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),void w.identity(i);var n=r.x,o=_(n,0,1),s=o-n,a=1-o,u=_(r.width-s,0,a),h=r.width-u,l=1-r.height-r.y,c=_(l,0,1),p=c-l,f=1-c,d=_(r.height-p,0,f),m=r.height-d;g.set(T,r.width/u,r.height/d,1),g.set(E,(h-s)/u,(m-p)/d,0),w.identity(i),w.translate(i,i,E),w.scale(i,i,T),t.viewport(t.drawingBufferWidth*o,t.drawingBufferHeight*c,t.drawingBufferWidth*u,t.drawingBufferHeight*d)}var m=256,v=256,_=t("../util/clamp"),y=t("gl-matrix").vec4,g=t("gl-matrix").vec3,w=t("gl-matrix").mat4,M=1,b=y.create(),x=w.create();w.identity(x);var E=g.create(),T=g.create();e.exports={createShaderProgram:n,destroyShaderProgram:o,createConstantBuffers:a,destroyConstantBuffers:u,enableAttributes:h,disableAttributes:l,setTexture:c,setDepth:p,setViewport:d,setupPixelEffectUniforms:f}},{"../util/clamp":90,"gl-matrix":3}],67:[function(t,e,r){"use strict";function i(){this.constructor.super_.apply(this,arguments)}var n=t("./WebGlBase");t("../util/inherits")(i,n),e.exports=i},{"../util/inherits":104,"./WebGlBase":65}],68:[function(t,e,r){"use strict";function i(t){this.gl=t,this.invProjMatrix=n.create(),this.viewportMatrix=n.create(),this.constantBuffers=a(t,g,w,M),this.shaderProgram=h(t,_,y,b,x)}var n=t("gl-matrix").mat4,o=t("../util/clearOwnProperties"),s=t("./WebGlCommon"),a=s.createConstantBuffers,u=s.destroyConstantBuffers,h=s.createShaderProgram,l=s.destroyShaderProgram,c=s.enableAttributes,p=s.disableAttributes,f=s.setViewport,d=s.setupPixelEffectUniforms,m=s.setDepth,v=s.setTexture,_=t("../shaders/vertexEquirect"),y=t("../shaders/fragmentEquirect"),g=[0,1,2,0,2,3],w=[-1,-1,0,1,-1,0,1,1,0,-1,1,0],M=[0,0,1,0,1,1,0,1],b=["aVertexPosition"],x=["uDepth","uOpacity","uSampler","uInvProjMatrix","uViewportMatrix","uColorOffset","uColorMatrix","uTextureX","uTextureY","uTextureWidth","uTextureHeight"];i.prototype.destroy=function(){u(this.gl,this.constantBuffers),l(this.gl,this.shaderProgram),o(this)},i.prototype.startLayer=function(t,e){var r=this.gl,i=this.shaderProgram,o=this.constantBuffers,s=this.invProjMatrix,a=this.viewportMatrix;r.useProgram(i),c(r,i),f(r,t,e,a),r.uniformMatrix4fv(i.uViewportMatrix,!1,a),r.bindBuffer(r.ARRAY_BUFFER,o.vertexPositions),r.vertexAttribPointer(i.aVertexPosition,3,r.FLOAT,r.FALSE,0,0),r.bindBuffer(r.ARRAY_BUFFER,o.textureCoords),n.copy(s,t.view().projection()),n.invert(s,s),r.uniformMatrix4fv(i.uInvProjMatrix,!1,s);var u=t.effects().textureCrop||{},h=null!=u.x?u.x:0,l=null!=u.y?u.y:0,p=null!=u.width?u.width:1,m=null!=u.height?u.height:1;r.uniform1f(i.uTextureX,h),r.uniform1f(i.uTextureY,l),r.uniform1f(i.uTextureWidth,p),r.uniform1f(i.uTextureHeight,m),d(r,t.effects(),{opacity:i.uOpacity,colorOffset:i.uColorOffset,colorMatrix:i.uColorMatrix})},i.prototype.endLayer=function(t,e){var r=this.gl,i=this.shaderProgram;p(r,i)},i.prototype.renderTile=function(t,e,r,i){var n=this.gl,o=this.shaderProgram,s=this.constantBuffers;m(n,o,i,t.z),v(n,o,e),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,s.vertexIndices),n.drawElements(n.TRIANGLES,g.length,n.UNSIGNED_SHORT,0)},e.exports=i},{"../shaders/fragmentEquirect":71,"../shaders/vertexEquirect":73,"../util/clearOwnProperties":91,"./WebGlCommon":66,"gl-matrix":3}],69:[function(t,e,r){"use strict";function i(){this.constructor.super_.apply(this,arguments)}var n=t("./WebGlBase");t("../util/inherits")(i,n),e.exports=i},{"../util/inherits":104,"./WebGlBase":65}],70:[function(t,e,r){"use strict";function i(t){switch(t.type){case"webgl":t.registerRenderer("flat","flat",o),t.registerRenderer("cube","rectilinear",n),t.registerRenderer("equirect","rectilinear",s);break;case"css":t.registerRenderer("flat","flat",u),t.registerRenderer("cube","rectilinear",a);break;case"flash":t.registerRenderer("flat","flat",l),t.registerRenderer("cube","rectilinear",h);break;default:throw new Error("Unknown stage type: "+t.type)}}var n=t("./WebGlCube"),o=t("./WebGlFlat"),s=t("./WebGlEquirect"),a=t("./CssCube"),u=t("./CssFlat"),h=t("./FlashCube"),l=t("./FlashFlat");e.exports=i},{"./CssCube":60,"./CssFlat":61,"./FlashCube":63,"./FlashFlat":64,"./WebGlCube":67,"./WebGlEquirect":68,"./WebGlFlat":69}],71:[function(t,e,r){"use strict";e.exports=["#ifdef GL_FRAGMENT_PRECISION_HIGH","precision highp float;","#else","precision mediump float","#endif","uniform sampler2D uSampler;","uniform float uOpacity;","uniform float uTextureX;","uniform float uTextureY;","uniform float uTextureWidth;","uniform float uTextureHeight;","uniform vec4 uColorOffset;","uniform mat4 uColorMatrix;","varying vec4 vRay;","const float PI = 3.14159265358979323846264;","void main(void) {","  float r = inversesqrt(vRay.x * vRay.x + vRay.y * vRay.y + vRay.z * vRay.z);","  float phi  = acos(vRay.y * r);","  float theta = atan(vRay.x, -1.0*vRay.z);","  float s = 0.5 + 0.5 * theta / PI;","  float t = 1.0 - phi / PI;","  s = s * uTextureWidth + uTextureX;","  t = t * uTextureHeight + uTextureY;","  vec4 color = texture2D(uSampler, vec2(s, t)) * uColorMatrix + uColorOffset;","  gl_FragColor = vec4(color.rgba * uOpacity);","}"].join("\n")},{}],72:[function(t,e,r){"use strict";e.exports=["#ifdef GL_FRAGMENT_PRECISION_HIGH","precision highp float;","#else","precision mediump float;","#endif","uniform sampler2D uSampler;","uniform float uOpacity;","uniform vec4 uColorOffset;","uniform mat4 uColorMatrix;","varying vec2 vTextureCoord;","void main(void) {","  vec4 color = texture2D(uSampler, vTextureCoord) * uColorMatrix + uColorOffset;","  gl_FragColor = vec4(color.rgba * uOpacity);","}"].join("\n")},{}],73:[function(t,e,r){"use strict";e.exports=["attribute vec3 aVertexPosition;","uniform float uDepth;","uniform mat4 uViewportMatrix;","uniform mat4 uInvProjMatrix;","varying vec4 vRay;","void main(void) {","  vRay = uInvProjMatrix * vec4(aVertexPosition.xy, 1.0, 1.0);","  gl_Position = uViewportMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);","}"].join("\n")},{}],74:[function(t,e,r){"use strict";e.exports=["attribute vec3 aVertexPosition;","attribute vec2 aTextureCoord;","uniform float uDepth;","uniform mat4 uViewportMatrix;","uniform mat4 uProjMatrix;","varying vec2 vTextureCoord;","void main(void) {","  gl_Position = uViewportMatrix * uProjMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);","  gl_Position.z = uDepth * gl_Position.w;","  vTextureCoord = aTextureCoord;","}"].join("\n")},{}],75:[function(t,e,r){"use strict";function i(t,e){e=e||{},this._loadPool=new a({concurrency:e.concurrency||p}),this._retryDelay=e.retryDelay||f,this._retryMap={},this._sourceFromTile=t}function n(t){var e="\\{("+t+")\\}";return new RegExp(e,"g")}var o=t("minimal-event-emitter"),s=t("../NetworkError"),a=t("../collections/WorkPool"),u=t("../util/chain"),h=t("../util/delay"),l=t("../util/now"),c={x:"x",y:"y",z:"z",f:"face"},p=4,f=1e4;o(i),i.prototype.loadAsset=function(t,e,r){var i,n=this,o=this._retryDelay,a=this._retryMap,c=this._sourceFromTile(e),p=c.url,f=c.rect,d=t.loadImage.bind(t,p,f),m=function(t){return n._loadPool.push(d,function(r,i){r?(r instanceof s&&(a[p]=l(),n.emit("networkError",i,r)),t(r,e)):(delete a[p],t(null,e,i))})},v=a[p];if(null!=v){var _=l(),y=_-v;y<o?i=o-y:(i=0,delete a[p])}var g=h.bind(null,i);return u(g,m)(r)},i.fromString=function(t,e){function r(e){var r=t;for(var i in c){var o=c[i],s=n(i),a=e.hasOwnProperty(o)?e[o]:"";r=r.replace(s,a)}return{url:r}}function o(t){return 0===t.z?s(t):r(t)}function s(t){var r=a.indexOf(t.face)/6;return{url:e.cubeMapPreviewUrl,rect:{x:0,y:r,width:1,height:1/6}}}e=e||{};var a=e&&e.cubeMapPreviewFaceOrder||"bdflru";return new i(e.cubeMapPreviewUrl?o:r,e)},e.exports=i},{"../NetworkError":18,"../collections/WorkPool":33,"../util/chain":89,"../util/delay":99,"../util/now":108,"minimal-event-emitter":14}],76:[function(t,e,r){"use strict";function i(t){this._asset=t}i.prototype.asset=function(){return this._asset},i.prototype.loadAsset=function(t,e,r){function i(){clearTimeout(o),r.apply(null,arguments)}var n=this,o=setTimeout(function(){r(null,e,n._asset)},0);return i},e.exports=i},{}],77:[function(t,e,r){"use strict";function i(t){this.constructor.super_.call(this,t),this._loader=new s(this),this._domElement=document.createElement("div"),l(this._domElement),c(this._domElement)}function n(t,e,r){var i=document.createElement("canvas");l(i),p(i),this._canvas=i,this._timestamp=null,this.refresh(e,r)}var o=t("./Stage"),s=t("../loaders/HtmlImage"),a=t("../support/Css"),u=t("bowser"),h=t("../util/inherits"),l=t("../util/dom").setAbsolute,c=t("../util/dom").setFullSize,p=t("../util/dom").setNullTransformOrigin,f=t("../util/clearOwnProperties"),d={padSize:u.ios?0:3,reverseLevelDepth:u.ios,useNullTransform:u.ios,perspectiveNudge:u.webkit||u.gecko?.001:0};h(i,o),i.prototype.destroy=function(){this.constructor.super_.prototype.destroy.call(this)},i.supported=function(){return a()},i.prototype.domElement=function(){return this._domElement},i.prototype.setSizeForType=function(){},i.prototype.loadImage=function(t,e,r){return this._loader.loadImage(t,e,r)},i.prototype.validateLayer=function(t){},i.prototype.createRenderer=function(t){return new t(this._domElement,d)},i.prototype.destroyRenderer=function(t){t.destroy()},i.prototype.startFrame=function(){},i.prototype.endFrame=function(){},i.prototype.takeSnapshot=function(){throw new Error("CssStage: takeSnapshot not implemented")},i.type=i.prototype.type="css",n.prototype.refresh=function(t,e){var r=e.timestamp();if(r!==this._timestamp){this._timestamp=r;var i=this._canvas,n=i.getContext("2d"),o=e.element(),s=t.width(),a=t.height(),u=d.padSize,h=t.padTop()?u:0,l=t.padBottom()?u:0,c=t.padLeft()?u:0,p=t.padRight()?u:0;i.width=c+s+p,i.height=h+a+l,n.drawImage(o,c,h,s,a);var f;for(f=0;f<h;f++)n.drawImage(i,c,h,s,1,c,f,s,1);for(f=0;f<c;f++)n.drawImage(i,c,h,1,a,f,h,1,a);for(f=0;f<l;f++)n.drawImage(i,c,h+a-1,s,1,c,h+a+f,s,1);for(f=0;f<p;f++)n.drawImage(i,c+s-1,h,1,a,c+s+f,h,1,a)}},n.prototype.destroy=function(){f(this)},i.TextureClass=i.prototype.TextureClass=n,e.exports=i},{"../loaders/HtmlImage":58,"../support/Css":82,"../util/clearOwnProperties":91,"../util/dom":100,"../util/inherits":104,"./Stage":80,bowser:1}],78:[function(t,e,r){"use strict";function i(){return window[g].__next++}function n(t){if(this.constructor.super_.call(this,t),this._wmode=t&&t.wmode||_,this._swfPath=t&&t.swfPath||y,!y)throw new Error("Missing SWF path");this._flashStageId=i(),this._callbacksObj=window[g][this._flashStageId]={},this._stageCallbacksObjVarName=g+"["+this._flashStageId+"]",this._callbackListeners={};for(var e=0;e<w.length;e++)this._callbacksObj[w[e]]=this._callListeners(w[e]);this._loader=new u(this),this._loadImageQueue=new l,this._loadImageQueue.pause(),this._flashReady=!1,this._nextLayerId=0;var r=o(this._swfPath,this._flashStageId,this._stageCallbacksObjVarName);this._domElement=r.root,this._blockingElement=r.blocking,this._flashElement=r.flash,this._checkReadyTimer=setInterval(this._checkReady.bind(this),50)}function o(t,e,r){var i=document.createElement("div");f(i),d(i);var n="marzipano-flash-stage-"+e,o='<object id="'+n+'" name="'+n+'" type="application/x-shockwave-flash" data="'+t+'">',s="";s+='<param name="movie" value="'+t+'" />',s+='<param name="allowscriptaccess" value="always" />',s+='<param name="flashvars" value="callbacksObjName='+r+'" />',s+='<param name="wmode" value="transparent" />',o+=s,o+="</object>";var a=document.createElement("div");a.innerHTML=o;var u=a.firstChild;f(u),d(u),i.appendChild(u);var h=document.createElement("div");return f(h),d(h),m(h),i.appendChild(h),{root:i,flash:u,blocking:h}}function s(t,e,r){var i=r.element(),n=e.width(),o=e.height(),s=M.padSize,a=e.padTop()?s:0,u=e.padBottom()?s:0,h=e.padLeft()?s:0,l=e.padRight()?s:0,c=t._flashElement.createTexture(i,n,o,a,u,h,l);this._stage=t,this._textureId=c}var a=t("./Stage"),u=t("../loaders/FlashImage"),h=t("../support/Flash"),l=t("../collections/WorkQueue"),c=t("../util/inherits"),p=t("../util/defer"),f=t("../util/dom").setAbsolute,d=t("../util/dom").setFullSize,m=t("../util/dom").setBlocking,v=t("../util/clearOwnProperties"),_="transparent",y=function(){var t=document.currentScript;if(!t){var e=document.getElementsByTagName("script");t=e.length?e[e.length-1]:null}if(!t)return null;var r=t.src,i=r.lastIndexOf("/");return(r=i>=0?r.slice(0,i+1):"")+"marzipano.swf"}(),g="MarzipanoFlashCallbackMap";g in window||(window[g]={__next:0});var w=["imageLoaded"],M={padSize:3};c(n,a),n.prototype.destroy=function(){window[g][this._flashStageId]=null,null!=this._checkReadyTimer&&clearInterval(this._checkReadyTimer),this.constructor.super_.prototype.destroy.call(this)},n.supported=function(){return h()},n.prototype.domElement=function(){return this._domElement},n.prototype.flashElement=function(){return this._flashElement},n.prototype.setSizeForType=function(){},n.prototype.loadImage=function(t,e,r){var i=this._loader.loadImage.bind(this._loader,t,e);return this._loadImageQueue.push(i,r)},n.prototype.validateLayer=function(t){},n.prototype.addFlashCallbackListener=function(t,e){this._callbackListeners[t]=this._callbackListeners[t]||[],this._callbackListeners[t].push(e)},n.prototype.removeFlashCallbackListener=function(t,e){var r=this._callbackListeners[t]||[],i=r.indexOf(e);i>=0&&r.splice(i,1)},n.prototype._callListeners=function(t){var e=this;return function(){for(var r=e._callbackListeners[t]||[],i=0;i<r.length;i++){p(r[i],arguments)}}},n.prototype._checkReady=function(){return!!(this._flashElement&&this._flashElement.isReady&&this._flashElement.isReady())&&(this._flashReady=!0,clearTimeout(this._checkReadyTimer),this._checkReadyTimer=null,this._loadImageQueue.resume(),this.emit("renderInvalid"),!0)},n.prototype.createRenderer=function(t){return new t(this._flashElement,++this._nextLayerId,M)},n.prototype.destroyRenderer=function(t){t.destroy()},n.prototype.startFrame=function(){},n.prototype.endFrame=function(){},n.prototype.takeSnapshot=function(t){"object"==typeof t&&null!=t||(t={});var e=t.quality;if(void 0===e&&(e=75),"number"!=typeof e||e<0||e>100)throw new Error("FlashStage: Snapshot quality needs to be a number between 0 and 100");return this._flashElement.takeSnapshot(e)},n.type=n.prototype.type="flash",s.prototype.refresh=function(t,e){},s.prototype.destroy=function(){this._stage._flashElement.destroyTexture(this._textureId),v(this)},n.TextureClass=n.prototype.TextureClass=s,e.exports=n},{"../collections/WorkQueue":34,"../loaders/FlashImage":57,"../support/Flash":83,"../util/clearOwnProperties":91,"../util/defer":97,"../util/dom":100,"../util/inherits":104,"./Stage":80}],79:[function(t,e,r){"use strict";function i(){this._renderers={}}i.prototype.set=function(t,e,r){this._renderers[t]||(this._renderers[t]={}),this._renderers[t][e]=r},i.prototype.get=function(t,e){return this._renderers[t]&&this._renderers[t][e]||null},e.exports=i},{}],80:[function(t,e,r){"use strict";function i(t,e){return t.cmp(e)}function n(t,e){return-t.cmp(e)}function o(t){this._progressive=!(!t||!t.progressive),this._layers=[],this._renderers=[],this._tilesToLoad=[],this._tilesToRender=[],this._tmpVisible=[],this._tmpChildren=[],this._width=0,this._height=0,this._tmpRect={},this._tmpSize={},this._createTextureWorkQueue=new a,this._emitRenderInvalid=this._emitRenderInvalid.bind(this),this._rendererRegistry=new p}var s=t("minimal-event-emitter"),a=t("../collections/WorkQueue"),u=t("../util/calcRect"),h=t("../util/async"),l=t("../util/cancelize"),c=t("../util/clearOwnProperties"),p=t("./RendererRegistry");s(o),o.prototype.destroy=function(){this.removeAllLayers(),c(this)},o.prototype.registerRenderer=function(t,e,r){return this._rendererRegistry.set(t,e,r)},o.prototype.domElement=function(){throw new Error("Stage implementation must override domElement")},o.prototype.width=function(){return this._width},o.prototype.height=function(){return this._height},o.prototype.size=function(t){return t=t||{},t.width=this._width,t.height=this._height,t},o.prototype.setSize=function(t){this._width=t.width,this._height=t.height,this.setSizeForType(),this.emit("resize"),this._emitRenderInvalid()},o.prototype.setSizeForType=function(t){throw new Error("Stage implementation must override setSizeForType")},o.prototype.loadImage=function(){throw new Error("Stage implementation must override loadImage")},o.prototype._emitRenderInvalid=function(){this.emit("renderInvalid")},o.prototype.validateLayer=function(t){throw new Error("Stage implementation must override validateLayer")},o.prototype.listLayers=function(){return[].concat(this._layers)},o.prototype.hasLayer=function(t){return this._layers.indexOf(t)>=0},o.prototype.addLayer=function(t,e){if(this._layers.indexOf(t)>=0)throw new Error("Layer already in stage");if(null==e&&(e=this._layers.length),e<0||e>this._layers.length)throw new Error("Invalid layer position");this.validateLayer(t);var r=t.geometry().type,i=t.view().type,n=this._rendererRegistry.get(r,i);if(!n)throw new Error("No "+this.type+" renderer avaiable for "+r+" geometry and "+i+" view");var o=this.createRenderer(n);this._layers.splice(e,0,t),this._renderers.splice(e,0,o),t.addEventListener("viewChange",this._emitRenderInvalid),t.addEventListener("effectsChange",this._emitRenderInvalid),t.addEventListener("fixedLevelChange",this._emitRenderInvalid),t.addEventListener("textureStoreChange",this._emitRenderInvalid),this._emitRenderInvalid()},o.prototype.moveLayer=function(t,e){var r=this._layers.indexOf(t);if(r<0)throw new Error("No such layer in stage");if(e<0||e>=this._layers.length)throw new Error("Invalid layer position");t=this._layers.splice(r,1)[0];var i=this._renderers.splice(r,1)[0];this._layers.splice(e,0,t),this._renderers.splice(e,0,i),this._emitRenderInvalid()},o.prototype.removeLayer=function(t){var e=this._layers.indexOf(t);if(e<0)throw new Error("No such layer in stage");var r=this._layers.splice(e,1)[0],i=this._renderers.splice(e,1)[0];this.destroyRenderer(i),r.removeEventListener("viewChange",this._emitRenderInvalid),r.removeEventListener("effectsChange",this._emitRenderInvalid),r.removeEventListener("fixedLevelChange",this._emitRenderInvalid),r.removeEventListener("textureStoreChange",this._emitRenderInvalid),this._emitRenderInvalid()},o.prototype.removeAllLayers=function(){for(;this._layers.length>0;)this.removeLayer(this._layers[0])},o.prototype.startFrame=function(){throw new Error("Stage implementation must override startFrame")},o.prototype.endFrame=function(){throw new Error("Stage implementation must override endFrame")},o.prototype.render=function(){var t,e,r,i=this._tilesToLoad,n=this._tilesToRender,o=!0,s=this._width,a=this._height,h=this._tmpRect,l=this._tmpSize;if(!(s<=0||a<=0)){for(this.startFrame(),t=0;t<this._layers.length;t++)this._layers[t].textureStore().startFrame();for(t=0;t<this._layers.length;t++){var c,p,f=this._layers[t],d=f.effects(),m=f.view(),v=f.textureStore(),_=this._renderers[t],y=this._layers.length-t;if(u(s,a,d&&d.rect,h),!(h.width<=0||h.height<=0)){for(l.width=h.width*this._width,l.height=h.height*this._height,m.setSize(l),_.startLayer(f,h),r=this._collectTiles(f,v),e=0;e<i.length;e++)c=i[e],v.markTile(c);for(e=0;e<n.length;e++)c=n[e],p=v.texture(c),_.renderTile(c,p,f,y);f.emit("renderComplete",r),r||(o=!1),_.endLayer(f,h)}}for(t=0;t<this._layers.length;t++)this._layers[t].textureStore().endFrame();this.endFrame(),this.emit("renderComplete",o)}},o.prototype._collectTiles=function(t,e){var r=this._tilesToLoad,o=this._tilesToRender,s=this._tmpVisible;r.length=0,o.length=0,s.length=0,t.visibleTiles(s);for(var a=!0,u=0;u<s.length;u++){var h,l=s[u];this._collectTileToLoad(l),e.texture(l)?(h=!1,this._collectTileToRender(l)):(h=this._collectChildren(l,e),a=!1),this._collectParents(l,e,h)}return r.sort(i),o.sort(n),a},o.prototype._collectChildren=function(t,e){var r=this._tmpChildren,i=!0;do{if(r.length=0,!t.children(r))break;i=!1;for(var n=0;n<r.length;n++)t=r[n],e.texture(t)?(this._collectTileToLoad(t),this._collectTileToRender(t)):i=!0}while(i&&1===r.length);return i},o.prototype._collectParents=function(t,e,r){for(var i=this._progressive;(i||r)&&null!=(t=t.parent());){if(r)if(e.texture(t))this._collectTileToRender(t),r=!1;else if(!this._progressive)continue;this._collectTileToLoad(t)||(i=!1)}return r},o.prototype._collectTileToLoad=function(t){return this._collectTileIntoList(t,this._tilesToLoad)},o.prototype._collectTileToRender=function(t){return this._collectTileIntoList(t,this._tilesToRender)},o.prototype._collectTileIntoList=function(t,e){for(var r=!1,i=0;i<e.length;i++)if(t.equals(e[i])){r=!0;break}return r||e.push(t),!r},o.prototype.createTexture=function(t,e,r){function i(){return new n.TextureClass(n,t,e)}var n=this,o=l(h(i));return this._createTextureWorkQueue.push(o,function(i,n){r(i,t,e,n)})},e.exports=o},{"../collections/WorkQueue":34,"../util/async":86,"../util/calcRect":87,"../util/cancelize":88,"../util/clearOwnProperties":91,"./RendererRegistry":79,"minimal-event-emitter":14}],81:[function(t,e,r){"use strict";function i(t,e){var r={alpha:!0,premultipliedAlpha:!0,antialias:!(!e||!e.antialias),preserveDrawingBuffer:!(!e||!e.preserveDrawingBuffer)};v&&"undefined"!=typeof WebGLDebugUtils&&(console.log("Using WebGL lost context simulator"),t=WebGLDebugUtils.makeLostContextSimulatingCanvas(t));var i=t.getContext&&(t.getContext("webgl",r)||t.getContext("experimental-webgl",r));if(!i)throw new Error("Could not get WebGL context");return v&&"undefined"!=typeof WebGLDebugUtils&&(i=WebGLDebugUtils.makeDebugContext(i),console.log("Using WebGL debug context")),i}function n(t){t=t||{};var e=this;this.constructor.super_.call(this,t),this._generateMipmaps=null!=t.generateMipmaps&&t.generateMipmaps,this._loader=new a(this),this._domElement=document.createElement("canvas"),f(this._domElement),d(this._domElement),this._gl=i(this._domElement,t),this._handleContextLoss=function(){e.emit("webglcontextlost"),e._gl=null},this._domElement.addEventListener("webglcontextlost",this._handleContextLoss),this._rendererInstances=[]}function o(t,e,r){this._stage=t,this._gl=t._gl,this._texture=null,this._timestamp=null,this._width=this._height=null,this.refresh(e,r)}var s=t("./Stage"),a=t("../loaders/HtmlImage"),u=t("../support/WebGl"),h=t("bowser"),l=t("../util/inherits"),c=t("../util/pixelRatio"),p=t("../util/ispot"),f=t("../util/dom").setAbsolute,d=t("../util/dom").setFullSize,m=t("../util/clearOwnProperties"),v="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.webGl,_={
videoUseTexImage2D:h.chrome};l(n,s),n.prototype.destroy=function(){this._domElement.removeEventListener("webglcontextlost",this._handleContextLoss),this.constructor.super_.prototype.destroy.call(this)},n.supported=function(){return u()},n.prototype.domElement=function(){return this._domElement},n.prototype.webGlContext=function(){return this._gl},n.prototype.setSizeForType=function(){var t=c();this._domElement.width=t*this._width,this._domElement.height=t*this._height},n.prototype.loadImage=function(t,e,r){return this._loader.loadImage(t,e,r)},n.prototype.maxTextureSize=function(){return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE)},n.prototype.validateLayer=function(t){var e=t.geometry().maxTileSize(),r=this.maxTextureSize();if(e>r)throw new Error("Layer has level with tile size larger than maximum texture size ("+e+" vs. "+r+")")},n.prototype.createRenderer=function(t){for(var e=this._rendererInstances,r=0;r<e.length;r++)if(e[r]instanceof t)return e[r];var i=new t(this._gl);return e.push(i),i},n.prototype.destroyRenderer=function(t){var e=this._rendererInstances;if(this._renderers.indexOf(t)<0){t.destroy();var r=e.indexOf(t);r>=0&&e.splice(r,1)}},n.prototype.startFrame=function(){var t=this._gl;if(!t)throw new Error("Bad WebGL context - maybe context was lost?");t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA)},n.prototype.endFrame=function(){},n.prototype.takeSnapshot=function(t){"object"==typeof t&&null!=t||(t={});var e=t.quality;if(void 0===e&&(e=75),"number"!=typeof e||e<0||e>100)throw new Error("WebGLStage: Snapshot quality needs to be a number between 0 and 100");return this.render(),this._domElement.toDataURL("image/jpeg",e/100)},n.type=n.prototype.type="webgl",o.prototype.refresh=function(t,e){var r,i=this._gl,n=this._stage,o=e.timestamp();if(o!==this._timestamp){var s=e.element(),a=e.width(),u=e.height();if(a!==this._width||u!==this._height){var h=n.maxTextureSize();if(a>h)throw new Error("Texture width larger than max size ("+a+" vs. "+h+")");if(u>h)throw new Error("Texture height larger than max size ("+u+" vs. "+h+")");this._texture&&i.deleteTexture(r),r=this._texture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,r),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,s)}else r=this._texture,i.bindTexture(i.TEXTURE_2D,r),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s instanceof HTMLVideoElement&&_.videoUseTexImage2D?i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,s):i.texSubImage2D(i.TEXTURE_2D,0,0,0,i.RGBA,i.UNSIGNED_BYTE,s);n._generateMipmaps&&p(a)&&p(u)?(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR_MIPMAP_LINEAR),i.generateMipmap(i.TEXTURE_2D)):(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR)),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,null),this._timestamp=o,this._width=a,this._height=u}},o.prototype.destroy=function(){this._texture&&this._gl.deleteTexture(this._texture),m(this)},n.TextureClass=n.prototype.TextureClass=o,e.exports=n},{"../loaders/HtmlImage":58,"../support/WebGl":84,"../util/clearOwnProperties":91,"../util/dom":100,"../util/inherits":104,"../util/ispot":105,"../util/pixelRatio":110,"./Stage":80,bowser:1}],82:[function(t,e,r){"use strict";function i(){var t=s("perspective"),e=document.createElement("div"),r="undefined"!=typeof e.style[t];if(r&&"WebkitPerspective"===t){var i="__marzipano_test_css3d_support__",n=document.createElement("style");n.textContent="@media(-webkit-transform-3d){#"+i+"{height: 3px;})",document.getElementsByTagName("head")[0].appendChild(n),e.id=i,document.body.appendChild(e),r=e.offsetHeight>0,n.parentNode.removeChild(n),e.parentNode.removeChild(e)}return r}function n(){return o!==undefined?o:o=i()}var o,s=t("../util/dom").prefixProperty;e.exports=n},{"../util/dom":100}],83:[function(t,e,r){"use strict";function i(){var t=null,e=navigator.plugins,r=navigator.mimeTypes,i=null;if(e&&e["Shockwave Flash"]&&r&&r["application/x-shockwave-flash"]&&r["application/x-shockwave-flash"].enabledPlugin)i=e["Shockwave Flash"].description,i=i.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),t=[0,0,0],t[0]=parseInt(i.replace(/^(.*)\..*$/,"$1"),10),t[1]=parseInt(i.replace(/^.*\.(.*)\s.*$/,"$1"),10),t[2]=/[a-zA-Z]/.test(i)?parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;else if(window.ActiveXObject)try{var n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");n&&(i=n.GetVariable("$version"))&&(i=i.split(" ")[1].split(","),t=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}catch(o){}return t}function n(){var t=i();return t&&(t[0]>=11||10===t[0]&&t[1]>=1)}function o(){return s!==undefined?s:s=n()}var s;e.exports=o},{}],84:[function(t,e,r){"use strict";function i(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}function n(){return o!==undefined?o:o=i()}var o;e.exports=n},{}],85:[function(t,e,r){"use strict";function i(){var t=document.createElement("a").style;t.cssText="pointer-events:auto";var e="auto"===t.pointerEvents,r=s.msie&&parseFloat(s.version)<11;return e&&!r}function n(){return o!==undefined?o:o=i()}var o,s=t("bowser");e.exports=n},{bowser:1}],86:[function(t,e,r){"use strict";function i(t){return function(e){var r,i;try{i=t()}catch(n){r=n}finally{r?e(r):e(null,i)}}}e.exports=i},{}],87:[function(t,e,r){"use strict";function i(t,e,r,i){i=i||{};var n;n=null!=r&&null!=r.absoluteWidth?r.absoluteWidth/t:null!=r&&null!=r.relativeWidth?r.relativeWidth:1;var o;o=r&&null!=r.absoluteHeight?r.absoluteHeight/e:null!=r&&null!=r.relativeHeight?r.relativeHeight:1;var s;s=null!=r&&null!=r.absoluteX?r.absoluteX/t:null!=r&&null!=r.relativeX?r.relativeX:0;var a;return a=null!=r&&null!=r.absoluteY?r.absoluteY/e:null!=r&&null!=r.relativeY?r.relativeY:0,i.x=s,i.y=a,i.width=n,i.height=o,i}e.exports=i},{}],88:[function(t,e,r){"use strict";function i(t){return function(){function e(){i.apply(null,arguments)}if(!arguments.length)throw new Error("cancelized: expected at least one argument");var r=Array.prototype.slice.call(arguments,0),i=r[r.length-1]=n(r[r.length-1]);return t.apply(null,r),e}}var n=t("./once");e.exports=i},{"./once":109}],89:[function(t,e,r){"use strict";function i(){var t=Array.prototype.slice.call(arguments,0);return function(){function e(){if(arguments[0])return o=s=null,void u.apply(null,arguments);if(!i.length)return o=s=null,void u.apply(null,arguments);o=i.shift();var t=o,r=Array.prototype.slice.call(arguments,1);r.push(e);var n=o.apply(null,r);if(t===o){if("function"!=typeof n)throw new Error("chain: chaining on non-cancellable function");s=n}}function r(){s&&s.apply(null,arguments)}var i=t.slice(0),o=null,s=null,a=arguments.length?Array.prototype.slice.call(arguments,0,arguments.length-1):[],u=arguments.length?arguments[arguments.length-1]:n;return a.unshift(null),e.apply(null,a),r}}var n=t("./noop");e.exports=i},{"./noop":107}],90:[function(t,e,r){"use strict";function i(t,e,r){return Math.min(Math.max(t,e),r)}e.exports=i},{}],91:[function(t,e,r){"use strict";function i(t){for(var e in t)t.hasOwnProperty(e)&&(t[e]=undefined)}e.exports=i},{}],92:[function(t,e,r){"use strict";function i(t,e){return t<e?-1:t>e?1:0}e.exports=i},{}],93:[function(t,e,r){"use strict";function i(){var t=arguments;return function(e){for(var r=e,i=0;i<t.length;i++){r=t[i].call(null,r)}return r}}e.exports=i},{}],94:[function(t,e,r){"use strict";function i(t,e,r){return 2*Math.atan(r*Math.tan(t/2)/e)}function n(t,e,r){return i(t,e,r)}function o(t,e,r){return i(t,e,Math.sqrt(e*e+r*r))}function s(t,e,r){return i(t,r,e)}function a(t,e,r){return i(t,r,Math.sqrt(e*e+r*r))}function u(t,e,r){return i(t,Math.sqrt(e*e+r*r),e)}function h(t,e,r){return i(t,Math.sqrt(e*e+r*r),r)}e.exports={convert:i,htov:n,htod:o,vtoh:s,vtod:a,dtoh:u,dtov:h}},{}],95:[function(t,e,r){"use strict";function i(t){return t.toPrecision(15)}e.exports=i},{}],96:[function(t,e,r){"use strict";function i(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}e.exports=i},{}],97:[function(t,e,r){"use strict";function i(t,e){function r(){e&&e.length>0?t.apply(null,e):t()}setTimeout(r,0)}e.exports=i},{}],98:[function(t,e,r){"use strict";function i(t){return t*Math.PI/180}e.exports=i},{}],99:[function(t,e,r){"use strict";function i(t,e){function r(){null!=n&&(n=null,e(null))}function i(){null!=n&&(clearTimeout(n),n=null,e.apply(null,arguments))}var n=null;return n=setTimeout(r,t),i}e.exports=i},{}],100:[function(t,e,r){"use strict";function i(t){for(var e=document.documentElement.style,r=["Moz","Webkit","Khtml","O","ms"],i=0;i<r.length;i++){var n=r[i],o=t[0].toUpperCase()+t.slice(1),s=n+o;if(s in e)return s}return t}function n(t){var e=i(t);return function(t){return t.style[e]}}function o(t){var e=i(t);return function(t,r){return t.style[e]=r}}function s(t){_(t,"translateZ(0)")}function a(t){y(t,"0 0 0")}function u(t){t.style.position="absolute"}function h(t,e,r){t.style.left=e+"px",t.style.top=r+"px"}function l(t,e,r){t.style.width=e+"px",t.style.height=r+"px"}function c(t){t.style.width=t.style.height=0}function p(t){t.style.width=t.style.height="100%"}function f(t){t.style.overflow="hidden"}function d(t){t.style.overflow="visible"}function m(t){t.style.pointerEvents="none"}function v(t){t.style.backgroundColor="#000",t.style.opacity="0",t.style.filter="alpha(opacity=0)"}var _=o("transform"),y=o("transformOrigin");e.exports={prefixProperty:i,getWithVendorPrefix:n,setWithVendorPrefix:o,setTransform:_,setTransformOrigin:y,setNullTransform:s,setNullTransformOrigin:a,setAbsolute:u,setPixelPosition:h,setPixelSize:l,setNullSize:c,setFullSize:p,setOverflowHidden:f,setOverflowVisible:d,setNoPointerEvents:m,setBlocking:v}},{}],101:[function(t,e,r){"use strict";function i(t,e){for(var r in e)t[r]=e[r];return t}e.exports=i},{}],102:[function(t,e,r){(function(t){"use strict";var r=function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0!==t?t:null}();e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],103:[function(t,e,r){"use strict";function i(){for(var t=0,e=0;e<arguments.length;e++){var r=arguments[e];t+=r,t+=r<<10,t^=r>>6}return t+=t<<3,t^=t>>11,t+=t<<15,t>=0?t:-t}e.exports=i},{}],104:[function(t,e,r){"use strict";function i(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}e.exports=i},{}],105:[function(t,e,r){"use strict";function i(t){return 0==(t&t-1)}e.exports=i},{}],106:[function(t,e,r){"use strict";function i(t,e){return(+t%(e=+e)+e)%e}e.exports=i},{}],107:[function(t,e,r){"use strict";function i(){}e.exports=i},{}],108:[function(t,e,r){"use strict";e.exports=function(){return"undefined"!=typeof performance&&performance.now?function(){return performance.now()}:function(){return Date.now()}}()},{}],109:[function(t,e,r){"use strict";function i(t){var e,r=!1;return function(){return r||(r=!0,e=t.apply(null,arguments)),e}}e.exports=i},{}],110:[function(t,e,r){"use strict";function i(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t&&t.deviceXDPI&&t.logicalXDPI)return t.deviceXDPI/t.logicalXDPI;if(t&&t.systemXDPI&&t.logicalXDPI)return t.systemXDPI/t.logicalXDPI}return n}var n=1;e.exports=i},{}],111:[function(t,e,r){"use strict";function i(t,e,r,i){if(i=i||"",n()){var u="translateX("+a(e)+"px) translateY("+a(r)+"px) translateZ(0) "+i;o(t,u)}else s(t,e,r)}var n=t("../support/Css"),o=t("./dom").setTransform,s=t("./dom").setPixelPosition,a=t("./decimal");e.exports=i},{"../support/Css":82,"./decimal":95,"./dom":100}],112:[function(t,e,r){"use strict";function i(t){return 180*t/Math.PI}e.exports=i},{}],113:[function(t,e,r){"use strict";function i(t){return"number"==typeof t&&isFinite(t)}e.exports=i},{}],114:[function(t,e,r){"use strict";function i(t){return function(){function e(){!arguments[0]||s?i.apply(null,arguments):o=t.apply(null,r)}var r=arguments.length?Array.prototype.slice.call(arguments,0,arguments.length-1):[],i=arguments.length?arguments[arguments.length-1]:n,o=null,s=!1;return r.push(e),e(!0),function(){s=!0,o.apply(null,arguments)}}}var n=t("./noop");e.exports=i},{"./noop":107}],115:[function(t,e,r){"use strict";function i(t,e,r){function i(){if(!o){var a=(n()-s)/t;a<1?(e(a),requestAnimationFrame(i)):(e(1),r())}}var o=!1,s=n();return e(0),requestAnimationFrame(i),function(){o=!0,r.apply(null,arguments)}}var n=t("./now");e.exports=i},{"./now":108}],116:[function(t,e,r){"use strict";function i(t){var e=typeof t;if("object"===e){if(null===t)return"null";if("[object Array]"===Object.prototype.toString.call(t))return"array";if("[object RegExp]"===Object.prototype.toString.call(t))return"regexp"}return e}e.exports=i},{}],117:[function(t,e,r){"use strict";function i(t,e){if(!t||null==t.mediaAspectRatio)throw new Error("mediaAspectRatio must be defined");this._x=t&&null!=t.x?t.x:f,this._y=t&&null!=t.y?t.y:d,this._zoom=t&&null!=t.zoom?t.zoom:m,this._mediaAspectRatio=t.mediaAspectRatio,this._width=t&&null!=t.width?t.width:c,this._height=t&&null!=t.height?t.height:p,this._limiter=e||null,this._projMatrix=o.create(),this._invProjMatrix=o.create(),this._frustum=[0,0,0,0],this._projectionChanged=!0,this._params={},this._vec=s.create(),this._update()}var n=t("minimal-event-emitter"),o=t("gl-matrix").mat4,s=t("gl-matrix").vec4,a=t("../util/pixelRatio"),u=t("../util/real"),h=t("../util/clamp"),l=t("../util/clearOwnProperties"),c=0,p=0,f=.5,d=.5,m=1,v=[1,0,1,0],_=[-1,-1,1,1];n(i),i.prototype.destroy=function(){l(this)},i.prototype.x=function(){return this._x},i.prototype.y=function(){return this._y},i.prototype.zoom=function(){return this._zoom},i.prototype.mediaAspectRatio=function(){return this._mediaAspectRatio},i.prototype.width=function(){return this._width},i.prototype.height=function(){return this._height},i.prototype.size=function(t){return t=t||{},t.width=this._width,t.height=this._height,t},i.prototype.parameters=function(t){return t=t||{},t.x=this._x,t.y=this._y,t.zoom=this._zoom,t.mediaAspectRatio=this._mediaAspectRatio,t},i.prototype.limiter=function(){return this._limiter},i.prototype.setX=function(t){this._resetParams(),this._params.x=t,this._update(this._params)},i.prototype.setY=function(t){this._resetParams(),this._params.y=t,this._update(this._params)},i.prototype.setZoom=function(t){this._resetParams(),this._params.zoom=t,this._update(this._params)},i.prototype.offsetX=function(t){this.setX(this._x+t)},i.prototype.offsetY=function(t){this.setY(this._y+t)},i.prototype.offsetZoom=function(t){this.setZoom(this._zoom+t)},i.prototype.setMediaAspectRatio=function(t){this._resetParams(),this._params.mediaAspectRatio=t,this._update(this._params)},i.prototype.setSize=function(t){this._resetParams(),this._params.width=t.width,this._params.height=t.height,this._update(this._params)},i.prototype.setParameters=function(t){this._resetParams(),this._params.x=t.x,this._params.y=t.y,this._params.zoom=t.zoom,this._params.mediaAspectRatio=t.mediaAspectRatio,this._update(this._params)},i.prototype.setLimiter=function(t){this._limiter=t||null,this._update()},i.prototype._resetParams=function(){var t=this._params;t.x=null,t.y=null,t.zoom=null,t.mediaAspectRatio=null,t.width=null,t.height=null},i.prototype._update=function(t){null==t&&(this._resetParams(),t=this._params);var e=this._x,r=this._y,i=this._zoom,n=this._mediaAspectRatio,o=this._width,s=this._height;if(t.x=null!=t.x?t.x:e,t.y=null!=t.y?t.y:r,t.zoom=null!=t.zoom?t.zoom:i,t.mediaAspectRatio=null!=t.mediaAspectRatio?t.mediaAspectRatio:n,t.width=null!=t.width?t.width:o,t.height=null!=t.height?t.height:s,this._limiter&&!(t=this._limiter(t)))throw new Error("Bad view limiter");var a=t.x,l=t.y,c=t.zoom,p=t.mediaAspectRatio,f=t.width,d=t.height;if(!(u(a)&&u(l)&&u(c)&&u(p)&&u(f)&&u(d)))throw new Error("Bad view - suspect a broken limiter");c=h(c,1e-6,Infinity),this._x=a,this._y=l,this._zoom=c,this._mediaAspectRatio=p,this._width=f,this._height=d,a===e&&l===r&&c===i&&p===n&&f===o&&d===s||(this._projectionChanged=!0,this.emit("change")),f===o&&d===s||this.emit("resize")},i.prototype._zoomX=function(){return this._zoom},i.prototype._zoomY=function(){var t=this._mediaAspectRatio,e=this._width/this._height,r=this._zoom,i=r*t/e;return isNaN(i)&&(i=r),i},i.prototype.updateWithControlParameters=function(t){var e=this.zoom(),r=this._zoomX(),i=this._zoomY();this.offsetX(t.axisScaledX*r+t.x*e),this.offsetY(t.axisScaledY*i+t.y*e),this.offsetZoom(t.zoom*e)},i.prototype._updateProjection=function(){var t=this._projMatrix,e=this._invProjMatrix,r=this._frustum;if(this._projectionChanged){var i=this._x,n=this._y,s=this._zoomX(),a=this._zoomY(),u=r[0]=.5-n+.5*a,h=r[1]=i-.5+.5*s,l=r[2]=.5-n-.5*a,c=r[3]=i-.5-.5*s;o.ortho(t,c,h,l,u,-1,1),o.invert(e,t),this._projectionChanged=!1}},i.prototype.projection=function(){return this._updateProjection(),this._projMatrix},i.prototype.inverseProjection=function(){return this._updateProjection(),this._invProjMatrix},i.prototype.intersects=function(t){this._updateProjection();for(var e=this._frustum,r=0;r<e.length;r++){for(var i=e[r],n=v[r],o=_[r],s=!1,a=0;a<t.length;a++){var u=t[a];if(o<0&&u[n]<i||o>0&&u[n]>i){s=!0;break}}if(!s)return!1}return!0},i.prototype.selectLevel=function(t){for(var e=a()*this.width(),r=this._zoom,i=0;i<t.length;i++){var n=t[i];if(r*n.width()>=e)return n}return t[t.length-1]},i.prototype.coordinatesToScreen=function(t,e){var r=this._vec;e||(e={});var i=this._width,n=this._height;if(i<=0||n<=0)return e.x=null,e.y=null,null;var o=t&&null!=t.x?t.x:f,a=t&&null!=t.y?t.y:d;s.set(r,o-.5,.5-a,-1,1),s.transformMat4(r,r,this.projection());for(var u=0;u<3;u++)r[u]/=r[3];return e.x=i*(r[0]+1)/2,e.y=n*(1-r[1])/2,e},i.prototype.screenToCoordinates=function(t,e){var r=this._vec;e||(e={});var i=this._width,n=this._height,o=2*t.x/i-1,a=1-2*t.y/n;return s.set(r,o,a,1,1),s.transformMat4(r,r,this.inverseProjection()),e.x=.5+r[0],e.y=.5-r[1],e},i.limit={x:function(t,e){return function(r){return r.x=h(r.x,t,e),r}},y:function(t,e){return function(r){return r.y=h(r.y,t,e),r}},zoom:function(t,e){return function(r){return r.zoom=h(r.zoom,t,e),r}},resolution:function(t){return function(e){if(e.width<=0||e.height<=0)return e;var r=e.width,i=a()*r/t;return e.zoom=h(e.zoom,i,Infinity),e}},visibleX:function(t,e){return function(r){var i=e-t;r.zoom>i&&(r.zoom=i);var n=t+.5*r.zoom,o=e-.5*r.zoom;return r.x=h(r.x,n,o),r}},visibleY:function(t,e){return function(r){if(r.width<=0||r.height<=0)return r;var i=r.width/r.height,n=i/r.mediaAspectRatio,o=(e-t)*n;r.zoom>o&&(r.zoom=o);var s=t+.5*r.zoom/n,a=e-.5*r.zoom/n;return r.y=h(r.y,s,a),r}},letterbox:function(){return function(t){if(t.width<=0||t.height<=0)return t;var e=t.width/t.height,r=e/t.mediaAspectRatio;t.mediaAspectRatio>=e&&(t.zoom=Math.min(t.zoom,1)),t.mediaAspectRatio<=e&&(t.zoom=Math.min(t.zoom,r));var i,n;t.zoom>1?i=n=.5:(i=0+.5*t.zoom/1,n=1-.5*t.zoom/1);var o,s;return t.zoom>r?o=s=.5:(o=0+.5*t.zoom/r,s=1-.5*t.zoom/r),t.x=h(t.x,i,n),t.y=h(t.y,o,s),t}}},i.type=i.prototype.type="flat",e.exports=i},{"../util/clamp":90,"../util/clearOwnProperties":91,"../util/pixelRatio":110,"../util/real":113,"gl-matrix":3,"minimal-event-emitter":14}],118:[function(t,e,r){"use strict";function i(t,e){this._yaw=t&&null!=t.yaw?t.yaw:_,this._pitch=t&&null!=t.pitch?t.pitch:y,this._roll=t&&null!=t.roll?t.roll:g,this._fov=t&&null!=t.fov?t.fov:w,this._width=t&&null!=t.width?t.width:m,this._height=t&&null!=t.height?t.height:v,this._projectionCenterX=t&&null!=t.projectionCenterX?t.projectionCenterX:M,this._projectionCenterY=t&&null!=t.projectionCenterY?t.projectionCenterY:b,this._limiter=e||null,this._projMatrix=o.create(),this._invProjMatrix=o.create(),this._frustum=[s.create(),s.create(),s.create(),s.create(),s.create()],this._projectionChanged=!0,this._params={},this._fovs={},this._tmpVec=s.create(),this._update()}var n=t("minimal-event-emitter"),o=t("gl-matrix").mat4,s=t("gl-matrix").vec4,a=t("../util/pixelRatio"),u=t("../util/convertFov"),h=t("../util/mod"),l=t("../util/real"),c=t("../util/clamp"),p=t("../util/decimal"),f=t("../util/compose"),d=t("../util/clearOwnProperties"),m=0,v=0,_=0,y=0,g=0,w=Math.PI/4,M=0,b=0;n(i),i.prototype.destroy=function(){d(this)},i.prototype.yaw=function(){return this._yaw},i.prototype.pitch=function(){return this._pitch},i.prototype.roll=function(){return this._roll},i.prototype.projectionCenterX=function(){return this._projectionCenterX},i.prototype.projectionCenterY=function(){return this._projectionCenterY},i.prototype.fov=function(){return this._fov},i.prototype.width=function(){return this._width},i.prototype.height=function(){return this._height},i.prototype.size=function(t){return t=t||{},t.width=this._width,t.height=this._height,t},i.prototype.parameters=function(t){return t=t||{},t.yaw=this._yaw,t.pitch=this._pitch,t.roll=this._roll,t.fov=this._fov,t},i.prototype.limiter=function(){return this._limiter},i.prototype.setYaw=function(t){this._resetParams(),this._params.yaw=t,this._update(this._params)},i.prototype.setPitch=function(t){this._resetParams(),this._params.pitch=t,this._update(this._params)},i.prototype.setRoll=function(t){this._resetParams(),this._params.roll=t,this._update(this._params)},i.prototype.setFov=function(t){this._resetParams(),this._params.fov=t,this._update(this._params)},i.prototype.setProjectionCenterX=function(t){this._resetParams(),this._params.projectionCenterX=t,this._update(this._params)},i.prototype.setProjectionCenterY=function(t){this._resetParams(),this._params.projectionCenterY=t,this._update(this._params)},i.prototype.offsetYaw=function(t){this.setYaw(this._yaw+t)},i.prototype.offsetPitch=function(t){this.setPitch(this._pitch+t)},i.prototype.offsetRoll=function(t){this.setRoll(this._roll+t)},i.prototype.offsetFov=function(t){this.setFov(this._fov+t)},i.prototype.setSize=function(t){this._resetParams(),this._params.width=t.width,this._params.height=t.height,this._update(this._params)},i.prototype.setParameters=function(t){this._resetParams(),this._params.yaw=t.yaw,this._params.pitch=t.pitch,this._params.roll=t.roll,this._params.fov=t.fov,this._params.projectionCenterX=t.projectionCenterX,this._params.projectionCenterY=t.projectionCenterY,this._update(this._params)},i.prototype.setLimiter=function(t){this._limiter=t||null,this._update()},i.prototype._resetParams=function(){var t=this._params;t.yaw=null,t.pitch=null,t.roll=null,t.fov=null,t.width=null,t.height=null},i.prototype._update=function(t){null==t&&(this._resetParams(),t=this._params);var e=this._yaw,r=this._pitch,i=this._roll,n=this._fov,o=this._projectionCenterX,s=this._projectionCenterY,a=this._width,u=this._height;if(t.yaw=null!=t.yaw?t.yaw:e,t.pitch=null!=t.pitch?t.pitch:r,t.roll=null!=t.roll?t.roll:i,t.fov=null!=t.fov?t.fov:n,t.width=null!=t.width?t.width:a,t.height=null!=t.height?t.height:u,t.projectionCenterX=null!=t.projectionCenterX?t.projectionCenterX:o,t.projectionCenterY=null!=t.projectionCenterY?t.projectionCenterY:s,this._limiter&&!(t=this._limiter(t)))throw new Error("Bad view limiter");t=this._normalize(t);var h=t.yaw,c=t.pitch,p=t.roll,f=t.fov,d=t.width,m=t.height,v=t.projectionCenterX,_=t.projectionCenterY;if(!(l(h)&&l(c)&&l(p)&&l(f)&&l(d)&&l(m)&&l(v)&&l(_)))throw new Error("Bad view - suspect a broken limiter");this._yaw=h,this._pitch=c,this._roll=p,this._fov=f,this._width=d,this._height=m,this._projectionCenterX=v,this._projectionCenterY=_,h===e&&c===r&&p===i&&f===n&&d===a&&m===u&&v===o&&_===s||(this._projectionChanged=!0,this.emit("change")),d===a&&m===u||this.emit("resize")},i.prototype._normalize=function(t){this._normalizeCoordinates(t);var e=u.htov(Math.PI,t.width,t.height),r=isNaN(e)?Math.PI:Math.min(Math.PI,e);return t.fov=c(t.fov,1e-6,r-1e-6),t},i.prototype._normalizeCoordinates=function(t){return"yaw"in t&&(t.yaw=h(t.yaw-Math.PI,-2*Math.PI)+Math.PI),"pitch"in t&&(t.pitch=h(t.pitch-Math.PI,-2*Math.PI)+Math.PI),"roll"in t&&(t.roll=h(t.roll-Math.PI,-2*Math.PI)+Math.PI),t},i.prototype.normalizeToClosest=function(t,e){var r=this._yaw,i=this._pitch,n=t.yaw,o=t.pitch,s=n-2*Math.PI,a=n+2*Math.PI;Math.abs(s-r)<Math.abs(n-r)?n=s:Math.abs(a-r)<Math.abs(n-r)&&(n=a);var u=o-2*Math.PI,h=o+2*Math.PI;return Math.abs(u-i)<Math.abs(o-i)?o=u:Math.abs(u-i)<Math.abs(o-i)&&(o=h),e=e||{},e.yaw=n,e.pitch=o,e},i.prototype.updateWithControlParameters=function(t){var e=this._fov,r=u.vtoh(e,this._width,this._height);isNaN(r)&&(r=e),this.offsetYaw(t.axisScaledX*r+2*t.x*r+t.yaw),this.offsetPitch(t.axisScaledY*e+2*t.y*r+t.pitch),this.offsetRoll(-t.roll),this.offsetFov(t.zoom*e)},i.prototype._updateProjection=function(){var t=this._projMatrix,e=this._invProjMatrix,r=this._frustum;if(this._projectionChanged){var i=this._width,n=this._height,s=this._fov,a=u.vtoh(s,i,n),h=i/n,l=this._projectionCenterX,c=this._projectionCenterY;if(0!==l||0!==c){var p=Math.atan(2*l*Math.tan(a/2)),f=Math.atan(2*c*Math.tan(s/2)),d=this._fovs;d.leftDegrees=180*(a/2+p)/Math.PI,d.rightDegrees=180*(a/2-p)/Math.PI,d.upDegrees=180*(s/2+f)/Math.PI,d.downDegrees=180*(s/2-f)/Math.PI,o.perspectiveFromFieldOfView(t,d,-1,1)}else o.perspective(t,s,h,-1,1);o.rotateZ(t,t,this._roll),o.rotateX(t,t,this._pitch),o.rotateY(t,t,this._yaw),o.invert(e,t),this._matrixToFrustum(t,r),this._projectionChanged=!1}},i.prototype._matrixToFrustum=function(t,e){s.set(e[0],t[3]+t[0],t[7]+t[4],t[11]+t[8],0),s.set(e[1],t[3]-t[0],t[7]-t[4],t[11]-t[8],0),s.set(e[2],t[3]+t[1],t[7]+t[5],t[11]+t[9],0),s.set(e[3],t[3]-t[1],t[7]-t[5],t[11]-t[9],0),s.set(e[4],t[3]+t[2],t[7]+t[6],t[11]+t[10],0)},i.prototype.projection=function(){return this._updateProjection(),this._projMatrix},i.prototype.inverseProjection=function(){return this._updateProjection(),this._invProjMatrix},i.prototype.intersects=function(t){this._updateProjection();for(var e=this._frustum,r=this._tmpVec,i=0;i<e.length;i++){for(var n=e[i],o=!1,a=0;a<t.length;a++){var u=t[a];s.set(r,u[0],u[1],u[2],0),s.dot(n,r)>=0&&(o=!0)}if(!o)return!1}return!0},i.prototype.selectLevel=function(t){for(var e=a()*this._height,r=Math.tan(.5*this._fov),i=0;i<t.length;i++){var n=t[i];if(r*n.height()>=e)return n}return t[t.length-1]},i.prototype.coordinatesToScreen=function(t,e){var r=this._tmpVec;e||(e={});var i=this._width,n=this._height;if(i<=0||n<=0)return e.x=null,e.y=null,null;var o=t.yaw,a=t.pitch,u=Math.sin(o)*Math.cos(a),h=-Math.sin(t.pitch),l=-Math.cos(o)*Math.cos(a);return s.set(r,u,h,l,1),s.transformMat4(r,r,this.projection()),r[3]>=0?(e.x=i*(r[0]/r[3]+1)/2,e.y=n*(1-r[1]/r[3])/2,e):(e.x=null,e.y=null,null)},i.prototype.screenToCoordinates=function(t,e){var r=this._tmpVec;e||(e={});var i=this._width,n=this._height,o=2*t.x/i-1,a=1-2*t.y/n;s.set(r,o,a,1,1),s.transformMat4(r,r,this.inverseProjection());var u=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);return e.yaw=Math.atan2(r[0],-r[2]),e.pitch=Math.acos(r[1]/u)-Math.PI/2,this._normalizeCoordinates(e),e},i.prototype.coordinatesToPerspectiveTransform=function(t,e,r){r=r||"";var i=this._height,n=this._width,o=this._fov,s=.5*i/Math.tan(o/2),a="";return a+="translateX("+p(n/2)+"px) ",a+="translateY("+p(i/2)+"px) ",a+="translateX(-50%) translateY(-50%) ",a+="perspective("+p(s)+"px) ",a+="translateZ("+p(s)+"px) ",a+="rotateZ("+p(-this._roll)+"rad) ",a+="rotateX("+p(-this._pitch)+"rad) ",a+="rotateY("+p(this._yaw)+"rad) ",a+="rotateY("+p(-t.yaw)+"rad) ",a+="rotateX("+p(t.pitch)+"rad) ",a+="translateZ("+p(-e)+"px) ",a+=r+" "},i.limit={yaw:function(t,e){return function(r){return r.yaw=c(r.yaw,t,e),r}},pitch:function(t,e){return function(r){return r.pitch=c(r.pitch,t,e),r}},roll:function(t,e){return function(r){return r.roll=c(r.roll,t,e),r}},hfov:function(t,e){return function(r){var i=r.width,n=r.height;if(i>0&&n>0){var o=u.htov(t,i,n),s=u.htov(e,i,n);r.fov=c(r.fov,o,s)}return r}},vfov:function(t,e){return function(r){return r.fov=c(r.fov,t,e),r}},resolution:function(t){return function(e){var r=e.height;if(r){var i=a()*r,n=2*Math.atan(i/t);e.fov=c(e.fov,n,Infinity)}return e}},traditional:function(t,e,r){return r=null!=r?r:e,f(i.limit.resolution(t),i.limit.vfov(0,e),i.limit.hfov(0,r),i.limit.pitch(-Math.PI/2,Math.PI/2))}},i.type=i.prototype.type="rectilinear",e.exports=i},{"../util/clamp":90,"../util/clearOwnProperties":91,"../util/compose":93,"../util/convertFov":94,"../util/decimal":95,"../util/mod":106,"../util/pixelRatio":110,"../util/real":113,"gl-matrix":3,"minimal-event-emitter":14}]},{},[56])(56)});
/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */
!function(e,t){typeof module!="undefined"&&module.exports?module.exports.browser=t():typeof define=="function"&&define.amd?define(t):this[e]=t()}("bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}var r=n(/(ipod|iphone|ipad)/i).toLowerCase(),i=/like android/i.test(t),s=!i&&/android/i.test(t),o=n(/version\/(\d+(\.\d+)?)/i),u=/tablet/i.test(t),a=!u&&/[^-]mobi/i.test(t),f;/opera|opr/i.test(t)?f={name:"Opera",opera:e,version:o||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?f={name:"Windows Phone",windowsphone:e,msie:e,version:n(/iemobile\/(\d+(\.\d+)?)/i)}:/msie|trident/i.test(t)?f={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/chrome|crios|crmo/i.test(t)?f={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:r?(f={name:r=="iphone"?"iPhone":r=="ipad"?"iPad":"iPod"},o&&(f.version=o)):/sailfish/i.test(t)?f={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?f={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(f={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(f.firefoxos=e)):/silk/i.test(t)?f={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:s?f={name:"Android",version:o}:/phantom/i.test(t)?f={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?f={name:"BlackBerry",blackberry:e,version:o||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(f={name:"WebOS",webos:e,version:o||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(f.touchpad=e)):/bada/i.test(t)?f={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?f={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||o}:/safari/i.test(t)?f={name:"Safari",safari:e,version:o}:f={},/(apple)?webkit/i.test(t)?(f.name=f.name||"Webkit",f.webkit=e,!f.version&&o&&(f.version=o)):!f.opera&&/gecko\//i.test(t)&&(f.name=f.name||"Gecko",f.gecko=e,f.version=f.version||n(/gecko\/(\d+(\.\d+)?)/i)),s||f.silk?f.android=e:r&&(f[r]=e,f.ios=e);var l="";r?(l=n(/os (\d+([_\s]\d+)*) like mac os x/i),l=l.replace(/[_\s]/g,".")):s?l=n(/android[ \/-](\d+(\.\d+)*)/i):f.windowsphone?l=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):f.webos?l=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):f.blackberry?l=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):f.bada?l=n(/bada\/(\d+(\.\d+)*)/i):f.tizen&&(l=n(/tizen[\/\s](\d+(\.\d+)*)/i)),l&&(f.osversion=l);var c=l.split(".")[0];if(u||r=="ipad"||s&&(c==3||c==4&&!a)||f.silk)f.tablet=e;else if(a||r=="iphone"||r=="ipod"||s||f.blackberry||f.webos||f.bada)f.mobile=e;return f.msie&&f.version>=10||f.chrome&&f.version>=20||f.firefox&&f.version>=20||f.safari&&f.version>=6||f.opera&&f.version>=10||f.ios&&f.osversion&&f.osversion.split(".")[0]>=6||f.blackberry&&f.version>=10.1?f.a=e:f.msie&&f.version<10||f.chrome&&f.version<20||f.firefox&&f.version<20||f.safari&&f.version<6||f.opera&&f.version<10||f.ios&&f.osversion&&f.osversion.split(".")[0]<6?f.c=e:f.x=e,f}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n._detect=t,n})
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.2.20171210
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (
	   !("classList" in document.createElement("_"))
	|| document.createElementNS
	&& !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))
) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "The token must not be empty."
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "The token must not contain space characters."
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	return ~checkTokenAndGetIndex(this, token + "");
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (!~checkTokenAndGetIndex(this, token)) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (~index) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.replace = function (token, replacement_token) {
	var index = checkTokenAndGetIndex(token + "");
	if (~index) {
		this.splice(index, 1, replacement_token);
		this._updateClassName();
	}
}
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
		// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
		if (ex.number === undefined || ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

}

// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	// replace() polyfill
	if (!("replace" in document.createElement("_").classList)) {
		DOMTokenList.prototype.replace = function (token, replacement_token) {
			var
				  tokens = this.toString().split(" ")
				, index = tokens.indexOf(token + "")
			;
			if (~index) {
				tokens = tokens.slice(index);
				this.remove.apply(this, tokens);
				this.add(replacement_token);
				this.add.apply(this, tokens.slice(1));
			}
		}
	}

	testElement = null;
}());

}

/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Custom control method to alter the view according to the device orientation.
function DeviceOrientationControlMethod() {
  this._dynamics = {
    yaw: new Marzipano.Dynamics(),
    pitch: new Marzipano.Dynamics()
  };

  this._deviceOrientationHandler = this._handleData.bind(this);

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', this._deviceOrientationHandler);
  }

  this._previous = {};
  this._current = {};
  this._tmp = {};

  this._getPitchCallbacks = [];
}

Marzipano.dependencies.eventEmitter(DeviceOrientationControlMethod);


DeviceOrientationControlMethod.prototype.destroy = function() {
  this._dynamics = null;
  if (window.DeviceOrientationEvent) {
    window.removeEventListener('deviceorientation', this._deviceOrientationHandler);
  }
  this._deviceOrientationHandler = null;
  this._previous = null;
  this._current = null;
  this._tmp = null;
  this._getPitchCallbacks = null;
};


DeviceOrientationControlMethod.prototype.getPitch = function(cb) {
  this._getPitchCallbacks.push(cb);
};


DeviceOrientationControlMethod.prototype._handleData = function(data) {
  var previous = this._previous,
      current = this._current,
      tmp = this._tmp;

  tmp.yaw = Marzipano.util.degToRad(data.alpha);
  tmp.pitch = Marzipano.util.degToRad(data.beta);
  tmp.roll = Marzipano.util.degToRad(data.gamma);

  rotateEuler(tmp, current);

  // Report current pitch value.
  this._getPitchCallbacks.forEach(function(callback) {
    callback(null, current.pitch);
  });
  this._getPitchCallbacks.length = 0;

  // Emit control offsets.
  if (previous.yaw != null && previous.pitch != null && previous.roll != null) {
    this._dynamics.yaw.offset = -(current.yaw - previous.yaw);
    this._dynamics.pitch.offset = (current.pitch - previous.pitch);

    this.emit('parameterDynamics', 'yaw', this._dynamics.yaw);
    this.emit('parameterDynamics', 'pitch', this._dynamics.pitch);
  }

  previous.yaw = current.yaw;
  previous.pitch = current.pitch;
  previous.roll = current.roll;
};

// Taken from krpano's gyro plugin by Aldo Hoeben:
// https://github.com/fieldOfView/krpano_fovplugins/tree/master/gyro/
// For the math, see references:
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/eulerToMatrix/index.htm
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToEuler/index.htm
function rotateEuler(euler, result) {
  var heading, bank, attitude,
    ch = Math.cos(euler.yaw),
    sh = Math.sin(euler.yaw),
    ca = Math.cos(euler.pitch),
    sa = Math.sin(euler.pitch),
    cb = Math.cos(euler.roll),
    sb = Math.sin(euler.roll),

    matrix = [
      sh*sb - ch*sa*cb,   -ch*ca,    ch*sa*sb + sh*cb,
      ca*cb,              -sa,      -ca*sb,
      sh*sa*cb + ch*sb,    sh*ca,   -sh*sa*sb + ch*cb
    ]; // Includes 90-degree rotation around z axis

  /* [m00 m01 m02] 0 1 2
   * [m10 m11 m12] 3 4 5
   * [m20 m21 m22] 6 7 8 */

  if (matrix[3] > 0.9999)
  {
    // Deal with singularity at north pole
    heading = Math.atan2(matrix[2],matrix[8]);
    attitude = Math.PI/2;
    bank = 0;
  }
  else if (matrix[3] < -0.9999)
  {
    // Deal with singularity at south pole
    heading = Math.atan2(matrix[2],matrix[8]);
    attitude = -Math.PI/2;
    bank = 0;
  }
  else
  {
    heading = Math.atan2(-matrix[6],matrix[0]);
    bank = Math.atan2(-matrix[5],matrix[4]);
    attitude = Math.asin(matrix[3]);
  }

  result.yaw = heading;
  result.pitch = attitude;
  result.roll = bank;
}

// Copyright 2009-2012 by contributors, MIT License
// vim: ts=4 sts=4 sw=4 expandtab

// Module systems magic dance
(function (definition) {
    // RequireJS
    if (typeof define == "function") {
        define(definition);
    // YUI3
    } else if (typeof YUI == "function") {
        YUI.add("es5", definition);
    // CommonJS and <script>
    } else {
        definition();
    }
})(function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (typeof target != "function") {
            throw new TypeError("Function.prototype.bind called on incompatible " + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = _Array_slice_.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var bound = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(_Array_slice_.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(_Array_slice_.call(arguments))
                );

            }

        };
        if(target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }
        // XXX bound.length is never writable, so don't even try
        //
        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.
        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    };
}

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally.
// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// us it in defining shortcuts.
var call = Function.prototype.call;
var prototypeOfArray = Array.prototype;
var prototypeOfObject = Object.prototype;
var _Array_slice_ = prototypeOfArray.slice;
// Having a toString local variable name breaks in Opera so use _toString.
var _toString = call.bind(prototypeOfObject.toString);
var owns = call.bind(prototypeOfObject.hasOwnProperty);

// If JS engine supports accessors creating shortcuts.
var defineGetter;
var defineSetter;
var lookupGetter;
var lookupSetter;
var supportsAccessors;
if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
}

//
// Array
// =====
//

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
// Default value for second param
// [bugfix, ielt9, old browsers]
// IE < 9 bug: [1,2].splice(0).join("") == "" but should be "12"
if ([1,2].splice(0).length != 2) {
    var array_splice = Array.prototype.splice;

    if(function() { // test IE < 9 to splice bug - see issue #138
        function makeArray(l) {
            var a = [];
            while (l--) {
                a.unshift(l)
            }
            return a
        }

        var array = []
            , lengthBefore
        ;

        array.splice.bind(array, 0, 0).apply(null, makeArray(20));
        array.splice.bind(array, 0, 0).apply(null, makeArray(26));

        lengthBefore = array.length; //20
        array.splice(5, 0, "XXX"); // add one element

        if(lengthBefore + 1 == array.length) {
            return true;// has right splice implementation without bugs
        }
        // else {
        //    IE8 bug
        // }
    }()) {//IE 6/7
        Array.prototype.splice = function(start, deleteCount) {
            if (!arguments.length) {
                return [];
            } else {
                return array_splice.apply(this, [
                    start === void 0 ? 0 : start,
                    deleteCount === void 0 ? (this.length - start) : deleteCount
                ].concat(_Array_slice_.call(arguments, 2)))
            }
        };
    }
    else {//IE8
        Array.prototype.splice = function(start, deleteCount) {
            var result
                , args = _Array_slice_.call(arguments, 2)
                , addElementsCount = args.length
            ;

            if(!arguments.length) {
                return [];
            }

            if(start === void 0) { // default
                start = 0;
            }
            if(deleteCount === void 0) { // default
                deleteCount = this.length - start;
            }

            if(addElementsCount > 0) {
                if(deleteCount <= 0) {
                    if(start == this.length) { // tiny optimisation #1
                        this.push.apply(this, args);
                        return [];
                    }

                    if(start == 0) { // tiny optimisation #2
                        this.unshift.apply(this, args);
                        return [];
                    }
                }

                // Array.prototype.splice implementation
                result = _Array_slice_.call(this, start, start + deleteCount);// delete part
                args.push.apply(args, _Array_slice_.call(this, start + deleteCount, this.length));// right part
                args.unshift.apply(args, _Array_slice_.call(this, 0, start));// left part

                // delete all items from this array and replace it to 'left part' + _Array_slice_.call(arguments, 2) + 'right part'
                args.unshift(0, this.length);

                array_splice.apply(this, args);

                return result;
            }

            return array_splice.call(this, start, deleteCount);
        }

    }
}

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) == undefined but should be "1"
if ([].unshift(0) != 1) {
    var array_unshift = Array.prototype.unshift;
    Array.prototype.unshift = function() {
        array_unshift.apply(this, arguments);
        return this.length;
    };
}

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
if (!Array.isArray) {
    Array.isArray = function isArray(obj) {
        return _toString(obj) == "[object Array]";
    };
}

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var boxedString = Object("a"),
    splitString = boxedString[0] != "a" || !(0 in boxedString);

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    };
}

// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
if (!Array.prototype.map) {
    Array.prototype.map = function map(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            result = Array(length),
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self)
                result[i] = fun.call(thisp, self[i], i, object);
        }
        return result;
    };
}

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
if (!Array.prototype.filter) {
    Array.prototype.filter = function filter(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                    object,
            length = self.length >>> 0,
            result = [],
            value,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                value = self[i];
                if (fun.call(thisp, value, i, object)) {
                    result.push(value);
                }
            }
        }
        return result;
    };
}

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
if (!Array.prototype.every) {
    Array.prototype.every = function every(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !fun.call(thisp, self[i], i, object)) {
                return false;
            }
        }
        return true;
    };
}

// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some) {
    Array.prototype.some = function some(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && fun.call(thisp, self[i], i, object)) {
                return true;
            }
        }
        return false;
    };
}

// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value and an empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduce of empty array with no initial value");
        }

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length) {
                    throw new TypeError("reduce of empty array with no initial value");
                }
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        }

        return result;
    };
}

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
if (!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value, empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduceRight of empty array with no initial value");
        }

        var result, i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0) {
                    throw new TypeError("reduceRight of empty array with no initial value");
                }
            } while (true);
        }

        if (i < 0) {
            return result;
        }

        do {
            if (i in this) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        } while (i--);

        return result;
    };
}

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf || ([0, 1].indexOf(1, 2) != -1)) {
    Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    };
}

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf || ([0, 1].lastIndexOf(0, -3) != -1)) {
    Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }
        var i = length - 1;
        if (arguments.length > 1) {
            i = Math.min(i, toInteger(arguments[1]));
        }
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && sought === self[i]) {
                return i;
            }
        }
        return -1;
    };
}

//
// Object
// ======
//

// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14
if (!Object.keys) {
    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
    var hasDontEnumBug = true,
        dontEnums = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ],
        dontEnumsLength = dontEnums.length;

    for (var key in {"toString": null}) {
        hasDontEnumBug = false;
    }

    Object.keys = function keys(object) {

        if (
            (typeof object != "object" && typeof object != "function") ||
            object === null
        ) {
            throw new TypeError("Object.keys called on a non-object");
        }

        var keys = [];
        for (var name in object) {
            if (owns(object, name)) {
                keys.push(name);
            }
        }

        if (hasDontEnumBug) {
            for (var i = 0, ii = dontEnumsLength; i < ii; i++) {
                var dontEnum = dontEnums[i];
                if (owns(object, dontEnum)) {
                    keys.push(dontEnum);
                }
            }
        }
        return keys;
    };

}

//
// Date
// ====
//

// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var negativeDate = -62198755200000,
    negativeYearString = "-000001";
if (
    !Date.prototype.toISOString ||
    (new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1)
) {
    Date.prototype.toISOString = function toISOString() {
        var result, length, value, year, month;
        if (!isFinite(this)) {
            throw new RangeError("Date.prototype.toISOString called on non-finite value.");
        }

        year = this.getUTCFullYear();

        month = this.getUTCMonth();
        // see https://github.com/kriskowal/es5-shim/issues/111
        year += Math.floor(month / 12);
        month = (month % 12 + 12) % 12;

        // the date time string format is specified in 15.9.1.15.
        result = [month + 1, this.getUTCDate(),
            this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
        year = (
            (year < 0 ? "-" : (year > 9999 ? "+" : "")) +
            ("00000" + Math.abs(year))
            .slice(0 <= year && year <= 9999 ? -4 : -6)
        );

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two
            // digits.
            if (value < 10) {
                result[length] = "0" + value;
            }
        }
        // pad milliseconds to have three digits.
        return (
            year + "-" + result.slice(0, 2).join("-") +
            "T" + result.slice(2).join(":") + "." +
            ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
        );
    };
}


// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var dateToJSONIsSupported = false;
try {
    dateToJSONIsSupported = (
        Date.prototype.toJSON &&
        new Date(NaN).toJSON() === null &&
        new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
        Date.prototype.toJSON.call({ // generic
            toISOString: function () {
                return true;
            }
        })
    );
} catch (e) {
}
if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be toPrimitive(O, hint Number).
        var o = Object(this),
            tv = toPrimitive(o),
            toISO;
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === "number" && !isFinite(tv)) {
            return null;
        }
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        toISO = o.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (typeof toISO != "function") {
            throw new TypeError("toISOString property is not callable");
        }
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(o);

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
if (!Date.parse || "Date.parse is buggy") {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    Date = (function(NativeDate) {

        // Date.length === 7
        function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            if (this instanceof NativeDate) {
                var date = length == 1 && String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(Date.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, s) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
                // Prevent mixups with unfixed Date object
                date.constructor = Date;
                return date;
            }
            return NativeDate.apply(this, arguments);
        };

        // 15.9.1.15 Date Time String Format.
        var isoDateExpression = new RegExp("^" +
            "(\\d{4}|[\+\-]\\d{6})" + // four-digit year capture or sign +
                                      // 6-digit extended year
            "(?:-(\\d{2})" + // optional month capture
            "(?:-(\\d{2})" + // optional day capture
            "(?:" + // capture hours:minutes:seconds.milliseconds
                "T(\\d{2})" + // hours capture
                ":(\\d{2})" + // minutes capture
                "(?:" + // optional :seconds.milliseconds
                    ":(\\d{2})" + // seconds capture
                    "(?:(\\.\\d{1,}))?" + // milliseconds capture
                ")?" +
            "(" + // capture UTC offset component
                "Z|" + // UTC capture
                "(?:" + // offset specifier +/-hours:minutes
                    "([-+])" + // sign capture
                    "(\\d{2})" + // hours offset capture
                    ":(\\d{2})" + // minutes offset capture
                ")" +
            ")?)?)?)?" +
        "$");

        var months = [
            0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365
        ];

        function dayFromMonth(year, month) {
            var t = month > 1 ? 1 : 0;
            return (
                months[month] +
                Math.floor((year - 1969 + t) / 4) -
                Math.floor((year - 1901 + t) / 100) +
                Math.floor((year - 1601 + t) / 400) +
                365 * (year - 1970)
            );
        }

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate) {
            Date[key] = NativeDate[key];
        }

        // Copy "native" methods explicitly; they may be non-enumerable
        Date.now = NativeDate.now;
        Date.UTC = NativeDate.UTC;
        Date.prototype = NativeDate.prototype;
        Date.prototype.constructor = Date;

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        Date.parse = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                // parse months, days, hours, minutes, seconds, and milliseconds
                // provide default values if necessary
                // parse the UTC offset component
                var year = Number(match[1]),
                    month = Number(match[2] || 1) - 1,
                    day = Number(match[3] || 1) - 1,
                    hour = Number(match[4] || 0),
                    minute = Number(match[5] || 0),
                    second = Number(match[6] || 0),
                    millisecond = Math.floor(Number(match[7] || 0) * 1000),
                    // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    offset = !match[4] || match[8] ?
                        0 : Number(new NativeDate(1970, 0)),
                    signOffset = match[9] === "-" ? 1 : -1,
                    hourOffset = Number(match[10] || 0),
                    minuteOffset = Number(match[11] || 0),
                    result;
                if (
                    hour < (
                        minute > 0 || second > 0 || millisecond > 0 ?
                        24 : 25
                    ) &&
                    minute < 60 && second < 60 && millisecond < 1000 &&
                    month > -1 && month < 12 && hourOffset < 24 &&
                    minuteOffset < 60 && // detect invalid offsets
                    day > -1 &&
                    day < (
                        dayFromMonth(year, month + 1) -
                        dayFromMonth(year, month)
                    )
                ) {
                    result = (
                        (dayFromMonth(year, month) + day) * 24 +
                        hour +
                        hourOffset * signOffset
                    ) * 60;
                    result = (
                        (result + minute + minuteOffset * signOffset) * 60 +
                        second
                    ) * 1000 + millisecond + offset;
                    if (-8.64e15 <= result && result <= 8.64e15) {
                        return result;
                    }
                }
                return NaN;
            }
            return NativeDate.parse.apply(this, arguments);
        };

        return Date;
    })(Date);
}

// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}


//
// Number
// ======
//

// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
if (!Number.prototype.toFixed || (0.00008).toFixed(3) !== '0.000' || (0.9).toFixed(0) === '0' || (1.255).toFixed(2) !== '1.25' || (1000000000000000128).toFixed(0) !== "1000000000000000128") {
    // Hide these variables and functions
    (function () {
        var base, size, data, i;

        base = 1e7;
        size = 6;
        data = [0, 0, 0, 0, 0, 0];

        function multiply(n, c) {
            var i = -1;
            while (++i < size) {
                c += n * data[i];
                data[i] = c % base;
                c = Math.floor(c / base);
            }
        }

        function divide(n) {
            var i = size, c = 0;
            while (--i >= 0) {
                c += data[i];
                data[i] = Math.floor(c / n);
                c = (c % n) * base;
            }
        }

        function toString() {
            var i = size;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || data[i] !== 0) {
                    var t = String(data[i]);
                    if (s === '') {
                        s = t;
                    } else {
                        s += '0000000'.slice(0, 7 - t.length) + t;
                    }
                }
            }
            return s;
        }

        function pow(x, n, acc) {
            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
        }

        function log(x) {
            var n = 0;
            while (x >= 4096) {
                n += 12;
                x /= 4096;
            }
            while (x >= 2) {
                n += 1;
                x /= 2;
            }
            return n;
        }

        Number.prototype.toFixed = function (fractionDigits) {
            var f, x, s, m, e, z, j, k;

            // Test for NaN and round fractionDigits down
            f = Number(fractionDigits);
            f = f !== f ? 0 : Math.floor(f);

            if (f < 0 || f > 20) {
                throw new RangeError("Number.toFixed called with invalid number of decimals");
            }

            x = Number(this);

            // Test for NaN
            if (x !== x) {
                return "NaN";
            }

            // If it is too big or small, return the string value of the number
            if (x <= -1e21 || x >= 1e21) {
                return String(x);
            }

            s = "";

            if (x < 0) {
                s = "-";
                x = -x;
            }

            m = "0";

            if (x > 1e-21) {
                // 1e-21 < x < 1e21
                // -70 < log2(x) < 70
                e = log(x * pow(2, 69, 1)) - 69;
                z = (e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1));
                z *= 0x10000000000000; // Math.pow(2, 52);
                e = 52 - e;

                // -18 < e < 122
                // x = z / 2 ^ e
                if (e > 0) {
                    multiply(0, z);
                    j = f;

                    while (j >= 7) {
                        multiply(1e7, 0);
                        j -= 7;
                    }

                    multiply(pow(10, j, 1), 0);
                    j = e - 1;

                    while (j >= 23) {
                        divide(1 << 23);
                        j -= 23;
                    }

                    divide(1 << j);
                    multiply(1, 1);
                    divide(2);
                    m = toString();
                } else {
                    multiply(0, z);
                    multiply(1 << (-e), 0);
                    m = toString() + '0.00000000000000000000'.slice(2, 2 + f);
                }
            }

            if (f > 0) {
                k = m.length;

                if (k <= f) {
                    m = s + '0.0000000000000000000'.slice(0, f - k + 2) + m;
                } else {
                    m = s + m.slice(0, k - f) + '.' + m.slice(k - f);
                }
            } else {
                m = s + m;
            }

            return m;
        }
    }());
}


//
// String
// ======
//


// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = String.prototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === "t" ||
    ''.split(/.?/).length === 0 ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec("")[1] === void 0; // NPCG: nonparticipating capturing group

        String.prototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0)
                return [];

            // If `separator` is not a regex, use native split
            if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
                return string_split.apply(this, arguments);
            }

            var output = [],
                flags = (separator.ignoreCase ? "i" : "") +
                        (separator.multiline  ? "m" : "") +
                        (separator.extended   ? "x" : "") + // Proposed for ES6
                        (separator.sticky     ? "y" : ""), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator = new RegExp(separator.source, flags + "g"),
                separator2, match, lastIndex, lastLength;
            string += ""; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                limit >>> 0; // ToUint32(limit)
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        Array.prototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test("")) {
                    output.push("");
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ("0".split(void 0, 0).length) {
    String.prototype.split = function(separator, limit) {
        if (separator === void 0 && limit === 0) return [];
        return string_split.apply(this, arguments);
    }
}


// ECMA-262, 3rd B.2.3
// Note an ECMAScript standart, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
if("".substr && "0b".substr(-1) !== "b") {
    var string_substr = String.prototype.substr;
    /**
     *  Get the substring of a string
     *  @param  {integer}  start   where to start the substring
     *  @param  {integer}  length  how many characters to return
     *  @return {string}
     */
    String.prototype.substr = function(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}

// ES5 15.5.4.20
// http://es5.github.com/#x15.5.4.20
var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
    "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
    "\u2029\uFEFF";
if (!String.prototype.trim || ws.trim()) {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    ws = "[" + ws + "]";
    var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
        trimEndRegexp = new RegExp(ws + ws + "*$");
    String.prototype.trim = function trim() {
        if (this === void 0 || this === null) {
            throw new TypeError("can't convert "+this+" to object");
        }
        return String(this)
            .replace(trimBeginRegexp, "")
            .replace(trimEndRegexp, "");
    };
}

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(n) {
    n = +n;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1/0) && n !== -(1/0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function isPrimitive(input) {
    var type = typeof input;
    return (
        input === null ||
        type === "undefined" ||
        type === "boolean" ||
        type === "number" ||
        type === "string"
    );
}

function toPrimitive(input) {
    var val, valueOf, toString;
    if (isPrimitive(input)) {
        return input;
    }
    valueOf = input.valueOf;
    if (typeof valueOf === "function") {
        val = valueOf.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    toString = input.toString;
    if (typeof toString === "function") {
        val = toString.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    throw new TypeError();
}

// ES5 9.9
// http://es5.github.com/#x9.9
var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert "+o+" to object");
    }
    return Object(o);
};

});

/* Copyright (c) 2012 Jeremy McPeak http://www.wdonline.com
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function() {

    function init() {

        // filter out unsupported browsers
        if (Element.prototype.addEventListener || !Object.defineProperty) {
            return {
                loadedForBrowser : false
            };
        }

        // create an MS event object and get prototype
        var proto = document.createEventObject().constructor.prototype;

        /**
     * Indicates whether an event propagates up from the target.
     * @returns Boolean
     */
        Object.defineProperty(proto, "bubbles", {
            get: function() {
                // not a complete list of DOM3 events; some of these IE8 doesn't support
                var bubbleEvents = ["select", "scroll", "click", "dblclick",
                    "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "wheel", "textinput",
                    "keydown", "keypress", "keyup"],
                    type = this.type;

                for (var i = 0, l = bubbleEvents.length; i < l; i++) {
                    if (type === bubbleEvents[i]) {
                        return true;
                    }
                }

                return false;
            }
        });


        /**
     * Indicates whether or not preventDefault() was called on the event.
     * @returns Boolean
     */
        Object.defineProperty(proto, "defaultPrevented", {
            get: function() {
                // if preventDefault() was never called, or returnValue not given a value
                // then returnValue is undefined
                var returnValue = this.returnValue,
                    undef;

                return !(returnValue === undef || returnValue);
            }
        });


        /**
     * Gets the secondary targets of mouseover and mouseout events (toElement and fromElement)
     * @returns EventTarget or {null}
     */
        Object.defineProperty(proto, "relatedTarget", {
            get: function() {
                var type = this.type;

                if (type === "mouseover" || type === "mouseout") {
                    return (type === "mouseover") ? this.fromElement : this.toElement;
                }

                return null;
            }
        });


        /**
     * Gets the target of the event (srcElement)
     * @returns EventTarget
     */
        Object.defineProperty(proto, "target", {
            get: function() { return this.srcElement; }
        });


        /**
     * Cancels the event if it is cancelable. (returnValue)
     * @returns {undefined}
     */
        proto.preventDefault = function() {
            this.returnValue = false;
        };

        /**
     * Prevents further propagation of the current event. (cancelBubble())
     * @returns {undefined}
     */
        proto.stopPropagation = function() {
            this.cancelBubble = true;
        };

        /***************************************
     *
     * Event Listener Setup
     *    Nothing complex here
     *
     ***************************************/

        /**
     * Determines if the provided object implements EventListener
     * @returns boolean
    */
        var implementsEventListener = function(obj) {
            return (typeof obj !== "function" && typeof obj["handleEvent"] === "function");
        };

        var customELKey = "__eventShim__";

        /**
     * Adds an event listener to the DOM object
     * @returns {undefined}
     */
        var addEventListenerFunc = function(type, handler, useCapture) {
            // useCapture isn't used; it's IE!

            var fn = handler;

            if (implementsEventListener(handler)) {

                if (typeof handler[customELKey] !== "function") {
                    handler[customELKey] = function(e) {
                        handler["handleEvent"](e);
                    };
                }

                fn = handler[customELKey];
            }

            this.attachEvent("on" + type, fn);
        };

        /**
     * Removes an event listener to the DOM object
     * @returns {undefined}
     */
        var removeEventListenerFunc = function(type, handler, useCapture) {
            // useCapture isn't used; it's IE!

            var fn = handler;

            if (implementsEventListener(handler)) {
                fn = handler[customELKey];
            }

            this.detachEvent("on" + type, fn);
        };

        // setup the DOM and window objects
        HTMLDocument.prototype.addEventListener = addEventListenerFunc;
        HTMLDocument.prototype.removeEventListener = removeEventListenerFunc;

        Element.prototype.addEventListener = addEventListenerFunc;
        Element.prototype.removeEventListener = removeEventListenerFunc;

        window.addEventListener = addEventListenerFunc;
        window.removeEventListener = removeEventListenerFunc;

        return {
            loadedForBrowser : true
        };
    }

    // check for AMD support
    if (typeof define === "function" && define["amd"]) {
        define(init);
    } else {
        return init();
    }
    
}());
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) {
if (typeof define === 'function' && define.amd) {
 // AMD. Register as an anonymous module.
 define(['jquery'], factory);
 } else if (typeof exports === 'object') {
 // Node/CommonJS
 factory(require('jquery'));
 } else {
 // Browser globals
 factory(window.jQuery || window.Zepto);
 }
 }(function($) {

/*>>core*/
/**
 *
 * Magnific Popup Core JS file
 *
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true;
		}

		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}

		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin.
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) {
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}

		mfp.types = [];
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data );
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}


		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}



		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}



		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}

		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();


		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}



		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);

		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;

		// Wait for next cycle to allow CSS transition
		setTimeout(function() {

			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}

			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}

		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},

	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
/*!
* screenfull
* v4.0.0 - 2018-12-15
* (c) Sindre Sorhus; MIT License
*/

!function(){"use strict";var u="undefined"!=typeof window&&void 0!==window.document?window.document:{},e="undefined"!=typeof module&&module.exports,t="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,c=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,l=n.length,t={};r<l;r++)if((e=n[r])&&e[1]in u){for(r=0;r<e.length;r++)t[n[0][r]]=e[r];return t}return!1}(),l={change:c.fullscreenchange,error:c.fullscreenerror},n={request:function(l){return new Promise(function(e){var n=c.requestFullscreen,r=function(){this.off("change",r),e()}.bind(this);l=l||u.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?l[n]():l[n](t?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",r)}.bind(this))},exit:function(){return new Promise(function(e){var n=function(){this.off("change",n),e()}.bind(this);u[c.exitFullscreen](),this.on("change",n)}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=l[e];r&&u.addEventListener(r,n,!1)},off:function(e,n){var r=l[e];r&&u.removeEventListener(r,n,!1)},raw:c};c?(Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(u[c.fullscreenElement])}},element:{enumerable:!0,get:function(){return u[c.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(u[c.fullscreenEnabled])}}}),e?module.exports=n:window.screenfull=n):e?module.exports=!1:window.screenfull=!1}();
