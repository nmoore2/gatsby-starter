import * as React from "react"
import type { HeadFC } from "gatsby"
import { Link } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

import '../styles/pages/home.scss'
import background from "../images/heros/home.png"



const HomePage = () => {
  return (
    <Layout>
        <div className="hero hero__home flex items-center" style={{backgroundImage: `url(${background})`}}>
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white">The Next Frontier of Crypto Security</h1>
            <p className="text-white">Protect your cryptocurrencies, store your private keys offline, and safeguard your 
              assets from hackers. It’s time to achieve financial freedom in the most secure way with KeepKey.</p>
            <Link to="/" className="btn btn-primary">Buy Now</Link>
          </div>
        </div>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Best Home Page</title>

export default HomePage


