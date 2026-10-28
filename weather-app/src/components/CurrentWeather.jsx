import { convertTemp, getWeatherInfo } from '../utils/weatherHelpers.js';

export default function CurrentWeather({ data, unit, onToggleUnit }) {
  const { iconUrl, desc } = getWeatherInfo(data.weather_code);
  
  return (
    <div className="current-weather">
      <h2>Thời tiết hiện tại</h2>
      <div className="weather-info">
        <img src={iconUrl} alt={desc} width="80" height="80" />
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{desc}</span>
      </div>
      <p>Nhiệt độ: {convertTemp(data.temperature_2m, unit)} °{unit}</p>
      <p>Độ ẩm: {data.relative_humidity_2m}%</p>
      <p>Tốc độ gió: {data.wind_speed_10m} km/h</p>
      <p>Cập nhật lúc: {new Date(data.time).toLocaleString('vi-VN')}</p>
      <button onClick={onToggleUnit}>Đổi sang °{unit === 'C' ? 'F' : 'C'}</button>
    </div>
  );
}