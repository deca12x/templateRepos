"use client";

import { useRouter } from "next/navigation";
import { clans } from "@/lib/data";
import type { Clan } from "@/lib/types";
import { use } from "react";

interface ClanPageProps {
  params: Promise<{
    clanId: string;
  }>;
}

export default function ClanPage({ params }: ClanPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const clan = clans.find((c) => c.id === resolvedParams.clanId);
  return <h1>Clan: {clan?.name}</h1>;
}
