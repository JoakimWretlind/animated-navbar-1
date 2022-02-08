import { useState } from 'react'
import gsap from 'gsap';
import { Nav, NavUL, LinkContainer, NavLink, LineContainer, Line, LeftArrow } from './navbar.style';
import { navbarData } from './navbarData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(0);

    const handleOpen = () => {
        setIsOpen(isOpen)
        const tl = gsap.timeline();
        tl.to('.line-1', .5, { x: 0, y: '1rem', height: 0 }, 0)
        tl.to('.line-2', .6, { x: '6rem', y: '1rem', rotate: "90deg" }, 0)
        tl.to('.line-3', .7, { x: '12rem', y: '1rem', rotate: "90deg", opacity: 0 }, 0)

    }

    const handleClose = () => {
        setIsOpen(!isOpen)
        const tl = gsap.timeline()
        tl.to('.line-1', .5, { x: 0, y: 0, height: '2.4rem' }, 0)
        tl.to('.line-2', .6, { x: 0, y: 0, rotate: 0 }, 0)
        tl.to('.line-3', .7, { x: 0, y: 0, rotate: 0, opacity: 1 }, 0)
    }

    return (
        <>
            <Nav>
                <NavUL isOpen={isOpen}>
                    <LineContainer onMouseOver={handleOpen}>
                        <Line className='line-1' isOpen={isOpen} />
                        <Line className='line-2' isOpen={isOpen} />
                        <Line className='line-3' isOpen={isOpen} />
                    </LineContainer>
                    <LinkContainer isOpen={isOpen}>
                        {navbarData.map((item, index) => (
                            <>
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => setIsActive(index)}
                                    className={`${index === isActive && 'active'}`}
                                >
                                    {item.title}
                                </NavLink>
                            </>
                        ))}
                    </LinkContainer>
                    <LeftArrow
                        onClick={handleClose}
                    />
                </NavUL>
            </Nav>
        </>
    )
};

export default Navbar;
