// Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";
//import styles from "./Nav.module.css";

import * as data from "./links.json";
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className="links-container">
      {links.map((link: Link) => {
        return (
          <div key={link.href} className="link">
            <Link to={link.href}>{link.label}</Link>
          </div>
        );
      })}
    </div>
  );
};

const Navbar: React.FC<Record<string, never>> = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <span>Logo</span>
      </div>
      <Links links={links} />
    </nav>
  );
};

export default Navbar;
