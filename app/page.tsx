'use client'

import dynamic from "next/dynamic";
import Scene from "./components/Scene";


export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Scene />
    </main>
  );
}
