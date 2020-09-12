// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

import * as React from 'react'
import { Helmet } from 'react-helmet'

/* Local */
import ShellForm from '../components/shell/form'

// ----------------------------------------------------------------------------

class Index extends React.PureComponent {
  public render() {
    return (
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
    )
  }
}

export default Index
