import TitleSection from "../components/TitleSection";
import SkillsGroup from "./SkillsGroup";

function Skills() {
  return (
    <>
      <div className="px-48 grid  w-full ">
        <div className="w-full">
          <TitleSection text="Skills" />
          <SkillsGroup />
        </div>
      </div>
    </>
  );
}

export default Skills;
