import * as React from 'react'

import Layout from '../components/layout'
import ShellForm from '../components/shell/form'

const Home = () => {
  return (
    <Layout>
      <div className="programmer-home">
        <div className="flex-center">
          <div className="programmer-logo">
            <ShellForm />
            <p>It's not a bug - it's an undocumented feature.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home