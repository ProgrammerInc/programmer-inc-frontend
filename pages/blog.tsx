import * as React from 'react'

import Layout from '../components/layout'
import Articles from '../components/articles';
import ShellForm from '../components/shell/form'

import { getArticles, getCategories } from '../lib/api'

const Blog = ({ articles, categories }) => {
  return (
    <div>
      <Layout title="&lt;programmer&gt;.blog" categories={categories}>
        <div className="programmer-blog">
          <ShellForm content="blog" size="small" />
          <Articles articles={articles} />
        </div>
      </Layout>
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