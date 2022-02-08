import { useState } from "react";
import gsap from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavToggler, LineContainer, Line, Nav, NavLink, LeftArrow } from "./navbar.style";
import { navbarData } from './navbarData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(0);

    // handle click from link
    const handleOpen = () => {
        setIsOpen(!isOpen)
        const tl = gsap.timeline()
        // animate links on a smaller screen
        if (window.innerWidth < 700) {
            tl.to('.link0', .8, { y: 125, ease: "back.out(2.3)" }, 0.6)
            tl.to('.link1', .8, { y: 185, ease: "back.out(2.3)" }, 0.5)
            tl.to('.link2', .8, { y: 245, ease: "back.out(2.3)" }, 0.4)
            tl.to('.link3', .8, { y: 305, ease: "back.out(2.3)" }, 0.3)
        }
        if (window.innerWidth > 700) {
            setIsOpen(isOpen)
            tl.to('.line1', 0, { x: 0 }, 0)
            tl.to('.line2', .5, { x: 55, y: '1rem', rotate: '90deg', scale: "0.8", ease: "ease-in-out" }, 0)
            tl.to('.line2', .3, { opacity: 0, ease: "ease-in-out" }, .5)
            tl.to('.line3', .8, { x: 250, y: '1rem', rotate: '90deg', scale: "0.8", opacity: 0, ease: "ease-in-out" }, 0)
            tl.to('.link0', .8, { x: 130, ease: "back.out(2.5)" }, 0.3)
            tl.to('.link1', .8, { x: 210, ease: "back.out(2.5)" }, 0.2)
            tl.to('.link2', .8, { x: 296, ease: "back.out(2.5)" }, 0.1)
            tl.to('.link3', .8, { x: 396, ease: "back.out(2.5)" }, 0)
            tl.to('.leftArrow', .8, { x: 0, y: '4.3rem', ease: 'back.out(2.3)' }, .6)
        }
    }

    const handleClose = () => {
        setIsOpen(!isOpen)
        const tl = gsap.timeline();
        tl.to(".line", .6, { x: 0, rotate: 0, y: 0, scale: 1, opacity: 1 }, .2)
        tl.to('.link', .7, { x: 0 }, 0)
        tl.to('.leftArrow', .6, { x: 0, y: '0', ease: "power4.out" }, 0)
    }

    const handleClick = () => {
        if (window.innerWidth < 700) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <>
            <NavToggler onClick={handleOpen} isOpen={isOpen}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </NavToggler>
            <LineContainer onMouseOver={handleOpen}>
                <Line className="line1 line" />
                <Line className="line2 line" />
                <Line className="line3 line" />
            </LineContainer>
            <div >
                <Nav isOpen={isOpen}
                    style={window.innerWidth < 700 ? { flexDirection: 'column' } : { flexDirection: 'row' }}
                >
                    {navbarData.map((item, index) => {
                        const { id, title, path } = item;
                        return (
                            // set clicked link as active and give each link a new className that can be animated separetly
                            // and one className for all links that can be animated as a group
                            <NavLink
                                key={id}
                                to={path}
                                // onClick={() => setIsActive(index), { handleOpen }}
                                onClick={() => setIsActive(index), () => handleClick(!isOpen)}
                                className={`${index === isActive && 'active'} ${'link' + index} ${'link'}`}
                            >
                                {title}
                            </NavLink>
                        )
                    })}
                </Nav>
            </div>
            <LeftArrow className="leftArrow" onClick={handleClose} />
        </>
    )
};

export default Navbar;