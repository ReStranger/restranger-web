import React, { useState, useEffect } from "react";
import "../styles/utils/typingeffect.scss";

interface TypingEffectProps {
  base: string;
  phases_massive: string[];
  theme: "light" | "dark";
}

const TypingEffect = ({
  base = "",
  phases_massive = [],
  theme,
}: TypingEffectProps) => {
  const baseText = base;
  const phrases: string[] = phases_massive;
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = 100;
  const deletingSpeed = 100;
  const pauseTime = 1000;

  useEffect(() => {
    const handleType = () => {
      const fullText = baseText + phrases[phraseIndex];

      if (isDeleting) {
        if (charIndex > baseText.length) {
          setCurrentPhrase(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      } else {
        if (charIndex < fullText.length) {
          setCurrentPhrase(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(
      handleType,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, baseText, phrases]);

  useEffect(() => {
    if (
      !isDeleting &&
      charIndex === baseText.length + phrases[phraseIndex].length
    ) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(pauseTimer);
    }
  }, [charIndex, isDeleting, phraseIndex, baseText, phrases]);

  return (
    <div className={`typing-effect ${theme}`}>
      {currentPhrase}
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;
