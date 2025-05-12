"use client";

import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { clans } from "@/lib/data";

export default function ClanPage({ params }: { params: { id: string } }) {
  const address = useAddress();
  const router = useRouter();
  const clan = clans.find((c) => c.id === params.id);

  useEffect(() => {
    if (!address) {
      router.push("/login");
    }
  }, [address, router]);

  if (!address) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!clan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold">Clan not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="text-2xl font-bold">Welcome to {clan.name}</div>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Back to Home
      </a>
    </div>
  );
}
