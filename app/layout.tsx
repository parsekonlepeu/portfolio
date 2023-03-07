import * as React from "react";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Nicolas Angeon",
  description: "Welcome to Next.js",
};
