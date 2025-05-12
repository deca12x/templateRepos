"use client";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Clans() {
  const address = useAddress();
  const router = useRouter();

  useEffect(() => {
    if (!address) {
      router.push("/");
    }
  }, [address, router]);

  if (!address) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Clans</h1>
          <ConnectWallet
            theme="dark"
            modalSize="wide"
            welcomeScreen={{
              title: "Welcome to our app",
              subtitle: "Connect your wallet to get started",
            }}
            modalTitleIconUrl=""
            auth={{
              loginOptional: false,
            }}
            switchToActiveChain={true}
            modalTitle="Connect Wallet"
            termsOfServiceUrl=""
            privacyPolicyUrl=""
          />
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <p className="text-gray-300">Connected Address: {address}</p>
        </div>
      </div>
    </main>
  );
}
