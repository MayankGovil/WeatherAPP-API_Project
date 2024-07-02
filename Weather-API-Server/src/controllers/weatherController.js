const axios = require('axios');

const getWeather = async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ status: false, message: 'Latitude and longitude of city are required in decimal ' });
  }

  const latitude = parseFloat(lat);
  const longitude = parseFloat(lon);

  // Check if the parsed values are valid & within the acceptable range
  const isValidLatitude = !isNaN(latitude) && latitude >= -90 && latitude <= 90;
  const isValidLongitude = !isNaN(longitude) && longitude >= -180 && longitude <= 180;

  if (!isValidLatitude || !isValidLongitude) {
   
    return res.status(400).json({ status: false, message: 'Invalid latitude or longitude values.' });
  }

  // http://api.weatherapi.com/v1/current.json?key=7dc3d4f25ad4404cb4b101338242806&q=${lat},${lon}&aqi=yes
  const APIkey = '7dc3d4f25ad4404cb4b101338242806';
  const APIurl = `http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${latitude},${longitude}`;

  try {
    const response = await axios.get(APIurl);
    // console.log(response.data)
    // console.log(response.data.location);
    // console.log(response.data.current);

    const weatherData = response.data;

    const result = {
      timestamp: weatherData.location.localtime,
      cityName: weatherData.location.name,
      condition: weatherData.current.condition,
      temperature: {
        celcius: weatherData.current.temp_c,
        farenheit: weatherData.current.temp_f,
      },
    };

    res.status(200).json({ status: true, message: "weather data found successfully", data: result });

  } catch (error) {
    res.status(500).json({ status: false, message: 'Failed to fetch weather data' });
  }
};

module.exports = getWeather;