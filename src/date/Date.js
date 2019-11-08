import React, { Component, Fragment } from 'react'
import Calendar from 'react-calendar'
import Global from '../Global'
import './Date.css'
export default class MyApp extends Component {
    state = {
        date: new Date(),
    }
    static contextType = Global
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





