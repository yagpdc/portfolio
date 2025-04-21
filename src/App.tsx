import Hero from "./layout/Hero";
import Navbar from "./layout/Navbar";
import Section from "./layout/Section";
import { heroGroups, navItems } from "./utils";
import { CursorFollower } from "./components/CursorFollower";
import About from "./layout/About";
import Skills from "./layout/Skills";

export default function App() {
  return (
    <>
      <CursorFollower />
      <Section>
        <Navbar items={navItems} />
        <Hero groups={heroGroups} />
      </Section>
      <Section height="h-[70vh]">
        <About />
      </Section>
      <Section height="h-[70vh]">
        <Skills />
      </Section>
    </>
  );
}
