"use client";

import { EpisodeListContainer } from "@/components/Episode/EpisodeListContainer";

export default function SeasonLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { season: string };
}) {
  return (
    <EpisodeListContainer season={params.season}>
      {children}
    </EpisodeListContainer>
  );
}
