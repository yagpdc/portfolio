
function TextSmall({ content }: { content: string }) {
  return (
    <p
      className="
       text-sm text-white font-light leading-8 tracking-wide  text-justify
    "
    >
      {content}
    </p>
  );
}

export default TextSmall;
