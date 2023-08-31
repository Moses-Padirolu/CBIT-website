import React from 'react'
import Navbar from './Navbar'
import home from './home.css'
import Footer from './Footer'

function Home() {
  return (
    <>
    {<Navbar/>}
    <div className='background'>
       
    </div>
    <div className='homepage'>
      <section>
        <div className='placementheading'>
          Placements
        </div>
        <div className='placementcontainer'>
          <div className='placementboxs'>
            <div className='placementbox'>
              <div className='placementimage1'>
                
              </div>
            </div>
            <div className='placementbox'>
              <div className='placementimage2'>

              </div>
              <div className='placementinfo'>
                <p>Campus placement or campus recruiting is a program conducted within universities or other educational institutions to provide jobs.
                </p>
              </div>
            </div>
            <div className='placementbox'>
            <div className='placementimage3'>
              </div>
              <div className='placementinfo'>
                <p>Campus placement or campus recruiting is a program conducted within universities or other educational institutions to provide jobs.
                </p>
              </div>
            </div>
            <div className='placementbox'>
            <div className='placementimage4'>
              </div>
            </div>
            <div className='placementbox'>
            <div className='placementimage5'>
            </div>
            <div className='placementinfo'>
                <p>Campus placement or campus recruiting is a program conducted within universities or other educational institutions to provide jobs.
                </p>
              </div>
            </div>
            <div className='placementbox'>
              <div className='placementimage6'>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <br/>
      <section>
        <div className='placementheading'>
            21-22 Placement Highlights
        </div>
        <div className='recruiter'>
          <div className='recruitercontainer'>
            <div className='recruiterbox1'>
              <div className='recruiterbox'>
                <div className='recruiterboxsub'>
                  <span class="material-symbols-outlined">
                      apartment
                  </span>
                </div>
                <div className='recruiterboxsub'>
                  <span className='recruitercount'>
                      <h1>140+</h1>
                  </span>
                  <br/>
                  <span className='recruitertext'>
                      <h3>companies</h3>
                  </span>
                </div>
              </div>
              <div className='recruiterbox'>
                
              <div className='recruiterboxsub'>
              <span class="material-symbols-outlined">
                add_task
                </span>
              </div>
                <div className='recruiterboxsub'>
                  <span className='recruitercount'>
                        <h1>1736</h1>
                    </span>
                    <br/>
                    <span className='recruitertext'>
                        <h3>Placement offers</h3>
                  </span>
                </div>
              </div>
              <div className='recruiterbox'>
              <div className='recruiterboxsub'>
                  <span class="material-symbols-outlined">
                    hail
                  </span>
                </div>
                <div className='recruiterboxsub'>
                <span className='recruitercount'>
                      <h1>54L</h1>
                  </span>
                  <br/>
                  <span className='recruitertext'>
                      <h3>Highest package</h3>
                  </span>
                </div>
                
              </div>
              <div className='recruiterbox'>
              <div className='recruiterboxsub'>
                  <span class="material-symbols-outlined">
                    redeem
                  </span>
                </div>
                <div className='recruiterboxsub'>
                <span className='recruitercount'>
                      <h1>83.68%</h1>
                  </span>
                  <br/>
                  <span className='recruitertext'>
                      <h3>Off placements</h3>
                  </span>
                </div>
                
              </div>
            </div>
            <div className='recruiterbox2'>
              <p><h1>CBIT Recruiters</h1></p>
            <marquee style={{ color: 'red', fontSize: '3em' }}>
              <div className='row'>
              <div className='marquebox'></div>
              <div className='marquebox'></div>
              <div className='marquebox'></div>
              <div className='marquebox'></div>
              <div className='marquebox'></div>
              <div className='marquebox'></div>
              <div className='marquebox'></div>
              </div>
            </marquee>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    </>
  )
}

export default Home