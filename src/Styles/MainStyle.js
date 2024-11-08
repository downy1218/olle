import styled from 'styled-components';

export const Container = styled.div`
    background-image:url('/images/배경.jpg');
    width:100%;
    height:100vh;
    background-size:cover;
    object-fit:cover;
    background-repeat:no-repeat;
    background-position: center;
    position:relative;
`
export const WhiteLineContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
`
export const WhiteLine=styled.div`
    width:95%;
    height:75%;
    border: 10px solid white;
    border-radius:20px;
`

export const Title = styled.div`
    position:absolute;
    top:55%;
    left:70%;
    color:white;
    font-weight:bold;
    font-size:100px;
    pointer-events: none;
    user-select: none;
`
export const Title2 = styled.div`
    position:absolute;
    top:70%;
    left:70%;
    color:white;
    font-weight:bold;
    font-size:80px;
    pointer-events: none;
    user-select: none;
`
export const Nav = styled.nav`
    display:flex;
    gap:20px;
    margin-left:1000px;
    button{
        background:none;
        font-weight:bold;
        color:white;
        border:none;
        cursor:pointer;
        padding:10px;
        font-size:15px;
    }
    button:hover{
        color:rgba(114, 162, 106, 1);
    }

`
export const NavContainer=styled.div`
    display:flex;
    p{
        color: transparent;
        font-weight:bold;
        font-size:32px;
        margin-left:40px;
        pointer-events: none;
        user-select: none;
        -webkit-text-stroke: 0.3px #ffffff; 
    }
`

