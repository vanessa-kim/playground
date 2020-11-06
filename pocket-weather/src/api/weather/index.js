import client from '@/api';

export default {
  getCurrentWeather: () => client.get('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=36aa371bb1149221b8945e5ec347a771'),
};