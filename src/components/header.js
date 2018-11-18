import React from 'react'
import classnames from 'classnames'
// import { Link } from 'gatsby'
import styles from '../styles/components/header.module.scss'

const Header = ({ siteTitle }) => (
  <div className={classnames(styles.header, 'mb-3')}>
    <div className="container">
    <nav className={classnames(styles.navbar, 'navbar navbar-dark navbar-expand-lg px-0')}>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-lg-end">
        <ul class="navbar-nav ml-lg-0">
          <li class="nav-item mb-0 active">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item mb-0">
            <a class="nav-link" href="/">Publications</a>
          </li>
          <li class="nav-item mb-0">
            <a class="nav-link" href="/">Conferences</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  </div>
)

export default Header
