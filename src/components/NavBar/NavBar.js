import React from 'react'
import {gsap} from 'gsap'
import './css/NavBar.css'


const NavBar = () => {
    return (
        <div>
           <div className='' id="navbarContainer">
                <div id="navbar">
                    <div id="bubbleWrapper">
                        <a href="#" id="bubble1" class="bubble"><span className="icon">1</span></a>
                        <a href="#" id="bubble2" class="bubble"><span className="icon">2</span></a>
                        <a href="#" id="bubble3" class="bubble"><span className="icon">3</span></a>
                        <a href="#" id="bubble4" class="bubble"><span className="icon">4</span></a>
                    </div>
                    <div id="menuWrapper">
                        <div id="menu1" className="menuElement" onClick={move('1', '12.5%', '#ffcc80')}>
                        1</div>
                        <div id="menu2" className="menuElement" onClick={move('2', '37.5%', '#81d4fa')}>
                        2</div>
                        <div id="menu3" className="menuElement" onClick={move('3', '62.5%', '#c5e1a5')}>
                        3</div>
                        <div id="menu4" className="menuElement" onClick={move('4', '87.5%', '#ce93d8')}>
                        4</div>
                    </div>
                </div>
                <div id="bgWrapper">
                    <div id="bg"></div>
                    <div id="bgBubble"></div>
                </div>
            </div>
            <svg width="0" height="0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15"
                            result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
    
}
const move = (id, position, color) => {
    let tl = gsap.timeline();
    tl.to("#bgBubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
      .to("#bubble1", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
      .to("#bubble2", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
      .to("#bubble3", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
      .to("#bubble4", {duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out",}, 0)
      .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
      .to("#bgBubble", {duration: 0.2, left: position, ease: "ease-in-out"}, 0.1)
      .to("#bgBubble", {duration: 0.15, bottom: "-50px", ease: "ease-out"}, '-=0.2')
      .to(`#bubble${id}`, {duration: 0.15, y: "0%", opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', ease: "ease-out"}, '-=0.1')
      .to(`#bubble${id}> span`, {duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out"}, '-=0.1')
      .to("#navbarContainer", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
      .to("#bg", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
      .to("#bgBubble", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
}

export default NavBar




