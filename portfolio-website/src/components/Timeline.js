import React from 'react'

import {Fade} from 'react-reveal'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

const TimeLineComponent = () => {
  return(
    <div>
    <Fade left>
    <h2 className="text-center">Timeline</h2>
    </Fade>
    <Timeline lineColor={'#000'}>
    <TimelineItem
      key="001"
      dateText="11/2011 – Present"
      style={{ color: '#e86971' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h4>Signal Support Systems Specialist, NH Army National Guard</h4>
      <br/>
      <ul>
        <li> Responsible for all encryption and communication security</li>
        <li>Training manager for communication and IT systems</li>
        <li>Supervisor for junior enlisted teams from 5 to 20 soldiers</li>
        <li>Responsible for equipment valued in excess of $400,000</li>
      </ul>
    </TimelineItem>
    <TimelineItem
      key="002"
      dateText="01/2020 – 04/2020"
      style={{ color: '#61b8ff' }}
      dateInnerStyle={{ background: '#61b8ff' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h4>Full-Stack Bootcamp, Code Platoon</h4>
      <br/>
      <p>
        A 14-week course in Downtown Chicago focused on full-stack development for web applications.  Veterans and
        their spouses learn to script algorithms using proper data structures and Object Oriented Programming (OOP), Object Relational Mapping (ORM),
        industry best practices and work in teams to produce final projects.
      </p>
    </TimelineItem>
    <TimelineItem
      key="003"
      dateText="02/2019 – 01/2020"
      style={{ color: '#27be54' }}
      dateInnerStyle={{ background: '#27be54' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h4>Field Technician, Spectrum</h4>
      <ul>
        <li>Excelled in customer service and maintained a 5/5 customer satisfaction rating for several months</li>
        <li>Repaired and troubleshooted telecommunication systems and company equipment, resulting in a second lowest repeat call ranking for consecutive months</li>
        <li>Consistently rated within the top 40% of employees on all metrics</li>
        <li>Performed residential installations of telecommunication networks</li>
      </ul>
    </TimelineItem>
    <TimelineItem
      key="004"
      dateText="10/2014 – 11/2018"
      dateInnerStyle={{ background: '#dc6109' }}
      style={{ color: '#dc6109'}}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h4>Emergency Medical Technician, American Ambulance Services</h4>
      <ul>
        <li>Obtained primary 911 EMT after eight months of employment</li>
        <li>Assessed nature and extent of illness or injury to establish and prioritize medical procedures</li>
        <li>Observed, recorded, and reported patient condition or injury, treatment provided, drug and treatment reactions in post-run patient report to be utilized by hospital staff</li>
        <li>Administered first-aid treatment and life-support care to sick or injured persons in prehospital setting</li>
      </ul>
    </TimelineItem>
    <TimelineItem
      key="004"
      dateText="12/2016"
      dateInnerStyle={{ background: '#9501e4' }}
      style={{ color: '#9501e4'}}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h4>Biomedical Science B.S., University of New Hampshire</h4>
    </TimelineItem>
  </Timeline>
  </div>
  )
}

export default TimeLineComponent