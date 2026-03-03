import{g as Mt,J as De,a as Oe,h as It,H as A,v as ne,b as Ht,c as Ft,d as te,e as $,s as je,f as ut,r as Nt,l as zt,i as Bt,j as Vt,Z as Ut,k as Dt,n as Ot,p as jt,m as qt,o as Gt,D as Xt,U as Wt,q as Kt}from"./text-dating-CAIRCN7d.js";function Ee(e){const t=Math.sin(e*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)}const Z=6,qe=2,re=12,Ge=70,ht=35,J=50,Yt=12,Xe=3,We=15,_e=72,dt=[["Hosea","Joel"],["Amos","Obadiah","Jonah"],["Micah","Nahum","Habakkuk","Zephaniah","Haggai"],["Zechariah","Malachi"]],Ke=new Set(dt.flat()),ft=[{books:["Song of Songs","Ruth","Lamentations"],insertAfter:"Job"},{books:["Ecclesiastes","Esther"],insertAfter:"Job"},{books:["Ezra","Nehemiah"],insertAfter:"Daniel"}],Zt=new Set(ft.flatMap(e=>e.books));function Jt(e){if(!Number.isFinite(e)||e<0)return console.error(`Invalid verse count: ${e}, defaulting to 0`),[0];if(e===0)return[0];if(e<=J)return[e];const t=[];let o=e;for(;o>0;)if(o<=J)t.push(o),o=0;else if(o<=J+Xe-1){const n=o-Xe;t.push(n),o-=n}else t.push(J),o-=J;return t}function $e(e,t,o,n,i,r,s){if(!Number.isFinite(o)||o<0)return console.error(`Invalid verse count for ${e} chapter ${t+1}: ${o}`),{width:0,height:0};if(!Number.isFinite(n)||!Number.isFinite(i))return console.error(`Invalid coordinates for ${e} chapter ${t+1}: (${n}, ${i})`),{width:0,height:0};if(!Array.isArray(s))return console.error(`Verses array is not an array for ${e} chapter ${t+1}`),{width:0,height:0};const c=Jt(o);let l=0,d=i,a=0;for(let m=0;m<c.length;m++){const h=c[m];if(!Number.isFinite(h)||h<0){console.error(`Invalid wrap point ${h} at line ${m} for ${e} chapter ${t+1}`);continue}const p=m>0?Yt:0;for(let g=0;g<h;g++){const y=(Ee(r.value*2)-De)*Oe,x=(Ee(r.value*2+1)-De)*Oe,_=n+p+g*Z+y;s.push({book:e,chapter:t+1,verse:a+1,x:_,y:d+x,size:Z}),l=Math.max(l,p+(g+1)*Z),a++,r.value++}d+=Z+qe}return{width:l,height:c.length*(Z+qe)}}function Me(e,t,o,n,i){if(!e||typeof e!="object")return console.error(`Invalid book object: ${e}`),{width:0,height:0};if(!e.name||typeof e.name!="string")return console.error(`Invalid book name: ${e.name}`),{width:0,height:0};if(!Array.isArray(e.chapters))return console.error(`Book ${e.name} has invalid chapters array`),{width:0,height:0};if(!Number.isFinite(t)||!Number.isFinite(o))return console.error(`Invalid coordinates for ${e.name}: (${t}, ${o})`),{width:0,height:0};let r=0,s=o;for(let c=0;c<e.chapters.length;c++){const l=e.chapters[c];if(!Number.isFinite(l)||l<0){console.error(`Invalid verse count for ${e.name} chapter ${c+1}: ${l}`);continue}const{width:d,height:a}=$e(e.name,c,l,t,s,n,i);r=Math.max(r,d),s+=a}return{width:r,height:s-o}}function mt(e,t,o,n,i,r,s=Me){if(!Array.isArray(e))return console.error(`Books is not an array: ${e}`),{width:0,height:0,nextX:t};if(!Number.isFinite(t)||!Number.isFinite(o)||!Number.isFinite(n))return console.error(`Invalid layout parameters: startX=${t}, y=${o}, gap=${n}`),{width:0,height:0,nextX:t};let c=t,l=0;for(const d of e){if(!d){console.error("Encountered null or undefined book in layoutBooksRow");continue}const{width:a,height:m}=s(d,c,o,i,r);l=Math.max(l,m),c+=a+n}return{width:c-t-(e.length>0?n:0),height:l,nextX:c}}function pt(e,t,o,n,i,r,s){if(!Array.isArray(e))return console.error(`Book names is not an array: ${e}`),{width:0,height:0};if(!(t instanceof Map))return console.error(`Book map is not a Map: ${t}`),{width:0,height:0};if(!Number.isFinite(o)||!Number.isFinite(n)||!Number.isFinite(i))return console.error(`Invalid layout parameters: x=${o}, startY=${n}, gap=${i}`),{width:0,height:0};let c=n,l=0;for(const a of e){if(!a||typeof a!="string"){console.error(`Invalid book name in stack: ${a}`);continue}const m=t.get(a);if(!m){console.error(`Book not found in map: ${a}`);continue}const{width:h,height:p}=Me(m,o,c,r,s);l=Math.max(l,h),c+=p+i}const d=c-n-(e.length>0?i:0);return{width:l,height:d}}function Qt(e,t,o,n,i,r,s,c){if(!Array.isArray(e))return console.error(`Stacks is not an array: ${e}`),{width:0,height:0};if(!Number.isFinite(o)||!Number.isFinite(n)||!Number.isFinite(i)||!Number.isFinite(r))return console.error(`Invalid layout parameters: startX=${o}, y=${n}, stackGap=${i}, columnGap=${r}`),{width:0,height:0};let l=o,d=0;for(const a of e){if(!Array.isArray(a)){console.error(`Stack is not an array: ${a}`);continue}const{width:m,height:h}=pt(a,t,l,n,i,s,c);d=Math.max(d,h),l+=m+r}return{width:l-o-(e.length>0?r:0),height:d}}function eo(e,t,o,n,i){if(!e||!Array.isArray(e.chapters))return console.error(`Invalid Psalms book structure: ${e==null?void 0:e.name}`),{width:0,height:0};if(!Number.isFinite(t)||!Number.isFinite(o))return console.error(`Invalid coordinates for Psalms: (${t}, ${o})`),{width:0,height:0};const r=Math.min(_e,e.chapters.length);_e>e.chapters.length&&console.warn(`Psalms split point ${_e} exceeds chapter count ${e.chapters.length}, using ${r}`);let s=o,c=0;for(let p=0;p<r;p++){const g=e.chapters[p];if(p>=e.chapters.length){console.error(`Chapter index ${p} out of bounds for Psalms (${e.chapters.length} chapters)`);break}const{width:y,height:x}=$e(e.name,p,g,t,s,n,i);c=Math.max(c,y),s+=x}const l=s-o,d=t+c+We;let a=o,m=0;for(let p=r;p<e.chapters.length;p++){const g=e.chapters[p];if(p>=e.chapters.length){console.error(`Chapter index ${p} out of bounds for Psalms (${e.chapters.length} chapters)`);break}const{width:y,height:x}=$e(e.name,p,g,d,a,n,i);m=Math.max(m,y),a+=x}const h=a-o;return{width:c+We+m,height:Math.max(l,h)}}function to(e,t,o,n){if(!Array.isArray(e))return console.error(`Nevi'im books is not an array: ${e}`),0;if(!Number.isFinite(t))return console.error(`Invalid Nevi'im section Y: ${t}`),0;const i=e.filter(a=>a&&!Ke.has(a.name)),r=e.filter(a=>a&&Ke.has(a.name)),s=new Map(r.map(a=>[a.name,a])),{height:c,nextX:l}=mt(i,0,t,re,o,n),{height:d}=Qt(dt,s,l,t,ht,re,o,n);return Math.max(c,d)}function oo(e,t,o,n){if(!Array.isArray(e))return console.error(`Ketuvim books is not an array: ${e}`),0;if(!Number.isFinite(t))return console.error(`Invalid Ketuvim section Y: ${t}`),0;const i=new Map(e.filter(l=>l&&l.name).map(l=>[l.name,l]));let r=0,s=0;const c=e.filter(l=>l&&!Zt.has(l.name));for(const l of c){if(!l){console.error("Encountered null or undefined book in Ketuvim");continue}const{width:d,height:a}=l.name==="Psalms"?eo(l,r,t,o,n):Me(l,r,t,o,n);s=Math.max(s,a),r+=d+re;for(const m of ft){if(!m||!Array.isArray(m.books)){console.error(`Invalid Ketuvim stack config: ${m}`);continue}if(l.name===m.insertAfter){const{width:h,height:p}=pt(m.books,i,r,t,ht,o,n);s=Math.max(s,p),r+=h+re}}}return s}function no(e,t,o,n){if(!Array.isArray(e))return console.error(`Torah books is not an array: ${e}`),0;if(!Number.isFinite(t))return console.error(`Invalid Torah section Y: ${t}`),0;const{height:i}=mt(e,0,t,re,o,n);return i}function ro(e){if(!e||typeof e!="object")return console.error("Invalid torahData: not an object"),[];if(!Array.isArray(e.books))return console.error("Invalid torahData: books is not an array"),[];if(e.books.length===0)return console.warn("Empty books array in torahData"),[];const t=[],o={value:0},n=[],i=[],r=[];for(const d of e.books){if(!d||typeof d!="object"){console.error(`Invalid book in torahData: ${d}`);continue}if(!d.name||typeof d.name!="string"){console.error(`Book missing valid name: ${JSON.stringify(d)}`);continue}const a=Mt(d.name);a==="torah"?n.push(d):a==="neviim"?i.push(d):a==="ketuvim"?r.push(d):console.warn(`Book ${d.name} has unknown section: ${a}`)}n.length===0&&console.warn("Torah section is empty"),i.length===0&&console.warn("Neviim section is empty"),r.length===0&&console.warn("Ketuvim section is empty");let s=0;const c=no(n,s,o,t);s+=c+Ge;const l=to(i,s,o,t);return s+=l+Ge,oo(r,s,o,t),t}function io(e){if(!Array.isArray(e))return console.error("getLayoutBounds: verses is not an array"),{width:0,height:0};if(e.length===0)return console.warn("getLayoutBounds: empty verses array"),{width:0,height:0};let t=0,o=0;for(const n of e){if(!n||typeof n!="object"){console.error(`Invalid verse in bounds calculation: ${n}`);continue}if(!Number.isFinite(n.x)||!Number.isFinite(n.y)||!Number.isFinite(n.size)){console.error(`Invalid verse coordinates: ${n.book} ${n.chapter}:${n.verse} at (${n.x}, ${n.y}) size=${n.size}`);continue}(n.x<-2||n.y<-2||n.size<0)&&console.warn(`Suspicious coordinates for verse ${n.book} ${n.chapter}:${n.verse}: (${n.x}, ${n.y}) size=${n.size}`),t=Math.max(t,n.x+n.size),o=Math.max(o,n.y+n.size)}return!Number.isFinite(t)||!Number.isFinite(o)?(console.error(`Invalid bounds calculated: width=${t}, height=${o}`),{width:0,height:0}):{width:t,height:o}}const so=10,Ye=13,ao=5,co=50;function lo(e,t){const o={};for(const i of e)o[i.book]||(o[i.book]={minX:i.x,maxX:i.x+i.size,minY:i.y}),o[i.book].maxX=Math.max(o[i.book].maxX,i.x+i.size),o[i.book].minY=Math.min(o[i.book].minY,i.y);const n=document.createElement("div");n.id="book-labels",n.style.cssText="position:fixed;top:0;left:0;pointer-events:none;";for(const[i,r]of Object.entries(o)){const s=document.createElement("div");s.textContent=i,s.style.cssText=`
      position:absolute;
      color:#eee;
      font-family:sans-serif;
      font-weight:700;
      text-shadow:0 1px 3px rgba(0,0,0,0.8);
      white-space:nowrap;
    `,s.dataset.bookName=i,s.dataset.leftX=String(r.minX),s.dataset.topY=String(r.minY),n.appendChild(s)}return t.appendChild(n),n}function U(e,t,o){const n=Math.max(ao,Math.min(co,Ye*o)),i=so*(n/Ye);for(const r of e.children)if(r instanceof HTMLElement){const s=parseFloat(r.dataset.leftX||"0"),c=parseFloat(r.dataset.topY||"0"),l=(s+t.x)*o,d=(c+t.y)*o-n-i;r.style.left=l+"px",r.style.top=d+"px",r.style.fontSize=n+"px"}}const gt="torahMap.helpSeen",vt="torahMap.helpTab",yt={overview:{title:"Overview",content:`
      <h2>Torah Map</h2>
      <p>An interactive visualization of the entire Tanakh (Hebrew Bible) where every verse has a fixed position.</p>
      <p>The map is divided into three sections, stacked vertically:</p>
      <ul>
        <li><strong>Torah</strong> — The Five Books of Moses</li>
        <li><strong>Nevi'im</strong> — The Prophets</li>
        <li><strong>Ketuvim</strong> — The Writings</li>
      </ul>
      <p>Switch between different analytical overlays to reveal patterns across 23,000+ verses.</p>
      <p class="credits">
        By <a href="https://danyelfisher.info" target="_blank">Danyel Fisher</a> ·
        <a href="https://github.com/danyelf/torahmap" target="_blank">GitHub</a> ·
        Data from <a href="https://www.sefaria.org/" target="_blank">Sefaria</a>
      </p>
    `},controls:{title:"Controls",content:`
      <table class="controls-table">
        <tr><td>Scroll / Pinch</td><td>Zoom in/out</td></tr>
        <tr><td>Drag</td><td>Pan around</td></tr>
        <tr><td>Hover</td><td>Preview verse details</td></tr>
        <tr><td>Click / Tap</td><td>Pin verse details</td></tr>
        <tr><td>Click pinned / Tap again</td><td>Unpin verse</td></tr>
        <tr><td>&larr; &rarr; arrow keys</td><td>Navigate verses</td></tr>
        <tr><td>Escape</td><td>Unpin verse</td></tr>
      </table>
    `},overlays:{title:"Overlays",content:`
      <dl class="overlay-list">
        <dt>Text Search</dt>
        <dd>Search Hebrew or English text. Matching verses are highlighted on the map.</dd>

        <dt>Commentary</dt>
        <dd>Heatmap showing commentary density from Sefaria. Filter by source type.</dd>

        <dt>Trop</dt>
        <dd>Visualize cantillation marks (trope). Select a mark to see where it appears.</dd>
      </dl>
    `}};let D=null;function uo(){const e=document.createElement("div");e.id="help-modal",e.className="help-modal",e.innerHTML=`
    <div class="help-backdrop"></div>
    <div class="help-content">
      <div class="help-header">
        <div class="help-tabs">
          <button class="help-tab active" data-tab="overview">Overview</button>
          <button class="help-tab" data-tab="controls">Controls</button>
          <button class="help-tab" data-tab="overlays">Overlays</button>
        </div>
        <button class="help-close">&times;</button>
      </div>
      <div class="help-body"></div>
    </div>
  `;const t=e.querySelector(".help-backdrop"),o=e.querySelector(".help-close"),n=e.querySelectorAll(".help-tab");return t.addEventListener("click",Je),o.addEventListener("click",Je),n.forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.tab;bt(e,r)})}),e}function bt(e,t){localStorage.setItem(vt,t),e.querySelectorAll(".help-tab").forEach(n=>{n.classList.toggle("active",n.dataset.tab===t)});const o=e.querySelector(".help-body");o.innerHTML=yt[t].content}function Ze(){D||(D=uo(),document.body.appendChild(D));const e=localStorage.getItem(vt),t=e&&yt[e]?e:"overview";D.classList.add("visible"),bt(D,t)}function Je(){D&&(D.classList.remove("visible"),localStorage.setItem(gt,"true"))}function ho(e){const t=document.createElement("button");t.id="help-btn",t.textContent="?",t.title="How to use",t.addEventListener("click",Ze),e.appendChild(t),localStorage.getItem(gt)||Ze()}const wt=.1,xt=10;function fo(e,t,o){return{x:e/2-o.width/2,y:t/2-o.height/2,zoom:1}}function Qe(e){return Math.max(wt,Math.min(xt,e))}function et(e,t,o,n,i){return{x:e.x+n*(1/o-1/t),y:e.y+i*(1/o-1/t)}}const tt=1e6,Tt=50,mo=1e3;function _t(e,t){if(!e)return null;const o=e.trim();return!o||o.length>t||/<[^>]*>/.test(o)||/javascript:/i.test(o)||/on\w+=/i.test(o)?null:o}function ue(e,t=Tt){const o=_t(e,t);return!o||/[/\\|;]/.test(o)?null:o}function po(e){const t=_t(e,Tt);return!t||!/^[a-zA-Z\s/]+$/.test(t)?null:t}function go(e){return!e||e.trim()===""?!1:/^[a-zA-Z\u0590-\u05FF\s.]+$/.test(e)}function vo(e){return e.replace(/<[^>]*>/g,"")}function yo(){const e=window.location.hash.slice(1),t=new URLSearchParams(e),o={overlayParams:{}},n=t.get("overlay"),i=ue(n);i&&(o.overlay=i);const r=t.get("verse"),s=ue(r,100);s&&(o.verse=s);const c=t.get("zoom");if(c){const b=parseFloat(c);!isNaN(b)&&b>=wt&&b<=xt&&(o.zoom=b)}const l=t.get("x");if(l){const b=parseFloat(l);!isNaN(b)&&isFinite(b)&&Math.abs(b)<=tt&&(o.x=b)}const d=t.get("y");if(d){const b=parseFloat(d);!isNaN(b)&&isFinite(b)&&Math.abs(b)<=tt&&(o.y=b)}const a=t.get("trop"),m=ue(a);m&&(o.overlayParams.trop=m);const h=t.get("category"),p=po(h);p&&(o.overlayParams.category=p);const g=t.get("q");if(g){const b=g.trim();b&&b.length<=mo&&(o.overlayParams.q=vo(b))}const y=t.get("ww");y&&(o.overlayParams.ww=y);const x=t.get("hm"),_=ue(x);return _&&(_==="substring"||_==="word"||_==="root")&&(o.overlayParams.hm=_),o}function bo(e){const t=new URLSearchParams;e.overlay&&t.set("overlay",e.overlay),e.verse&&t.set("verse",e.verse),e.zoom!==void 0&&e.zoom!==1&&t.set("zoom",e.zoom.toFixed(2).replace(/\.?0+$/,"")),e.verse||(e.x!==void 0&&t.set("x",e.x.toFixed(1).replace(/\.?0+$/,"")),e.y!==void 0&&t.set("y",e.y.toFixed(1).replace(/\.?0+$/,""))),e.overlayParams.trop&&t.set("trop",e.overlayParams.trop),e.overlayParams.category&&e.overlayParams.category!=="all"&&t.set("category",e.overlayParams.category),e.overlayParams.q&&t.set("q",e.overlayParams.q),e.overlayParams.ww&&t.set("ww",e.overlayParams.ww),e.overlayParams.hm&&t.set("hm",e.overlayParams.hm);const o=t.toString();return o?`#${o}`:""}function wo(e,t=!1){const o=bo(e),n=window.location.pathname+window.location.search+o;t?history.pushState(null,"",n):history.replaceState(null,"",n)}function xo(e){window.addEventListener("popstate",e),window.addEventListener("hashchange",e)}function To(e,t,o){return`${e.replace(/ /g,".")}.${t}.${o}`}function _o(e){const t=e.split(".");if(t.length<3||t.length>5)return null;const o=t.pop(),n=t.pop(),i=t.join(" "),r=parseInt(o,10),s=parseInt(n,10);return isNaN(r)||isNaN(s)||r<0||s<0||s>200||r>200||!go(i)?null:{book:i,chapter:s,verse:r}}function Ao(e,t){let o=null;return(...n)=>{o&&clearTimeout(o),o=setTimeout(()=>{e(...n),o=null},t)}}let ie={},S="total",N=null,O={},At=[];function Ct(e,t,o){var i,r;const n=(r=(i=ie[e])==null?void 0:i[String(t)])==null?void 0:r[String(o)];return n?S==="total"?n.total:n.categories[S]||0:0}function ot(){if(O[S]!==void 0)return O[S];let e=0;for(const t of At){const o=Ct(t.book,t.chapter,t.verse);o>e&&(e=o)}return O[S]=e,e}const Co={id:"commentary",name:"Commentary Density",async init(){try{const e=await fetch("/torahmap/data/commentary-counts.json");if(!e.ok){console.error(`Failed to load commentary-counts.json: ${e.status}`);return}ie=await e.json()}catch(e){console.error("Failed to parse commentary-counts.json:",e)}},destroy(){O={},N=null},onUpdate(e){N=e},getVerseColor(e){const t=Ct(e.book,e.chapter,e.verse),o=ot();return It(t,o)},renderControls(e){const t=document.createElement("div");t.className="commentary-controls",t.innerHTML=`
      <label for="category-select">Category:</label>
      <select id="category-select">
        <option value="total">All Commentary</option>
        <option value="Talmud">Talmud</option>
        <option value="Midrash">Midrash</option>
        <option value="Halakhah">Halakhah</option>
        <option value="Jewish Thought">Jewish Thought</option>
        <option value="Chasidut">Chasidut</option>
        <option value="Kabbalah">Kabbalah</option>
        <option value="Musar">Musar</option>
      </select>
    `;const o=t.querySelector("select");o.value=S,o.addEventListener("change",()=>{S=o.value,O={},N==null||N()}),e.appendChild(t)},renderLegend(e){const t=ot(),o=Math.log(t+1),n=[0];let i=1;for(;i<=t;)n.push(i),i*=10;n[n.length-1]<t&&n.push(t),e.innerHTML=`
      <div class="legend-gradient"></div>
      <div class="legend-ticks">
        ${n.map(r=>{const s=r===0?0:Math.log(r+1)/o*100,c=r>=1e3?`${r/1e3}k`:String(r);return`<span class="tick" style="left: ${s}%">${c}</span>`}).join("")}
      </div>
    `},getHoverInfo(e){var n,i;const t=(i=(n=ie[e.book])==null?void 0:n[String(e.chapter)])==null?void 0:i[String(e.verse)];if(!t)return null;if(S==="total")return`${t.total} links`;const o=t.categories[S];return o?`${o} ${S}`:`no ${S}`},getUrlParams(){return S==="total"?{}:{cat:S}},applyUrlParams(e){const t=e.get("cat");t&&(S=t,O={},N==null||N())},getLinkSubtitle(e){const t=$o(e.book,e.chapter,e.verse);if(!t)return null;const o=S==="total"?"linked texts":`${S} links`;return`${t} ${o}`}};function So(e){At=e.verses,O={},S="total"}function Eo(e,t,o){var i,r;const n=(r=(i=ie[e])==null?void 0:i[String(t)])==null?void 0:r[String(o)];return(n==null?void 0:n.total)??null}function $o(e,t,o){var i,r;const n=(r=(i=ie[e])==null?void 0:i[String(t)])==null?void 0:r[String(o)];return n?S==="total"?n.total:n.categories[S]??null:null}function Lo(){const e=document.getElementById("verse-sidebar");return{sidebar:e,ref:(e==null?void 0:e.querySelector(".ref-text"))??null,overlayInfo:(e==null?void 0:e.querySelector(".overlay-info"))??null,hebrew:(e==null?void 0:e.querySelector(".verse-hebrew"))??null,english:(e==null?void 0:e.querySelector(".verse-english"))??null,link:(e==null?void 0:e.querySelector(".sefaria-link"))??null,linkSubtitle:(e==null?void 0:e.querySelector(".link-subtitle"))??null,closeBtn:(e==null?void 0:e.querySelector(".close-btn"))??null}}function Ro(e,t,o,n=null){var s;const r=`https://www.sefaria.org/${e.replace(/ /g,"_")}.${t}.${o}`;if((n==null?void 0:n.id)==="commentary"){const c=(s=n.getUrlParams)==null?void 0:s.call(n),l=c==null?void 0:c.cat;if(l)return`${r}?with=${encodeURIComponent(l)}`}return`${r}?with=all`}function Po(e,t,o,n,i,r=!1){var g,y,x,_,b;const{sidebar:s,ref:c,overlayInfo:l,hebrew:d,english:a,link:m,linkSubtitle:h}=e;if(!s)return;if(!t){s.classList.remove("visible"),s.classList.remove("pinned");return}const p=i(o,t.book,t.chapter,t.verse);if(c&&(c.textContent=`${t.book} ${t.chapter}:${t.verse}`),l){const v=(g=n==null?void 0:n.renderSidebarInfo)==null?void 0:g.call(n,t,r);if(v)typeof v=="string"?l.innerHTML=v:l.replaceChildren(v);else{const T=(y=n==null?void 0:n.getHoverInfo)==null?void 0:y.call(n,t);l.textContent=T||""}}if(d){const v=(p==null?void 0:p.he)||"Loading...",T=(x=n==null?void 0:n.highlightVerseText)==null?void 0:x.call(n,v,"he");T&&T!==v?typeof T=="string"?d.innerHTML=T:d.replaceChildren(T):d.textContent=v}if(a){const v=(p==null?void 0:p.en)||"Loading...",T=(_=n==null?void 0:n.highlightVerseText)==null?void 0:_.call(n,v,"en");T&&T!==v?typeof T=="string"?a.innerHTML=T:a.replaceChildren(T):a.textContent=v}if(m&&(m.href=Ro(t.book,t.chapter,t.verse,n)),h){const v=(b=n==null?void 0:n.getLinkSubtitle)==null?void 0:b.call(n,t);if(v)h.textContent=v;else{const T=Eo(t.book,t.chapter,t.verse);h.textContent=T?`${T} linked texts`:""}}s.classList.add("visible"),r?s.classList.add("pinned"):s.classList.remove("pinned")}function ko(){return{isDragging:!1,hoveredVerse:null,dragStart:{x:0,y:0}}}function Mo(e,t,o){e.isDragging=!0,e.dragStart={x:t,y:o}}function Io(e){e.isDragging=!1}function Ho(e,t){e.hoveredVerse=t}function Fo(e){e.isDragging=!1,e.hoveredVerse=null}function No(){return{activeTouches:new Map,lastPinchDistance:null}}function nt(e,t,o,n){e.activeTouches.set(t,{x:o,y:n})}function zo(e,t){e.activeTouches.delete(t),e.activeTouches.size<2&&(e.lastPinchDistance=null)}function rt(e){if(e.activeTouches.size<2)return null;const[t,o]=[...e.activeTouches.values()],n=o.x-t.x,i=o.y-t.y;return Math.sqrt(n*n+i*i)}function Bo(e){if(e.activeTouches.size<2)return null;const[t,o]=[...e.activeTouches.values()];return{x:(t.x+o.x)/2,y:(t.y+o.y)/2}}function Vo(e){e.activeTouches.clear(),e.lastPinchDistance=null}function Uo(e,t,o){return{x:e/o.zoom-o.x,y:t/o.zoom-o.y}}function Do(e,t,o){return e>=o.x&&e<o.x+o.size&&t>=o.y&&t<o.y+o.size}function Oo(e,t,o){for(const n of e)if(Do(t,o,n))return n;return null}function jo(e,t,o){let n=null,i=A.FUZZY_RADIUS*A.FUZZY_RADIUS;for(const r of e){const s=r.x+r.size/2,c=r.y+r.size/2,l=t-s,d=o-c,a=l*l+d*d;a<i&&(n=r,i=a)}return n}function Ae(e,t,o,n){const{x:i,y:r}=Uo(o,n,t),s=Oo(e,i,r);return s||jo(e,i,r)}function qo(e){const t=A.MIN_BRIGHTNESS+Ee(e*3)*A.BRIGHTNESS_RANGE;return[t,t,t]}function Go(e,t){return(e==null?void 0:e.getVerseColor(t))??null}function Xo(e,t){if(t){if(Array.isArray(e[0]))return e.map(o=>[Math.min(1,o[0]*A.BRIGHTNESS_FACTOR),Math.min(1,o[1]*A.BRIGHTNESS_FACTOR),Math.min(1,o[2]*A.BRIGHTNESS_FACTOR)]);{const o=e;return[Math.min(1,o[0]*A.BRIGHTNESS_FACTOR),Math.min(1,o[1]*A.BRIGHTNESS_FACTOR),Math.min(1,o[2]*A.BRIGHTNESS_FACTOR)]}}else return A.HIGHLIGHT_COLOR}function Wo(e,t,o,n){return e.map((i,r)=>{const s=Go(t,i),c=s!==null,l=c?s:qo(r),d=ne(o,i),a=ne(n,i);return{hasOverlayColor:c,baseColor:l,isHovered:d,isPinned:a,isHoveredWhilePinned:d&&n!==null&&!a}})}function Ko(e){return e.map(t=>{let o=t.baseColor;return t.isHovered&&(o=Xo(o,t.hasOverlayColor)),o})}const Yo=`#version 300 es
  uniform vec2 u_resolution;
  uniform vec2 u_pan;
  uniform float u_zoom;

  in vec2 a_position;
  in vec3 a_color;
  in vec3 a_color2;
  in vec3 a_color3;
  in vec3 a_color4;
  in float a_colorCount;
  in vec2 a_uv;
  in vec2 a_seed;

  out vec3 v_color;
  out vec3 v_color2;
  out vec3 v_color3;
  out vec3 v_color4;
  flat out int v_colorCount;
  out vec2 v_uv;
  out vec2 v_seed;

  void main() {
    vec2 pos = (a_position + u_pan) * u_zoom;
    vec2 clipSpace = (pos / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    v_color = a_color;
    v_color2 = a_color2;
    v_color3 = a_color3;
    v_color4 = a_color4;
    v_colorCount = int(a_colorCount);
    v_uv = a_uv;
    v_seed = a_seed;
  }
`,Zo=`#version 300 es
  precision mediump float;
  in vec3 v_color;
  in vec3 v_color2;
  in vec3 v_color3;
  in vec3 v_color4;
  flat in int v_colorCount;
  in vec2 v_uv;
  in vec2 v_seed;
  out vec4 fragColor;

  // Simple hash for dithering noise and stipple selection
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  // Second hash with different coefficients for variety
  float hash2(vec2 p) {
    return fract(sin(dot(p, vec2(39.346, 11.135))) * 83758.5453);
  }

  void main() {
    vec3 color;

    if (v_colorCount <= 1) {
      // Single color - use directly
      color = v_color;
    } else {
      // Multiple colors with bleed effect
      // UV < 0 or > 1 means we're in the bleed zone
      bool inBleedZone = v_uv.x < 0.0 || v_uv.x > 1.0 || v_uv.y < 0.0 || v_uv.y > 1.0;

      if (inBleedZone) {
        // In bleed zone: sparse scattered pixels
        // Use seed + UV to create unique pattern per verse
        vec2 scatterCoord = floor(v_uv * 8.0) + v_seed * 0.1;
        float scatter = hash(scatterCoord);
        float scatter2 = hash2(scatterCoord);

        // Only render ~30% of pixels in bleed zone (sparse scatter)
        if (scatter > 0.3) {
          discard;
        }

        // Pick a color from the available colors
        int idx = int(floor(scatter2 * float(v_colorCount)));
        if (idx == 0) {
          color = v_color;
        } else if (idx == 1) {
          color = v_color2;
        } else if (idx == 2) {
          color = v_color3;
        } else {
          color = v_color4;
        }
      } else {
        // Inside verse: use seed-varied stipple pattern
        // Combine UV with verse seed for unique pattern per verse
        // Use a 5x5 grid with per-verse offset for more organic feel
        vec2 blockCoord = floor(v_uv * 5.0 + fract(v_seed * 0.0731) * 5.0);
        float h = hash(blockCoord + v_seed * 0.0137);
        int idx = int(floor(h * float(v_colorCount)));

        // Select color based on hash
        if (idx == 0) {
          color = v_color;
        } else if (idx == 1) {
          color = v_color2;
        } else if (idx == 2) {
          color = v_color3;
        } else {
          color = v_color4;
        }
      }
    }

    // Add subtle dithering noise to break up moiré patterns (UV-based for zoom stability)
    vec2 noiseCoord = floor(v_uv * 12.0);
    float noise = (hash(noiseCoord + v_seed * 0.01) - 0.5) * 0.1;
    color = color + noise;

    fragColor = vec4(color, 1.0);
  }
`,Jo=`#version 300 es
  uniform vec2 u_resolution;
  uniform vec2 u_pan;
  uniform float u_zoom;

  in vec2 a_position;

  void main() {
    vec2 pos = (a_position + u_pan) * u_zoom;
    vec2 clipSpace = (pos / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  }
`,Qo=`#version 300 es
  precision mediump float;
  uniform vec3 u_color;
  out vec4 fragColor;

  void main() {
    fragColor = vec4(u_color, 1.0);
  }
`;function en(e){const t=e.getContext("webgl2",{antialias:!0});if(!t)throw new Error("WebGL2 not supported");return t}function fe(e,t,o){const n=e.createShader(t);if(!n)throw new Error("Failed to create shader");if(e.shaderSource(n,o),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(n)||"Shader compilation failed");return n}function tn(e){const t=fe(e,e.VERTEX_SHADER,Yo),o=fe(e,e.FRAGMENT_SHADER,Zo),n=e.createProgram();if(!n)throw new Error("Failed to create program");if(e.attachShader(n,t),e.attachShader(n,o),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(n)||"Program linking failed");return{program:n,attribs:{position:e.getAttribLocation(n,"a_position"),color:e.getAttribLocation(n,"a_color"),color2:e.getAttribLocation(n,"a_color2"),color3:e.getAttribLocation(n,"a_color3"),color4:e.getAttribLocation(n,"a_color4"),colorCount:e.getAttribLocation(n,"a_colorCount"),uv:e.getAttribLocation(n,"a_uv"),seed:e.getAttribLocation(n,"a_seed")},uniforms:{resolution:e.getUniformLocation(n,"u_resolution"),pan:e.getUniformLocation(n,"u_pan"),zoom:e.getUniformLocation(n,"u_zoom")}}}function on(e){const t=fe(e,e.VERTEX_SHADER,Jo),o=fe(e,e.FRAGMENT_SHADER,Qo),n=e.createProgram();if(!n)throw new Error("Failed to create program");if(e.attachShader(n,t),e.attachShader(n,o),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(n)||"Program linking failed");return{program:n,attribs:{position:e.getAttribLocation(n,"a_position")},uniforms:{resolution:e.getUniformLocation(n,"u_resolution"),pan:e.getUniformLocation(n,"u_pan"),zoom:e.getUniformLocation(n,"u_zoom"),color:e.getUniformLocation(n,"u_color")}}}function nn(e){return Array.isArray(e)&&Array.isArray(e[0])}function St(e,t,o=A.OUTLINE_COLOR){const r=new Float32Array(e.length*6*19);let s=0;for(let c=0;c<e.length;c++){const l=e[c],d=t==null?void 0:t[c];let a;Array.isArray(d)&&d.length===0?a=[o]:nn(d)?a=d.slice(0,4):a=[d||o];const m=a.length,h=m>1,p=h?A.BLEED_PIXELS:0,g=l.x-p,y=l.y-p,x=l.x+l.size-2+p,_=l.y+l.size-2+p,b=h?-p/(l.size-2):0,v=h?1+p/(l.size-2):1,T=l.x,K=l.y;for(;a.length<4;)a.push([0,0,0]);const P=(ce,le,ye,be)=>{r[s++]=ce,r[s++]=le;for(let I=0;I<4;I++)r[s++]=a[I][0],r[s++]=a[I][1],r[s++]=a[I][2];r[s++]=m,r[s++]=ye,r[s++]=be,r[s++]=T,r[s++]=K};P(g,y,b,b),P(x,y,v,b),P(g,_,b,v),P(g,_,b,v),P(x,y,v,b),P(x,_,v,v)}return r}function Et(e,t){const o=e.createBuffer();if(!o)throw new Error("Failed to create buffer");return e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),o}function rn(e,t={}){const o=t.thickness??2,n=t.color??A.OUTLINE_COLOR,i=19,r=6,s=4,c=new Float32Array(s*r*i),l=e.x-o,d=e.y-o,a=e.x+e.size-2+o,m=e.y+e.size-2+o,h=e.x,p=e.y;let g=0;const y=(_,b)=>{c[g++]=_,c[g++]=b;for(let v=0;v<4;v++)c[g++]=n[0],c[g++]=n[1],c[g++]=n[2];c[g++]=1,c[g++]=0,c[g++]=0,c[g++]=h,c[g++]=p},x=(_,b,v,T)=>{y(_,b),y(v,b),y(_,T),y(_,T),y(v,b),y(v,T)};return x(l,d,a,d+o),x(a-o,d,a,m),x(l,m-o,a,m),x(l,d,l+o,m),c}function sn(e){const t=en(e),o={main:tn(t),outline:on(t)};return{gl:t,programs:o,canvas:e}}function an(e,t,o){const n=St(t);return{buffer:Et(e,n),outlineBuffer:null,hoverOutlineBuffer:null,verses:t,dpr:o}}function cn(e,t,o){const n=St(t.verses,o);e.bindBuffer(e.ARRAY_BUFFER,t.buffer),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW)}function ln(e,t,o,n,i){const{gl:r,programs:s,canvas:c}=e,{buffer:l,verses:d,dpr:a}=t;r.viewport(0,0,c.width,c.height),r.clearColor(.1,.1,.1,1),r.clear(r.COLOR_BUFFER_BIT),r.useProgram(s.main.program),r.uniform2f(s.main.uniforms.resolution,c.width,c.height),r.uniform2f(s.main.uniforms.pan,o.x,o.y),r.uniform1f(s.main.uniforms.zoom,o.zoom*a),r.bindBuffer(r.ARRAY_BUFFER,l);const m=19*4;if(r.enableVertexAttribArray(s.main.attribs.position),r.vertexAttribPointer(s.main.attribs.position,2,r.FLOAT,!1,m,0),r.enableVertexAttribArray(s.main.attribs.color),r.vertexAttribPointer(s.main.attribs.color,3,r.FLOAT,!1,m,2*4),r.enableVertexAttribArray(s.main.attribs.color2),r.vertexAttribPointer(s.main.attribs.color2,3,r.FLOAT,!1,m,5*4),r.enableVertexAttribArray(s.main.attribs.color3),r.vertexAttribPointer(s.main.attribs.color3,3,r.FLOAT,!1,m,8*4),r.enableVertexAttribArray(s.main.attribs.color4),r.vertexAttribPointer(s.main.attribs.color4,3,r.FLOAT,!1,m,11*4),r.enableVertexAttribArray(s.main.attribs.colorCount),r.vertexAttribPointer(s.main.attribs.colorCount,1,r.FLOAT,!1,m,14*4),r.enableVertexAttribArray(s.main.attribs.uv),r.vertexAttribPointer(s.main.attribs.uv,2,r.FLOAT,!1,m,15*4),r.enableVertexAttribArray(s.main.attribs.seed),r.vertexAttribPointer(s.main.attribs.seed,2,r.FLOAT,!1,m,17*4),r.drawArrays(r.TRIANGLES,0,d.length*6),n&&!ne(n,i)){const h=i?A.HOVER_WHILE_PINNED_OUTLINE_COLOR:A.HOVER_OUTLINE_COLOR;t.hoverOutlineBuffer=it(e,t,n,h,t.hoverOutlineBuffer,o)}i&&(t.outlineBuffer=it(e,t,i,A.PINNED_OUTLINE_COLOR,t.outlineBuffer,o)),window.bookLabels&&U(window.bookLabels,{x:o.x,y:o.y},o.zoom)}function it(e,t,o,n,i,r){const{gl:s,programs:c,canvas:l}=e,{dpr:d}=t,a=rn({x:o.x,y:o.y,size:o.size},{thickness:2,color:n});let m=i;m?(s.bindBuffer(s.ARRAY_BUFFER,m),s.bufferData(s.ARRAY_BUFFER,a,s.STATIC_DRAW)):m=Et(s,a),s.useProgram(c.outline.program),s.uniform2f(c.outline.uniforms.resolution,l.width,l.height),s.uniform2f(c.outline.uniforms.pan,r.x,r.y),s.uniform1f(c.outline.uniforms.zoom,r.zoom*d),s.uniform3f(c.outline.uniforms.color,...n),s.bindBuffer(s.ARRAY_BUFFER,m);const h=19*4;return s.enableVertexAttribArray(c.outline.attribs.position),s.vertexAttribPointer(c.outline.attribs.position,2,s.FLOAT,!1,h,0),s.drawArrays(s.TRIANGLES,0,24),m}const Ie=new Map;function G(e){Ie.set(e.id,e)}function un(e){return Ie.get(e)}function hn(){return Array.from(Ie.values())}let st=new Map,me=[],C=null,z=null,se=new Map,X=1,pe="common";const dn=[1,.84,0];function ve(){if(se.clear(),!!C){pe=te(C.totalCount);for(const e of C.verses){const t=$(e.book,e.chapter,e.verse);se.set(t,e.count)}X=1;for(const e of C.verses)e.count>X&&(X=e.count)}}const fn=[{t:0,color:[.4,.2,.6]},{t:1,color:[.9,.4,.95]}],mn=[{t:0,color:[.2,.1,.3]},{t:.33,color:[.4,.2,.5]},{t:.66,color:[.7,.3,.7]},{t:1,color:[.95,.6,.9]}];function pn(e){if(!C)return null;se.size===0&&ve();const t=$(e.book,e.chapter,e.verse),o=se.get(t)||0;return pe==="rare"?o>0?dn:A.RARE_NO_MATCH_COLOR:pe==="uncommon"?o===0?[.25,.25,.28]:je(o,X,fn):o===0?[.25,.23,.28]:je(o,X,mn,{useLog:!0})}function gn(e){e.innerHTML=`
    <div class="trop-controls">
      <label style="margin-bottom: 8px;">Select Trop Mark</label>
      <div class="trop-chart"></div>
      <div class="trop-info"></div>
    </div>
  `;const t=e.querySelector(".trop-chart"),o=e.querySelector(".trop-info");let n=null;for(const i of me){const r=document.createElement("button");r.textContent="ב"+i.unicode,r.title=`${i.name} (${i.hebrewName})`;const s=te(i.totalCount);if(s==="rare"&&r.classList.add("rare"),r.addEventListener("mouseenter",()=>{const c=s==="rare"?"Rare":s==="uncommon"?"Uncommon":"Common";o.textContent=`${i.name} (${i.hebrewName}) · ${i.totalCount.toLocaleString()} occurrences · ${c}`}),r.addEventListener("mouseleave",()=>{if(!n)o.textContent="";else{const c=me.find(l=>l.unicode===(n==null?void 0:n.dataset.unicode));if(c){const l=te(c.totalCount),d=l==="rare"?"Rare":l==="uncommon"?"Uncommon":"Common";o.textContent=`${c.name} (${c.hebrewName}) · ${c.totalCount.toLocaleString()} · ${d}`}}}),r.addEventListener("click",()=>{n===r?(r.classList.remove("selected"),n=null,C=null,o.textContent=""):(n&&n.classList.remove("selected"),r.classList.add("selected"),n=r,C=i),ve(),z==null||z()}),r.dataset.unicode=i.unicode,t.appendChild(r),C&&i.unicode===C.unicode){r.classList.add("selected"),n=r;const c=te(i.totalCount),l=c==="rare"?"Rare":c==="uncommon"?"Uncommon":"Common";o.textContent=`${i.name} (${i.hebrewName}) · ${i.totalCount.toLocaleString()} · ${l}`}}}const vn={id:"trop",name:"Cantillation (Trop)",async init(){},destroy(){z=null,se.clear(),X=1,pe="common"},onUpdate(e){z=e},getVerseColor(e){return pn(e)},renderControls(e){gn(e)},renderLegend(e){if(!C){e.innerHTML='<div style="color: #666; font-size: 11px;">Select a trop mark above</div>';return}te(C.totalCount)==="rare"?e.innerHTML=`
        <div class="legend-row"><span class="swatch" style="background: rgb(255, 214, 0)"></span><span>Contains ${C.name}</span></div>
        <div class="legend-row"><span class="swatch" style="background: rgb(64, 64, 64)"></span><span>Does not contain</span></div>
      `:e.innerHTML=`
        <div class="legend-gradient" style="background: linear-gradient(to right, #3f3b47, #5a3f7a, #a060a0, #e090c0);"></div>
        <div style="display: flex; justify-content: space-between; font-size: 10px; color: #888;">
          <span>0</span>
          <span>Count</span>
          <span>Max</span>
        </div>
      `},getHoverInfo(e){if(!C)return null;const t=C.verses.find(o=>o.book===e.book&&o.chapter===e.chapter&&o.verse===e.verse);return t?`${C.name} ×${t.count}`:null},getUrlParams(){return C?{trop:C.name.toLowerCase().replace(/\s+/g,"-")}:{}},applyUrlParams(e){const t=e.get("trop");if(t){const o=me.find(n=>n.name.toLowerCase().replace(/\s+/g,"-")===t);o&&(C=o,ve(),z==null||z())}},highlightVerseText(e,t){return t!=="he"||!C?e:bn(e,C.unicode)}};function yn(e){st=Ht(e.verseTexts),me=Ft(st),C=null,ve()}function bn(e,t){const o=[];let n=0;for(;n<e.length;){const i=e[n];if(i===t)if(o.length>0){const r=[];for(;o.length>0;){const c=o[o.length-1].codePointAt(0)||0;if(c>=1425&&c<=1479)r.unshift(o.pop());else{r.unshift(o.pop());break}}r.push(i),o.push(`<mark class="trop-highlight">${r.join("")}</mark>`)}else o.push(`<mark class="trop-highlight">${i}</mark>`);else o.push(i);n++}return o.join("")}function wn(e){return"torah"in e}function Le(e,t){const o=e/t*360;return ut({h:o,s:.8,l:.55})}function at(e,t){return[Math.min(1,e[0]*t),Math.min(1,e[1]*t),Math.min(1,e[2]*t)]}function ct(e,t){const{h:o,s:n,l:i}=Nt(e);return ut({h:o,s:n*t,l:i})}let L=null,Re=null,H="ashkenazi",E=null,Q=null,B=new Map,F=new Map,Pe=new Set,he=new Set,W=new Map,oe=0;function xn(e,t){if(!Re)return 200;const o=Re.books.find(n=>n.name===e);return!o||t<1||t>o.chapters.length?200:o.chapters[t-1]}function Ce(e,t){for(let o=e.start.chapter;o<=e.end.chapter;o++){const n=o===e.start.chapter?e.start.verse:1,i=xn(e.book,o),r=o===e.end.chapter?Math.min(e.end.verse,i):i;for(let s=n;s<=r;s++)t(e.book,o,s)}}function Se(){if(B.clear(),F.clear(),Pe.clear(),he.clear(),W.clear(),!L)return;const e=L.specialOccasions||[];oe=L.parshiot.length+e.length;for(let t=0;t<L.parshiot.length;t++){const o=L.parshiot[t];W.set(o,Le(t,oe)),Ce(o.torah,(i,r,s)=>{const c=$(i,r,s);B.set(c,o),Pe.add(c)});const n=o.haftarah[H];for(const i of n)Ce(i,(r,s,c)=>{const l=$(r,s,c),d=F.get(l);d?d.push(o):F.set(l,[o]),he.add(l)})}for(let t=0;t<e.length;t++){const o=e[t];W.set(o,Le(L.parshiot.length+t,oe));const n=o.haftarah[H];for(const i of n)Ce(i,(r,s,c)=>{const l=$(r,s,c),d=F.get(l);d?d.push(o):F.set(l,[o]),he.add(l)})}}function lt(e){const t=$(e.book,e.chapter,e.verse);return B.has(t)||F.has(t)}const Tn={id:"haftarah",name:"Haftarah",async init(){try{const[e,t]=await Promise.all([fetch("/torahmap/data/haftarah-mappings.json"),fetch("/torahmap/data/tanakh-structure.json")]);if(!e.ok){console.error(`Failed to load haftarah-mappings.json: ${e.status}`);return}if(!t.ok){console.error(`Failed to load tanakh-structure.json: ${t.status}`);return}L=await e.json(),Re=await t.json(),Se()}catch(e){console.error("Failed to initialize haftarah overlay:",e)}},destroy(){E=null,H="ashkenazi",Q=null,B.clear(),F.clear(),Pe.clear(),he.clear(),W.clear()},onUpdate(e){Q=e},setHoveredVerse(e){const t=E?lt(E):!1,o=e?lt(e):!1,n=o?e:null;if(!t&&!o)return E=null,!1;const i=E?$(E.book,E.chapter,E.verse):null,r=n?$(n.book,n.chapter,n.verse):null;return i===r?!1:(E=n,t||o)},getVerseColor(e){if(!L)return null;const t=$(e.book,e.chapter,e.verse),o=B.get(t),n=F.get(t);if(o){const i=W.get(o);if(!i)return null;if(!E)return i;const r=$(E.book,E.chapter,E.verse),s=B.get(r),c=F.get(r);return s===o||c&&c.includes(o)?at(i,A.BRIGHTNESS_FACTOR):ct(i,A.DESATURATE_FACTOR)}if(n&&n.length>0){const i=n.map(a=>W.get(a)).filter(a=>a!==void 0);if(i.length===0)return null;if(!E)return i.length===1?i[0]:i;const r=$(E.book,E.chapter,E.verse),s=B.get(r),c=F.get(r);if(s&&n.includes(s)||c&&c.some(a=>n.includes(a))){const a=i.map(m=>at(m,A.BRIGHTNESS_FACTOR));return a.length===1?a[0]:a}const d=i.map(a=>ct(a,A.DESATURATE_FACTOR));return d.length===1?d[0]:d}return null},renderControls(e){const t=document.createElement("div");t.className="haftarah-controls",t.innerHTML=`
      <div style="display: flex; align-items: center; gap: 8px; margin-top: 10px;">
        <label for="custom-select" style="font-size: 12px; color: #aaa;">Custom:</label>
        <select id="custom-select" style="flex: 1;">
          <option value="ashkenazi">Ashkenazi</option>
          <option value="sephardi">Sephardi</option>
        </select>
      </div>
    `;const o=t.querySelector("select");o.value=H,o.addEventListener("change",()=>{H=o.value,Se(),Q==null||Q()}),e.appendChild(t)},renderLegend(e){var c;const t=H==="ashkenazi"?"Ashkenazi":"Sephardi",o=(L==null?void 0:L.parshiot.length)||54,n=((c=L==null?void 0:L.specialOccasions)==null?void 0:c.length)||0,i=[],r=10;for(let l=0;l<r;l++){const a=Le(l*(oe/r),oe||81).map(h=>Math.round(h*255)).join(", "),m=l/(r-1)*100;i.push(`rgb(${a}) ${m}%`)}const s=i.join(", ");e.innerHTML=`
      <div class="legend-row">
        <div style="
          width: 20px;
          height: 12px;
          background: linear-gradient(to right, ${s});
          border-radius: 2px;
        "></div>
        <span>${o} Parshiot + ${n} Special Occasions</span>
      </div>
      <div style="color: #888; font-size: 10px; margin-top: 4px; margin-left: 28px; line-height: 1.3;">
        Torah portion & haftarah (${t}) use same color
      </div>
      <div style="color: #888; font-size: 10px; margin-top: 4px; margin-left: 28px; line-height: 1.3;">
        Includes holidays, fast days, special Shabbatot
      </div>
      <div style="color: #888; font-size: 10px; margin-top: 4px; margin-left: 28px; line-height: 1.3;">
        Multi-item verses show stippled pattern
      </div>
      <div style="color: #666; font-size: 10px; margin-top: 8px; line-height: 1.4;">
        Hover brightens the reading & its haftarah, desaturates others
      </div>
    `},getHoverInfo(e){if(!L)return null;const t=$(e.book,e.chapter,e.verse),o=B.get(t);if(o){const r=o.haftarah[H].map(s=>s.start.chapter===s.end.chapter?`${s.book} ${s.start.chapter}:${s.start.verse}-${s.end.verse}`:`${s.book} ${s.start.chapter}:${s.start.verse}-${s.end.chapter}:${s.end.verse}`).join(", ");return`${o.name} (${o.hebrewName}) → ${r}`}const n=F.get(t);if(n&&n.length>0){if(n.length===1){const r=n[0];return wn(r)?`Haftarah for ${r.name} (${r.hebrewName})`:`Haftarah for ${r.name} (${r.hebrewName})`}return`Haftarah for: ${n.map(r=>`${r.name} (${r.hebrewName})`).join(", ")}`}return null},getUrlParams(){return H==="ashkenazi"?{}:{custom:H}},applyUrlParams(e){if(e.get("custom")==="sephardi"){H="sephardi",Se();const o=document.querySelector("#custom-select");o&&(o.value=H)}}},$t=[{name:"Pre-Monarchic",dateRange:[1400,1e3],baseColor:[.6,.25,.15]},{name:"Early Monarchic",dateRange:[1e3,722],baseColor:[.75,.4,.2]},{name:"Late Monarchic",dateRange:[722,586],baseColor:[.85,.55,.25]},{name:"Exilic",dateRange:[586,538],baseColor:[.85,.7,.35]},{name:"Persian Period",dateRange:[538,331],baseColor:[.75,.75,.5]},{name:"Hellenistic",dateRange:[331,164],baseColor:[.8,.8,.7]}];let ge={notes:[],books:{}};function He(e){for(const t of $t)if(e>=t.dateRange[1]&&e<=t.dateRange[0])return t;return null}function _n(e){const t=He(e);if(!t)return null;const[o,n]=t.dateRange,r=.7+(o-e)/(o-n)*.3;return[t.baseColor[0]*r,t.baseColor[1]*r,t.baseColor[2]*r]}function ke(e){const t=ge.books[e.book];if(!t)return null;const o=t[e.chapter-1];return o&&o[e.verse-1]||null}const An={id:"text-dating",name:"Text Dating",async init(){try{const e=await fetch("/torahmap/data/text-dating.json");if(!e.ok){console.error(`Failed to load text-dating.json: ${e.status}`);return}ge=await e.json()}catch(e){console.error("Failed to parse text-dating.json:",e)}},getVerseColor(e){const t=ke(e);if(!t)return null;const[o,n]=t.d,i=Math.abs((o+n)/2);return _n(i)},renderLegend(e){const t=$t.map(o=>{const[n,i,r]=o.baseColor;return`
        <div class="legend-row">
          <span class="swatch" style="background: ${`rgb(${n*255}, ${i*255}, ${r*255})`}"></span>
          <span class="label">${o.name} (${o.dateRange[0]}-${o.dateRange[1]} BCE)</span>
        </div>
      `}).join("");e.innerHTML=`
      <div class="text-dating-legend">
        ${t}
        <div class="legend-note">Darker shades = later within period</div>
      </div>
    `},getHoverInfo(e){const t=ke(e);if(!t)return null;const[o,n]=t.d,i=Math.abs((o+n)/2),r=He(i);if(!r)return null;const s=ge.notes[t.n],c=o===n?`~${Math.abs(o)} BCE`:`${Math.abs(o)}-${Math.abs(n)} BCE`;return`${r.name} (${c})
${s}`},renderSidebarInfo(e,t){if(!t)return null;const o=Cn(e.book,e.chapter,e.verse);if(!o)return null;const n=o.dateRange[0]===o.dateRange[1]?`~${o.dateRange[0]} BCE`:`${o.dateRange[0]}-${o.dateRange[1]} BCE`,i=o.note.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');return`
      <strong>${o.era}</strong> (${n})
      <br>${i}
    `}};function Cn(e,t,o){const n=ke({book:e,chapter:t,verse:o});if(!n)return null;const[i,r]=n.d,s=Math.abs((i+r)/2),c=He(s);return c?{era:c.name,eraDateRange:c.dateRange,dateRange:[Math.abs(i),Math.abs(r)],note:ge.notes[n.n]}:null}const de=[[0,[13/255,8/255,135/255]],[.25,[126/255,3/255,168/255]],[.5,[204/255,71/255,120/255]],[.75,[248/255,149/255,64/255]],[1,[240/255,249/255,33/255]]],V=de;function Lt(e){e=Math.max(0,Math.min(1,e));for(let t=0;t<V.length-1;t++){const[o,n]=V[t],[i,r]=V[t+1];if(e>=o&&e<=i){const s=(e-o)/(i-o);return[n[0]+(r[0]-n[0])*s,n[1]+(r[1]-n[1])*s,n[2]+(r[2]-n[2])*s]}}return V[V.length-1][1]}let ee=null,ae=new Map,Fe=0,Ne=0;function Sn(e){return e?e.trim().split(/\s+/).filter(o=>new RegExp("\\p{L}","u").test(o)).length:0}function En(e){ee=e.verseTexts,ae.clear();let t=1/0,o=0;for(const n in ee)for(const i in ee[n])for(const r in ee[n][i]){const c=ee[n][i][r].he,l=Sn(c),d=$(n,parseInt(i),parseInt(r));ae.set(d,l),l>0&&(t=Math.min(t,l),o=Math.max(o,l))}Fe=t===1/0?0:t,Ne=o}function $n(e){const t=$(e.book,e.chapter,e.verse),o=ae.get(t);if(o===void 0||o===0)return[.15,.15,.2];let n=l=>l;n=Math.sqrt;const i=n(Fe),r=n(Ne),c=(n(o)-i)/(r-i);return Lt(c)}const Ln={id:"verse-length",name:"Verse Length",getVerseColor(e){return $n(e)},renderLegend(e){const t=[];for(let c=0;c<10;c++){const l=c/9,a=Lt(l).map(h=>Math.round(h*255)).join(", "),m=c/9*100;t.push(`rgb(${a}) ${m}%`)}const n=t.join(", "),i=V===de?"Plasma":"Viridis",r=V===de?"Purple":"Purple/blue",s=V===de?"Orange/yellow":"Green/yellow";e.innerHTML=`
      <div class="legend-row">
        <div style="
          width: 100%;
          height: 12px;
          background: linear-gradient(to right, ${n});
          border-radius: 2px;
          margin-bottom: 6px;
        "></div>
        <div style="display: flex; justify-content: space-between; font-size: 10px; color: #888;">
          <span>${Fe} words</span>
          <span>${Ne} words</span>
        </div>
      </div>
      <div style="color: #888; font-size: 10px; margin-top: 8px; line-height: 1.3;">
        ${r} = shorter verses
      </div>
      <div style="color: #888; font-size: 10px; margin-top: 4px; line-height: 1.3;">
        ${s} = longer verses
      </div>
      <div style="color: #888; font-size: 10px; margin-top: 4px; line-height: 1.3;">
        Square root scale · ${i} palette
      </div>
    `},getHoverInfo(e){const t=$(e.book,e.chapter,e.verse),o=ae.get(t);return o===void 0?null:`${o} ${o===1?"word":"words"}`},renderSidebarInfo(e){const t=$(e.book,e.chapter,e.verse),o=ae.get(t);if(o===void 0)return null;const n=o===1?"word":"words",i=document.createElement("div");i.style.cssText="margin-top: 12px; padding: 8px; background: rgba(255,255,255,0.05); border-radius: 4px;";const r=document.createElement("div");r.style.cssText="font-size: 11px; color: #888; margin-bottom: 4px;",r.textContent="Verse Length:";const s=document.createElement("div");return s.style.cssText="font-size: 13px; color: #ddd;",s.textContent=`${o} ${n}`,i.appendChild(r),i.appendChild(s),i}};async function Rn(){var Ve;document.title="Tanakh Map [main]";const[e,t]=await Promise.all([fetch("/torahmap/data/tanakh-structure.json"),zt(),Bt()]);if(!e.ok)throw new Error(`Failed to load tanakh-structure.json: ${e.status}`);let o;try{o=await e.json()}catch(u){throw new Error(`Failed to parse tanakh-structure.json: ${u}`)}const n=ro(o),i=io(n);console.log(`Loaded ${n.length} verses, bounds: ${i.width}x${i.height}`),Vt(t),G(Co),G(vn),G(Gt),G(Tn),G(An),G(Ln),So({verses:n}),yn({verseTexts:t}),En({verseTexts:t}),await Promise.all(hn().map(u=>{var f;return(f=u.init)==null?void 0:f.call(u)}));const r=document.getElementById("canvas");if(!r)throw new Error("Canvas not found");const s=window.devicePixelRatio||1;function c(){const u=window.innerWidth,f=window.innerHeight;r.width=u*s,r.height=f*s,r.style.width=u+"px",r.style.height=f+"px"}c();const l=sn(r),d=an(l.gl,n,s);let a=null;function m(){const u=Wo(n,a,g.hoveredVerse,p),f=Ko(u);cn(l.gl,d,f)}const h=fo(window.innerWidth,window.innerHeight,i);let p=null;const g=ko(),y=No();let x=null;const _=10,b=300;function v(){ln(l,d,h,g.hoveredVerse,p)}function T(u){const f=window.innerWidth,w=window.innerHeight;h.x=f/2/h.zoom-u.x-u.size/2,h.y=w/2/h.zoom-u.y-u.size/2}function K(u,f=!1){p=u,Y(u,!0),f&&T(u),m(),v(),U(window.bookLabels,{x:h.x,y:h.y},h.zoom),I(!0)}function P(){p=null,Y(null),m(),v(),I(!0)}v(),window.bookLabels=lo(n,document.body),U(window.bookLabels,{x:h.x,y:h.y},h.zoom),r.addEventListener("wheel",u=>{u.preventDefault();const f=u.deltaY>0?Ut:Dt,w=Qe(h.zoom*f),R=u.clientX,k=u.clientY,M=et({x:h.x,y:h.y},h.zoom,w,R,k);h.x=M.x,h.y=M.y,h.zoom=w,v(),U(window.bookLabels,{x:h.x,y:h.y},h.zoom),we()},{passive:!1}),r.addEventListener("touchstart",u=>{for(const f of u.changedTouches)nt(y,f.identifier,f.clientX,f.clientY);y.activeTouches.size===2&&(y.lastPinchDistance=rt(y))},{passive:!0}),r.addEventListener("touchmove",u=>{for(const f of u.changedTouches)nt(y,f.identifier,f.clientX,f.clientY);if(y.activeTouches.size>=2){const f=rt(y),w=Bo(y);if(f&&w&&y.lastPinchDistance){const R=f/y.lastPinchDistance,k=Qe(h.zoom*R),M=et({x:h.x,y:h.y},h.zoom,k,w.x,w.y);h.x=M.x,h.y=M.y,h.zoom=k,v(),U(window.bookLabels,{x:h.x,y:h.y},h.zoom)}y.lastPinchDistance=f}},{passive:!0}),r.addEventListener("touchend",u=>{for(const f of u.changedTouches)zo(y,f.identifier);y.activeTouches.size===0&&we()}),r.addEventListener("touchcancel",()=>{Vo(y)}),r.addEventListener("pointerdown",u=>{Mo(g,u.clientX,u.clientY),r.style.cursor="grabbing",r.setPointerCapture(u.pointerId),x={x:u.clientX,y:u.clientY,time:Date.now()}}),r.addEventListener("pointermove",u=>{if(g.isDragging&&y.activeTouches.size<2){const f=u.clientX-g.dragStart.x,w=u.clientY-g.dragStart.y;h.x+=f/h.zoom,h.y+=w/h.zoom,g.dragStart={x:u.clientX,y:u.clientY},v(),U(window.bookLabels,{x:h.x,y:h.y},h.zoom)}}),r.addEventListener("pointerup",u=>{const f=g.isDragging;if(f&&(Io(g),we()),x){const w=Math.abs(u.clientX-x.x),R=Math.abs(u.clientY-x.y),k=Date.now()-x.time;if(w<_&&R<_&&k<b){const M=Ae(n,h,u.clientX,u.clientY);M?p&&ne(p,M)?P():K(M):p&&P()}x=null}if(f){const w=Ae(n,h,u.clientX,u.clientY);p&&w?r.style.cursor="pointer":r.style.cursor="default"}}),r.addEventListener("pointerleave",()=>{const u=g.hoveredVerse!==null;Fo(g),r.style.cursor="default";let f=!1;a!=null&&a.setHoveredVerse&&(f=a.setHoveredVerse(null)),(u||f)&&(m(),v())});const ce=Lo(),le=document.getElementById("controls");function ye(){var w;if(!a)return{};const u=((w=a.getUrlParams)==null?void 0:w.call(a))??{},f={};return u.trop&&(f.trop=u.trop),u.cat&&(f.category=u.cat),u.q&&(f.q=u.q),u.ww&&(f.ww=u.ww),u.hm&&(f.hm=u.hm),f}function be(){const u={overlayParams:{}};return a&&(u.overlay=a.id,u.overlayParams=ye()),p&&(u.verse=To(p.book,p.chapter,p.verse)),h.zoom!==Xt&&(u.zoom=h.zoom),p||(u.x=h.x,u.y=h.y),u}function I(u=!1){const f=be();wo(f,u)}const we=Ao(()=>I(!1),Wt);function Y(u,f=!1){Po(ce,u,t,a,Kt,f)}r.addEventListener("pointermove",u=>{if(!(u.pointerType==="touch"||y.activeTouches.size>=2)&&!g.isDragging){const f=Ae(n,h,u.clientX,u.clientY),w=g.hoveredVerse;Ho(g,f);const R=!ne(w,f);p&&f?r.style.cursor="pointer":g.isDragging?r.style.cursor="grabbing":r.style.cursor="default";let k=!1;a!=null&&a.setHoveredVerse&&(k=a.setHoveredVerse(f)),(R||k)&&(m(),v()),p||(f?Y(f,!1):Y(null))}}),(Ve=ce.closeBtn)==null||Ve.addEventListener("click",()=>{P()});const xe=document.querySelector(".bottom-sheet-handle");xe==null||xe.addEventListener("click",()=>{P()}),window.addEventListener("keydown",u=>{if(!p)return;if(u.key==="Escape"){P();return}let f=null;u.key==="ArrowRight"?f=Ot(n,p):u.key==="ArrowLeft"&&(f=jt(n,p)),f&&K(f,!0)});const j=document.getElementById("overlay-select"),Te=document.getElementById("overlay-controls"),q=document.getElementById("overlay-legend");function ze(u,f=!1){var w,R,k,M;(w=a==null?void 0:a.destroy)==null||w.call(a),a=un(u)??null,(R=a==null?void 0:a.onUpdate)==null||R.call(a,()=>{var Ue;m(),q&&(q.innerHTML="",(Ue=a==null?void 0:a.renderLegend)==null||Ue.call(a,q)),v(),I(!1)}),Te&&(Te.innerHTML="",(k=a==null?void 0:a.renderControls)==null||k.call(a,Te)),q&&(q.innerHTML="",(M=a==null?void 0:a.renderLegend)==null||M.call(a,q)),m(),v(),f||I(!0)}j==null||j.addEventListener("change",()=>{ze(j.value)}),window.addEventListener("resize",()=>{c(),v(),U(window.bookLabels,{x:h.x,y:h.y},h.zoom)}),window.torahMap={verses:n,pan:{x:h.x,y:h.y},zoom:h.zoom,render:v,canvas:r,bounds:i},qt({verses:n,callbacks:{onVerseClick:u=>{K(u)}}}),le&&ho(le);function Rt(u){if(u.overlay&&(ze(u.overlay,!0),j&&(j.value=u.overlay),a!=null&&a.applyUrlParams)){const f=new URLSearchParams;u.overlayParams.trop&&f.set("trop",u.overlayParams.trop),u.overlayParams.category&&f.set("cat",u.overlayParams.category),u.overlayParams.q&&f.set("q",u.overlayParams.q),u.overlayParams.ww&&f.set("ww",u.overlayParams.ww),u.overlayParams.hm&&f.set("hm",u.overlayParams.hm),a.applyUrlParams(f)}}function Pt(u){if(!u.verse)return!1;const f=_o(u.verse);if(!f)return!1;const w=n.find(R=>R.book===f.book&&R.chapter===f.chapter&&R.verse===f.verse);return w?(p=w,Y(w,!0),T(w),!0):!1}function kt(u,f){u.zoom!==void 0&&(h.zoom=u.zoom),!f&&u.x!==void 0&&u.y!==void 0&&(h.x=u.x,h.y=u.y)}function Be(){const u=yo();Rt(u);const f=Pt(u);kt(u,f),m(),v()}window.location.hash&&Be(),xo(()=>{Be()})}Rn().catch(console.error);
