/*!
 * @license
 * Copyright 2021 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */import{CopyToClipboardController as m}from"./clipboard.js";import"./toggle-tip.js";import{ExpandableRowsTableController as u}from"./table.js";document.querySelectorAll(".js-expandableTable").forEach(e=>new u(e,document.querySelector(".js-expandAllDirectories"))),document.querySelectorAll(".js-copyToClipboard").forEach(e=>{new m(e)});const t=document.querySelector(".js-readme"),o=document.querySelector(".js-readmeContent"),s=document.querySelector(".js-readmeOutline"),d=document.querySelectorAll(".js-readmeExpand"),a=document.querySelector(".js-readmeCollapse");t&&o&&s&&d.length&&a&&(window.location.hash.includes("readme")&&t.classList.add("UnitReadme--expanded"),d.forEach(e=>e.addEventListener("click",r=>{r.preventDefault(),t.classList.add("UnitReadme--expanded"),t.scrollIntoView()})),a.addEventListener("click",e=>{e.preventDefault(),t.classList.remove("UnitReadme--expanded"),d[1]&&d[1].scrollIntoView({block:"center"})}),o.addEventListener("keyup",()=>{t.classList.add("UnitReadme--expanded")}),o.addEventListener("click",()=>{t.classList.add("UnitReadme--expanded")}),s.addEventListener("click",()=>{t.classList.add("UnitReadme--expanded")}),document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="f"&&t.classList.add("UnitReadme--expanded")}));const i=document.querySelector(".js-readmeOption");i&&!t&&i.setAttribute("disabled","true");const p=document.querySelector(".js-unitDirectories"),l=document.querySelector(".js-directoriesOption");!p&&l&&l.setAttribute("disabled","true"),document.querySelectorAll(".js-buildContextSelect").forEach(e=>{e.addEventListener("change",r=>{window.location.search=`?GOOS=${r.target.value}`})});const n=document.querySelector(".js-unitHeader");n?.addEventListener("dblclick",e=>{e.target===n.firstElementChild&&n.classList.contains("UnitHeader--sticky")&&(window.getSelection()?.removeAllRanges(),window.scrollTo({top:0}))});const L=new IntersectionObserver(([e])=>{e.intersectionRatio<1?(n?.classList.add("UnitHeader--sticky"),n?.classList.remove("UnitHeader--full")):(n?.classList.remove("UnitHeader--sticky"),n?.classList.add("UnitHeader--full"))},{threshold:1,rootMargin:"-20px"}),c=document.querySelector(".js-headerSentinel");c&&L.observe(c);
//# sourceMappingURL=unit.js.map
