const key = "9779a5c52595014888e476004b7ba833";
$("#searchBtn").click(function () {
  if ($("#yourCityInp").val() != "") {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${$("#yourCityInp").val()}&appid=${key}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        let humidity = data.main.humidity+"%";
        let temp = Math.floor(data.main.temp-273);
        let widnSpeed = data.wind.speed+"m/s";
        let weatherStatus = data.weather[0].main;
        let falgUrl = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
        $("#flag").css("background-image", `url(${falgUrl})`);
        $("#country").text(data.name);
        $("#temp").text(temp);
        $("#humidity").text(humidity);
        $("#windSpeed").text(widnSpeed);
        $("#weatherStatus").text(weatherStatus);
        if (weatherStatus == "Clouds"){
          $("#weatherStausIcon").css("background-image", `url(./img/Cloudy.png)`);
          $("#weatherStausIcon").css("height", `90px`);
        } else if(weatherStatus == "Clear"){
          $("#weatherStausIcon").css("background-image", `url(./img/sunny.png)`);
          $("#weatherStausIcon").css("height", `113px`);
        } else if(weatherStatus == "Snow"){
          $("#weatherStausIcon").css("background-image", `url(./img/snowy.png)`);
          $("#weatherStausIcon").css("height", `85px`);
        } else if(weatherStatus == "Rain"){
          $("#weatherStausIcon").css("background-image", `url(./img/rainy.png)`);
          $("#weatherStausIcon").css("height", `85px`);
        }
        console.log(humidity);
        console.log(temp);
        console.log(widnSpeed);
        console.log(weatherStatus);
        console.log(falgUrl);
      });
  }
});
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', ],
    datasets: [{
      data: [2, 5, 3, 5, ],
      borderWidth: 1,
      label: 'Temperature',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});