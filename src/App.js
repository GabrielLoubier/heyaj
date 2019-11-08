import React, { useState, useEffect } from 'react';
import { TweenMax } from 'gsap';
import Menu from './menu/Menu';
import Global from './Global'
import Date from './date/Date'
import Duration from './duration/Duration';
import Special from './special/Special';
import stockPic from './images/stock-pic.jpeg'
import './App.css';
import Results from './results/Results';

function App() {
  const [currentlyViewedItem, setCurrentlyViewedItem] = useState("")
  const [date, setDate] = useState("")
  const [duration, setDuration] = useState("")
  const [special, setSpecial] = useState("")
  const [search, setSearch] = useState("")
  const [windowSize, setWindow] = useState(window.innerWidth)

  function updateWindowDimensions() {
    setWindow(window.innerWidth)
  }

  useEffect(() => { // refresh windowSize
    window.addEventListener('resize', updateWindowDimensions);
    return function cleanup() {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  useEffect(() => { // show results page if three choices are selected
    const timer = setTimeout(() => { date && duration && special && setSearch(true) }, 700)
    return () => clearTimeout(timer)
  }, [date, duration, special, setSearch])

  useEffect(() => {  // modal popup fade in
    TweenMax.to(".popup-wrapper", .2, { y: -50 })
    TweenMax.to(".popup-wrapper", .3, { opacity: 1 })
  }, [currentlyViewedItem])

  function renderPopUp() {
    if (currentlyViewedItem === "date")
      return <Date />
    else if (currentlyViewedItem === "duration")
      return <Duration />
    else if (currentlyViewedItem === "special")
      return <Special />
    else return null
  }

  return (
    <Global.Provider value={[currentlyViewedItem, setCurrentlyViewedItem, date, setDate, duration, setDuration, special, setSpecial, search, setSearch, windowSize]}>
      <div className="parent-container" style={{ backgroundImage: `url(${stockPic})`, backgroundSize: 'cover' }}>
        <Menu />
        {renderPopUp()}
        {search && <Results />}
      </div>
    </Global.Provider>
  );
}
export default App;
