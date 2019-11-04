import React, { useState, useEffect } from 'react';
import { TweenMax, Back, Elastic, Bounce, Expo } from 'gsap';
import Menu from './Menu';
import Global from './Global'
import Date from './Date'
import Duration from './Duration';
import Special from './Special';
import stockPic from './images/stock-pic.jpeg'
import './App.css';
import Results from './Results';

function App() {
  const [currentlyViewedItem, setCurrentlyViewedItem] = useState("")
  const [date, setDate] = useState("")
  const [duration, setDuration] = useState("")
  const [special, setSpecial] = useState("")
  const [search, setSearch] = useState("")
  useEffect(() => {
    TweenMax.to(".popup-wrapper", .2, { y: -50 })
    TweenMax.to(".popup-wrapper", .3, { opacity: 1 })
  }, [currentlyViewedItem])

  function renderPopUp() {
    switch (currentlyViewedItem) {
      case ("date"):
        return <Date />
      case ("duration"):
        return <Duration />
      case ("special"):
        return <Special />
    }
  }

  return (
    <Global.Provider value={[currentlyViewedItem, setCurrentlyViewedItem, date, setDate, duration, setDuration, special, setSpecial, search, setSearch]}>
      <div className="parent-container" style={{ backgroundImage: `url(${stockPic})`, backgroundSize: 'contain' }}>
        <Menu />
        {renderPopUp()}
        {search && <Results />}
      </div>
    </Global.Provider>
  );
}

export default App;
