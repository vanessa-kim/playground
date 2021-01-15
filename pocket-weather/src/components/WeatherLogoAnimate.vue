<template>
  <!-- Animation logo: add an animation to the logo -->
  <div class="logo-group">
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="100">
      <!-- define gradient attribute -->
      <defs>          
        <radialGradient  id="sunGradient" cx="0.07" cy="0.07" r="0.9">
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
      <path fill="#1EB287" stroke="#ffd17f" stroke-width="2" stroke-linecap="round">
        <animate 
          attributeName="d" 
          dur="1000ms" 
          repeatCount="indefinite"
          keyTimes="0;
                    0.33;
                    1"
          calcMode="spline" 
          keySplines="0,0,1,1;
                      0,0,0,1;"
          values="M 59 10 
                  H 67 
                  M 62.85 14 
                  V 6;
                  
                  M 61 10
                  H 65
                  M 62.85 12 
                  V 8;
                  
                  M 59 10 
                  H 67 
                  M 62.85 14 
                  V 6;"
        />
      </path>
      <path fill="#1EB287" stroke="#ffd17f" stroke-width="2" stroke-linecap="round">
        <animate 
          attributeName="d" 
          dur="1000ms" 
          repeatCount="indefinite"
          keyTimes="0;
                    0.33;
                    1"
          calcMode="spline" 
          keySplines="0,0,1,1;
                      0,0,0,1;"
          values="M 10.3 65 
                  H 17.6 
                  M 14 61 
                  V 68;
                  
                  M 12.3 65
                  H 15.6
                  M 14 63 
                  V 67;
                  
                  M 10.3 65 
                  H 17.6 
                  M 14 61 
                  V 68;"
        />
      </path>

      <!-- sun -->
      <circle cx="75" cy="56" fill="url(#sunGradient)">
        <animate 
          attributeName="r" 
          dur="2300ms"
          repeatCount="indefinite"
          keyTimes="0;
                    0.33;
                    1"
          calcMode="spline" 
          keySplines="0,0,1,1; 0,0,1,1;"
          values="33; 36; 33;"
        />
      </circle>

      <!-- cloud -->
      <path fill="url(#cloudGradient)">
        <animate 
          attributeName="d" 
          dur="2300ms"
          repeatCount="indefinite"
          keyTimes="0;
                    0.33;
                    1"
          calcMode="spline" 
          keySplines="0,0,1,1; 0,0,1,1;"
          values="M 45 85
                  A 30 30 -55 0 1 72 58
                  A 30 30 -55 0 1 115 40
                  V 120
                  H 45
                  Z;

                  M 45 85
                  A 30 30 -55 0 1 70 55
                  A 30 30 -50 0 1 115 40
                  V 100
                  H 45
                  Z;

                  M 45 85
                  A 30 30 -55 0 1 72 58
                  A 30 30 -55 0 1 115 40
                  V 120
                  H 45
                  Z;"
        />
      </path>

      <!-- moving star -->
      <g transform="matrix(1, -0.7, 0.6, 0.2, 110, 90)">
        <path d="M 0,70 
                  A 65,70 0 0, 0 65,0 
                  5,5 0 0,1 75,0 75,70 0 0,1 0,70
                  Z" fill="#FFF">
          <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="3.485s" repeatCount="indefinite" />
        </path>
      </g>
      <g transform="matrix(1, -0.7, 0.6, 0, 110, 90)">
        <path d="M 0,70 
                  A 65,70 0 0, 0 65,0 
                  5,5 0 0,1 75,0 75,70 0 0,1 0, 70
                  Z" fill="#FFF">
          <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="3.45s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
    <!-- <span>POCKET WEATHER</span> -->
  </div>
</template>

<script>
export default {
  name: 'WeatherLogoAnimate',
}
</script>

<style lang="scss" scopped>
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

  svg {  
    margin-left: -5px;
  }
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