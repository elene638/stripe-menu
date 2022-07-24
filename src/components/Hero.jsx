import React from 'react'
import {useGlobalContext} from './context'
import phone from '../images/phone.svg'

function Hero() {

  const {closeSubmenu} = useGlobalContext()

  return (
    <section className='hero'>
      <div className='hero-container'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe`s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
          <button className='hero-btn'>Start now</button>
        </article>
        <article>
          <img className='phone' src={phone} alt='phone'/>
        </article>
      </div>
    </section>
  )
}

export default Hero