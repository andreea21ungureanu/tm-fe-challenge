"use client";

import { SeasonList } from "@/components/SeasonList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body aria-label="Main content container">
        <div aria-describedby="Game of Thrones Series Summary">
          <h1>Seasons List:</h1>
          <SeasonList />
          {children}
        </div>
      </body>
    </html>
  );
}
