<template>
  <div>
    <user-name />
    <user-clock />
    <button @click="getCurrentWeather">getWeather</button>
    {{ currentWeather }}
    <air-pollution-indicator :airPollution="currentAirPollution" />
    <hr>
    <todo-list />
  </div>
</template>

<script>
import api from '@/api/weather';

// Components
import AirPollutionIndicator from '@/components/AirPollutionIndicator';
import UserClock from '@/components/UserClock';
import UserName from '@/components/UserName';
import TodoList from '@/components/TodoList';

export default {
  name: 'AppContent',
  components: {
    AirPollutionIndicator,
    UserClock,
    UserName,
    TodoList,
  },
  data() {
    return {
      currentWeather: null,
      currentAirPollution: null,
    }
  },
  mounted() {
    this.getCurrentWeather();
    this.getCurrentAirPollution();
  },
  methods: {
    async getCurrentWeather() {
      try {      
        const res = await api.getCurrentWeather();

        if (res.status === 200) {
          this.currentWeather = res.data;
        } else {
          throw new Error('invalid response');
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getCurrentAirPollution() {
      try {      
        const res = await api.getCurrentAirPollution();

        if (res.status === 200) {        
          this.currentAirPollution = res.data.ListAvgOfSeoulAirQualityService.row[0];
        } else {
          throw new Error('invalid response');
        }
      } catch (error) {
        console.error(error);
      }
    },
  }
}
</script>

<style lang="scss" scopped>
.list-group-item {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-bottom: 0;
  background: #eee;
  padding: 20px 40px;

  &:last-child {
    border-bottom: 1px solid #ddd;
  }

  strong {
    display: inline-block;
    width: 300px;

    & + span {
      padding-right: 10px;

    }
  }

  p {
    width: 110px;
    margin: 0;
  }

  & > div > span:first-child {
    display: inline-block;
    width: 30px;
  }
}
</style>