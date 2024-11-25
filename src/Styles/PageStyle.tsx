import exp from 'constants';
import styled from 'styled-components';

export const Page = styled.div`
    height:1000vh;
    background-color:rgba(203, 226, 200, 1);
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
    font-size:50px;
    width:700px;
    height:400px;
    padding-top:400px;
    padding-left:200px;
    line-height:80px;
    color:rgba(233, 233, 233, 0.66);
`

export const BasicInfo = styled.div`
    margin-top:40px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    gap:20px;
    h2{
        color:rgba(102, 102, 102, 0.81);
    }
`
