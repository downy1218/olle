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
function ExtraPage():JSX.Element{
    const navigate = useNavigate();
    const gotoMain = ()=>navigate('/');

    return(
        <Abt>
            <h2>업데이트 예정입니다 ..*</h2>
            <BackBtn onClick={gotoMain}>첫 페이지로</BackBtn>
        </Abt>
    )

}
export default ExtraPage;