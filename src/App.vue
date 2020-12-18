<template>
  <div id="app">
    <div class="main">
      <svg-icon iconClass="undraw_noted_pc9f" class="main-svg"></svg-icon>
    </div>
    <div class="left-logo">
      <svg-icon iconClass="undraw_Mobile_app_p3ts"></svg-icon>
    </div>
    <div class="right-logo">
      <svg-icon iconClass="undraw_Mobile_application_mr4r"></svg-icon>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'
import Logo from '@/assets/logo.png'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      a: 10,
      b: 20,
      NODE_ENV: process.env.NODE_ENV,
      Logo
    }
  },
  created() {
    console.log(this.a)
  }
}
</script>

<style lang="scss">
@import '~@/styles/color.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;

  .left-logo {
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .right-logo {
    position: fixed;
    right: 0;
    bottom: 0;
  }

  .main-svg {
    width: 20em;
    height: 20em;
  }

  .box {
    width: 50px;
    height: 50px;
    background: $main-color;
    box-shadow: $box-shadow;
  }
}
</style>
