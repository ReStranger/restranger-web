import React from "react";

interface FooterProps {
  theme: "light" | "dark";
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div></div>
    </footer>
  );
};
