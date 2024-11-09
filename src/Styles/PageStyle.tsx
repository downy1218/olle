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

export const Core = styled.div`
    
`
