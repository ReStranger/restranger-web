import React from "react";

interface FooterProps {
  theme: "light" | "dark";
}

const Footer = ({ theme }: FooterProps) => {
  return (
    <footer className={`footer ${theme}`}>
      <div></div>
    </footer>
  );
};
