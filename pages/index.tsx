import * as React from 'react'

import Layout from '../components/layout'
import ShellForm from '../components/shell/form'

import { getCategories } from '../lib/api'

const Home = ({ categories }) => {
  return (
    <Layout categories={categories}>
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

export async function getStaticProps() {
  const categories = (await getCategories()) || []

  return {
    props: { categories },
    revalidate: 1,
  }
}

export default Home