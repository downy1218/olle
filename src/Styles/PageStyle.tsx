import exp from 'constants';
import styled from 'styled-components';

export const Page = styled.div`
    height:700vh;
    background-color:rgba(83, 88, 76, 1);
    user-select:none;
`


export const Container = styled.div`
    width:100%;
    img{
        width:100%;
        object-fit:cover;
        position:relative;
        z-index:1;

    }
    h1{
        color:transparent;
        -webkit-text-stroke: 2px rgba(186, 187, 187, 0.66);
        font-size:150px;
        position:absolute;
        top:0;
        right:35px;
        z-index:2;
        margin-top:400px;  
    }
    h2{
        color:white;
        font-size:60px;
        position:absolute;
        top:0;
        left:35px;
        z-index:2;
        margin-top:400px;
        width:50px; 
    }
`

export const ScrollTexts = styled.div`
    position:absolute;
    top:1300px;
    font-size:50px;
    width:700px;
    height:400px;
    padding-top:100px;
    padding-left:200px;
    line-height:80px;
    color:rgba(233, 233, 233, 0.66);
    h2{
        margin-bottom:0;
    }
`

export const BasicInfo = styled.div`
    position:relative;
    margin-top:40px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    gap:20px;
    h2{
        font-size:15px;
        color:rgb(220,231,213);
    }
    p{
        font-size:20px;
        color:rgb(220,231,213);
    }
`
export const StarImg = styled.div`
    width:170px;
    height:200px;
    margin-left:1200px;
    margin-top:1400px;
    img{
        width:50px;
        height:50px;
    }
    p{
        width:180px;
        font-size:14px;
        font-weight:55px;
        color:rgb(220,141,108);
    }
`
export const CallInfo = styled.div`
    position:absolute;
    top:1200px;
    padding-left:200px;
    color:rgb(220,141,108);
`
export const GotoSix = styled.button`
    margin-left:200px;
    width:200px;
    height:50px;
    border:solid 0.5px black;
    border-radius:12px;
    background-color:rgba(83, 88, 76, 1);
    a{
        text-decoration: none;
        font-size:15px;
        color:black;
    }
`
export const Moments = styled.div`
    width:100%;
    margin-top:200px;
    display:flex;
    justify-content:center;
    user-select:none;
    position:relative;
    p{
        font-size:80px;
        color:rgb(231,199,148);
    }
`
export const PhotoContainer = styled.div`
    width:1000px;
    margin-top:120px;
    margin-left:220px;
    display:flex;
    flex-direction:column;
    img{
        width:200px;
        height:300px;
        object-fit:cover;
        border-radius:10px;
        opacity:0;
        transform:translateY(-50px;)
    }
`