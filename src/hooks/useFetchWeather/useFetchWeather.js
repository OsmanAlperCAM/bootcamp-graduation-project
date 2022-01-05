import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchWeather = (latitude,longitude) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=93e6af3d34168a51daaa149bd4bbcbd4`);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {loading, error, data,fetchData};
};

export default useFetchWeather;
