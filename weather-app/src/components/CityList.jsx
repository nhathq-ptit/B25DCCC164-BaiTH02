export default function CityList({ cities, selectedCity, onSelect }) {
  return (
    <div className="city-list">
      <h3>Danh sách thành phố</h3>
      <ul>
        {cities.map((city) => (
          <li 
            key={city.id} 
            className={selectedCity?.id === city.id ? 'active' : ''}
            onClick={() => onSelect(city)}
          >
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
}