
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/dylanking6132/xylvnking/jewelry-brand-landing-page/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/dylanking6132/xylvnking/jewelry-brand-landing-page/src/pages/index.js"))
}

