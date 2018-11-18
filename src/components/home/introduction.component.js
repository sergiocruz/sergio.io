import React, { Component } from 'react';
import { Link } from 'gatsby'

import speakerImg from '../../images/sergiocruz-speaker.jpg'

class Introduction extends Component {
  render() {
    return (
      <div className="py-5 bg-gray-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2><span className="bg-blue text-white px-1 rounded">About Sergio</span></h2>
              <p className="lead">Full stack developer in Orlando, FL.</p>

              <p>
                Hey there <span role="img" aria-label="Waving hand">👋</span>, thanks for dropping by!
                {' '}
                I’m a software engineer who exuberates passion for the art of writing code.
                {' '}
                I'm a big fan of shipping beautiful experiences and observing how they impact the people using them.
              </p>

              <p>
                I also enjoy helping fellow developers learn new technologies.
                {' '}
                That’s why I <a href="https://www.meetup.com/OrlandoDevs" target="_blank" rel="noopener noreferrer" className="a-underlined">organize meetups</a>, <a href="https://youtu.be/WHMyaTy7PME" target="_blank" rel="noopener noreferrer" className="a-underlined">speak at conferences</a>, and even <a href="https://www.pluralsight.com/courses/code-school-powering-up-with-react" target="_blank" rel="noopener noreferrer" className="a-underlined">teach online courses</a> occasionally.
                {' '}
                To further augment my desire to help other engineers succeed, I have most recently taken on management and leadership positions.
              </p>

              <p>
                Please feel free to contact me at any time with questions:<br />
                <strong>E.</strong> hello [at] sergiocruz.me<br />
                <strong>P.</strong> (407) six-nine-four 8175
              </p>

              <p className="mt-4">
                <Link className="btn btn-outline-blue extra-rounded px-4">View resume</Link>
              </p>
            </div>
            <div className="col-md-4">
              <img src={speakerImg} className="img-fluid rounded" alt="Sergio speaking at ng-conf 2018" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Introduction;
