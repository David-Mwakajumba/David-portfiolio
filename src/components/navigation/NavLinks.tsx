import React from "react";
import { navigationLinks } from "../../data/navigationData";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import NavLink from "./NavLink";

export default function NavLinks() {
  const { activeSection, scrollToSection } = useScrollSpy();

  return (
    <div className="flex space-x-8">
      {navigationLinks.map((link) => (
        <NavLink
          key={link.id}
          id={link.id}
          label={link.label}
          isActive={activeSection === link.id}
          onClick={() => scrollToSection(link.id)}
        />
      ))}
    </div>
  );
}
