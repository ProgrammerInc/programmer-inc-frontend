// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import * as React from 'react'
import { Helmet } from 'react-helmet'

/* Local */
import Head from '../components/head'
import Nav from '../components/nav'
import ShellForm from '../components/shell/form'

// ----------------------------------------------------------------------------

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className="programmer-home">
      <Helmet>
        <title>&lt;programmer&gt;._</title>
        <meta name="description" content="nothing to see here, move along." />
      </Helmet>
      <div className="programmer-logo">
        <ShellForm />
        <p>It's not a bug - it's an undocumented feature.</p>
      </div>
    </div>
  </div>
)

export default Home