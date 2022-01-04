<template>
  <div class="weather-indicator" v-if="weather">
    <div class="weather-seoul">
      <div class="weather-seoul-head">
        <h4><span>Republic of Korea</span>Seoul</h4>    
        <user-clock />
      </div>
      <div class="weather-seoul-body">
        <weather-logo-animate class="weather-indicator-illust" />
        <div class="temperature-group">
          <strong>{{ currentTemperature }}<span>℃</span></strong>
          <p>{{ weather.weather[0].main }}<span>|</span>{{ temperatureMessage }}</p>
        </div>
      </div>
    </div>
    <div class="weather-condition">
      <h5>Weather condition</h5>
      <p>Sensing temperature: {{ sensingTemperature }} ℃</p>
      <p>Humidity: {{ weather.main.humidity }}%</p>
      <p>Wind speed: {{ weather.wind.speed }} m/s</p>
    </div>
  </div>
</template>

<script>
import WeatherLogoAnimate from '@/components/WeatherLogoAnimate';
import UserClock from '@/components/UserClock';

export default {
  name: '',
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
  components: {
    WeatherLogoAnimate,
    UserClock,
  },
  computed: {
    currentTemperature() {
      const accurateTemperature = this.weather.main.temp - 273.15;
      return Math.round(accurateTemperature);
    },
    sensingTemperature() {
      const accurateTemperature = this.weather.main.feels_like - 273.15;
      return Math.round(accurateTemperature);
    },
    temperatureMessage() {
      if(this.currentTemperature <= -10) {
        return 'freezing cold';
      } else if( -10 < this.currentTemperature && this.currentTemperature <= 0) {
        return 'freezing';
      } else if( 0 < this.currentTemperature && this.currentTemperature <= 10) {
        return 'cold';
      } else if( 10 < this.currentTemperature && this.currentTemperature <= 20) {
        return 'mild';
      } else if( 20 < this.currentTemperature && this.currentTemperature <= 30) {
        return 'warm';
      } else if( 30 < this.currentTemperature && this.currentTemperature <= 35) {
        return 'hot';
      } else {
        return 'burning hot';
      }
    },
  },
}
</script>

<style lang="scss" scopped>
.weather-seoul {
  padding: 20px 40px 20px 0;
}

.weather-seoul-head {
  display: flex;
  justify-content: space-between;
  
  h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }
  
  span {
    display: block;
    font-size: 13px;
    font-weight: 200;
    line-height: 18px;
  }
}

.weather-seoul-body {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 20px;
}

.temperature-group {
  text-align: center;

  strong {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 48px;
    line-height: 36px;

    span {
      font-size: 16px;
      margin-bottom: 18px;
      padding-left: 4px;
    }
  }

  p {
    display: flex;
    align-items: center;
    font-size: 13px;

    span {
      display:block;
      padding: 0 10px;
      font-size: 8px;
      font-weight: 200;
      color: #ddd;
    }
  }
}

.weather-indicator-illust {
  border-radius: 25px;
  overflow: hidden;
  width: 105px;
  height: 100px;
  background: radial-gradient(farthest-corner at 20px 20px, #f1f1f2, #ddd4e4);
  padding-top: 5px;
}

.weather-condition {
  border-top: 1px solid #ddd;
}
</style>