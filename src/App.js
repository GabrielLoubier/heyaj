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
  const [currentlyViewedItem, setCurrentlyViewedItem] = useState("") // date || duration || special
  const [date, setDate] = useState(null)
  const [duration, setDuration] = useState(null)
  const [special, setSpecial] = useState(null)
  const [search, setSearch] = useState(false)
  const [windowSize, setWindow] = useState(window.innerWidth)
  const [firstSearch, setFirstSearch] = useState(true) // if false, no need to press search - auto show widget

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
    const timer = setTimeout(() => { date && duration && special && !firstSearch && setSearch(true) }, 700)
    return () => clearTimeout(timer)
  }, [date, duration, special, setSearch, firstSearch])

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
    <Global.Provider value={[
      currentlyViewedItem,
      setCurrentlyViewedItem,
      date,
      setDate,
      duration,
      setDuration,
      special,
      setSpecial,
      search,
      setSearch,
      windowSize,
      firstSearch,
      setFirstSearch]}>
      <div className="parent-container" style={{ backgroundImage: `url(${stockPic})`, backgroundSize: 'cover' }}>
        <Menu />
        {renderPopUp()}
        {search && <Results />}
      </div>
    </Global.Provider>
  );
}
export default App;
