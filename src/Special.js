import React, { useContext, useState, useEffect, Fragment } from 'react'
import Global from './Global'
import "./Special.css"
import { useSpring, animated } from 'react-spring';
import { TweenMax } from 'gsap';

function SpecialCard(props) {
    const [a, setCurrent, c, e, d, f, special, setSpecial] = useContext(Global)
    const [clicked, setClicked] = useState(false)
    const [hov, setHov] = useState(false)
    const config = {
        friction: 20,
        mass: .5,
        tension: 400
    }
    const specialCardStyle = useSpring({
        transform: hov ? 'translateY(-2px)' : 'translateY(0px)',
        boxShadow: hov ? "0px 3px 6px rgba(189, 189, 189, 0.75)" : "0px 2px 4px rgba(189, 189, 189, 0.5)",
        config: config
    })
    const specialArrow = <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 6L1 11" stroke="#78CAD4" stroke-width="2" />
    </svg>

    // STAGGER OUT ANIMATION
    useEffect(() => {
        clicked ?
            TweenMax.staggerTo(".special-card-container", .22, {
                x: 50,
                opacity: 0,
                stagger: {
                    amount: .1,
                    from: props.id,
                },
                onComplete: (() => setCurrent(null))
            })
            : TweenMax.staggerTo(".special-card-container", .2, {
                x: 0,
                opacity: 1,
                stagger: {
                    amount: .2,
                    from: props.id,
                },
            })
    }, [clicked])
    return (
        <div className='special-card-container'
            onMouseOver={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            onClick={() => (setClicked(true), setSpecial(props.name))}
        >
            <animated.div style={specialCardStyle} className='special-card' id='spec'
            >{props.name}<span className='special-arrow'>{specialArrow}</span>
            </animated.div>
        </div>
    )
}


export default function Special() {
    const [a, setCurrent] = useContext(Global)
    const myList = [
        {
            time: "Head",
            cost: 60,
        },
        {
            time: "Feeasdadt",
            cost: 70,
        },
        {
            time: "Head",
            cost: 60,
        },
        {
            time: "Feeasdadt",
            cost: 70,
        },
        {
            time: "Head",
            cost: 60,
        },
        {
            time: "Feeasdadt",
            cost: 70,
        },

    ]
    return (
        <Fragment>
            <div className='popup-container'
                onClick={() => setCurrent(null)}
            >
            </div>
            <div className='popup-wrapper'>
                {myList.map((i, key) =>
                    <SpecialCard id={key} name={i.time} />)}
                <button style={{ position: 'relative', display: 'block', top: '30px', zIndex: 99999, margin: 'auto', }} className="close-button" onClick={() => setCurrent(null)}>Close</button>

            </div>

        </Fragment>

    )
}
