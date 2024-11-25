interface Stop {
    id:number;
    name:string;
    info:string;
}
interface RouteInfo{
    id:number;
    stop:Stop[];
    totalKM:number;
    totalTime:string;
    level:string;
    wanju:string;
    centerCall:string;
    openTime:string;
}
interface Route6Info{
    results:RouteInfo[];
}

export const route6Info : Route6Info = {
    "results":[
        {
            "id":6,
            "stop":[
                {   
                    "id":1,
                    "name":"쇠소깍",
                    "info":"바닷물과 민물이 합수하면서 절경을 빚어낸 관광 명소다. 쇠는 소, 소는 웅덩이, 깍은 끝이라는 의미를 담고 있다. 원래는 소가 누워 있는 형태라고 해서 쇠둔이라 불렀다. 민물과 바닷물이 만나 만들어낸 쇠소깍의 깊은 물에는 손으로 줄을 당겨 이동하는 세상에서 가장 느린 교통수단인 ‘테우’가 떠다닌다"
                    
                },
                {   
                    "id":2,
                    "name":"소정방폭포",
                    "info":"정방폭포에서 동쪽으로500m 정도 떨어진 곳에 위치한5m 높이의 물줄기. 여름철에는 물맞이 장소로도 성황을 이루는 아담한 폭포다"
                    
                },
                {   
                    "id":3,
                    "name":"이중섭 미술관",
                    "info":"이중섭 화백이 살던 집을 살리고 그 옆에 미술관을 지었다. 이중섭 작품은 많지 않지만, 부인과 주고받은 애절한 엽서들을 보는 재미가 쏠쏠하다. 미술관 마당에서는 노래 ‘서귀포칠십리’를 들을 수 있다"
                    
                }   
            ],
            "totalKM":10.1,
            "totalTime":"3 ~ 4 시간",
            "level":"초보",
            "wanju":"모든 코스의 시작, 중간, 종점 스태프를 찍은 후 사단법인 제주올레 사무국이 있는 제주올레 여행자센터에 방문하면 완주 인증 확인을 받을 수 있습니다",
            "centerCall":"여행자센터 : 서귀포시 중정로 22 064-762-2167",
            "openTime":"🕑연중무휴, 운영시간 08:00 ~ 22:00"

        }
    ]

}