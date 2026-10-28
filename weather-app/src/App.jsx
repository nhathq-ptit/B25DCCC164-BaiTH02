import { useState, useEffect } from 'react';
import { CITIES } from "./cities";
import CityList from './components/CityList';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import StatusScreen from './components/StatusScreen';
import './App.css';

export default function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState('unselected'); 
  const [unit, setUnit] = useState('C');

  const fetchWeather = async (city) => {
    setStatus('loading');
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Lỗi API');
      const data = await res.json();
      setWeatherData(data);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (selectedCity) fetchWeather(selectedCity);
  }, [selectedCity]);

  return (
    <div className="app-container">
      <div className="sidebar">
        <CityList cities={CITIES} selectedCity={selectedCity} onSelect={setSelectedCity} />
      </div>
      <div className="main-content">
        {status !== 'success' ? (
          <StatusScreen status={status} onRetry={() => fetchWeather(selectedCity)} />
        ) : (
          <>
            <CurrentWeather data={weatherData.current} unit={unit} onToggleUnit={() => setUnit(unit === 'C' ? 'F' : 'C')} />
            <Forecast data={weatherData.daily} unit={unit} />
          </>
        )}
      </div>
    </div>
  );
}