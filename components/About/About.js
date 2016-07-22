import { Content, Copy } from '../Homepage/Homepage.css'
import React from 'react'

export default function About() {
  return (
      <div>
        <br />
        <h1> About Us </h1>
        <Content>
          <br />
          <img style={{ width: '100%' }}src={require('../../assets/aboutbanner.png')} />
            <br />
          <Copy>
            <p>
      Head tailor Paul Cristobal has the industry in his blood; born in the Philippines his father had earned the prestigious title of Master Pattern Cutter and owned and ran a factory specialising in formal and casual menswear. At 18 Paul went to university to learn the family trade, and eventually took over his fathers business, running it successfully for 5 years before moving to England.
            </p>
            <p>
            Once in London, Paul found a job at Laurence Highman Tailoring where he quickly gained a reputation for his excellent tailoring skills and good people management. After a year, Paul made the move to Copperfield Tailors where he was offered the job of head alterations tailor and put in charge of 10 staff members. Here Paul stayed for 18 years before being persuaded to set up his own studio taking his best clients along with him including Ede & Ravenscroft and 40 Savile Row.
            </p>
      <br/>
      <h3 style={{textDecoration: 'underline'}}>Insert picture here</h3>
            <p>
              Mohammed Saadut became close friends with Paul after a chance meeting whilst on business at Copperfield Tailors. On observing how well respected Paul had become within the organisation and seeing how hard his two friends worked, Mohammed realised the potential for the three friends to set up their own tailoring company. 
            </p>
      <p>
      As the face of TML Tailors Mohammed believes in providing unrivalled customer service to his growing client list. Making daily deliveries all over the city of London Mohammed makes sure that all jobs, however big or small are completed to the highest standard and delivered on time, with a smile.
      </p>
          </Copy>
        </Content>
      </div>
  )
}
