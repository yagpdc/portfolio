import Diagonal from "./shapes/Diagonal";
import TextLarge from "./texts/TextLarge";

function TitleSection({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-2">
      <Diagonal />
      <TextLarge content={text} />
    </span>
  );
}

export default TitleSection;
