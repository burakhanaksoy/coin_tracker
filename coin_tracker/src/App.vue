<template>
  <div id="app">
    <div class="btn-div">
      <a-select :default-value="theme" @change="handleChange">
        <a-select-option value="light"> Light </a-select-option>
        <a-select-option value="dark"> Dark </a-select-option>
      </a-select>
    </div>
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
  data() {
    return {
      theme: window.localStorage.getItem("theme"),
    };
  },
  computed: {
    // theme: {
    //   get: function () {
    //     console.log("theme sss", window.localStorage.getItem("theme"));
    //     return window.localStorage.getItem("theme");
    //   },
    //   set: function (newValue) {
    //     this.theme = newValue;
    //     return;
    //   },
    // },
  },
  beforeCreate() {
    this.$nextTick(() => {
      if (this.theme === "light") {
        document.documentElement.style.setProperty("--body-color", "white");
        document.documentElement.style.setProperty(
          "--btn-color-primary",
          "#1890FF"
        );
        document.documentElement.style.setProperty(
          "--btn-primary-hover",
          "#40a9ff"
        );
        document.documentElement.style.setProperty(
          "--inactive-tab-color",
          "#000000A6"
        );
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty(
          "--active-tab-color",
          "#1890FF"
        );
      } else {
        document.documentElement.style.setProperty("--body-color", "#17161a");
        document.documentElement.style.setProperty(
          "--btn-color-primary",
          "gray"
        );
        document.documentElement.style.setProperty(
          "--btn-primary-hover",
          "#2e2b36"
        );
        document.documentElement.style.setProperty(
          "--inactive-tab-color",
          "white"
        );
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty(
          "--active-tab-color",
          "white"
        );
      }
    });
  },
  methods: {
    handleChange(val) {
      // console.log("handle change girdi", val);
      // this.theme = this.theme === "light" ? "dark" : "light";
      if (val === "light") {
        window.localStorage.setItem("theme", "light");
        this.theme = "light";
        document.documentElement.style.setProperty("--body-color", "white");
        document.documentElement.style.setProperty(
          "--btn-color-primary",
          "#1890FF"
        );
        document.documentElement.style.setProperty(
          "--btn-primary-hover",
          "#40a9ff"
        );
        document.documentElement.style.setProperty(
          "--inactive-tab-color",
          "#000000A6"
        );
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty(
          "--active-tab-color",
          "#1890FF"
        );
      } else {
        window.localStorage.setItem("theme", "dark");
        this.theme = "dark";
        document.documentElement.style.setProperty("--body-color", "#17161a");
        document.documentElement.style.setProperty(
          "--btn-color-primary",
          "gray"
        );
        document.documentElement.style.setProperty(
          "--btn-primary-hover",
          "#2e2b36"
        );
        document.documentElement.style.setProperty(
          "--inactive-tab-color",
          "white"
        );
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty(
          "--active-tab-color",
          "white"
        );
      }
      this.$root.$emit("update-theme", this.theme);
    },
  },
  watch: {
    theme() {
      // console.log("theme changed");
    },
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
.btn-div {
  position: absolute;
  z-index: 1;
  left: 5%;
}
</style>
