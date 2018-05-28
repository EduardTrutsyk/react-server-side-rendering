import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './Root';

function renderHTML(html) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const htmlString = renderToString(<Root />);

    res.send(renderHTML(htmlString));
  };
}
