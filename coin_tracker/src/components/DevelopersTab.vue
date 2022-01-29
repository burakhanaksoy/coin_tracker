<template>
  <div class="container">
    <a-card hoverable style="width: 300px">
      <img
        slot="cover"
        alt="example"
        :src="require('../assets/' + `burak-photo.png`)"
      />
      <template slot="actions" class="ant-card-actions">
        <a href="mailto:burakhanaksoy@gmail.com">
          <a-icon key="mail" type="mail" />
        </a>
        <a href="https://www.linkedin.com/in/burakhan-aksoy/" target="_blank">
          <img
            :src="require('../assets/' + `linkedin-img.png`)"
            style="width: 15px; height: 15px"
          />
        </a>
      </template>
      <a-card-meta
        title="Burakhan Aksoy"
        description="Junior Fullstack Developer"
      >
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    sendEmail() {
      console.log("sends email");
    },
  },
  watch: {},
};
</script>

<style scoped>
.container {
  width: 50%;
  display: flex;
  justify-content: space-between;
}
</style>