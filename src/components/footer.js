import React from 'react'

import SocialMedia from './socialmedia.component'

const year = new Date().getFullYear()

const Footer = () => (
  <div className="bg-gray-200 py-3 text-dark">
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <SocialMedia />
      <p className="font-size-xs m-0">Copyright © {year} Sergio Cruz. All rights reserved.</p>
    </div>
  </div>
)

export default Footer
