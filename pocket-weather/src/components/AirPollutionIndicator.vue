<template>
  <div v-if="airPollution" class="air-pollution-indicator">
    <h5>Air pollution</h5>
    <p class="air-pollution-message">
      {{ airPollutionMessage }}
    </p>
    <p>
      <span>Fine Dust: {{ airPollution.PM10 }}</span>
      <span>{{ fineDustLevel }}</span>
    </p>
    <p>
      <span>Ultra Fine Dust: {{ airPollution.PM25 }}</span>
      <span>{{ ultraFineDustLevel }}</span>
    </p>
  </div>
  <div v-else>
    Unable to get air pollution level.
  </div>
</template>

<script>
export default {
  name: 'AirPollutionIndicator',
  props: {
    airPollution: {
      type: Object,
      required: true,
    },
  },
  computed: {
    airPollutionMessage() {
      if (this.fineDustLevel === 'very bad' || this.ultraFineDustLevel === 'very bad') {
        return 'Please refrain from outside activites.';
      } else if (this.fineDustLevel === 'bad' || this.ultraFineDustLevel === 'bad') {
        return 'Please wear a KF94 mask';
      } else {
        return 'Enjoy Fresh Air';
      }
    },
    fineDustLevel() {
      const fineDust = this.airPollution.PM10;
      if(151 < fineDust) {
        return 'very bad';
      } else if (81 < fineDust && fineDust < 150) {
        return 'bad';
      } else if (30 < fineDust && fineDust < 80) {
        return 'normal';
      } else {
        return 'good';  
      }
    },
    ultraFineDustLevel() {
      const ultraFineDust = this.airPollution.PM25;
      if(76 < ultraFineDust) {
        return 'very bad';
      } else if (36 < ultraFineDust && ultraFineDust < 75) {
        return 'bad';
      } else if (16 < ultraFineDust && ultraFineDust < 35) {
        return 'normal';
      } else {
        return 'good';  
      }
    },
  },
}
</script>

<style lang="scss" scopped>
.air-pollution-indicator {
  border: 1px solid #ddd;
  padding: 20px 40px 20px 0;
}

.air-pollution-message {
  display:block;
  background-color: #eee;
  border-radius:20px;
  padding: 0 20px;
  text-align: center;
}
</style>