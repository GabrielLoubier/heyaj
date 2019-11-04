import React, { Component, useEffect, useRef, useState, useContext } from 'react'
import { TweenMax, Expo, SlowMo } from 'gsap'
import Calendar from 'react-calendar'
import Global from './Global'

export default class MyApp extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <Global.Consumer>
                {props => {
                    return <div className='popup-container'>
                        <Calendar
                            onChange={(i) => props[3](i)}
                            value={this.state.date} />
                        <button style={{
                            width: "75px",
                            height: "20px",
                            background: "#78CAD4",
                            position: 'relative',
                            marginTop: "30px",
                            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
                            borderRadius: "2px",
                            color: "white",
                            border: "0px"
                        }
                        } onClick={() => props[1](null)}>Close</button>
                    </div>
                }}
            </Global.Consumer>
        );
    }
}





