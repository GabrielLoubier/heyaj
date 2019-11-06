import React, { useContext, useState, Fragment } from 'react'
import Global from './Global'
import CalendarWidget from './CalendarWidget'
import './Results.css'
export default function Results() {
    const [currentlyViewedItem, setCurrentlyViewedItem, date, setDate, duration, setDuration, special, setSpecial, search, setSearch] = useContext(Global)
    return (
        <Fragment>
            {/* <div className='popup-container'></div> */}
            <div className='popup-results'>

                <CalendarWidget />
            </div>
        </Fragment>
    )
}
