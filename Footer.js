import React from 'react'
import footer from './footer.css'


function Footer() {
  return (
    <>
      <section className='footer'>
        <div className='footercontainer'>
          <div className='footerrow'>
            <div className='footerrowsub'>
              <h4>college contact info</h4>
              <ul>
                <li><a href='#'>Gandipet Hyderabad Telangana</a></li>
                <li><a href='#'>
                  Phone: 040-24193276 <br/>
                    </a></li>
                <li><a href='#'>Admissions Enquiry: 8466997216</a></li>
                <li><a href='#'>Email: principal@cbit.ac.in</a></li>
              </ul>
            </div>
            <div className='footerrowsub'>
              <h4>Contact Us</h4>
              <ul>
                <li><a href='#'>Admissions</a></li>
                <li><a href='#'>Research</a></li>
                <li><a href='#'>Placements</a></li>
                <li><a href='#'>Recruitement</a></li>
              </ul>
            </div>
            <div className='footerrowsub'>
              <h4>Academics</h4>
              <ul>
                  <li><a href='#'>Swayam</a></li>
                  <li><a href='#'>NPTEL</a></li>
                  <li><a href='#'>Online Grivances</a></li>
                  <li><a href='#'>AICTE Feedback</a></li>
              </ul>
            </div>
            <div className='footerrowsub'>
              <h4>Social Media</h4>
               <div className='social-links'>
                <ul>
                    <li><a href='#'>Facebook</a></li>
                    <li><a href='#'>Linkedin</a></li>
                    <li><a href='#'>Twitter</a></li>
                    <li><a href='#'>Youtube</a></li>
                </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer