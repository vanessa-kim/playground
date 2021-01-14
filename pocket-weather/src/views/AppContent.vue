<template>
  <div>
    <user-name />
    <user-clock />
    <button @click="getCurrentWeatherData">getWeather</button>
    {{ currentWeather }}
    <hr>
    <todo-list />
  </div>
</template>

<script>
import api from '@/api/weather';

// Components
import UserClock from '@/components/UserClock';
import UserName from '@/components/UserName';
import TodoList from '@/components/TodoList';

export default {
  name: 'AppContent',
  components: {
    UserClock,
    UserName,
    TodoList,
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