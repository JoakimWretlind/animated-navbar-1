import { useState } from "react";
import gsap from "gsap";
import { FaBars, FaTimes } from "react-icons/fa"
import { NavToggler, StaggerWrapper, LineContainer, Line, NavLink, LeftArrow } from "./navbar.style";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(0)

    const handleOpen = () => {
        setIsOpen(isOpen)
        if (window.innerWidth > 629) {
            const tl = gsap.timeline();
            tl.to(".line0", 0, { x: 0 }, 0)
            tl.to("#p0", .8, { x: 130, ease: "back.out(2.5)" }, 0.3)
            tl.to(".line1", .8, { x: 75, y: '1rem', rotate: '90deg', scale: "0.8", opacity: 0, ease: "ease-in-out" }, 0)
            tl.to("#p1", .8, { x: 210, ease: "back.out(2.5)" }, 0.2)
            tl.to('.line2', .8, { x: 300, y: '1rem', rotate: '90deg', scale: "0.8", opacity: 0, ease: "ease-in-out" }, 0)
            tl.to("#p2", .8, { x: 296, ease: "back.out(2.5)" }, 0.1)
            tl.to("#p3", .8, { x: 396, ease: "back.out(2.5)" }, 0)
            tl.to('.arrow', .8, { x: 0, y: '+6rem', opacity: 1, ease: "back.out(2.3)" }, .6)
        }
    };

    const handleClose = () => {
        setIsOpen(!isOpen)
        const tl = gsap.timeline();
        tl.to(".line", .8, { x: 0, rotate: 0, y: 0, scale: 1, opacity: 1 }, .3)
        tl.to('#p0, #p1, #p2, #p3', .6, { x: 0 }, 0)
        tl.to('.arrow', 1, { x: 0, y: '-6rem', opacity: 0 }, 0.2)
    };

    const handleLinkClick = () => {
        if (window.innerWidth < 630) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <>
            <NavToggler onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </NavToggler>
            <StaggerWrapper isOpen={isOpen}>
                <LineContainer onMouseOver={handleOpen}  >
                    <Line className="line0 line" />
                    <NavLink to="/" id="p0" onClick={() => setIsActive(0), handleLinkClick} className={`${0 === isActive && 'active'}`}>home</NavLink>
                    <Line className="line1 line" />
                    <NavLink to="/about" id="p1" onClick={() => setIsActive(1), handleLinkClick} className={`${1 === isActive && 'active'}`}>about</NavLink>
                    <Line className="line2 line" />
                    <NavLink to="/models" id="p2" onClick={() => setIsActive(2), handleLinkClick} className={`${2 === isActive && 'active'}`}>models</NavLink>
                    <NavLink to="/contact" id="p3" onClick={() => setIsActive(3), handleLinkClick} className={`${3 === isActive && 'active'}`}>contact</NavLink>
                </LineContainer>
                <LeftArrow className="arrow" onClick={handleClose} />
            </StaggerWrapper>
        </>
    )
};

export default Navbar;