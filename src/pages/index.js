import * as React from 'react'
import '../styles/styles.scss'
import Header from '../components/header'
import HeroBanner from '../components/hero-banner';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
    </div>
  )
}
// Step 3: Export your component
export default IndexPage