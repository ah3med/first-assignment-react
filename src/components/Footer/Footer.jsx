import React, { Component } from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return <>
      <div className='theColor text-center p-5'>
        <div className='container'>
          <div className='row d-flex'>


            <div className='col-md-4'>
              <div className='work text-white'>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>


            <div className='col-md-4'>
              <div className='work text-white'>
                <h3>AROUND THE WEB</h3>
                <div className='d-flex justify-content-center align-items-center '>
                  <div className='styleBorder d-flex justify-content-center'><Link to={"https://www.facebook.com/"}><i class="fa-brands fa-facebook fs-3"></i></Link></div>
                  <div className='mx-2 styleBorder'><Link to={"https://twitter.com/"}><i class="fa-brands fa-twitter fs-3"></i></Link></div>
                  <div className='styleBorder'><Link to={"https://www.linkedin.com/"}><i class="fa-brands fa-linkedin fs-3"></i></Link></div>
                  <div className='mx-2 styleBorder'><Link to={"https://www.google.com/"}><i class="fa-solid fa-globe fs-3"></i></Link></div>

                </div>
              </div>
            </div>


            <div className='col-md-4'>
              <div className='work text-white'>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>


          </div>

        </div>
      </div>
      <div className='footerEnd text-center p-4 '>
            <p className='text-white m-0'>Copyright © Your Website 2021</p>
          </div>



    </>
  }
}
