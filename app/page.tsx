"use client";

import Features from "./components/home/features";
import Hero from "./components/home/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Hero />
        <Features />
      </div>
    </div>
  );
}
