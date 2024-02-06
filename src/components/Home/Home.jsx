import React, { Component } from 'react'
import './home.css'
import image1 from './images/avataaars.svg'
export default class Home extends Component {
 
  render() {
    return <>
      <div className='colorMain '>
        <div className='container '>
          <div className='row'>
            <div className='col-12 '>
              <div className='text-center text-white min-vh-100 d-flex justify-content-center align-items-center w-100'>
                <div className=''>
                                <img src={image1} className='w-100 my-2' alt="25" />
                <h1 className='my-2'>START FRAMEWORK</h1>
                <i class="fa-solid fa-star fs-2"></i>
                <p className='m-0 my-2 fs-4'>Graphic Artist - Web Designer - Illustrator</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  }
}
