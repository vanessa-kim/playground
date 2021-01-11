<template>
  <!-- This Clock component gets the time in user's region -->
  <div>
    {{ currentTime }}
  </div>
</template>

<script>
export default {
  name: 'UserClock',

  data() {
    return {
      currentTime: null,
    }
  },

  mounted() {
    this.initTime();
  },
  
  methods: {
    initTime() {
      this.currentTime = 'AM 00:00:00';
      setInterval(this.getCurrentTime, 1000);
    },

    timeFormmatter(time) {
      return time < 10 ? `0${time}` : time;
    },

    getCurrentTime() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const merdiem = hours < 12 ? 'AM' : 'PM';

      this.currentTime = `${merdiem} ${this.timeFormmatter(hours)}:${this.timeFormmatter(minutes)}:${this.timeFormmatter(seconds)}`;
    },
  },
}
</script>

<style>

</style>