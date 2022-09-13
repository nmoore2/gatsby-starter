import * as React from "react"
import type { HeadFC } from "gatsby"
import { Link } from "gatsby"
import Layout from '../components/layout'

const SupportedApplications = () => {
  return (
    <Layout>
      <div className="hero-section">
        <image src="../images/logos/keepkey_logo.png"/>
        <h1>The Next Frontier of Crypto Security</h1>
        <p>Protect your cryptocurrencies, store your private keys offline, and safeguard your 
          assets from hackers. It’s time to achieve financial freedom in the most secure way with KeepKey.</p>
        <Link to="/" className="btn btn-primary">Buy Now</Link>
      </div>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Supported Applications</title>

export default SupportedApplications