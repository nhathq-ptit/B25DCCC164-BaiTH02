export const convertTemp = (temp, unit) => {
  if (unit === 'F') return ((temp * 9) / 5 + 32).toFixed(1);
  return temp.toFixed(1);
};

export const getWeatherInfo = (code) => {
  const icons = {
    clear: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="14" fill="%23FFD700"/><g stroke="%23FFD700" stroke-width="4" stroke-linecap="round"><line x1="32" y1="4" x2="32" y2="10"/><line x1="32" y1="54" x2="32" y2="60"/><line x1="4" y1="32" x2="10" y2="32"/><line x1="54" y1="32" x2="60" y2="32"/><line x1="12" y1="12" x2="16" y2="16"/><line x1="48" y1="48" x2="52" y2="52"/><line x1="12" y1="52" x2="16" y2="48"/><line x1="48" y1="12" x2="52" y2="16"/></g></svg>',
    cloudy: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="%23FFFFFF" d="M46 44H18c-5.5 0-10-4.5-10-10s4.5-10 10-10c1-5 5.5-9 11-9 6 0 11 4.5 11.8 10.2C46.3 26 50 29.5 50 34c0 5.5-4.5 10-10 10z"/></svg>',
    partlyCloudy: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="44" cy="20" r="10" fill="%23FFD700"/><path fill="%23FFFFFF" d="M42 48H16c-5.5 0-10-4.5-10-10s4.5-10 10-10c1-5 5.5-9 11-9 6 0 11 4.5 11.8 10.2C42.3 30 46 33.5 46 38c0 5.5-4.5 10-10 10z"/></svg>',
    rain: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="%23FFFFFF" d="M46 38H18c-5.5 0-10-4.5-10-10s4.5-10 10-10c1-5 5.5-9 11-9 6 0 11 4.5 11.8 10.2C46.3 20 50 23.5 50 28c0 5.5-4.5 10-10 10z"/><g stroke="%2364B5F6" stroke-width="3" stroke-linecap="round"><line x1="22" y1="42" x2="18" y2="52"/><line x1="32" y1="42" x2="28" y2="52"/><line x1="42" y1="42" x2="38" y2="52"/></g></svg>',
    snow: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="%23FFFFFF" d="M46 38H18c-5.5 0-10-4.5-10-10s4.5-10 10-10c1-5 5.5-9 11-9 6 0 11 4.5 11.8 10.2C46.3 20 50 23.5 50 28c0 5.5-4.5 10-10 10z"/><g fill="%23A0C4FF"><circle cx="22" cy="46" r="3"/><circle cx="32" cy="50" r="3"/><circle cx="42" cy="46" r="3"/></g></svg>',
    thunderstorm: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="%23FFFFFF" d="M46 38H18c-5.5 0-10-4.5-10-10s4.5-10 10-10c1-5 5.5-9 11-9 6 0 11 4.5 11.8 10.2C46.3 20 50 23.5 50 28c0 5.5-4.5 10-10 10z"/><path fill="%23FFD700" d="M34 38L24 50h8l-4 12 12-14h-8l6-10z"/></svg>'
  };

  if (code === 0) return { desc: 'Trời quang', iconUrl: icons.clear };
  if (code >= 1 && code <= 3) return { desc: 'Có mây', iconUrl: icons.partlyCloudy };
  if (code >= 45 && code <= 48) return { desc: 'Sương mù', iconUrl: icons.cloudy };
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return { desc: 'Mưa', iconUrl: icons.rain };
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return { desc: 'Tuyết', iconUrl: icons.snow };
  if (code >= 95) return { desc: 'Dông', iconUrl: icons.thunderstorm };
  
  return { desc: 'Nhiều mây', iconUrl: icons.cloudy };
};