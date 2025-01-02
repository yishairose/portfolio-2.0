import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";

import path from "path";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

function page() {
  const rootDirectory = path.join(process.cwd(), "src", "app", "cv");
  const filePath = path.join(rootDirectory, "cv.mdx");
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  return (
    <div className="dark:prose-dark prose flex max-w-none flex-col dark:prose-invert">
      <Link
        href="/"
        className="mb-10 flex gap-4 self-start no-underline hover:underline hover:underline-offset-8"
      >
        <ArrowLeft />
        Back
      </Link>
      <MDXRemote source={fileContent} />
      <a
        href="/cv.pdf"
        download
        className="fixed bottom-20 right-16 flex no-underline"
      >
        <Button
          variant="secondary"
          className="rounded-full bg-yellow-600/70 px-4 py-6 transition-colors duration-200 hover:bg-yellow-600/50"
        >
          <Download />
          Download CV
        </Button>
      </a>
    </div>
  );
}

export default page;
