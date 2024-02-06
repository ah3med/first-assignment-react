import React, { Component } from 'react'
import './protofilo.css'
import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'
import image6 from './images/6.png'
export default class Protofilo extends Component {


  sayhi = (e) => {
    let img;
    if (e.target.tagName == "I") {
      img = e.target.parentElement.previousSibling;
    }
    else {
      img = e.target.previousSibling;
    }
    img = img.src;
    let here = document.querySelector(".here");
    here.src = img;
    let click = document.getElementById("click");
    click.classList.remove("d-none");
  }

  removeLayer(e) {
    if (e.target.tagName != "IMG") {

      e.target.classList.add("d-none")
    }
  }


  componentDidMount() {
    const work = document.querySelectorAll(".work");
    work.forEach((item) => {
      item.addEventListener("click", this.sayhi)
    })

    let bigLayer = document.querySelector(".bigLayer");
    bigLayer.addEventListener("click", this.removeLayer)

  }

  componentWillUnmount() {
    const work = document.querySelectorAll(".work");
    work.forEach((item) => {
      item.addEventListener("click", this.sayhi)
    })

    let bigLayer = document.querySelector(".bigLayer");
    bigLayer.removeEventListener("click", this.removeLayer)
  }

  render() {

    return <>
      <div id='click' className='bigLayer d-none'>
        <img id='' src={image1} className='w-25 here' alt="" />
      </div>




      <div className='text-center p-2'>
        <h1>PORTFOLIO COMPONENT</h1>
        <i className="fa-solid fa-star fs-2"></i>
      </div>
      <div className='container p-5 min-vh-100'>




        <div className='row gy-4'>

          <div className='col-md-4 '>
            <div className='work'>
              <img src={image1} className='w-100' alt="" />
              <div className='layer text-center'>
                <i className="fa-solid fa-plus fs-1 position-absolute translate-middle top-50"></i>
              </div>




            </div>
          </div>
          <div className='col-md-4'>
            <div className='work'>
              <img src={image2} className='w-100 ' alt="" />
              <div className='layer text-center'><i class="fa-solid fa-plus fs-1 position-absolute translate-middle top-50"></i></div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='work'>
              <img src={image3} className='w-100 ' alt="" />
              <div className='layer text-center'><i class="fa-solid fa-plus fs-1 position-absolute translate-middle top-50"></i></div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='work'>
              <img src={image4} className='w-100 ' alt="" />
              <div className='layer text-center'><i class="fa-solid fa-plus fs-1 position-absolute translate-middle top-50"></i></div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='work'>
              <img src={image5} className='w-100 ' alt="" />
              <div className='layer text-center'><i class="fa-solid fa-plus fs-1 position-absolute translate-middle top-50"></i></div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='work'>
              <img src={image6} className='w-100 ' alt="" />
              <div className='layer text-center'><i class="fa-solid fa-plus fs-1 position-absolute translate-middle top-50"></i></div>
            </div>
          </div>
        </div>
      </div>


    </>
  }
}
