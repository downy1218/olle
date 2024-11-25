import * as R from '../Styles/PageStyle';
import '../Styles/PageCss.css';
import { useEffect, useRef, useState } from "react"
import { route6Info } from "../Mock/mock";
import { useNavigate } from 'react-router-dom';

function RouteSix(): JSX.Element {
    // const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<(HTMLParagraphElement|null)[]>([]); //각 텍스트 줄 배열

    const text: String[] = [
        "Mangjang Port 망장포구 Soesokkak쇠소깍 Gudumi구두미 Sogummak소금막 Sojeongbang Waterfall소정방폭포",
        "Lee Jung-seop Art Museum이중섭 미술관 Jejigioureum제지기오름 Jeongbang Waterfall정방폭포",
        "Geomeunyo Rest Area검은여 쉼터 Castle of Sora소라의 성 Seogwipo Maeil Olle Market서귀포 매일올레시장"
    ];


 

    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                const target = entry.target as HTMLParagraphElement;
                if (entry.isIntersecting){
                    target.classList.add('catch')
                }else{
                    target.classList.remove('catch')
                }
            })
        },{ threshold: 0.5 });
        textRef.current.forEach((el)=>{
            if(el){
                observer.observe(el) // 각 <p> 요소에 대해 observer를 설정
            }
        });
        return ()=>observer.disconnect();
    },[])



    return (
        <R.Page>
            <R.Container>
                <h1>Route 6</h1>
                <h2>Challenge the nature</h2>
                <img src={'/images/forest.gif'}></img>
            </R.Container>

            <R.BasicInfo>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h2>총 길이</h2>
                    <p>{route6Info.results[0].totalKM}Km</p>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h2>소요 시간</h2>
                    <p>{route6Info.results[0].totalTime}</p>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h2>난이도</h2>
                    <p>{route6Info.results[0].level}</p>
                </div>
            </R.BasicInfo>

            <R.CallInfo>
                <p>{route6Info.results[0].centerCall}</p>
                <p>{route6Info.results[0].openTime}</p>
            </R.CallInfo>

            <R.StarImg>
                <img src={'/images/star.svg'} className='rotateStar'></img>
                <p>{route6Info.results[0].wanju}</p>
            </R.StarImg>

            <R.ScrollTexts>
                <h2>you can stop by</h2>
                {text.map((line,index)=>{
                    return(
                        <p key={index} ref={(el) => (textRef.current[index] = el)} className='textLine'>
                            {line}
                        </p>
                    )
                })}
            </R.ScrollTexts>

            <R.GotoSix className='gotosix'>
                <a href='https://www.jejuolle.org/trail#/road/06' target='_blank'>»» 6 코스 보러가기</a>
            </R.GotoSix>

            <R.Moments>
                <p>The Moments You'll Meet"</p>
            </R.Moments>

            <R.PhotoContainer>
                <img src='/images/photo0.jpg'className='photo0'></img>
                <img src='/images/photo1.jpg'className='photo1'></img>
                <img src='/images/photo2.jpg'className='photo2'></img>
                <img src='/images/photo4.jpg'className='photo4'></img>
            </R.PhotoContainer>

            <R.GotoSix className='gotosix'>
                <p>첫 페이지로 돌아가기</p>
            </R.GotoSix>
        </R.Page>
    )
}
export default RouteSix;