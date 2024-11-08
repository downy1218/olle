import * as N from '../Styles/MainStyle';
import { useNavigate } from "react-router-dom";

function Nav():JSX.Element{
    const navigate = useNavigate();
    const gotoAbout = ()=>navigate('/About');
    const gotoContact = ()=>navigate('/Contact');

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