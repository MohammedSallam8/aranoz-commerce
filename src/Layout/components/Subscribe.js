import React from 'react'
import "./style/Subscribe.scss"

export default function Subscribe(){
  return(
    <div className="Subscribe">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="SupText">
              <h5>JOIN OUR NEWSLETTER</h5>
              <h2>Subscribe to get Updated with new offers</h2>
              <div className="input">
                <input type="text" placeholder="enter email address"/>
                <a href="#" className="btn2">SUBSCRIBE NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}