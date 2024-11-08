import * as M from '../Styles/MainStyle';
import Nav from '../Components/Nav';
import Three from '../Components/Three';
function Main(): JSX.Element {
  return (
    <>
      <M.Container>

        <M.WhiteLineContainer>
          <M.WhiteLine>
            <Nav/>
            <Three/>
          </M.WhiteLine>
        </M.WhiteLineContainer>

        <M.Title>Back</M.Title>
        <M.Title2>to OLLE.</M.Title2>

      </M.Container>
    </>
  )
};
export default Main;