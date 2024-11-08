import * as N from '../Styles/MainStyle';
import { useNavigate } from "react-router-dom";

function Nav():JSX.Element{
    const navigate = useNavigate();
    const gotoAbout = ()=>navigate('/About');
    const gotoContact = ()=>navigate('/Contact');
    //서비스 버튼 누르면 모달창 나중에 만들기
    return(
        <N.NavContainer>
            <p>JEJU</p>
            <N.Nav>
                <button onClick={gotoAbout}>About</button>
                <button onClick={gotoContact}>Contact</button>
                <button>Services</button>
            </N.Nav>
        </N.NavContainer>
    )
}


export default Nav;