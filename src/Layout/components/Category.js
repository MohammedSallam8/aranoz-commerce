import React from "react"
import "./style/Category.scss"

export default function Category(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
         <h2>Featured Category</h2>
        </div>
      </div>


      <div className="row">
        <div className="col-lg-7 col-sm-6">
          <div className="featuerd">
            <p>Premium Quality</p>
            <h3>Latest foam Sofa</h3>
            <a href="#">EXPLORE NOW <i class="fas fa-play"></i></a>
            <img src="feature_1.png" alt=""></img>
          </div>
        </div>


        <div className="col-lg-5 col-sm-6">
          <div className="featuerd">
            <p>Premium Quality</p>
            <h3>Latest foam Sofa</h3>
            <a href="#">EXPLORE NOW <i class="fas fa-play"></i></a>
            <img src="feature_2.png" alt=""></img>
          </div>
        </div>


        <div className="col-lg-5 col-sm-6">
        <div className="featuerd">
            <p>Premium Quality</p>
            <h3>Latest foam Sofa</h3>
            <a href="#">EXPLORE NOW <i class="fas fa-play"></i></a>
            <img src="feature_3.png" alt=""></img>
          </div>
        </div>


        <div className="col-lg-7 col-sm-6">
        <div className="featuerd">
            <p>Premium Quality</p>
            <h3>Latest foam Sofa</h3>
            <a href="#" class="feature_btn">EXPLORE NOW <i class="fas fa-play"></i></a>
            <img src="feature_4.png" alt=""></img>
          </div>
        </div>


      </div>
    </div>
  )
}