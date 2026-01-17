export default function Admin() {
  return null;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Content Manager</title>
      </head>
      <body>
        <script src="https://unpkg.com/decap-cms@latest/dist/decap-cms.js"></script>
      </body>
    </html>
  `);
  res.end();
  
  return { props: {} };
}