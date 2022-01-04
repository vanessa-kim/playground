<template>
  <!-- static logo -->
  <div class="logo-group">
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="100">
      <!-- define gradient attribute -->
      <defs>
        <radialGradient  id="sunGradient1" cx="0.07" cy="0.07" r="0.9">
          <stop class="sun-stop1" offset="0%"/>
          <stop class="sun-stop2" offset="100%"/>
        </radialGradient >
        <linearGradient  id="sunlightGradient" cx="0.07" cy="0.07" r="0.9">
          <stop class="sun-stop1" offset="0%"/>
          <stop class="sun-stop2" offset="100%"/>
        </linearGradient >
        <radialGradient  id="cloudGradient" cx="0" cy="0" r="1.1">
          <stop class="cloud-stop1" offset="30%"/>
          <stop class="cloud-stop1" offset="60%"/>
          <stop class="cloud-stop2" offset="100%"/>
        </radialGradient >
      </defs>

      <!-- graphic element -->
      <!-- sunlight: starts from clock direction -->
      <circle cx="34" cy="78" r="3" width="100" height="100" fill="#ffd17f" />
      <circle cx="27" cy="64" r="4" width="100" height="100" fill="transparent" stroke="url(#sunlightGradient)" stroke-width="2.5"/>
      <line x1="16" x2="30" y1="48" y2="48" fill="#ffd17f" stroke="#ffd17f" stroke-width="8" stroke-linecap="round"/>
      <line x1="30" x2="35" y1="32" y2="32" fill="#ffd17f" stroke="#ffd17f" stroke-width="8" stroke-linecap="round"/>
      <circle cx="46" cy="15" r="4" width="100" height="100" fill="transparent" stroke="url(#sunlightGradient)" stroke-width="2.5"/>
      <line x1="78" x2="85" y1="10" y2="10" fill="#ffd17f" stroke="#ffd17f" stroke-width="8" stroke-linecap="round"/>
      <circle cx="96" cy="16" r="3" width="100" height="100" fill="#ffd17f" />

      <!-- sparkling cross -->
      <path d="M 59 10 H 67 M 62.85 14 V 6" stroke="#ffd17f" stroke-width="2" id="sparkleCross" />
      <path d="M 10.3 65 H 17.6 M 14 60.2 V 68" stroke="#ffd17f" stroke-width="2" />

      <!-- sun -->
      <circle cx="75" cy="56" r="36" width="90" height="90" fill="url(#sunGradient1)" />

      <!-- cloud -->
      <path 
        id="cloudAnimate"
        d="M 45 85
            A 30 30 -55 0 1 70 55
            A 30 30 -50 0 1 115 40
            V 100
            H 45
            Z"
        fill="url(#cloudGradient)"
      />
    </svg>
    <span>POCKET WEATHER</span>
  </div>
</template>

<script>
export default {
  name: 'WeatherLogoStatic',
}
</script>
<style>
/* logo font face */
@font-face {
  font-family: 'UNICAONE';
  font-display: swap;
  src: url('../assets/font/UNICAONE-REGULAR.TTF');
}

.logo-group {
  width: 120px;
  display: flex;
  flex-direction: column;
}

.logo-group span{
  font-family: 'UNICAONE', Verdana, sans-serif;
  display: block;
  text-align: right;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 1.6px;
  padding-right: 5px;
}

/* sun colors */
.sun-stop1 {
  stop-color: #fed07f;
}
.sun-stop2 {
  stop-color: #d9a292;
}

/* cloud colors */
.cloud-stop1 {
  stop-color: #f1f2f2;
}
.cloud-stop2 {
  stop-color: #e9dfee;
}
</style>