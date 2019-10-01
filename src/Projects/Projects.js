import React, { Component } from 'react'
import './Projects.css'

import YouTube from 'react-youtube'
import Project from '../Component/Project/Project'

import ste from './ste.jpg'

// Project details
const projectEE5 = {
  videoId: 'dCzZxudr2Gw',
  description: {
    role: 'Software/Hardware Engineer',
    technique: 'MPLAB / C',
    job: [
      'Implemented Proportional Integral Differential control algorithm to control motor speed on bike trailer',
      'Researched and tested strain gauge sensor to measure the strain between bike and trailer',
      'Input the strain voltage to the computer by microprocessor and circuit',
      'Processed strain voltage to control the speed of bike trailer through Pulse Width Modulation'
    ]
  }
}

const projectEE4 = {
  videoId: 'D9wHb0TmCMo',
  description: {
    role: 'Lead Software Engineer',
    technique: 'EAGLE / MPLAB / C',
    job: [
      'Designed and welded the PCB for the screen',
      'Designed an FSM and implemented the game code',
      'Managed team tasks and project schedule'
    ]
  }
}

const projectEE3 = {
  videoId: 'a-d40GZPZQk',
  description: {
    role: 'Software Engineer',
    technique: 'Fischertechnik / LabVIEW',
    job: [
      'Selected, assembled and welded metal sensor as well as infrared photoelectric sensor',
      'Implemented the programming with LabVIEW'
    ]
  }
}

const projectAndroid = {
  videoId: 'C0IS7boZsIk',
  description: {
    role: 'Software Engineer',
    technique: 'JAVA / Android Studio',
    job: [
      'Defined user needs, determined app functions, and designed concise user interfaces',
      'Implemented codes for storing and retrieving data from APIs, uploading pictures and UI parts'
    ]
  }
}

const projectSTE = {
  description: {
    role: 'Project Manager',
    technique: 'SWOT / BDR / MDR',
    job: [
      'Analyzed marketing micro and macro environment, segmented consumers and business market and identified target groups',
      'Built business model canvas including descriptions such as sale channels, key activities and cost structures'
    ]
  }
}

class Projects extends Component {
  render() {
    const opts = {
      width: '100%',
      playerVars: {
        rel: 0,
        autoplay: 0,
        iv_load_policy: 3,
        modestbranding: true
      },
      origin: 'https://tjunruo.com'
    }

    return (
      <div className="projects">
        <section className="project">
          <h3 className="project-title">Smart Bike Trailer</h3>
          <p>
            An smart(self-propelled) bike trailer to help rider not feel
            anything when the trailer carry 60kg objects
          </p>
          <Project detail={projectEE5.description} />
          <div>
            {/* <a
              className="project-link"
              href="https://kuleuven.mediaspace.kaltura.com/media/demo_movie/1_72ucgniu"
              target="_blank"
            >
              Demo Link
            </a> */}
            <YouTube videoId={projectEE5.videoId} opts={opts} />
          </div>
        </section>

        <section className="project">
          <h3 className="project-title">Catch The Thief</h3>
          <p>
            An electronic laser game. The player sets obstacles (shoot laser
            beams on LDRs) on a screen for a thief (flashing alternately
            red-green LED) with a 3D Printed laser gun to get a score
          </p>
          <Project detail={projectEE4.description} />
          <div>
            <YouTube videoId={projectEE4.videoId} opts={opts} />
          </div>
        </section>

        <section className="project">
          <h3 className="project-title">Smart Trash Can</h3>
          <p>
            A robot to classify trash into metal, plastic and others
            automatically and put trash in three specific regions in the trash
            can automatically. The mechanical structure was completed by
            Fischertechnik model
          </p>
          <Project detail={projectEE3.description} />
          <div>
            <YouTube videoId={projectEE3.videoId} opts={opts} />
          </div>
        </section>

        <section className="project">
          <h3 className="project-title">What To Wear</h3>
          <p>
            An outfit-planning Android app provides outfit suggestions based on
            functions such as uploading pictures, selecting features, and
            getting real-time local weather data from the database
          </p>
          <Project detail={projectAndroid.description} />
          <div>
            <YouTube videoId={projectAndroid.videoId} opts={opts} />
          </div>
        </section>

        <section className="project">
          <h3 className="project-title">Magnetic Chessboard Wallpaper</h3>
          <p>
            Magnetic Chessboard Wallpaper, a new office entertainment for
            resting and relaxation. We brought it up through a complete
            development process, and made it a real product to prepare to
            succeed on the market
          </p>
          <Project detail={projectSTE.description} />
          <div>
            <img className="project-img" src={ste} alt="ste" />
          </div>
        </section>
      </div>
    )
  }
}

export default Projects
