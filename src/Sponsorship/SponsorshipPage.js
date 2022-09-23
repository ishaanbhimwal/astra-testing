import React, { Component } from 'react';
import TeamPageHeader from '../Team/TeamPageHeader';
import Tier from './Tier';
import Footer from '../Footer.js';

const sponsorshipText = {
  normalText: "Sponsor",
  emphasisText: "Us",
};



function SponsorshipPage() {
  return (
    <div>
      <Tier/>
      <Footer/>
    </div>
  );
}

export default SponsorshipPage;