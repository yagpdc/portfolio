function HyperLink({ link, content }: { content: string; link?: string }) {
  return (
    <a
      className="text-white cursor-pointer  border-b-4 px-1 py-2  text-sm font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}

export default HyperLink;
