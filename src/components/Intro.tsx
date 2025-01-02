import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="mt-44 flex items-center justify-between gap-12">
      <div className="flex flex-col gap-16">
        <h1 className={`border-l-8 border-yellow-600 pl-8 text-3xl`}>
          Hi, I&#39;m{" "}
          <span className={`title text-4xl text-yellow-600`}>Joshua Rose </span>
        </h1>
        <p className="text-lg tracking-wider text-slate-800 dark:text-gray-50">
          I am a full stack web developer based in London, UK. Here are I share
          my latest exciting projects and what I&#39;ve learnt along the way.
        </p>
      </div>
      <div className="relative">
        <Image
          className="flex-1 rounded-lg grayscale"
          src="/profile.png"
          alt="Joshua Rose"
          height={350}
          width={350}
        />
      </div>
    </section>
  );
}
