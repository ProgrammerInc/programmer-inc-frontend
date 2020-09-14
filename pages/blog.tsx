import * as React from 'react'

import Head from '../components/head'
import Nav from '../components/nav'
import Articles from '../components/articles';

import { getArticles, getCategories } from '../lib/api'

const Blog = ({ articles, categories }) => {
  return (
    <div>
      <Head title="Blog" />
      <Nav categories={categories} />
      <div className="programmer-blog">
        <h1>Blog</h1>
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