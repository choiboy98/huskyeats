import * as React from 'react'
import '../styles/styles.scss'
import Header from '../components/header'
import HeroBanner from '../components/hero-banner';
import SocialBanner from '../components/social-banner'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <SocialBanner />
    </div>
  )
}
// Step 3: Export your component
export default IndexPage