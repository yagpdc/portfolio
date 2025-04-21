import React from "react";
import TextMedium from "../components/texts/TextMedium";
import Diagonal from "../components/shapes/Diagonal";
import TextContainer from "./TextContainer";
import TextTitle from "../components/texts/TextTitle";
import TextSmall from "../components/texts/TextSmall";
import HyperLink from "../components/texts/HyperLink";
import Line from "../components/shapes/Line";
import TextLarge from "../components/texts/TextLarge";
import TitleSection from "../components/TitleSection";

function About() {
  return (
    <>
      <div className="px-48 w-full flex flex-col">
        <div>
          <TitleSection text="About me" />
          <div className="grid grid-cols-2 gap-10 mt-10">
            <span className="w-1/2 ">
              <TextTitle content="My story" />
            </span>
            <span className="w-1/2 justify-self-end">
              <TextTitle content="My Career" />
            </span>
          </div>
          <div className="flex justify-between ">
            <div className=" w-1/2 ">
              <span className="mt-10 flex w-1/2  gap-5">
                <TextSmall content="I started web development as a hobby, but quickly fell in love with the field — so much that I chose to pursue it professionally and enrolled in software engineering." />
              </span>
            </div>
            <div className=" w-1/2 justify-items-end">
              <span className="mt-10 flex  gap-5 w-1/2">
                <TextSmall content="I specialize in creating web applications using React, Next.js, and TypeScript. I also have experience with Node.js and Express or Nest for backend development." />
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <span>
            <HyperLink link="https://example.com" content="More about me" />
          </span>
          <span className="  justify-self-end">
            <HyperLink link="https://example.com" content="See my work" />
          </span>
        </div>
      </div>
      <div className="mt-24 px-48"></div>
    </>
  );
}

export default About;
