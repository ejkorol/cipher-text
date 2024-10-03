import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleMouse = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        x: position.x - 20,
        y: position.y - 20,
        rotate: isPressed ? 45 : 0,
        opacity: 1,
      }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      style={{ position: "fixed", pointerEvents: "none" }}
      className="z-[1000]"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          stroke="#fafafa"
          strokeWidth="2"
        />
        <line
          x1="50"
          y1="10"
          x2="50"
          y2="90"
          stroke="#fafafa"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
};

export default Cursor;
