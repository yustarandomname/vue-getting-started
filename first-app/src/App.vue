<template>
  <h2>{{title}}</h2>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: 'Hello Vue!'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  border-bottom: 1px solid #e0e0e0;
  display:inline-block;
  padding-bottom: 10px;
}
</style>
