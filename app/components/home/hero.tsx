"use client";

import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Chicken from "./chicken";
import Section from "./section";

const Hero = () => {
  const router = useRouter();
  return (
    <Section className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="flex items-center justify-center relative z-10">
        <div className="text-center max-w-3xl px-4">
          
          <div className="max-w-md mx-auto opacity-70 hover:opacity-100 transition-all duration-500 grayscale contrast-200 invert dark:invert-0 drop-shadow-[0_0_15px_rgba(200,200,0,0.5)]">
            <Chicken />
          </div>
          
          <h1 className="mt-8 glitch-title text-5xl sm:text-7xl md:text-8xl font-black leading-[1.1] tracking-tighter">
            NEW BEE UNIVERSITY
            <span aria-hidden="true">NEW BEE UNIVERSITY</span>
            <span aria-hidden="true">NEW BEE UNIVERSITY</span>
          </h1>
          
          <h2 className="mt-8 mx-auto max-w-[60ch] text-2xl sm:text-3xl font-bold uppercase tracking-widest text-muted-foreground">
            In <span className="neon-text">New Bee</span> We Trust
          </h2>
          
          {/* 重点修复：这里的单引号已经全部换成了安全的 &apos; */}
          <p className="mt-6 mx-auto max-w-[65ch] text-lg sm:text-xl text-foreground/80 leading-relaxed">
            Tired of Ivy League rejection letters? They don&apos;t deserve you anyway. <br/>
            Welcome to Europe&apos;s top virtual academic sanctuary. Here, we don&apos;t check your GPA, we only verify your vibe.
          </p>
          
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-56 h-14 rounded-full text-lg font-bold border-2 border-primary shadow-[0_0_15px_var(--color-primary)] hover:shadow-[0_0_25px_var(--color-primary)] transition-all hover:scale-105"
                onClick={() => router.push("/diploma")}
              >
                Mint Diploma
                <ArrowUpLeft className="h-6 w-6 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-56 h-14 rounded-full text-lg font-bold border-2 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                onClick={() => router.push("/admission")}
              >
                Get Admission
                <ArrowUpRight className="h-6 w-6 ml-2" />
              </Button>
            </div>
            
            <div className="mt-4 font-mono text-xs sm:text-sm text-center text-muted-foreground bg-primary/10 px-6 py-3 rounded-md border border-primary/30 inline-block backdrop-blur-sm">
              <span className="animate-pulse mr-2">⚠️</span> 
              READ OUR{" "}
              <Link className="font-bold text-primary hover:underline neon-text uppercase" href="/pages/disclaimer">
                DISCLAIMER
              </Link>{" "}
              BEFORE PROCEEDING.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
