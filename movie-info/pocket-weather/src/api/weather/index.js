import client from '@/api';

const ACCESS_TOKEN = {
  AIR_POLLUTION: '745847514e6a756d34374f51584d74',
};

export default {
  getCurrentWeather: () => client.get('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=36aa371bb1149221b8945e5ec347a771'),
  getCurrentAirPollution: () => client.get(`http://openAPI.seoul.go.kr:8088/${ACCESS_TOKEN.AIR_POLLUTION}/json/ListAvgOfSeoulAirQualityService/1/5/`),
};