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
      <div id="city-temp-${apiData.name}" class="city-temp">${Math.round(apiData.main.temp)}<sup>°C</sup>
      </div>
      <figure>
        <img class="city-icon" src=${icon} alt=${apiData.weather[0]['apiData.main']}>
        <figcaption>${apiData.weather[0].description}</figcaption>
        <figcaption>Humidity ${apiData.main.humidity}%</figcaption>
        <figcaption>Pressure ${apiData.main.pressure}hPa</figcaption>
      </figure>
    `;
    const fahrenButton = document.createElement('button');
    fahrenButton.classList.add('btn-primary', 'p-1');
    fahrenButton.id = `unit-button-${apiData.name}`;
    fahrenButton.textContent = 'Fahrenheit';
    li.innerHTML = weatherDetails;
    li.appendChild(fahrenButton);
    list.appendChild(li);

    function temperatureConverter(tempVal) {
      tempVal = Math.round(apiData.main.temp);
      const tempConv = document.getElementById(`city-temp-${apiData.name}`);
      if (tempConv.textContent.includes('°C')) {
        tempConv.innerHTML = `${Math.round(tempVal * 1.8 + 32)}<sup>Fa</sup>`;
      } else {
        tempConv.innerHTML = `${Math.round(apiData.main.temp)}<sup>°C</sup>`;
      }
    }

    fahrenButton.onclick = temperatureConverter;
  }

  return { setSearchData };
})();

export default UI;