import React from 'react'

import { Footer , Blog , Possibility , Header , WhatIAS8 , Features } from './containers'
import { CTA , Brand , Navbar, Brand } from './components'
import './App.css'
 
const app = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
       <Brand />
       <WhatIAS8 />
       <Features />
       <Possibility />
       <CTA />
       <Blog />
       <Footer />
    </div>
  )
}

export default app