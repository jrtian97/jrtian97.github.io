import React from 'react'
import './Project.css'

export default props => {
  const { detail } = props
  const jobList = detail.job.map(item =>
    <div key={ item } className="job-content">
      { item }
    </div>
  )

  return (
    <div className="description-wrapper">
      <div className="description">
        <div className="description-col">
          <h5 className="description-title">Role</h5>
          <div className="description-content">{ detail.role }</div>
        </div>
        <div className="description-col">
          <h5 className="description-title">Technique</h5>
          <div className="description-content">{ detail.technique }</div>
        </div>
      </div>
      <div className="description">
        <div className="description-col">
          <h5 className="description-title">Job</h5>
          <div className="description-content">{ jobList }</div>
        </div>
      </div>
    </div>
  )
}
