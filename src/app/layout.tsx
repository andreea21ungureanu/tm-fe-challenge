"use client";

import { SeasonList } from "@/components/SeasonList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Seasons List:</h1>
          <SeasonList />
          {children}
        </div>
      </body>
    </html>
  );
}
