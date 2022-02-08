import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const NavUL = styled.ul`
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 50rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0 3rem;
`;

// this container so that the user won't 
// have to click just a line but an area
export const LineContainer = styled.div`
    position: relative;
    left: 3rem;
    width: 2rem;
    height: 2.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2000;
    &:hover{
       cursor: pointer;
    }
`;

export const Line = styled.div`    
    height: 2.4rem;
    width: ${({ isOpen }) => (isOpen ? '.1rem' : '.6rem')};
    border-left: .2rem solid #222;    
    &.line-1{
        left: 0rem;
    }
    &.line-2{
        left: .8rem;
    }
    &.line-3{
        left: 1.6rem;
    }
`;

export const LinkContainer = styled.div`
    position: absolute;
    left: ${({ isOpen }) => (isOpen ? "12rem" : "-10vw")};
    height: 100%;
    width: 100%;
    max-width: 34rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: -3rem;
    transition: .7s ease-out;
    background: burlywood;
`;

export const NavLink = styled(Link)`
    text-transform: uppercase;
    color: #222;
    font-size: 1.2rem;
    letter-spacing: 0.3rem;
    padding: .5rem;
    border-bottom: .1rem solid transparent;
    transition: .25s ease-in-out;
    &.active{
        border-bottom: .1rem solid #888;
        font-weight: 600;
        font-size: 1.1rem;
    }
    ::before, ::after{
        content: "";
        position: absolute;
        height: .1rem;
        width: 0;
        background-color: #888;
        transition: 0.25s ease-out;
    }
    ::after{
        left: -0;
        bottom: -.1rem;
    }
    
    &:hover{
        color: #666;
        ::after{
            width: 100%;
        }
        /*
        For top-line as well:
    ::before{
        right: 0;
        top: -10px;
    }
    */
        /*
        ::before{
            width: 100%
        }
        */
    }
`;

export const LeftArrow = styled(BsArrowLeft)`
    font-size: 2rem;
    opacity: 1;
    &:hover{
        cursor: pointer;
        color: #222;
    }
`;