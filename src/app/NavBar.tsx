// src/components/FlipNav.tsx
import { TransitionLink } from "../app/utils/TransitionLink";
import Image from "next/image";
import whiteLogoAlt from "./assets/whiteLogoAlt.png"; 

export const FlipNav = () => {
  return (
    <nav className="sticky-nav relative flex items-center justify-center p-4">
      <NavLogo />
      <NavCenter />
    </nav>
  );
};

// NavLogo component
const NavLogo = () => {
  return (
    <div className="absolute left-4 flex items-center">
      <TransitionLink href="#"><Image alt="BW" src={whiteLogoAlt} width={40} height={40} /></TransitionLink>
    </div>
  );
};

// NavCenter component
const NavCenter = () => {
  return (
    <div className="flex items-center justify-center gap-12 text-[#FFFFFF] text-shadow">
      <TransitionLink href="#about">ABOUT</TransitionLink>
      <TransitionLink href="#skills">SKILLS</TransitionLink>
      <TransitionLink href="#projects">PROJECTS</TransitionLink>
      <TransitionLink href="#contact">CONTACT</TransitionLink>
    </div>
  );
};
