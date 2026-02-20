'use client'

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/app/components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="w-screen flex items-center justify-center h-screen">
      <Scene />
    </main>
  );
}
