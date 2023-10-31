"use client";

import styled from "styled-components";
import { SeasonList } from "@/components/SeasonList";
import { useGetEpisodesPerSeason } from "@/api/useGetEpisodesPerSeason";

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
