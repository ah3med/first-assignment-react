import React, { Component } from 'react'
import './about.css'

export default class About extends Component {
  render() {
    return <>

      <div className='colorMain '>
        <div className='container'>
          <div className='row '>
            <div className='col-12'>
              <div className='d-flex justify-content-center align-items-center min-vh-100'>
                <div className='work  text-white'>
                  <div className='text-center'>
                    <h1 className=''>ABOUT COMPONENT</h1>
                    <i class="fa-solid fa-star fs-2 my-2 "></i>
                  </div>

                  <div className='d-flex justify-content-evenly align-content-between worx p-4'>
                    <p className='m-0 ms-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className='m-0  ms-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </>
  }
}
