<template>
  <div>
    <h2>{{title}}</h2>
    <input type="text" ref="name" >
    <button @click="handleClick">click me</button>

    <Modal />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'Hello Vue!'
    }
  },
  methods: {
    handleClick() {
      this.title = this.$refs.name.value
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
