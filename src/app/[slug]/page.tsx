"use client";

import { EpisodeDetail } from "../../components/EpisodeDetail/EpisodeDetail";

export default function EpisodeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <EpisodeDetail id={params.slug} />;
}
