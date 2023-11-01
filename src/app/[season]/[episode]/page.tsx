"use client";

import { EpisodeDetail } from "../../../components/Episode/EpisodeDetail/EpisodeDetail";

export default function EpisodeDetailPage({
  params,
}: {
  params: { episode: string };
}) {
  return <EpisodeDetail episodeId={params.episode} />;
}
