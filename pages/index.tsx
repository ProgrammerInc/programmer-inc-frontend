import * as React from 'react'

import Head from '../components/head'
import Nav from '../components/nav'
import ShellForm from '../components/shell/form'

import { getCategories } from '../lib/api'

const Home = ({ categories }) => {
  return (
    <div className="programmer-home">
      <Head title="&lt;programmer&gt;._" description="nothing to see here, move along." />
      <Nav categories={categories} />
      <div className="flex-center">
        <div className="programmer-logo">
          <ShellForm />
          <p>It's not a bug - it's an undocumented feature.</p>
        </div>
      </div>
    </div>
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