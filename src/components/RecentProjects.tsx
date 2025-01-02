import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Business Landing Page",
    description:
      "A modern business landing page built with NextJs and Tailwind.",
    imageUrl: "/images/sell-my-property-manchester.png",
    projectUrl: "https://www.sellmypropertymanchester.co.uk/",
  },
  {
    id: "2",
    title: "NotePal",
    description:
      "Modern fullstack CRUD Note taking app built with TypeScript, React, and Supabase.",
    imageUrl: "/images/notepal-img.png",
    projectUrl: "https://mynotepal.netlify.app/",
    githubUrl: "https://github.com/yishairose/notepal",
  },
  {
    id: "3",
    title: "Maaser Track",
    description:
      "A Charity tracking app built with nextJS postgresSQL and Clerk.",
    imageUrl: "/images/maaser-track.png",
    projectUrl: "",
    githubUrl: "",
  },
];

export default function RecentProjects() {
  return (
    <section className="mt-16 py-16">
      <div>
        <h2 className="mb-12 text-2xl">My Latest Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between overflow-hidden rounded-lg shadow-lg shadow-yellow-600/20 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="fill"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <h3 className="font-italic mb-2 text-xl text-yellow-600">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm">{project.description}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={project.projectUrl}
                    className="hover:text-blue-6 flex items-center text-xs text-blue-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    View Project
                  </Link>
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="flex items-center text-xs text-gray-500 transition-colors duration-300 hover:text-gray-600 dark:text-gray-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={12} className="mr-1" />
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
