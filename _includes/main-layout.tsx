export default function MainLayout(data: Lume.Data): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>{data.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="stylesheet" href="/styles/profile-card.css" />
      </head>
      <body>
        <main>
          {data.children}
        </main>
      </body>
    </html>
  );
}
