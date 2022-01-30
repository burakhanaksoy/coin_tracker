<template>
  <div id="app">
    <div class="theme-div">
      <a-select :default-value="theme || 'light'" @change="handleChange">
        <a-select-option value="light"> Light &#9788; </a-select-option>
        <a-select-option value="dark"> Dark &#9790;</a-select-option>
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
      theme: window.localStorage.getItem("theme") || "light",
    };
  },
  computed: {},
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
        document.documentElement.style.setProperty(
          "--table-column-text-color",
          "black"
        );
        document.documentElement.style.setProperty(
          "--table-column-background-color",
          "white"
        );
        document.documentElement.style.setProperty(
          "--table-special-column-background-color",
          "white"
        );
        document.documentElement.style.setProperty(
          "--table-background-color-on-hover",
          "#e6f7ff"
        );
        document.documentElement.style.setProperty(
          "--table-header-background",
          "white"
        );
        document.documentElement.style.setProperty(
          "--table-header-text-color",
          "black"
        );
        document.documentElement.style.setProperty(
          "--table-header-background-color-on-hover",
          "#0000000A"
        );
        document.documentElement.style.setProperty(
          "--select-component-background",
          "white"
        );
        document.documentElement.style.setProperty(
          "--select-component-text-color",
          "black"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-item-background",
          "white"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-item-text-color",
          "black"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-active-item-background",
          "#e6f7ff"
        );
        document.documentElement.style.setProperty(
          "--btn-primary-text-color",
          "white"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-background",
          "white"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-border-color",
          "#1890FF"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-text-color",
          "#1890FF"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-focus-border-color",
          "#1890FF"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-focus-text-color",
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
        document.documentElement.style.setProperty(
          "--table-column-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--table-column-background-color",
          "#636363"
        );
        document.documentElement.style.setProperty(
          "--table-special-column-background-color",
          "#808080"
        );
        document.documentElement.style.setProperty(
          "--table-background-color-on-hover",
          "#2E2B36"
        );
        document.documentElement.style.setProperty(
          "--table-header-background",
          "#636363"
        );
        document.documentElement.style.setProperty(
          "--table-header-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--table-header-background-color-on-hover",
          "#636363"
        );
        document.documentElement.style.setProperty(
          "--select-component-background",
          "#808080"
        );
        document.documentElement.style.setProperty(
          "--select-component-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-item-background",
          "#808080"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-item-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-active-item-background",
          "#2E2B36"
        );
        document.documentElement.style.setProperty(
          "--btn-primary-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-background",
          "#808080"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-border-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-focus-border-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-focus-text-color",
          "wheat"
        );
      }
    });
  },
  methods: {
    handleChange(val) {
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
        document.documentElement.style.setProperty(
          "--table-column-text-color",
          "black"
        );
        document.documentElement.style.setProperty(
          "--table-column-background-color",
          "white"
        );
        document.documentElement.style.setProperty(
          "--table-special-column-background-color",
          "white"
        );
        document.documentElement.style.setProperty(
          "--table-background-color-on-hover",
          "#e6f7ff"
        );
        document.documentElement.style.setProperty(
          "--table-header-background",
          "white"
        );
        document.documentElement.style.setProperty(
          "--table-header-text-color",
          "black"
        );
        document.documentElement.style.setProperty(
          "--table-header-background-color-on-hover",
          "#0000000A"
        );
        document.documentElement.style.setProperty(
          "--select-component-background",
          "white"
        );
        document.documentElement.style.setProperty(
          "--select-component-text-color",
          "black"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-item-background",
          "white"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-item-text-color",
          "black"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-active-item-background",
          "#e6f7ff"
        );
        document.documentElement.style.setProperty(
          "--btn-primary-text-color",
          "white"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-background",
          "white"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-border-color",
          "#1890FF"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-text-color",
          "#1890FF"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-focus-border-color",
          "#1890FF"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-focus-text-color",
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
        document.documentElement.style.setProperty(
          "--table-column-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--table-column-background-color",
          "#636363"
        );
        document.documentElement.style.setProperty(
          "--table-special-column-background-color",
          "#808080"
        );
        document.documentElement.style.setProperty(
          "--table-background-color-on-hover",
          "#2E2B36"
        );
        document.documentElement.style.setProperty(
          "--table-header-background",
          "#636363"
        );
        document.documentElement.style.setProperty(
          "--table-header-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--table-header-background-color-on-hover",
          "#636363"
        );
        document.documentElement.style.setProperty(
          "--select-component-background",
          "#808080"
        );
        document.documentElement.style.setProperty(
          "--select-component-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-item-background",
          "#808080"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-item-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--select-component-menu-active-item-background",
          "#2E2B36"
        );
        document.documentElement.style.setProperty(
          "--btn-primary-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-background",
          "#808080"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-border-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-text-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-focus-border-color",
          "wheat"
        );
        document.documentElement.style.setProperty(
          "--ant-pagination-focus-text-color",
          "wheat"
        );
      }
      this.$root.$emit("update-theme", this.theme);
    },
  },
  watch: {},
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
.theme-div {
  position: absolute;
  z-index: 1;
  left: 5%;
}
</style>
