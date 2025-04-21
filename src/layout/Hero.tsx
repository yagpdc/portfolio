import TextLarge from "../components/texts/TextLarge";
import HeroNavigation from "../components/HeroNavigation";
import HeroIntro from "../components/HeroIntro";
import TextSmall from "../components/texts/TextSmall";
import TextTitle from "../components/texts/TextTitle";
import TextContainer from "./TextContainer";
import { HeroProps } from "../types";
import Line from "../components/shapes/Line";
import TextMedium from "../components/texts/TextMedium";
import CodeSnippet from "../components/CodeSnippet";
import { EN_CODE, PT_CODE } from "../utils";
import HyperLink from "../components/texts/HyperLink";
import curriculum from "../assets/curriculum-vitae.pdf";
import React from "react";

function Hero({ groups }: HeroProps) {
  const [code, setCode] = React.useState<string>(PT_CODE);

  return (
    <div className="px-48 grid place-content-center h-screen w-full grid-cols-2 ">
      {groups.map((group, index) => {
        if (group.type === "intro") {
          return (
            <HeroIntro key={index}>
              <Line width="20%" height="4px" color="#f8f8f2" />
              <span className="mt-6">
                <TextTitle content={group.title} />
                <TextMedium content={group.subtitle} />
              </span>
              <span className="mt-10 flex gap-5 w-1/2">
                {/* <HyperLink  content={"Download CV"} /> */}
                <a
                  href={curriculum}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={true}
                  className="text-white cursor-pointer  border-b-4 px-1 py-2  text-sm font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out"
                >
                  Download CV
                </a>
              </span>
            </HeroIntro>
          );
        }
        return null;
      })}

      <HeroNavigation>
        <CodeSnippet code={code} setCode={setCode} />

        {/* <TextContainer width="half">
          {groups
            .filter((group) => group.type === "navigation")
            .map((group, index) => (
              <div key={index} className="flex flex-col gap-5 ">
                <TextLarge content={group.title} />
                <TextSmall content={group.subtitle} />
                <span className="w-1/2">{group.link}</span>
              </div>
            ))}
        </TextContainer> */}
      </HeroNavigation>
    </div>
  );
}

export default Hero;
