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
          <div className="container mx-auto px-4 relative grid grid-cols-2 items-center">
            <div className="hero__text">
              <h1 className="hero__title font-bold text-white">The Next Frontier of Crypto Security</h1>
              <p className="hero__description text-white">Protect your cryptocurrencies, store your private keys offline, and safeguard your 
                assets from hackers. It’s time to achieve financial freedom in the most secure way with KeepKey.</p>
              {/* <Link to="/" className="btn btn-primary">Buy Now</Link> */}
              <a href="/" className="btn btn-primary">Buy Now</a>
            </div>
            <StaticImage
              alt="KeepKey Wallet"
              src="../images/hardware/wallet-hero.png"
              width={800}
              height={1200}
              quality={100}
              className="hero__image"
              >
            </StaticImage>

          </div>
        </div>
    </Layout>
  )
}

// export const Head: HeadFC = () => <title>Home</title>

export default HomePage


