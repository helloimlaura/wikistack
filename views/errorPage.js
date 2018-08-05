const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (message) => layout(html`
  <h3>Error</h3>
  <h4>No page with this title:</h4>
  <hr/>
  <div class="page-body">${message}</div>
  <hr/>
  <a href="/wiki" class="btn btn-primary">Back</a>
`);
