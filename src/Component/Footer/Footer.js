import React from 'react'
import './Footer.css'

export default () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-row">
          <span>Junruo Tian&nbsp;&copy;&nbsp;2019</span>
        </div>
        <div className="footer-row">
          <a href="mailto:junruo.tian@sv.cmu.edu" className="email-link">junruo.tian@sv.cmu.edu</a>
        </div>
      </div>
    </footer>
  )
}