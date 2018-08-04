const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) => layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <div class="list-group">
     ${pages.map(page => html`
     <a href="/wiki/${page.slug}" class="list-group-item">${page.title}</a>`
     )}
  </div>`);
