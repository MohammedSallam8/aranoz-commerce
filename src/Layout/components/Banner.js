import React from 'react'
import "./style/Banner.scss"
import Carousel from 'react-bootstrap/Carousel'

export default function Banner () {
  return(
    <div className="Banner-Section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Carousel className="Carousel">
              <Carousel.Item className="Carousel.Item">
                <div className="row">
                  <div className="col-lg-5 col-md-8">
                      <h1>Wood &amp; Cloth Sofa</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" className="bttn">BUY NOW</a>
                  </div>
                  <div className="col">
                    <img className="d-block w-100" src="banner_img.png"/>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="Carousel.Item">
                <div className="row">
                  <div className="col-lg-5 col-md-8">
                      <h1>Cloth &amp; Wood Sofa</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" className="bttn">BUY NOW</a>
                  </div>
                  <div className="col">
                    <img className="d-block w-100" src="banner_img.png"/>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="Carousel.Item">
                <div className="row">
                  <div className="col-lg-5 col-md-8">
                      <h1>Wood &amp; Cloth Sofa</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" className="bttn">BUY NOW</a>
                  </div>
                  <div className="col">
                    <img className="d-block w-100" src="banner_img.png"/>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}