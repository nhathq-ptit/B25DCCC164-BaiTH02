import { convertTemp, getWeatherInfo } from '../utils/weatherHelpers.js';

export default function Forecast({ data, unit }) {
  return (
    <div className="forecast">
      <h2>Dự báo 7 ngày</h2>
      <div className="forecast-grid">
        {data.time.map((time, index) => {
          const { iconUrl, desc } = getWeatherInfo(data.weather_code[index]);
          return (
            <div key={index} className="forecast-item">
              <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>
                {new Date(time).toLocaleDateString('vi-VN', { weekday: 'short', day: 'numeric', month: 'numeric' })}
              </p>
              
              <img src={iconUrl} alt={desc} width="60" height="60" />
              
              <p>Cao: {convertTemp(data.temperature_2m_max[index], unit)}°</p>
              <p>Thấp: {convertTemp(data.temperature_2m_min[index], unit)}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}