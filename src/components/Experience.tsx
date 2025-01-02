import React from "react";
import { Timeline, TimelineItem } from "./TimeLine";
const experience = [
  {
    date: "June 2023",
    title: "Mission Started",
    description:
      "Began my web development journey by diving into online courses and self-paced learning. Built a strong foundation in coding and design while exploring tools, frameworks, and best practices to create engaging web experiences.",
    isLeft: true,
  },
  {
    date: "Jan 2024",
    title: "Personal Projects",
    description:
      "Progressed to building modern, advanced web projects, applying cutting-edge technologies and best practices. Focused on creating responsive, high-performance applications while continuing to refine my skills and deliver impactful solutions.",
    isLeft: false,
  },
  {
    date: "Aug 2024",
    title: "First Freelance Client",
    description:
      "Landed my first real client, transforming ideas into a fully functional and polished project. Gained valuable experience in collaboration, meeting client expectations, and delivering a professional solution from start to finish.",
    isLeft: true,
  },
  {
    date: "Dec 2024",
    title: "Full Stack Developer",
    description:
      "Joined Blink as a web developer, taking a major step in my career. Focused on contributing to impactful projects, collaborating with a talented team, and continuing to grow as a developer in a professional setting.",
    isLeft: false,
  },
];

function Experience() {
  return (
    <div className="container mx-auto mt-16 max-w-5xl p-4 py-12">
      <h1 className="text-2xl">Experience</h1>
      <Timeline>
        {experience.map(({ date, title, description, isLeft }, index) => (
          <TimelineItem
            date={date}
            title={title}
            description={description}
            isLeft={isLeft}
            key={index}
          />
        ))}
      </Timeline>
    </div>
  );
}

export default Experience;
