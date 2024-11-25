import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackBtn = styled.button`
  background-color:white;
  border:1px solid black;
  width:80px;
  height:30px;
  cursor:pointer;
  border-radius:12px;
  &:hover{
    border:1px solid green;
  }
`
const Abt = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:300px;
`

function About(): JSX.Element {
  const navigate = useNavigate();
  const gotoMain = ()=>navigate('/');
  return (
    <>
      <Abt>
        This website based on
        <a href="https://www.jejuolle.org/trail#/" target="_blank">  제주 올레 트레일</a>
        <h3>위 사이트에서 더 많은 루트를 살펴보세요</h3>
        <BackBtn onClick={gotoMain}>첫 페이지로</BackBtn>
      </Abt>
    </>
  )
}
export default About;