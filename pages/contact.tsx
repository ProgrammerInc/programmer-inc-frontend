import * as React from 'react'

import Layout from '../components/layout'
import ShellForm from '../components/shell/form'

const Home = () => {
  return (
    <Layout>
      <div className="programmer-contact">
          <h1>Contact Us</h1><br/>
          <h2>Programmer Incorporated LLC</h2>
          <p><a href="https://goo.gl/maps/aD5DS2RhiGM9PnGV9">5700 Tennyson Parkway, Suite 300<br/>Plano, TX 75024</a></p>
          <p>Phone Number: <a href="tel:1-347-503-3967">+1 (347) 503-3967</a></p>
          <p>Toll-Free: <a href="tel:1-888-992-4267">+1 (888) 992-4267</a></p>
      </div>
    </Layout>
  )
}

export default Home