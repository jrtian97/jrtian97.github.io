import React from 'react'
import './Footer.css'

export default () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-row">
          <span>Junruo Tian&nbsp;&copy;&nbsp;2018</span>
        </div>
        <div className="footer-row">
          <a href="mailto:junruo.tian@student.kuleuven.be" className="email-link">junruo.tian@student.kuleuven.be</a>
        </div>
      </div>
    </footer>
  )
}