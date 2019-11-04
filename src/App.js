import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Global from './Global'
import Date from './Date'
import { TweenMax, Back, Elastic, Bounce, Expo } from 'gsap';
import Duration from './Duration';
import Special from './Special';

function App() {
  const [currentlyViewedItem, setCurrentlyViewedItem] = useState("")
  const [date, setDate] = useState("")
  const [duration, setDuration] = useState("")
  const [special, setSpecial] = useState("")
  useEffect(() => {
    TweenMax.to(".popup-container", .5, { y: -50 })
    TweenMax.to(".popup-container", .75, { delay: .2, opacity: 1 })
  })

  return (
    <Global.Provider value={[currentlyViewedItem, setCurrentlyViewedItem, date, setDate, duration, setDuration, special, setSpecial]}>
      <div className="parent-container">
        <Menu />
        {currentlyViewedItem === "date" && <Date />}
        {currentlyViewedItem === "duration" && <Duration />}
        {currentlyViewedItem === "special" && <Special />}


      </div>
    </Global.Provider>
  );
}

export default App;
