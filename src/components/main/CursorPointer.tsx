"use client";

import { useEffect, useState } from "react";

const CursorPointer: React.FC = () => {
  const innerRadius = 4;
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [innerCursor, setInnerCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let raf: number;
    const updateInnerCursor = () => {
      setInnerCursor((prev) => {
        const lerpX = prev.x + (cursor.x - prev.x) * 0.2;
        const lerpY = prev.y + (cursor.y - prev.y) * 0.2;

        return { x: lerpX, y: lerpY };
      });
      raf = requestAnimationFrame(updateInnerCursor);
    };

    updateInnerCursor();
    return () => cancelAnimationFrame(raf);
  }, [cursor, innerRadius]);

  return (
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-extra-dark-orange rounded-full pointer-events-none transition-transform duration-50 ease-out z-[110]"
        style={{
          transform: `translate(${innerCursor.x - innerRadius}px, ${innerCursor.y - innerRadius}px)`,
        }}
      />
  );
};

export default CursorPointer;