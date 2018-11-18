import React from 'react'
import classnames from 'classnames'
// import { Link } from 'gatsby'
import styles from '../styles/components/header.module.scss'

const Header = ({ siteTitle }) => (
  <div className={classnames(styles.header, 'mb-3')}>
    <div className="container">
    <nav className={classnames(styles.navbar, 'navbar navbar-dark navbar-expand-lg px-0')}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-lg-end">
        <ul className="navbar-nav ml-lg-0">
          <li className="nav-item mb-0 active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item mb-0">
            <a className="nav-link" href="/">Publications</a>
          </li>
          <li className="nav-item mb-0">
            <a className="nav-link" href="/">Conferences</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  </div>
)

export default Header
