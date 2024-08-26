export function convertHtmlToMjml(htmlContent) {
  const htmlToMjmlMap = {
    '<html>': '<mjml>',
    '</html>': '</mjml>',
    '<head>': '<mj-head>',
    '</head>': '</mj-head>',
    '<body>': '<mj-body>',
    '</body>': '</mj-body>',
    '<div>': '<mj-section><mj-column>',
    '</div>': '</mj-column></mj-section>',
    '<table>': '<mj-table>',
    '</table>': '</mj-table>',
    '<tr>': '<mj-text>',
    '</tr>': '</mj-text>',
    '<td>': '',
    '</td>': '',
    '<p>': '<mj-text',
    '</p>': '</mj-text>',
    '<h1>': '<mj-text font-size="24px" font-weight="bold">',
    '</h1>': '</mj-text>',
    '<h2>': '<mj-text font-size="20px" font-weight="bold">',
    '</h2>': '</mj-text>',
    '<h3>': '<mj-text font-size="18px" font-weight="bold">',
    '</h3>': '</mj-text>',
    '<h4>': '<mj-text font-size="16px" font-weight="bold">',
    '</h4>': '</mj-text>',
    '<h5>': '<mj-text font-size="14px" font-weight="bold">',
    '</h5>': '</mj-text>',
    '<h6>': '<mj-text font-size="12px" font-weight="bold">',
    '</h6>': '</mj-text>',
    '<img([^>]*)>': '<mj-image$1 />',
    '<a([^>]*)>': '<mj-button$1>',
    '</a>': '</mj-button>',
    '<hr>': '<mj-divider />',
    '<ul>': '<mj-list>',
    '</ul>': '</mj-list>',
    '<ol>': '<mj-list>',
    '</ol>': '</mj-list>',
    '<li>': '<mj-list-item>',
    '</li>': '</mj-list-item>',
    '<form([^>]*)>': '<!-- Form start -->',
    '</form>': '<!-- Form end -->',
    '<input([^>]*)>': '<mj-text>[Input field]</mj-text>',
    '<button([^>]*)>': '<mj-button$1>',
    '</button>': '</mj-button>',
  };

  let mjmlTemplate = htmlContent;

  for (const [htmlTag, mjmlTag] of Object.entries(htmlToMjmlMap)) {
    const regex = new RegExp(htmlTag, 'g');
    mjmlTemplate = mjmlTemplate.replace(regex, mjmlTag);
  }

  const mjmlContent = `
    <mjml>
        <mj-head></mj-head>
        <mj-body>${mjmlTemplate}</mj-body>
    </mjml>
  `;

  const blob = new Blob([mjmlContent], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'converted.mjml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
