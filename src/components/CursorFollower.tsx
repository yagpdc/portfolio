import React, { useEffect, useRef, useState } from "react";

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      className="pointer-events-none fixed w-16 h-16 bg-white/10 rounded-full blur-lg shadow-lg"
    ></div>
  );
}

function AnimatedBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    let position = 0;

    const animate = () => {
      if (boxRef.current) {
        position += 1;
        boxRef.current.style.transform = `translateX(${position}px)`;
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return <div ref={boxRef} className="w-16 h-16 bg-blue-500"></div>;
}

export { CursorFollower, AnimatedBox };
