<template>
  <div id="app">
    <HelloWorld />
    <div class="box">12</div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      a: 10,
      b: 20,
      NODE_ENV: process.env.NODE_ENV
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .box {
    width: 50px;
    height: 50px;
    background: $main-color;
    box-shadow: $box-shadow;
  }
}
</style>
