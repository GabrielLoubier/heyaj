import React, { useState, useContext, useEffect, Fragment } from 'react'
import { useSpring, animated } from 'react-spring'
import Global from './Global'
import './Duration.css'
import { TweenMax } from 'gsap';

function DurationCard(props) {
    const [a, setCurrent, c, d, duration, setDuration] = useContext(Global)
    const [hov, setHov] = useState(false)
    const [clicked, setClicked] = useState(false)
    const hovStyle = useSpring({
        fill: hov ? "#3D1A16" : "#78CAD4",
        color: hov ? "#3D1A16" : "#78CAD4",
    })
    function handleClick() {
        setDuration(props.time + " minutes" + " | $" + props.cost)
        setClicked(!clicked)
    }
    useEffect(() => {
        clicked ?
            TweenMax.staggerTo(".duration-card-container", .22, {
                x: 50,
                opacity: 0,
                stagger: {
                    amount: .5,
                    from: props.id,
                },
                onComplete: (() => setCurrent(null))
            })
            : TweenMax.staggerTo(".duration-card-container", .2, {
                x: 0,
                opacity: 1,
                stagger: {
                    amount: .2,
                    from: props.id,
                },
            })
    }, [clicked])
    return (
        <div className='duration-card-container'
            onMouseOver={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            onClick={handleClick}
        >
            <animated.div style={hovStyle} className='dynamic-duration-time'>{props.time}</animated.div>
            <svg width="300" height="40" viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="duration-card-svg">
                    <rect id="bg-group" width="300" height="40" rx="5" fill="white" />
                    <g id="left">
                        <text id="minutes" fill="#3D1A16" font-family="Roboto" font-size="14" font-weight="300" letter-spacing="0em"><tspan x="65.1104" y="24.7852">minutes</tspan></text>
                    </g>
                    <g id="right">
                        <path id="arrow" d="M279 15L285 20L279 25" stroke="#3D1A16" stroke-width="2" />
                        <animated.text style={hovStyle} id="dynamic-duration-cost" font-family="Roboto" font-size="14" font-weight="bold" letter-spacing="0em"><tspan x="242.922" y="24.7852">{props.cost}</tspan></animated.text>
                        <text id="money" fill="#3D1A16" font-family="Roboto" font-size="14" font-weight="bold" letter-spacing="0em"><tspan x="209.961" y="24.7852">$</tspan></text>
                    </g>
                </g>
            </svg>
        </div>
    )
}


export default function Duration() {
    const [a, setCurrent] = useContext(Global)
    const myList = [
        {
            time: "30",
            cost: 60,
        },
        {
            time: "40",
            cost: 70,
        },
        {
            time: "50",
            cost: 80,
        },
        {
            time: "50",
            cost: 80,
        },
        {
            time: "50",
            cost: 80,
        },
        {
            time: "50",
            cost: 80,
        },

    ]

    return (
        <Fragment>
            <div className='popup-container'
                onClick={() => setCurrent(null)}
            ></div>
            <div className='popup-wrapper'>
                {myList.map((i, key) => <DurationCard id={key} time={i.time} cost={i.cost} />)}
                <button className="close-button" onClick={() => setCurrent(null)}>Close</button>

            </div>
        </Fragment>
    )
}
