import React from'react'
import "./style/Footer.scss"

export default function Footer(){
  return(
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-6">
            <h4>Top Products</h4>
            <ul>
              <li><a href="">Managed Website</a></li>
              <li><a href="">Manage Reputation</a></li>
              <li><a href="">Power Tools</a></li>
              <li><a href="">Marketing Service</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-sm-6">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Brand Assets</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-sm-6">
            <h4>Features</h4>
            <ul>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Brand Assets</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-sm-6">
            <h4>Resources</h4>
            <ul>
              <li><a href="">Guides</a></li>
              <li><a href="">Research</a></li>
              <li><a href="">Experts</a></li>
              <li><a href="">Agencies</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-sm-6">
            <h4>Newsletter</h4>
            <p>Heaven fruitful doesn't over lesser in days. Appear creeping </p>
            <div className="email">
              <input type="email" placeholder="Email Address"></input>
              <button type="submit">subscribe</button>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-8">
                <p>Copyright ©2021 All rights reserved | This template is made with <i class="far fa-heart"></i> by <a href="#">Colorlib</a></p>
              </div>
              <div className="col-lg-4 last">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fas fa-globe"></i></a></li>
                  <li><a href="#"><i class="fab fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}