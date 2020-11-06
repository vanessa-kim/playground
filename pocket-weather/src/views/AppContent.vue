<template>
  <div>
    <button @click="getCurrentWeatherData">getWeather</button>
    {{ currentWeather }}
  </div>
</template>

<script>
import api from '@/api/weather';

export default {
  name: 'AppContent',
  data() {
    return {
      currentWeather: null,
    }
  },
  methods: {
    async getCurrentWeatherData() {
      try {      
        const res = await api.getCurrentWeather();
        this.currentWeather = res.data;
      } catch (error) {
        console.error(error);
      }
    },
  }
}
</script>

<style>

</style>