const API_KEY = "9730934379c4806648360d3cc00d8894";

function onGeoOk(position){

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch함수: 서버에 데이터 요청
    // .then 서버에서 데이터를 가져오는 작업이 완료된 이후 then에 있는 함수 실행 
    // response 객체는 fetch를 통해서 요청했을 때 웹서버가 응답한 결과를 담고있는 객체데이터
    fetch(url)
        .then(response => response.json())
        .then(data =>{
        const city_name = document.getElementById("city_info") // 도시 이름
        const cur_temp = document.getElementById("cur_temp_info") // 현재 온도

        console.log(city_name)
        
        // 변수 정리
        // 1. data.name: 도시 이름
        // 2. data.main.temp: 현재 온도

        city_name.innerText = data.name; // 도시 이름
        cur_temp.innerText = `${data.main.temp.toFixed(1)}℃` // 현재 온도

        // 아이콘 코드
        // 아이콘 코드에 따른 i값 class 변화
        // icon className 수정
        // className은 태그가 가진 class 초기화 후 변경
        let cur_weather_icon = data.weather[0].icon
        if (cur_weather_icon === "01d" || cur_weather_icon === "01n"){ // 01d claer sky 맑은 해  wi-day-sunny
            let weather_icon = document.getElementById("weather_icon_info")
            weather_icon.className = `wi`
            weather_icon.classList.add(`wi-day-sunny`)
            
            // 배경화면 바꾸는 코드
            $("#backimg").css({"background":"linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ), url(static/img/sunny.jpg) no-repeat center center fixed", '-webkit-background-size' : 'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover'});

        } else if(cur_weather_icon === "02d"  || cur_weather_icon === "02n") { // 02d few clouds 구름 낀 해 wi-day-cloudy
            let weather_icon = document.getElementById("weather_icon_info")
            weather_icon.className = `wi`
            weather_icon.classList.add(`wi-day-cloudy`)
            
            $("#backimg").css({"background":"linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ), url(static/img/sunny.jpg) no-repeat center center fixed", '-webkit-background-size' : 'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover'});

        } else if(cur_weather_icon === "03d" || cur_weather_icon === "03n") { // 03d scattered clouds 구름 wi-cloud
            let weather_icon = document.getElementById("weather_icon_info")
            weather_icon.className = `wi`
            weather_icon.classList.add(`wi-cloud`)
            
            $("#backimg").css({"background":"linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ), url(static/img/cloudy.jpg) no-repeat center center fixed", '-webkit-background-size' : 'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover'});

        } else if(cur_weather_icon === "04d" || cur_weather_icon === "04n") { // 04d broken clouds 먹구름 wi-cloudy
            let weather_icon = document.getElementById("weather_icon_info")
            weather_icon.className = `wi`
            weather_icon.classList.add(`wi-cloudy`)
            
            $("#backimg").css({"background":"linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ), url(static/img/cloudy.jpg) no-repeat center center fixed", '-webkit-background-size' : 'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover'});
        } else if(cur_weather_icon === "09d" || cur_weather_icon === "09n") { // 09d shower rain 구름 비 wi-rain
            let weather_icon = document.getElementById("weather_icon_info")
            weather_icon.className = `wi`
            weather_icon.classList.add(`wi-rain`)
            
            $("#backimg").css({"background":"linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ), url(static/img/rain.jpg) no-repeat center center fixed", '-webkit-background-size' : 'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover'});
        } else if(cur_weather_icon === "10d" || cur_weather_icon === "10n") { // 10d 비 (해, 비) wi-umbrella
            let weather_icon = document.getElementById("weather_icon_info")
            weather_icon.className = `wi`
            weather_icon.classList.add(`wi-umbrella`)
            
            $("#backimg").css({"background":"linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ), url(static/img/rain.jpg) no-repeat center center fixed", '-webkit-background-size' : 'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover'});
        } else if(cur_weather_icon === "11d" || cur_weather_icon === "11n") { // 11d 번개, 천둥 wi-lightning
            let weather_icon = document.getElementById("weather_icon_info")
            weather_icon.className = `wi`
            weather_icon.classList.add(`wi-lightning`)
            
            $("#backimg").css({"background":"linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ), url(static/img/rain.jpg) no-repeat center center fixed", '-webkit-background-size' : 'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover'});
        } else if(cur_weather_icon === "13d" || cur_weather_icon === "13n") { // 13d 눈 wi-snowflake-cold
            let weather_icon = document.getElementById("weather_icon_info")
            weather_icon.className = `wi`
            weather_icon.classList.add(`wi-snowflake-cold`)
            
            $("#backimg").css({"background":"linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ), url(static/img/snow.jpg) no-repeat center center fixed", '-webkit-background-size' : 'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover'});
        } else if(cur_weather_icon === "50d"  || cur_weather_icon === "50n") { // 50d mist 안개 wi-dust
            let weather_icon = document.getElementById("weather_icon_info")
            weather_icon.className = `wi`
            weather_icon.classList.add(`wi-dust`)
            
            $("#backimg").css({"background":"linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ), url(static/img/cloudy.jpg) no-repeat center center fixed", '-webkit-background-size' : 'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover'});
        }
            });
        }




// getCurrentPosition이 실패했을 때 함수
function onGeoError(){
    alert("위치를 찾을 수 없어 날씨를 제공할 수 없습니다.")
}

// 유저의 위치를 주는 함수
// 브라우저에서 위치 좌표를 줌
// getCurrentPosition은 성공했을 때 함수, 실패했을 때 함수가 필요
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)