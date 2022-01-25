<template>
  <div id="app">
    <center>
      <tabs />
    </center>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
  </div>
</template>

<script>
import Tabs from "./components/Tabs/Tabs.vue";

export default {
  name: "App",
  components: {
    Tabs,
  },
};
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
</style>
