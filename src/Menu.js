import React, { useState, useContext, useEffect, Fragment } from 'react'
import { useSpring, animated } from 'react-spring'
import './Menu.css'
import Global from './Global'
import MobileCardTarget from './MobileCardTarget'

function Card(props) { // CHILD
    const [current, setCurrent, date, setDate, duration, setDuration, special, setSpecial, search, setSearch] = useContext(Global)
    const [hov, setHov] = useState(false)
    const mobile = window.innerWidth < 601
    const config = { // spring settings
        friction: 20,
        mass: .5,
        tension: 400
    }
    const cardStyle = useSpring({ // check if its hovered, has its popup activated, or is not empty
        color: hov || current === props.name || (props.name === "date" && date) || (props.name === "duration" && duration) || (props.name === "special" && special) ? "#78CAD4" : "#BDBDBD",
        fill: hov || current === props.name || (props.name === "date" && date) || (props.name === "duration" && duration) || (props.name === "special" && special) ? "#78CAD4" : "#BDBDBD",
        transform: hov ? 'translateY(-2px)' : 'translateY(0px)',
        boxShadow: hov ? "0px 3px 6px rgba(189, 189, 189, 0.75)" : "0px 2px 4px rgba(189, 189, 189, 0.5)",

        config: config
    })
    function checkImg() {
        if (props.name === "date")
            return calendarSVG
        else if (props.name === "duration")
            return timerSVG
        else return specialSVG
    }
    const calendarSVG = <animated.svg style={{ ...cardStyle, boxShadow: "0px", }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.75 3.66667C16.229 3.38733 12.9893 1.64333 11.209 0.526333C10.905 0.204 10.477 0 10 0C9.523 0 9.095 0.204 8.791 0.526333C7.01033 1.643 3.771 3.38733 3.25 3.66667H0V20H20V3.66667H16.75ZM10.741 1.00133C10.7423 1.003 10.7427 1.005 10.7443 1.00667C10.8253 1.09767 10.9147 1.23533 10.9633 1.412C10.9673 1.427 10.974 1.441 10.9773 1.45667C10.9913 1.52133 11 1.59133 11 1.66667C11 2.218 10.5513 2.66667 10 2.66667C9.44867 2.66667 9 2.218 9 1.66667C9 1.59133 9.00867 1.52133 9.023 1.45667C9.02633 1.44133 9.03267 1.42767 9.03667 1.41267C9.08533 1.23533 9.17467 1.098 9.25567 1.00667C9.257 1.005 9.25733 1.003 9.259 1.00133C9.44233 0.797667 9.705 0.666667 10 0.666667C10.295 0.666667 10.5577 0.797667 10.741 1.00133ZM8.33533 1.58467C8.334 1.612 8.33333 1.63933 8.33333 1.66667C8.33333 2.58567 9.081 3.33333 10 3.33333C10.919 3.33333 11.6667 2.58567 11.6667 1.66667C11.6667 1.63933 11.666 1.612 11.6647 1.58467C12.8623 2.29667 14.343 3.117 15.3503 3.66667H4.64967C5.657 3.117 7.13767 2.29667 8.33533 1.58467ZM3.33333 4.33333H16.6667H19.3333V6H0.666667V4.33333H3.33333ZM0.666667 19.3333V6.66667H19.3333V19.3333H0.666667Z" />
        <path d="M7.66683 9.66667C7.85092 9.66667 8.00016 9.51743 8.00016 9.33333C8.00016 9.14924 7.85092 9 7.66683 9C7.48273 9 7.3335 9.14924 7.3335 9.33333C7.3335 9.51743 7.48273 9.66667 7.66683 9.66667Z" />
        <path d="M9.99984 9.66667C10.1839 9.66667 10.3332 9.51743 10.3332 9.33333C10.3332 9.14924 10.1839 9 9.99984 9C9.81574 9 9.6665 9.14924 9.6665 9.33333C9.6665 9.51743 9.81574 9.66667 9.99984 9.66667Z" />
        <path d="M12.3333 9.66667C12.5174 9.66667 12.6667 9.51743 12.6667 9.33333C12.6667 9.14924 12.5174 9 12.3333 9C12.1492 9 12 9.14924 12 9.33333C12 9.51743 12.1492 9.66667 12.3333 9.66667Z" />
        <path d="M14.6668 9.66667C14.8509 9.66667 15.0002 9.51743 15.0002 9.33333C15.0002 9.14924 14.8509 9 14.6668 9C14.4827 9 14.3335 9.14924 14.3335 9.33333C14.3335 9.51743 14.4827 9.66667 14.6668 9.66667Z" />
        <path d="M16.9998 9.66667C17.1839 9.66667 17.3332 9.51743 17.3332 9.33333C17.3332 9.14924 17.1839 9 16.9998 9C16.8157 9 16.6665 9.14924 16.6665 9.33333C16.6665 9.51743 16.8157 9.66667 16.9998 9.66667Z" />
        <path d="M2.99984 12.3333C3.18393 12.3333 3.33317 12.1841 3.33317 12C3.33317 11.8159 3.18393 11.6667 2.99984 11.6667C2.81574 11.6667 2.6665 11.8159 2.6665 12C2.6665 12.1841 2.81574 12.3333 2.99984 12.3333Z" />
        <path d="M5.33333 12.3333C5.51743 12.3333 5.66667 12.1841 5.66667 12C5.66667 11.8159 5.51743 11.6667 5.33333 11.6667C5.14924 11.6667 5 11.8159 5 12C5 12.1841 5.14924 12.3333 5.33333 12.3333Z" />
        <path d="M7.66683 12.3333C7.85092 12.3333 8.00016 12.1841 8.00016 12C8.00016 11.8159 7.85092 11.6667 7.66683 11.6667C7.48273 11.6667 7.3335 11.8159 7.3335 12C7.3335 12.1841 7.48273 12.3333 7.66683 12.3333Z" />
        <path d="M9.99984 12.3333C10.1839 12.3333 10.3332 12.1841 10.3332 12C10.3332 11.8159 10.1839 11.6667 9.99984 11.6667C9.81574 11.6667 9.6665 11.8159 9.6665 12C9.6665 12.1841 9.81574 12.3333 9.99984 12.3333Z" />
        <path d="M12.3333 12.3333C12.5174 12.3333 12.6667 12.1841 12.6667 12C12.6667 11.8159 12.5174 11.6667 12.3333 11.6667C12.1492 11.6667 12 11.8159 12 12C12 12.1841 12.1492 12.3333 12.3333 12.3333Z" />
        <path d="M14.6668 12.3333C14.8509 12.3333 15.0002 12.1841 15.0002 12C15.0002 11.8159 14.8509 11.6667 14.6668 11.6667C14.4827 11.6667 14.3335 11.8159 14.3335 12C14.3335 12.1841 14.4827 12.3333 14.6668 12.3333Z" />
        <path d="M16.9998 12.3333C17.1839 12.3333 17.3332 12.1841 17.3332 12C17.3332 11.8159 17.1839 11.6667 16.9998 11.6667C16.8157 11.6667 16.6665 11.8159 16.6665 12C16.6665 12.1841 16.8157 12.3333 16.9998 12.3333Z" />
        <path d="M2.99984 14.6667C3.18393 14.6667 3.33317 14.5174 3.33317 14.3333C3.33317 14.1492 3.18393 14 2.99984 14C2.81574 14 2.6665 14.1492 2.6665 14.3333C2.6665 14.5174 2.81574 14.6667 2.99984 14.6667Z" />
        <path d="M5.33333 14.6667C5.51743 14.6667 5.66667 14.5174 5.66667 14.3333C5.66667 14.1492 5.51743 14 5.33333 14C5.14924 14 5 14.1492 5 14.3333C5 14.5174 5.14924 14.6667 5.33333 14.6667Z" />
        <path d="M7.66683 14.6667C7.85092 14.6667 8.00016 14.5174 8.00016 14.3333C8.00016 14.1492 7.85092 14 7.66683 14C7.48273 14 7.3335 14.1492 7.3335 14.3333C7.3335 14.5174 7.48273 14.6667 7.66683 14.6667Z" />
        <path d="M9.99984 14.6667C10.1839 14.6667 10.3332 14.5174 10.3332 14.3333C10.3332 14.1492 10.1839 14 9.99984 14C9.81574 14 9.6665 14.1492 9.6665 14.3333C9.6665 14.5174 9.81574 14.6667 9.99984 14.6667Z" />
        <path d="M12.3333 14.6667C12.5174 14.6667 12.6667 14.5174 12.6667 14.3333C12.6667 14.1492 12.5174 14 12.3333 14C12.1492 14 12 14.1492 12 14.3333C12 14.5174 12.1492 14.6667 12.3333 14.6667Z" />
        <path d="M14.6668 14.6667C14.8509 14.6667 15.0002 14.5174 15.0002 14.3333C15.0002 14.1492 14.8509 14 14.6668 14C14.4827 14 14.3335 14.1492 14.3335 14.3333C14.3335 14.5174 14.4827 14.6667 14.6668 14.6667Z" />
        <path d="M16.9998 14.6667C17.1839 14.6667 17.3332 14.5174 17.3332 14.3333C17.3332 14.1492 17.1839 14 16.9998 14C16.8157 14 16.6665 14.1492 16.6665 14.3333C16.6665 14.5174 16.8157 14.6667 16.9998 14.6667Z" />
        <path d="M2.99984 17.3333C3.18393 17.3333 3.33317 17.1841 3.33317 17C3.33317 16.8159 3.18393 16.6667 2.99984 16.6667C2.81574 16.6667 2.6665 16.8159 2.6665 17C2.6665 17.1841 2.81574 17.3333 2.99984 17.3333Z" />
        <path d="M5.33333 17.3333C5.51743 17.3333 5.66667 17.1841 5.66667 17C5.66667 16.8159 5.51743 16.6667 5.33333 16.6667C5.14924 16.6667 5 16.8159 5 17C5 17.1841 5.14924 17.3333 5.33333 17.3333Z" />
        <path d="M7.66683 17.3333C7.85092 17.3333 8.00016 17.1841 8.00016 17C8.00016 16.8159 7.85092 16.6667 7.66683 16.6667C7.48273 16.6667 7.3335 16.8159 7.3335 17C7.3335 17.1841 7.48273 17.3333 7.66683 17.3333Z" />
        <path d="M9.99984 17.3333C10.1839 17.3333 10.3332 17.1841 10.3332 17C10.3332 16.8159 10.1839 16.6667 9.99984 16.6667C9.81574 16.6667 9.6665 16.8159 9.6665 17C9.6665 17.1841 9.81574 17.3333 9.99984 17.3333Z" />
        <path d="M12.3333 17.3333C12.5174 17.3333 12.6667 17.1841 12.6667 17C12.6667 16.8159 12.5174 16.6667 12.3333 16.6667C12.1492 16.6667 12 16.8159 12 17C12 17.1841 12.1492 17.3333 12.3333 17.3333Z" />
    </animated.svg>
    const timerSVG = <animated.svg style={{ ...cardStyle, boxShadow: "0px" }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C9.81567 0 9.66667 0.149 9.66667 0.333333V4.764C9.66667 4.94833 9.81567 5.09733 10 5.09733C10.1843 5.09733 10.3333 4.94833 10.3333 4.764V0.672667C15.3263 0.848667 19.3333 4.96533 19.3333 10C19.3333 15.1463 15.1463 19.3333 10 19.3333C4.85367 19.3333 0.666667 15.1463 0.666667 10C0.666667 7.51333 1.63333 5.17367 3.38867 3.412C3.519 3.28133 3.51833 3.07067 3.388 2.94067C3.25733 2.81133 3.04667 2.81133 2.91667 2.94133C1.03567 4.82867 0 7.33567 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0Z" />
        <path d="M9.5186 11.1774C9.72327 11.4591 10.0396 11.6361 10.3866 11.6631C10.4176 11.6657 10.4486 11.6667 10.4793 11.6667C10.7933 11.6667 11.0953 11.5427 11.3189 11.3187C11.5646 11.0731 11.6903 10.7334 11.6633 10.3864C11.6363 10.0394 11.4593 9.72306 11.1769 9.51773L6.86227 6.39673C6.73027 6.3014 6.54727 6.31607 6.43127 6.4314C6.31527 6.5474 6.30093 6.73007 6.3966 6.8624L9.5186 11.1774ZM10.7853 10.0574C10.9089 10.1474 10.9866 10.2864 10.9986 10.4387C11.0106 10.5907 10.9553 10.7397 10.8476 10.8477C10.7396 10.9554 10.5879 11.0104 10.4383 10.9987C10.2863 10.9871 10.1473 10.9091 10.0579 10.7864L8.1536 8.15406L10.7853 10.0574Z" />
    </animated.svg>
    const specialSVG = <animated.svg style={{ ...cardStyle, boxShadow: "0px" }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.069 0.805008C13.8806 0.805008 13.6865 0.829383 13.4928 0.877195L13.6419 1.48376C14.8234 1.19376 15.8537 2.09282 15.8537 3.21501C15.8537 5.84345 12.8606 7.78063 11.6128 8.14532L11.7881 8.74532C13.3731 8.28188 16.479 6.11782 16.4794 3.21501C16.4794 1.88595 15.3981 0.805008 14.069 0.805008Z" />
        <path d="M0.624688 3.21498C0.624688 2.09279 1.65469 1.19248 2.83656 1.48404L2.98625 0.877167C1.4225 0.492792 0 1.69779 0 3.21498C0 6.1181 3.10625 8.28217 4.69062 8.74529L4.86594 8.14529C3.61781 7.78029 0.624688 5.84342 0.624688 3.21498Z" />
        <path d="M9.32326 11.6328H7.15576C6.98326 11.6328 6.84326 11.7725 6.84326 11.9453V13.1312C6.84326 13.2253 6.88607 13.315 6.95951 13.3744C7.01545 13.4197 7.08482 13.4437 7.15576 13.4437C7.17764 13.4437 7.19982 13.4412 7.2217 13.4366C7.86545 13.2975 8.61389 13.2975 9.25732 13.4366C9.34982 13.4559 9.44607 13.4334 9.51951 13.3744C9.59295 13.315 9.63576 13.2259 9.63576 13.1312V11.9453C9.63576 11.7725 9.49607 11.6328 9.32326 11.6328ZM9.01076 12.7587C8.51014 12.6897 7.96889 12.6894 7.46826 12.7591V12.2578V12.2575H9.01076V12.7587Z" />
        <path d="M12.4571 18.2207H4.02148C3.84898 18.2207 3.70898 18.3604 3.70898 18.5332V19.6876C3.70898 19.8604 3.84898 20.0001 4.02148 20.0001H12.4571C12.6299 20.0001 12.7696 19.8604 12.7696 19.6876V18.5332C12.7696 18.3604 12.6299 18.2207 12.4571 18.2207ZM12.1446 19.3751H4.33398V18.8457H12.1446V19.3751Z" />
        <path d="M11.9163 13.8179H4.5625C4.39 13.8179 4.25 13.9576 4.25 14.1304V18.5332C4.25 18.706 4.39 18.8457 4.5625 18.8457H11.9163C12.0888 18.8457 12.2288 18.7057 12.2288 18.5332V14.1304C12.2288 13.9576 12.0891 13.8179 11.9163 13.8179ZM11.6038 18.2207H4.875V14.4429H11.6038V18.2207Z" />
        <path d="M10.6666 15.0676H5.8125C5.64 15.0676 5.5 15.2072 5.5 15.3801V17.2829C5.5 17.4557 5.64 17.5954 5.8125 17.5954H10.6666C10.8391 17.5954 10.9791 17.4554 10.9791 17.2829V15.3801C10.9791 15.2072 10.8394 15.0676 10.6666 15.0676ZM10.3541 16.9704H6.125V15.6926H10.3541V16.9704Z" />
        <path d="M13.7467 0.157188C13.6467 0.0559375 13.5136 0 13.3717 0H3.10706C2.96581 0 2.83268 0.055625 2.73268 0.15625C2.63268 0.257188 2.57799 0.390625 2.57862 0.5325C2.58081 0.745313 2.58924 0.954688 2.59893 1.19313C2.60674 1.38563 2.61768 1.57625 2.63049 1.76594C2.78643 4.08031 3.30206 6.195 4.12206 7.88156C4.24268 8.12969 4.37299 8.37281 4.50893 8.60344C5.13518 9.66688 5.85237 10.4297 6.64143 10.8713C6.72424 10.9175 6.82268 10.9234 6.90893 10.8891C6.98143 10.8916 7.06331 10.8916 7.15518 10.8916H9.57456C9.60987 10.9047 9.64706 10.9113 9.68425 10.9113C9.73675 10.9113 9.78925 10.8981 9.83706 10.8716C10.6258 10.4303 11.3433 9.66719 11.9696 8.60375C12.1046 8.37344 12.2346 8.13063 12.3558 7.88219C13.1764 6.19469 13.6921 4.07969 13.8477 1.76625C13.8602 1.57656 13.8711 1.38656 13.8789 1.1925C13.888 0.974063 13.8967 0.755313 13.8989 0.534063C13.9008 0.392188 13.8467 0.258438 13.7467 0.157188ZM13.2546 1.1675C13.2464 1.35469 13.2364 1.53969 13.2239 1.72406C13.0739 3.95813 12.5792 5.99281 11.7936 7.60844C11.6799 7.84219 11.5577 8.07063 11.4308 8.28656C10.8977 9.19188 10.2783 9.87375 9.63362 10.2663H7.15549C7.15612 10.2666 6.94549 10.2663 6.84518 10.2663C6.20018 9.87344 5.58081 9.19188 5.04799 8.28625C4.92049 8.06969 4.79831 7.84188 4.68487 7.60844C3.89956 5.99344 3.40518 3.95875 3.25456 1.72406C3.24237 1.54 3.23174 1.35469 3.22299 1.13938C3.21612 0.968438 3.20893 0.7975 3.20581 0.625H13.2724C13.2692 0.807188 13.2617 0.987188 13.2546 1.1675Z" />
        <path d="M11.9937 1.3532C11.9887 1.45132 11.9831 1.54382 11.9768 1.63538C11.8465 3.57163 11.4059 5.39663 10.7359 6.77413C10.6421 6.96663 10.5403 7.15726 10.4331 7.33976C10.0628 7.96851 9.64777 8.45663 9.2334 8.75163L9.5959 9.26101C10.0815 8.91538 10.5568 8.3607 10.9718 7.65695C11.0875 7.45976 11.1975 7.25476 11.2981 7.04757C12.0021 5.59913 12.4646 3.69195 12.6006 1.67663C12.6068 1.58132 12.6125 1.48663 12.6181 1.3857L11.9937 1.3532Z" />
        <path d="M9.32316 10.2666H7.1416C6.61566 10.2666 6.56348 11.2863 6.56348 11.2966C6.56348 11.3063 6.62473 12.2582 7.15566 12.2582H9.33754C9.85441 12.2582 9.91566 11.3063 9.91566 11.2966C9.91566 11.2863 9.86347 10.2666 9.32316 10.2666ZM9.2091 11.6332H7.26973C7.2291 11.5307 7.18941 11.3604 7.18816 11.2969C7.1891 11.221 7.23441 11.0122 7.2791 10.8916H9.19972C9.24472 11.0122 9.28972 11.221 9.29066 11.2963C9.28972 11.3604 9.24973 11.531 9.2091 11.6332Z" />
        <path d="M9.38885 12.8256C8.65885 12.6685 7.81979 12.6678 7.08947 12.8256C6.05416 13.0497 5.43604 13.5375 5.43604 14.13C5.43604 14.3028 5.57604 14.4425 5.74854 14.4425H10.7298C10.9023 14.4425 11.0423 14.3028 11.0423 14.13C11.0423 13.5372 10.4242 13.0497 9.38885 12.8256ZM6.28166 13.8175C6.47479 13.6722 6.79166 13.5297 7.22135 13.4366C7.86541 13.2975 8.61385 13.2975 9.25666 13.4366C9.68666 13.5297 10.0035 13.6722 10.1967 13.8175H6.28166Z" />
    </animated.svg>
    return (
        <Fragment>
            <animated.div style={cardStyle} className={props.mo ? 'mo-card-target' : 'card-target'}
                onClick={() => (setCurrent(props.name), setSearch(false))}
                onMouseOver={() => setHov(true)}
                onMouseLeave={() => setHov(!hov)}>
                <div className={props.mo ? 'mo-card-text' : 'card-text'}> {props.text}</div>
                <div className={props.mo ? 'mo-img-wrapper' : 'img-wrapper'}>{checkImg()}</div>
            </animated.div>
        </Fragment>
    )
}



export default function Menu() { // PARENT
    const [current, setCurrent, date, setDate, duration, setDuration, special, setSpecial, search, setSearch] = useContext(Global)
    const containerStyle = useSpring({ // menu elevator - currently using margin to move up/down. Could switch to transform when you know dimensions.
        // transform: search ? "translateY(-300px)" : 'translateY(0px)',
        top: search ? "0%" : "50%",
        marginTop: search ? "0px" : window.innerWidth < 601 ? "-175px" : "-60px",
    })
    const mobile = window.innerWidth < 601
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    function SearchButton(props) { // CHILD
        const [hov, setHov] = useState(false)
        const config = {
            friction: 20,
            mass: .5,
            tension: 400
        }
        const searchStyle = useSpring({
            transform: hov ? 'translateY(-2px)' : 'translateY(0px)',
            boxShadow: hov ? "0px 3px 6px rgba(189, 189, 189, 0.75)" : "0px 2px 4px rgba(189, 189, 189, 0.5)",
            config: config
        })
        return <animated.div style={searchStyle} className={props.mo ? 'mo-search-button' : 'search-button'}
            onClick={() => setSearch(true)}
            onMouseOver={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
        ><p>Search</p></animated.div>
    }


    return (
        <Fragment>
            {/* {mobile && search // when the menu changes to search mode render new 'copy component' 
                ?
                <animated.div style={containerStyle} className='mo-menu-container'>
                    <div className='mo-card-container'>
                        <MobileCardTarget text={date ? [months[date.getMonth()] + " " + date.getDate() + ", " + (date.getYear() + 1900)] : "Select Date"} name={"date"} /> ,
                        <MobileCardTarget text={duration ? duration : "Select Duration"} name={"duration"} /> ,
                        <MobileCardTarget text={special ? special : "Select Speciality"} name={"special"} />
                    </div>
                    <SearchButton mo={true} />
                </animated.div>
                : */}
            <animated.div style={containerStyle} className={mobile && search ? 'mo-menu-container' : 'menu-container'}>
                {window.innerWidth > 1000 && <div className='card-names-container'>
                    <div className='card-name'>Date</div>
                    <div className='card-name'>Duration</div>
                    <div className='card-name'>Specialities</div>
                </div>}
                <div className={mobile && search ? 'mo-card-container' : 'card-container'}>
                    <Card mo={mobile & search ? true : false} text={date ? [months[date.getMonth()] + " " + date.getDate() + ", " + (date.getYear() + 1900)] : "Select Date"} name={"date"} />
                    <Card mo={mobile & search ? true : false} text={duration ? duration : "Select Duration"} name={"duration"} />
                    <Card mo={mobile & search ? true : false} text={special ? special : "Select Speciality"} name={"special"} />
                </div>
                <SearchButton mo={mobile && search ? true : false} />
            </animated.div>



        </Fragment>
    )

}
