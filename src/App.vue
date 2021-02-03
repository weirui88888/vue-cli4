<template>
  <div id="app">
    <div class="main">
      <!-- <svg-icon iconClass="undraw_noted_pc9f" class="main-svg"></svg-icon> -->
      <img
        src="https://m0-file2.bybutter.com/uploaded/rms/B25B89E468D532F8ADB1566453549030.png"
        alt=""
      />
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
      Logo
    }
  },
  created() {
    console.log(123)
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
