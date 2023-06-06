import React from 'react';

import ListCoin from '../ListCoin';

const trendingCoins = [{
    image: '/cryptocurrrencies/bitcoin.png',
    name: 'Bitcoin',
    price: '$43,180.13',
    uptrend: true
}, {
    image: '/cryptocurrrencies/etherium.png',
    name: 'Bitcoin',
    price: '$3,480.65',
    uptrend: false
}, {
    image: '/cryptocurrrencies/solana.png',
    name: 'Bitcoin',
    price: '$150,20',
    uptrend: true
}, {
    image: '/cryptocurrrencies/doge.png',
    name: 'Bitcoin',
    price: '$0,1572',
    uptrend: true
}]
const gainerCoins = [{
    image: '/cryptocurrrencies/pappay.png',
    name: 'PAPPAY',
    price: '$0,00374',
    uptrend: true
}, {
    image: '/cryptocurrrencies/bitcoinasia.png',
    name: 'Bitcoin Asia',
    price: '$0,02096',
    uptrend: true
}, {
    image: '/cryptocurrrencies/moonrock.png',
    name: 'Moon Rock',
    price: '$0,004907',
    uptrend: true
}, {
    image: '/cryptocurrrencies/ninjafloki.png',
    name: 'Ninja Floki',
    price: '$0,000123',
    uptrend: true
}]
const recentlyCoins = [{

    image: '/cryptocurrencies/metacraft.png',
    name: 'Metacraft',
    price: '$0,0608',
    uptrend: false
}, {
    image: '/cryptocurrrencies/frog.png',
    name: 'Frog',
    price: '$0,5875',
    uptrend: false
}, {
    image: '/cryptocurrrencies/muskdoge.png',
    name: 'Musk Doge',
    price: '$0,04041',
    uptrend: true
}, {
    image: '/cryptocurrrencies/2share.png',
    name: '2 Share',
    price: '$1,366.24',
    uptrend: true
}]

export default function CryptocurrencySection() {
    return (
        <section className="mt-10">
            <div className="container mx-auto rounded 3xl bg-white py-8 px-4 shadow-lg">
                <div className="grid grid-cols-3">
                    <div className="px-4">
                     <ListCoin title='🔥 Trending' data={trendingCoins} />
                    </div>
                    <div className="px4">
                        <ListCoin title="🚀  Top Gainers" data={gainerCoins} />
                    </div>
                    <div className="px4">
                        <ListCoin title="💎  Recently Added" data={recentlyCoins} />
                    </div>
                </div>
            </div>
        </section>
    );
}