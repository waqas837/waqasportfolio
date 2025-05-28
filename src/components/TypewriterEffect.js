"use client";
import { useState, useEffect } from "react";

export default function TypewriterEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    "Ecommerce Website Development",
    "Business Website Development",
    "Portfolio Website Development",
    "Corporate Website Development",
    "Landing Page Development",
    "Blog Website Development",
    "Educational Website Development",
    "Healthcare Website Development",
    "Real Estate Website Development",
    "Restaurant Website Development",
    "Nonprofit Website Development",
    "Membership Website Development",
    "Booking Website Development",
    "Wedding Website Development",
    "Personal Brand Website Development",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(100);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 100 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div className="relative h-12">
      <h2 className="text-2xl lg:text-3xl text-indigo-400 font-medium inline-flex items-center font-mono tracking-wide">
        <span className="border-b-2 border-indigo-500">{text}</span>
        <span className="w-1 h-8 bg-indigo-500 ml-1 animate-pulse"></span>
      </h2>
    </div>
  );
}
