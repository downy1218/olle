import * as R from '../Styles/PageStyle';
import '../Styles/PageCss.css';



function RouteSix(): JSX.Element {
    return (
        <R.Page>
            <R.Container>
                <h1>Route 6</h1>
                <h2>Challenge the nature</h2>
                <img src={'/images/forest.gif'}></img>
            </R.Container>
            <R.Core>
                <h1>You Can Stop by</h1>
                <span className='SlideFont'>

                </span>
                
            </R.Core>
        </R.Page>
    )
}
export default RouteSix;