const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '995ec309d4mshca2792b1eee4021p13a3b2jsn600c2fe9d2cd',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};
fetch('https://open-weather13.p.rapidapi.com/city/london', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}

function conv(temp){
   return (Number(temp-32)*5/9).toFixed(1)
}

showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = conv(weatherData.main.temp);
    document.getElementById("Humidity").innerText = weatherData.main.humidity;
    document.getElementById("Wind").innerText = weatherData.wind.speed;
    
  }



setInterval(()=>{
    var time = document.querySelector("#time");
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day_night="AM"
    if(hours>12){
        day_night='PM'
        hours=hours-12;
    }
    if(hours <10){
        hours = '0' + hours;
    }
    if(minutes<10){
        minutes = '0'+minutes
    }
    if (seconds<10){
        seconds='0'+seconds
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
    });

const wileyetTN=[
    {name:"tunis",description:"Recommended place:",imgSrc:"tunis.jpg"},
    {name:"bizerte",description:"Recommended place:",imgSrc:"bizerte.jpj.jpg"},
    {name:"Nabeul",description:"Recommended place:",imgSrc:"nabeul.jpg"},
    {name:"Sousse",description:"Recommended place:",imgSrc:"sousse.jpg"},
    {name:"Mahdia",description:"Recommended place:",imgSrc:"mahdia.jpg"},
    {name:"Sfax",description:"Recommended place:",imgSrc:"sfax.jpg"},
    {name:"Gabes",description:"Recommended place:",imgSrc:"gabes.jpg"},
    {name:"Mednine",description:"Recommended place:",imgSrc:"medenin.jpg"},
    {name:"Tataouine",description:"Recommended place:",imgSrc:"tatawin.jpg"},
    {name:"Kebeli",description:"Recommended place:",imgSrc:"gbili.jpg"},
    {name:"tozeur",description:"Recommended place:",imgSrc:"tozor.jpg"},
    {name:"gafsa",description:"Recommended place:",imgSrc:"Gafsa.jpg"},
    {name:"kasserin",description:"Recommended place:",imgSrc:"kasserin.jpg"},
    {name:"ElKef",description:"Recommended place:",imgSrc:"kef.jpg"},
    {name:"Siliana",description:"Recommended place:",imgSrc:"siliana.jpg"},
    {name:"kairaouan",description:"Recommended place:",imgSrc:""},
    {name:"Sidibouzid",description:"Recommended place:",imgSrc:"sidibouzid.jpg"},
    {name:"jandouba",description:"Recommended place:",imgSrc:"jandouba.jpg"},
    {name:"monastir",description:"Recommended place:",imgSrc:"monastir.jpg"},
    {name:"zaghouan",description:"Recommended place:",imgSrc:"zaghouan.jpg"},
    {name:"beja",description:"Recommended place:", imgSrc:"beja.jpg"}
]

function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
      if (predicate(element)) {
        acc.push(element);
      }
    });
    return acc;
  }
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}
function info(x){
    var des= filter(wileyetTN,function(e){
        return e.name===x
    })
    console.log(des)
    
  
    $('#hama').append(`<p>${des[0].name}</p>`)
    $('#desc').append(`<p>${des[0].description}</p>`)
    $('#imges').append(`<img src=${des[0].imgSrc}>`)
}

