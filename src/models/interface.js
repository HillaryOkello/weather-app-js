const UI = (() => {
  function setSearchData(apiData) {
    if (!apiData) return;

    const icon = `https://openweathermap.org/img/wn/${
      apiData.weather[0].icon
    }@2x.png`;
    const list = document.querySelector('.weather-section .cities');
    const li = document.createElement('li');
    li.classList.add('city');
    const weatherDetails = `
      <h2 class="city-name" data-name="${apiData.name},${apiData.sys.country}">
        <span>${apiData.name}</span>
        <sup>${apiData.sys.country}</sup>
      </h2>
      <div id="city-temp" class="city-temp">${Math.round(apiData.main.temp)}<sup>°C</sup>
      </div>
      <figure>
        <img class="city-icon" src=${icon} alt=${apiData.weather[0]['apiData.main']}>
        <figcaption>${apiData.weather[0].description}</figcaption>
        <figcaption>Humidity ${apiData.main.humidity}%</figcaption>
        <figcaption>Pressure ${apiData.main.pressure}hPa</figcaption>
      </figure>
      <button id="unit-button" class="btn-primary p-1">Fahrenheit</button>
    `;
    li.innerHTML = weatherDetails;
    list.appendChild(li);

    function temperatureConverter(tempVal) {
      tempVal = Math.round(apiData.main.temp);
      document.getElementById('city-temp').innerHTML = `${Math.round(tempVal * 1.8 + 32)}<sup>Fa</sup>`;
    }

    const fahrenButton = document.getElementById('unit-button');
    fahrenButton.onclick = temperatureConverter;
  }

  return { setSearchData };
})();

export default UI;