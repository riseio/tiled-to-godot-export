/*! (c) 2018, Andrea Giammarchi, (ISC) */
var Flatted=function(a,l){return{parse:function(n,t){var e=JSON.parse(n,i).map(f),r=e[0],u=t||s,c="object"==typeof r&&r?function u(c,f,n,i){return Object.keys(n).reduce(function(n,t){var e=n[t];if(e instanceof a){var r=c[e];"object"!=typeof r||f.has(r)?n[t]=i.call(n,t,r):(f.add(r),n[t]=i.call(n,t,u(c,f,r,i)))}else n[t]=i.call(n,t,e);return n},n)}(e,new Set,r,u):r;return u.call({"":c},"",c)},stringify:function(n,e,t){function r(n,t){if(u)return u=!u,t;var e=a.call(this,n,t);switch(typeof e){case"object":if(null===e)return e;case l:return c.get(e)||p(c,f,e)}return e}for(var u,c=new Map,f=[],i=[],a=e&&typeof e==typeof f?function(n,t){if(""===n||-1<e.indexOf(n))return t}:e||s,o=+p(c,f,a.call({"":n},"",n));o<f.length;o++)u=!0,i[o]=JSON.stringify(f[o],r,t);return"["+i.join(",")+"]"}};function s(n,t){return t}function p(n,t,e){var r=a(t.push(e)-1);return n.set(e,r),r}function f(n){return n instanceof a?a(n):n}function i(n,t){return typeof t==l?new a(t):t}}(String,"string");

var log = console.log.bind(console);

function logf(data) {
  console.log(Flatted.stringify(data));
}
function logk(data) {
  console.log(Object.keys(data));
}

function getResPath(projectRoot, outputPath) {
  const p = outputPath.split('/').slice(0, -1)
  // check for projectRoot
  // If projectRoot is not set, set it to current file's location
  if (!projectRoot) {
    projectRoot = p.join('/')
  }
  projectRoot = projectRoot.replace(/\\/g, '/')
  // Use it as absolute, if it doesn't start with ".", relative if it does
  if (projectRoot[0] === '.') {
    const out = p
    projectRoot.split('/').forEach((segment, i) => {
      if (segment === '..') {
        out.pop()
      }
    })
    projectRoot = out.join('/')
  }
  return projectRoot
}
