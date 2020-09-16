import * as React from 'react'

import Head from '../components/head'
import Nav from '../components/nav'
import Articles from '../components/articles';
import ShellForm from '../components/shell/form'

import { getArticles, getCategories } from '../lib/api'

const Blog = ({ articles, categories }) => {
  return (
    <div>
      <Head title="&lt;programmer&gt;.blog" description="nothing to see here, move along." />
      <Nav categories={categories} />
      <div className="programmer-blog">
        <ShellForm content="blog" size="small" />
        <Articles articles={articles} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const articles = (await getArticles()) || []
  const categories = (await getCategories()) || []

  return {
    props: { articles, categories },
    revalidate: 1,
  }
}

export default Blog