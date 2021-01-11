<template>
  <div>
    <user-name />
    <user-clock />
    <button @click="getCurrentWeatherData">getWeather</button>
    {{ currentWeather }}
  </div>
</template>

<script>
import api from '@/api/weather';

// Components
import UserClock from '@/components/UserClock';
import UserName from '@/components/UserName';

export default {
  name: 'AppContent',
  components: {
    UserClock,
    UserName,
  },
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