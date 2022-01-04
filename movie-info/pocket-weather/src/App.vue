<template>
  <div id="app">
    <router-view></router-view>
    <hr>
    <router-link to="/">Home</router-link>
    <hr>
    <router-link to="/logo">staticLogo</router-link>
    <hr>
    <router-link to="/logoAnimate">AnimateLogo</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
