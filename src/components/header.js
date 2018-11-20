import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import styles from '../styles/components/header.module.scss'

const Header = ({ siteTitle, className = '' }) => (
  <div className={classnames(styles.header, className)}>
    <div className="container">
      <div className="d-flex justify-content-center justify-content-md-end">
        <nav className="nav nav-dark py-2 px-0">
          <Link className="nav-link" activeClassName="active" to="/">
            Home
          </Link>
          <Link className="nav-link" activeClassName="active" to="/resume">
            Resume
          </Link>
          <Link
            className="nav-link"
            activeClassName="active"
            to="/talks-and-publications"
          >
            Talks & Publications
          </Link>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
