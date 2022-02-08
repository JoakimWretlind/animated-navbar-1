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
    @media (min-width: 629px){
        display: none;
    }
`;

export const StaggerWrapper = styled.div`
    position: fixed;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100vh')};
    left: 0;
    height: 100vh;
    width: 100%;
    background: ${({ isOpen }) => (isOpen ? "#222" : "#fff")};
    transition: .8s;
    z-index: 1000;
    @media (min-width: 629px){
        overflow: hidden;    
        top: 0;
        left: 3rem;
        height: 6rem;
        padding-top: 1.4rem;
        background: #fff;
        width: 44rem;  
        display: flex;  
        justify-content: space-between;
        align-items: center;        
    }
`;

export const LineContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: .1rem solid hotpink;
    @media (min-width: 629px){
        width: 2.3rem;
        height: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        &:hover{
            cursor: pointer;
        }
     }
`;

export const Line = styled.div`    
    display: none;       
    @media (min-width: 629px){
        position: absolute;
        display: block;
        left: 0;
        height: 2.4rem;
        width: .1rem;
        background: #333;
        &.line1{
            left: 1rem;
        }
        &.line2{
            left: 2rem;   
        } 
    }
`;

export const NavLink = styled(Link)`
    position: relative;
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: 2.2rem;
    padding: 0 1rem;
    border-bottom: .1rem solid transparent;
    color: #fff;
    ::after{
        content: "";
        position: absolute;
        left: 0;
        bottom: -.3rem;
        height: .1rem;
        width: 0%;
        background-color: hotpink;
        transition: .3s ease-out;
    }
    &:hover{
        cursor: pointer;
        color: #555;
        ::after{
            width: 100%;
        }
    }
    &.active{
        font-weight: 800;
        letter-spacing: .5rem;
        border-bottom: .1rem solid green;
    }
    @media (min-width: 629px){
        position: absolute;
        top: .5rem;
        left: -12rem; 
        font-size: 1.2rem;
        color: #333;      
        transition: .25s ease-out;  
        &:hover{
            color: #ececec;
            cursor: pointer;
        }
        &.active{
            font-weight: 800;
            letter-spacing: .4rem;
            font-size: 1.1rem;
        }  
     } 
`;

export const LeftArrow = styled(BsArrowLeft)`
    position: absolute;
    font-size: 2rem;
    top: -3.5rem;
    left: 40rem;
    &:hover{
        cursor: pointer;
        color: #ececec;
    }
`;