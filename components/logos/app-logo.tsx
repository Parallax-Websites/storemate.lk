"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface AppLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function AppLogo({
  className,
  width = 250,
  height = 60,
}: AppLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const src = mounted && resolvedTheme === "dark" ? "/download.svg" : "/trace.svg";

  return (
    <Image
      src={src}
      alt="StoreMate logo"
      width={width}
      height={height}
      className={cn("h-14 w-auto object-contain", className)}
      priority
    />
  );
}
