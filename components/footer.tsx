import React from "react";
import Link from "next/link";

interface LinkType {
  key?: string | null;
  href: string;
  label: string;
}

const links: LinkType[] = [
  { key: null, href: "/privacy", label: "Privacy Policy" },
  { key: null, href: "/terms", label: "Terms & Conditions" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Footer = () => (
  <nav>
    <ul>
      <li>Copyright &copy; {new Date().getFullYear()} Programmer Incorporated LLC. All Rights Reserved.</li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: center;
        margin-top: 0px;
      }
      nav > ul {
        margin-top: 0px;
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
        font-size: 13px;
      }
      a {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Footer;
