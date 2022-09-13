import * as React from "react"
import type { HeadFC } from "gatsby"
import { Link } from "gatsby"
import Layout from '../components/layout'

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 hero hero__section">
        <image src="../images/logos/keepkey_logo.png"/>
        <h1 class="text-3xl font-bold ">The Next Frontier of Crypto Security</h1>
        <p>Protect your cryptocurrencies, store your private keys offline, and safeguard your 
          assets from hackers. It’s time to achieve financial freedom in the most secure way with KeepKey.</p>
        <Link to="/" className="btn btn-primary">Buy Now</Link>
      </div>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Best Home Page</title>

export default HomePage


