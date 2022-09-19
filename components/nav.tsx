import React from 'react'
import Link from 'next/link'

interface LinkType {
  key?: string | null
  href: string
  label: string
}

const links: LinkType[] = [
  { key: null, href: 'https://programmer.sh', label: 'Search' },
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
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
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
