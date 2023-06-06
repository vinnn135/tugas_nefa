import React from 'react'

import tradingTools from '../../images/illustrations/tradingtools.png'
import SecondaryButton from '../buttons/SecondaryButton'

export default function TradingToolsSection() {
    return (
     <div className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container mx-auto">
            <div className="grid grid-cols-2">
            <div className='max-w-lg'>
            <h2 className="font-bold text-3xl mb-6 loading-normal" >
                Advanced Trading <span class="text-blue-gradient">Tools</span>
            </h2>
            <div className="mb-6">
            <h3 className='font-bold text-xl mb-4'> Professional Acces, Non-stop Availability</h3>
            <p className='text-gray'>We provide premium acces to crypto trading for both individuals and institusions through high liquidity, reliable order execution and constant uptime </p>
            </div>
            <div className="mb-6">
            <h3 className='font-bold text-xl mb-4'> A range of Powerful Apis</h3>
            <p className='text-gray'>Set up your own trading or deploy your algorithmic strategy with our high-performanse FIX and HTTP APis. Connect to our WebSocket for real-time data streaming </p>
            </div>
            <div className="mb-6">
            <h3 className='font-bold text-xl mb-4'> Customer Support</h3>
            <p className='text-gray'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners </p>
            </div>
            <SecondaryButton>
                Get Started
            </SecondaryButton>
            <a href=''>
            <button className='py-4 px-10 text-primary underline'>
                Learn More
            </button>
            </a>
            </div>
                <img src={tradingTools} alt="" />
            </div>
       </div>
      </div>
     </div>
    )
}