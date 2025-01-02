import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import RecentProjects from "@/components/RecentProjects";

export default function page() {
  return (
    <>
      <Intro />
      <RecentProjects />
      <About />
      <Experience />
    </>
  );
}
