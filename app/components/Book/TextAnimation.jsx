"use client"

import { useEffect, useRef } from "react";
import anime from "animejs";

const TextAnimation = ({ text, delay }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const mainContentText = textRef.current;

    // Utilisez anime.js pour animer l'opacité de 0 à 1 après le délai
    anime({
      targets: mainContentText,
      opacity: 1,
      duration: 2000,
      easing: "easeOutSine",
      delay: delay,
    });
  }, [delay]);

  return (
    <p ref={textRef} className="main_content_text" style={{ opacity: 0 }}>
      {text}
    </p>
  );
};

export default TextAnimation;