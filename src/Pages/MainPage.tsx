import * as M from '../Styles/MainStyle';
import Nav from '../Components/Nav';
function Main(): JSX.Element {
  return (
    <>
      <M.Container>

        <M.WhiteLineContainer>
          <M.WhiteLine>
            <Nav/>
            <div>
              <div>
                <h3>Course Introduction</h3>
                <p>코스 소개</p>
              </div>
              <div>
                <h3>주변 관광지</h3>
              </div>
              <div>
                <h3></h3>
              </div>
            </div>
          </M.WhiteLine>
        </M.WhiteLineContainer>

        <M.Title>Back</M.Title>
        <M.Title2>to OLLE.</M.Title2>

      </M.Container>
    </>
  )
};
export default Main;