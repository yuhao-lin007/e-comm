import { NextResponse } from "next/server";

export async function GET() {
  const html = `<!DOCTYPE html>
<html>
<head>
    <meta name="google-site-verification" content="google6e864aa9c3657b30" />
</head>
<body>
    google-site-verification: google6e864aa9c3657b30.html
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
