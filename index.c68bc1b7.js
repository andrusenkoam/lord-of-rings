!function(){var n="https://the-one-api.dev/v2",e="/character",t="A4ZGTeDuebL19mljqwqU",c=document.querySelector(".js-list"),a=document.querySelector(".js-load"),o=1;function r(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=new URLSearchParams({limit:20,page:"".concat(c)}),o={method:"GET",headers:{Authorization:"Bearer ".concat(t)}};return fetch("".concat(n).concat(e,"?").concat(a),o).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))}function i(n){return n.map((function(n){var e=n.name,t=n.wikiUrl,c=n.race,a=n.gender;return'<li class="item">\n        <h2 class="name">'.concat(e,'</h2>\n        <a href="').concat(t,'" target="_blank" class="link">More information about ').concat(e,'</a>\n        <h3 class="race">').concat(c,'</h3>\n        <p class="gender">').concat(a,"</p>\n      </li>")})).join("")}a.addEventListener("click",(function(){r(o+=1).then((function(n){c.insertAdjacentHTML("beforeend",i(n.docs)),n.page===n.pages&&(a.style.display="none")})).catch((function(n){return console.log(n)}))})),r().then((function(n){c.insertAdjacentHTML("beforeend",i(n.docs)),n.page!==n.pages&&(a.style.display="block")})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.c68bc1b7.js.map
