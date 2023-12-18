const API_KEY = "a9b66d02a634a68de8c5e5fc0b77aef2";


function onGeoSuccess(position) {
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data =>{
            const weather = document.querySelector("#weather")
            weather.innerText = `${data.weather[0].main} ${data.main.temp}`
        })
}

function onGeoFail() {
    alert("현재 위치를 받아 올 수 없습니다.")
}
//현재 위치 받아오기
//첫번째 인자 : 성공 시 함수 호출
//두번쨰 인자 : 실패 시 함수 호출
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail)