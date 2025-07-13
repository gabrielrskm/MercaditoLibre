import { type PageProps } from "$fresh/server.ts";
import ThemeScript from "../islands/ThemeScript.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head lang="es">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ecommerce-supabase-deno</title>
        <ThemeScript/>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
