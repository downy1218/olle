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
    user-select: none;
    p{
        color: white;
        font-weight:bold;
        font-size:32px;
        margin-left:40px;
        pointer-events: none;
        user-select: none;
  
    }
`
type BooleanProp = {ishoverd:boolean};

export const RouteBox = styled.div<BooleanProp>`
    width:200px;
    height:100px;
    position:relative;
    z-index:5;
    margin-left:20px;
    h2{
        color: ${(props) => (props.ishoverd ? 'rgba(114, 162, 106, 1)' : 'white')};
        // -webkit-text-stroke: 1px rgba(53, 67, 97, 1);
        margin-top:5px;
    }
    h3{
        margin-top:40px;
        color:white;
        color: ${(props) => (props.ishoverd ? 'rgba(114, 162, 106, 1)' : 'white')};
    }
    p{
        margin-top:5px;
        color: ${(props) => (props.ishoverd ? 'black' : 'white')};
    }


`
//코스 카드 전체 div
export const ThreeWrapper = styled.div`
    display:flex;
    gap:70px;
    margin-left:80px;
    user-select: none;
    cursor:pointer;
    z-index:5;
    
`
export const Stick = styled.div`
    position:absolute;
    top:0;
    left:210px;
    width:1px;
    height:320px;
    background-color:white;
`

//마우스 올리면 올라오는 흰색카드
export const Card = styled.div`
    z-index:1;
    width:200px;
    height:350px;
    background-color:white;
    border-radius:0px 30px 0px 0px;
    // display:none;
    position:absolute;
    top:0;
    margin-top:190px;
    margin-right:40px;
    // right:45;
`