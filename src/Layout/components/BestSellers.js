import React, { useEffect, useState, setItems } from 'react'
import "./style/BestSellers.scss"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

export default function BestSellers(){

  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    <div className="item" data-value="1">
      <div className="item1">
        <img src="product_1.png"></img>
        <div className="text">
          <h4>Quartz Belt Watch</h4>
          <h3>$150.00</h3>
        </div>
      </div>
    </div>,

    <div className="item" data-value="2">
      <div className="item1">
        <img src="product_2.png"></img>
        <div className="text">
          <h4>Quartz Belt Watch</h4>
          <h3>$150.00</h3>
        </div>
      </div>
    </div>,

    <div className="item" data-value="3">
      <div className="item1">
        <img src="product_3.png"></img>
        <div className="text">
          <h4>Quartz Belt Watch</h4>
          <h3>$150.00</h3>
        </div>
      </div>
    </div>,

    <div className="item" data-value="4">
      <div className="item1">
        <img src="product_4.png"></img>
        <div className="text">
          <h4>Quartz Belt Watch</h4>
          <h3>$150.00</h3>
        </div>
      </div>
    </div>,

    <div className="item" data-value="5">
      <div className="item1">
        <img src="product_5.png"></img>
        <div className="text">
          <h4>Quartz Belt Watch</h4>
          <h3>$150.00</h3>
        </div>
      </div>
    </div>,
  ];

  return(

    <div className="BestSellers">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 margin">
            <h2>Best Sellers<span>shop</span></h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <AliceCarousel
              autoPlay
              activeIndex={0}
              infinite={true}
              responsive={responsive}
              autoPlayInterval={4000}
              fadeOutAnimation={false}
              dotsDisabled={true}
              touchTrackingEnabled={true}
              mouseTrackingEnabled={true}
              items={items}
            />
          </div>
        </div>
      </div>
    </div>
  )
}