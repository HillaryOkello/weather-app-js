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
      <div class="city-temp">${Math.round(apiData.main.temp)}<sup>°C</sup>
      </div>
      <figure>
        <img class="city-icon" src=${icon} alt=${apiData.weather[0]['apiData.main']}>
        <figcaption>${apiData.weather[0].description}</figcaption>
        <figcaption>Humidity ${apiData.main.humidity}%</figcaption>
        <figcaption>Pressure ${apiData.main.pressure}hPa</figcaption>
      </figure>
    `;
    li.innerHTML = weatherDetails;
    list.appendChild(li);
  }

  return { setSearchData };
})();

export default UI;