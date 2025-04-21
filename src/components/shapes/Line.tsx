function Line({
  width = "100%",
  height = "2px",
  color = "#f8f8f2",
}: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
    ></div>
  );
}

export default Line;
