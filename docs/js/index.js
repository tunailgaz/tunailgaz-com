if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!n[e]&&(await new Promise(async t=>{if("document"in self){const n=document.createElement("script");n.src="https://www.tunailgaz.com/docs"+e.slice(1),n.defer=!0,document.head.appendChild(n),n.onload=t}else importScripts(e),t()}),!n[e]))throw new Error(`Module ${e} didn’t register its module`);return n[e]},t=async(t,n)=>{const i=await Promise.all(t.map(e));n(1===i.length?i[0]:i)},n={require:Promise.resolve(t)};self.define=(t,i,s)=>{n[t]||(n[t]=new Promise(async n=>{let o={};const r={uri:location.origin+"https://www.tunailgaz.com/docs"+t.slice(1)},d=await Promise.all(i.map(t=>"exports"===t?o:"module"===t?r:e(t))),a=s(...d);o.default||(o.default=a),n(o)}))}}define("./index.js",[],(function(){"use strict";document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#test").innerHTML="this inserted by js"})}));
