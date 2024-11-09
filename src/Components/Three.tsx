import { useState } from "react";
import * as T from '../Styles/MainStyle';

function Three():JSX.Element{
    const [hoverd,setHoverd] = useState<null|number>(null);

    const [info,setInfo] = useState([
        {
            id:1,
            route:'ROUTE 6',
            stamp:'섶섬 Seopseom Island',
            time:'3 ~ 4 hours',
            image: 'icon1.png'
        },
        {
            id:2,
            route:'ROUTE 7',
            stamp:'강정천 Gangjeongcheon',
            time:'5 ~ 6 hours',
            image:'icon2.png'
        },
        {
            id:3,
            route:'ROUTE 14-1',
            stamp:'탱자나무 Trifoliate Orange Tree',
            time:'3 ~ 4 hours',
            image:'icon3.png'
        }
    ]);


    return(
        <T.ThreeWrapper>
            {
                info.map((a,index)=>(
                    <div key={a.id}>
                        {hoverd === index && <T.Card />}
                        <T.RouteBox 
                        onMouseEnter={()=>setHoverd(index)} 
                        onMouseLeave={()=>setHoverd(null)}
                        ishoverd = {hoverd === index}> 
                            <img src={`/images/${a.image}`}></img>
                            <h2>{a.route}</h2>

                            <h3>Stamp</h3>
                            <p>{a.stamp}</p>
                            <h3>Time</h3>
                            <div style={{display:'flex'}}>
                                <p style={{marginRight:'50px'}}>{a.time}</p>
                                <p>▶</p>
                            </div>
                            {/* <T.Card style={{display: hoverd === index ? 'block':'none' }}/> */}
                            <T.Stick/>
                        </T.RouteBox>
                    </div>
                ))
            }
        </T.ThreeWrapper>
    )
}
export default Three;