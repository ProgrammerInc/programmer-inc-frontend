import React from 'react'
import Link from 'next/link'

interface LinkType {
  className?: string
  key?: string | null
  href: string
  label: string
  title?: string
}

const links: LinkType[] = [
  { key: null, href: '#', label: 'Blog', className: 'disabled', title: 'Coming soon' },
  { key: null, href: 'https://github.com/ProgrammerInc', label: 'Github' },
  { key: null, href: 'https://twitter.com/ProgrammerInc', label: 'Twitter' },
  { key: null, href: '/contact', label: 'Contact' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <ul className="flex">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="https://programmer.sh">
          <a>Search</a>
        </Link>
      </li>
      </ul>
      <ul>
        {links.map(({ className, key, href, label, title }) => (
          <li key={key} className={className ? className : ''}>
            <Link href={href}>
              <a title={title ? title : label}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
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
        justify-content: space-between;
        margin-top: 0px;
      }
      nav > ul {
        margin-top: 0px;
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #fff;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
