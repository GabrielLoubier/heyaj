import React, { useContext, useState, useEffect } from 'react'
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
    // useEffect(() => {
    //     clicked ?
    //         TweenMax.staggerTo("#spec", .22, {
    //             y: 5,
    //             opacity: 0,
    //             stagger: {
    //                 amount: .5,
    //                 from: props.id,
    //             },
    //             onComplete: (() => setCurrent(null))
    //         })
    //         : TweenMax.staggerTo("#spec", .2, {
    //             x: 0,
    //             opacity: 1,
    //             stagger: {
    //                 amount: .2,
    //                 from: props.id,
    //             },
    //         })
    // }, [clicked])
    return (
        <animated.div style={specialCardStyle} className='special-card' id='spec'
            onMouseOver={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            onClick={() => (setSpecial(props.name), setClicked(true))}>{props.name}<span className='special-arrow'>{specialArrow}</span>
        </animated.div>
    )
}


export default function Special() {
    const [a, setCurrent] = useContext(Global)
    const mylist = ['tissue', 'massage', 'feet',]
    return (
        <div className='popup-container'
            onClick={() => setCurrent(null)}>
            <div className='popup-wrapper'>
                {mylist.map((i, key) =>
                    <SpecialCard name={i} id={key} />
                )}
            </div>
        </div>
    )
}
