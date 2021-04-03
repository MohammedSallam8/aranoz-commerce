import React, { useEffect, useRef , useState } from 'react'
import "./style/Sale.scss"

export default function Sale(){
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('may 30 2023 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 )));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    },1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return(
    <div className="Sale">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img src="offer_img.png"></img>
          </div>
          
          <div className="col-lg-6 col-md-6">
            <h2>Weekly Sale on60% Off All Products</h2>
            <div className="timer">
              <div className="time" id="days">
                <span>DAYS</span>
                <p> -{timerDays}</p>
              </div>
              <div className="time" id="hours">
                <span>HOURS</span>
                <p>{timerHours}</p>
              </div>
              <div className="time" id="minutes">
                <span>MINUTES</span>
                <p>{timerMinutes}</p>
              </div>
              <div className="time" id="seconds">
                <span>SECONDS</span>
                <p>{timerSeconds}</p>
              </div>
            </div>
            <div className="email">
              <input type="text" placeholder="Enter Email Address"></input>
              <a href="#">BOOK NOW</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}