if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!i[e]&&(await new Promise(async t=>{if("document"in self){const i=document.createElement("script");i.src="https://www.tunailgaz.com/dist"+e.slice(1),i.defer=!0,document.head.appendChild(i),i.onload=t}else importScripts(e),t()}),!i[e]))throw new Error(`Module ${e} didn’t register its module`);return i[e]},t=async(t,i)=>{const n=await Promise.all(t.map(e));i(1===n.length?n[0]:n)},i={require:Promise.resolve(t)};self.define=(t,n,s)=>{i[t]||(i[t]=new Promise(async i=>{let r={};const o={uri:location.origin+"https://www.tunailgaz.com/dist"+t.slice(1)},a=await Promise.all(n.map(t=>"exports"===t?r:"module"===t?o:e(t))),d=s(...a);r.default||(r.default=d),i(r)}))}}define("./index.js",[],(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#test").innerHTML="this inserted by js",alert("test")})}));
