const clock = document.querySelector(".clock");
/*
html 문서안에서 class 이름이 clock인 코드를 가지고 와서
상수 clock으로 설정해줍니다.


이 부분 입니다.
*/

const clockTitle = clock.querySelector("td");
/*
그 후  
<div class="clock">
    <h1>00:00:00</h1>
</div>
안에 있는 h1 태그를 상수 clockTitle로 설정해줍니다.
*/

function Time(){
    const date = new Date();
    const year = date.getFullYear(); // 연도
    const month = date.getMonth()+1 // '월'을 저장
    const day = date.getDate() // '일'을 저장
    const hour = date.getHours(); // '시'를 저장
    const minute = date.getMinutes(); // '분'을 저장
    // const second = date.getSeconds(); // '초'를 저장
    const weekly = ['일','월','화','수','목','금','토'];
    const week = weekly[date.getDay()] // '요일'을 저장
    clockTitle.innerText = `${year}년 ${month < 10 ? `0${month}` : month}월 ${day < 10 ? `0${day}` : day}일 ${week}요일 ${hour < 12 ? "오전" : "오후"} ${hour < 10 ? `0${hour}` : hour > 12 ? `${hour-12}` : hour}시 ${minute < 10 ? `0${minute}` : minute}분`;
                                                                // hour > 12 ? `${hour-12} : hour
}

function show(){
    Time();
    setInterval(Time,1000);
}
show();