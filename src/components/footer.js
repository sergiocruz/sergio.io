import React from 'react'

import SocialMedia from './socialmedia.component'

const year = new Date().getFullYear()

const Footer = () => (
  <div className="bg-pink py-3 text-white">
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <SocialMedia />
      <p className="font-size-sm m-0">Copyright © {year} Sergio Cruz. All rights reserved.</p>
    </div>
  </div>
)

export default Footer
