"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface TimelineProps {
  children: React.ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start end", "end start"],
  });
  const progressBarWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  return (
    <div className="relative" ref={ref}>
      <motion.div
        className="w-1 bg-gradient-to-b from-yellow-600/20 via-yellow-600 to-yellow-600/20"
        style={{
          height: progressBarWidth,
          position: "absolute",
          top: 0,
          left: "50%",
        }}
      />
      <div className="space-y-16 py-8">{children}</div>
    </div>
  );
}

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  isLeft?: boolean;
}

export function TimelineItem({
  date,
  title,
  description,
  isLeft = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative flex items-center",
        isLeft ? "justify-start" : "justify-end",
      )}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className={cn(
          "w-5/12 rounded-lg border border-yellow-600/50 bg-card p-6 shadow-lg shadow-yellow-600/20",
          isLeft ? "pr-8" : "pl-8",
        )}
      >
        <div className="mb-2 text-sm font-semibold text-primary">{date}</div>
        <h3 className="mb-3 text-xl font-bold text-yellow-600">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </motion.div>
  );
}
