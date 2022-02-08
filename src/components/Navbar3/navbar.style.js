import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

export const NavToggler = styled.div`
    position: absolute;
    display: block;
    color: ${({ isOpen }) => (isOpen ? "#fff" : "#000")};
    top: 3rem;
    left: 2rem;
    font-size: 2rem;
    transition: .4s ease-out;
    z-index: 2000;
    &:hover {
        cursor: pointer;
        color: ${({ isOpen }) => (isOpen ? "#555" : "#ececec")};
    }
    @media (min-width: 700px){
        display: none;
    }
`;

export const LineContainer = styled.div`
    position: fixed;
    top: 2rem;
    left: 3rem;
    height: 2.6rem;
    width: 3rem;
    padding: .2rem .5rem;
    display: none;
    @media (min-width: 700px){    
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 2000;
        &:hover{
            cursor: pointer;
        }
    }
`;

export const Line = styled.div`
    height: 2.2rem;
    width: .1rem;
    background: #333;
`;

export const Nav = styled.nav`    
    position: fixed; 
    top: ${({ isOpen }) => (isOpen ? '0' : '-100vh')};
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${({ isOpen }) => (isOpen ? "#222" : "#fff")}; 
    transition: .8s;
    z-index: 100;
    @media (min-width: 700px){
        overflow: hidden;
        padding-top: 0;
        top: 1.7rem;
        left: 4rem;    
        height: 3rem;
        width: 45rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: transparent;
    }
`;

export const NavLink = styled(Link)`
    position: absolute;
    top: -10rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: 2.2rem;
    padding: 3.6rem .2rem .4rem;
    color: #fff;
    border-bottom: .1rem solid transparent;
    &.active{
            border-bottom: .1rem solid #fff;
            letter-spacing: .4rem;
        }
    @media (min-width: 700px){
        position: absolute;
        top: .5rem;
        left: -12rem; 
        padding: .2rem .1rem;
        font-size: 1.2rem;
        color: #333;             
        &:hover{
            color: hotpink;
            cursor: pointer;
            border-bottom: .1rem solid hotpink;
        }
        &.active{
            border-bottom: .1rem solid #333;
        } 
     }      
`;

export const LeftArrow = styled(BsArrowLeft)`
    position: absolute;
    font-size: 1.6rem;
    top: -2rem;
    left: 43rem;
    z-index: 200;
    visibility:hidden;
    @media (min-width: 700px){
        visibility:visible;
        &:hover{
            cursor: pointer;
            color: #ececec;
        }
    }
`;