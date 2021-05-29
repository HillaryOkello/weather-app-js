const api = (() => {
  function convertData(data) {
    const {
      main,
      name,
      sys,
      weather,
    } = data;
    return {
      main, name, sys, weather,
    };
  }

  async function getData(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=46d2f9067286bed0c31920c03211021a`;
    try {
      const response = await fetch(endpoint, { mode: 'cors' });
      if (!response.ok) throw new Error(`City ${city} not found`);
      const data = convertData(await response.json());
      return data;
    } catch (error) {
      Error(error);
      return null;
    }
  }
  return { getData };
})();

export default api;