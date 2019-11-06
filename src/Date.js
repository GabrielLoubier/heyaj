import React, { Component, useEffect, useRef, useState, useContext, Fragment } from 'react'
import { TweenMax, Expo, SlowMo } from 'gsap'
import Calendar from 'react-calendar'
import Global from './Global'

export default class MyApp extends Component {
    state = {
        date: new Date(),
    }
    static contextType = Global

    componentDidMount() {
        const user = this.context

        console.log(user) // { name: 'Tania', loggedIn: true }
    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <Global.Consumer>
                {props => {
                    return <Fragment>
                        <div className='popup-container'
                            onClick={() => props[1](null)}>
                        </div>
                        <div className='popup-wrapper'>
                            <Calendar
                                onChange={(i) => (props[3](i), props[1](null))}
                                value={this.state.date} />
                            <button className="close-button" onClick={() => props[1](null)}>Close</button>
                        </div>
                    </Fragment>
                }}
            </Global.Consumer>
        );
    }
}





