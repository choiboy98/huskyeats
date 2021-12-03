import * as React from 'react';
import '../styles/styles.scss';
import Header from '../components/header';
import HeroBanner from '../components/hero-banner';
import SocialBanner from '../components/social-banner';
import JournalBanner from '../components/journal-banner';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <SocialBanner />
      <JournalBanner />
    </div>
  )
}
// Step 3: Export your component
export default IndexPage