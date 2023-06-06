import React from 'react';

import Layout from '../components/layout';
import CryptocurrencySection from '../components/Section/CryptocurrencySection';
import HeroSection from '../components/Section/HeroSection';
import BuyAndTradeSection from '../components/Section/BuyAndTradeSection';
import PartnerSection from '../components/Section/PartnerSection';
import CreditCardSection from '../components/Section/CreditCardSection';
import TradingToolsSection from '../components/Section/TradingToolsSection';
import SecuritySection from '../components/Section/SecuritySection';
import StepSection from '../components/Section/StepSection';
import FaqSection from '../components/Section/FaqSection';
import BackToTopSection from '../components/Section/BackToTopSection';
import Footer from '../components/Footer'

export default function Index() {
    return (
       <Layout>
       <HeroSection />
       <CryptocurrencySection />
       <BuyAndTradeSection />
       <PartnerSection />
       <CreditCardSection />
       <TradingToolsSection />
       <SecuritySection />
       <StepSection />
       <FaqSection />
       <BackToTopSection />
       <Footer />
       </Layout>
    );
}