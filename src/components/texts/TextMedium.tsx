
function TextMedium({ content }: { content: string }) {
  return (
    <p
      className="
       text-lg text-white font-light leading-8 tracking-wide text-center
    "
    >
      {content}
    </p>
  );
}

export default TextMedium;
