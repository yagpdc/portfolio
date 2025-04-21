function TextTitle({ content }: { content: string }) {
  return (
    <p
      className="text-6xl mb-6  text-white   font-light   
  leading-snug tracking-normal "
    >
      {content}
    </p>
  );
}

export default TextTitle;
