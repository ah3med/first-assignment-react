import React, { Component } from 'react'
import './contact.css'
export default class Contact extends Component {
  render() {
    return <>



      <div className='text-center'>
        <h1 className='p-3'>CONATCT SECTION</h1>
        <i class="fa-solid fa-star fs-2 my-2"></i>
      </div>

      <div className='container vh-100 p-5'>
        <div className='row'>
          <div className='col-12'>

            <div className='mx-auto w-75'>
              <input type="text" className=' form-control p-2 border-0 border-bottom ' placeholder='UserName' />
              <input type="text" className=' form-control my-5 p-2 border-0 border-bottom' placeholder='UserAge' />
              <input type="text" className=' form-control p-2 border-0 border-bottom' placeholder='UserEmail' />
              <input type="text" className=' form-control my-5 p-2 border-0 border-bottom' placeholder='UserPassword' />
              <button className='btn btn-info text-white'>Send Massage</button>
            </div>
          </div>
        </div>
      </div>




    </>
  }
}
