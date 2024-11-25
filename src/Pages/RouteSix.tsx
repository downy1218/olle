import * as R from '../Styles/PageStyle';
import '../Styles/PageCss.css';
import { useEffect, useRef, useState } from "react"
import { route6Info } from "../Mock/mock";


function RouteSix(): JSX.Element {
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
        },{ threshold: 0.8 });
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


            <R.ScrollTexts>
                {text.map((line,index)=>{
                    return(
                        <p key={index} ref={(el) => (textRef.current[index] = el)} className='textLine'>
                            {line}
                        </p>
                    )
                })}
            </R.ScrollTexts>

        </R.Page>
    )
}
export default RouteSix;