import React, { Component } from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import SpeakerImage from '../speaker-image'

class Introduction extends Component {
  render() {
    return (
      <div className="py-5 bg-gray-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8 body-content font-size-sm">
              <h2>
                <span className="bg-blue text-white px-1 rounded">
                  About Sergio
                </span>
              </h2>
              <p className="lead">Full stack developer in Orlando, FL.</p>

              <p>
                Hey there{' '}
                <span role="img" aria-label="Waving hand">
                  👋
                </span>
                , thanks for dropping by! I’m a software engineer who has a
                great passion for the art of writing code. I'm a big fan of
                shipping beautiful experiences and observing how they impact the
                people using them.
              </p>

              <p>
                Currently most of my projects are written in JavaScript (or TypeScript). I tend to use <OutboundLink href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express</OutboundLink> to write backend services, and a Single Page Application framework to write frontend experiences (usually <OutboundLink href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular</OutboundLink> or <OutboundLink href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</OutboundLink>). I have also worked with other languages in my day job, including PHP (with MVC frameworks like <OutboundLink href="https://laravel.com/" target="_blank" rel="noopener noreferrer">Laravel</OutboundLink>), and even some Java as well (although mostly for Android development).
              </p>

              <p>
                I also enjoy helping fellow developers learn new technologies.{' '}
                That’s why I{' '}
                <OutboundLink
                  href="https://www.meetup.com/OrlandoDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  organize meetups
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://youtu.be/WHMyaTy7PME"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  speak at conferences
                </OutboundLink>
                , and even{' '}
                <OutboundLink
                  href="https://www.pluralsight.com/courses/code-school-powering-up-with-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  teach online courses
                </OutboundLink>{' '}
                occasionally. I have taken on management and leadership
                positions to further augment my desire to help other engineers
                succeed.
              </p>

              <p>
                Please feel free to contact me at any time with questions:
                <br />
                <strong>E.</strong> hello [at] sergiocruz.me
                <br />
                <strong>P.</strong> (407) six-nine-four 8175
              </p>

              <p className="mt-4 mb-md-0">
                <Link
                  to="/resume"
                  className="btn btn-outline-blue extra-rounded px-4"
                >
                  View resume
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <SpeakerImage
                className="img-fluid rounded mt-3 mt-md-0"
                alt="Sergio speaking at ng-conf 2018"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction
