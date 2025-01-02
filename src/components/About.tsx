"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  FileCode,
  Github,
  Linkedin,
  LinkIcon,
  Mail,
  SendHorizontal,
} from "lucide-react";

import { RiNextjsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { TbBrandTypescript, TbBrandMongodb } from "react-icons/tb";
import { FaGithub, FaGitAlt, FaNode, FaReact } from "react-icons/fa";

import Link from "next/link";
import { Button } from "./ui/button";
import { useContact } from "@/app/context/ContactContext";

function About() {
  const { setOpen } = useContact();
  return (
    <div className="mt-16">
      <h2 className="mb-4 text-2xl">About me</h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
        <div className="grid gap-4">
          <Card className="border-yellow-600/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-yellow-600">
                <LinkIcon />
                Connect with me
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="flex items-center gap-4 text-sm">
                <Mail size={16} />
                <Link href="mailto:yishaijrose@gmail.com">
                  yishaijrose@gmail.com
                </Link>
              </p>
              <p className="flex items-center gap-4 text-sm">
                <Github size={16} />
                <Link href="https://github.com/yishairose">yishairose</Link>
              </p>
              <p className="flex items-center gap-4 text-sm">
                <Linkedin size={16} />
                <Link href="https://www.linkedin.com/in/joshuarose10/">
                  Yishai Rose
                </Link>
              </p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-yellow-600/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-4">
                  Open to work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-yellow-600/50">
              <CardHeader>
                <Button
                  variant="outline"
                  onClick={() => setOpen((prev) => !prev)}
                  className="border-none text-yellow-600 shadow-none"
                >
                  <SendHorizontal size={16} />
                  Message me
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-black">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-white">
                  <IoCalendarOutline />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">2 Years</CardContent>
            </Card>
            <Card className="border-yellow-600/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-yellow-600">
                  <LuMapPin />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">London, UK</p>
              </CardContent>
            </Card>
          </div>
          <Card className="border-yellow-600/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-4 text-yellow-600">
                <FileCode />
                Techstack
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-y-4">
              <FaReact size={38} />
              <RiNextjsLine size={38} />
              <TbBrandTypescript size={38} />
              <FaNode size={38} />
              <FaGitAlt size={38} />
              <FaGithub size={38} />
              <TbBrandMongodb size={38} />
              <BiLogoPostgresql size={38} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
