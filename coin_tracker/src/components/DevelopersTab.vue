<template>
  <div class="dev-tab-container">
    <a-card hoverable style="width: 300px">
      <img
        slot="cover"
        alt="example"
        :src="require('../assets/' + `burak-photo.png`)"
      />
      <template slot="actions" class="ant-card-actions">
        <a href="mailto:burakhanaksoy@gmail.com" target="_blank">
          <a-icon key="mail" type="mail" style="font-size: 24px" />
        </a>
        <a href="https://www.linkedin.com/in/burakhan-aksoy/" target="_blank">
          <img
            :src="require('../assets/' + `linkedin-img.png`)"
            style="width: 24px; height: 24px"
          />
        </a>
        <a href="https://github.com/burakhanaksoy" target="_blank">
          <img
            :src="require('../assets/' + `github-img.png`)"
            style="width: 28px; height: 28px"
          />
        </a>
      </template>
      <a-card-meta
        title="Burakhan Aksoy"
        description="Junior Fullstack Developer"
      >
      </a-card-meta>
    </a-card>
    <a-card hoverable style="width: 300px">
      <img
        slot="cover"
        alt="example"
        :src="require('../assets/' + `oguz-photo.png`)"
      />
      <template slot="actions" class="ant-card-actions">
        <a href="mailto:toaxoy@protonmail.com" target="_blank">
          <a-icon key="mail" type="mail" style="font-size: 24px" />
        </a>
        <a href="https://www.linkedin.com/in/axoyto/" target="_blank">
          <img
            :src="require('../assets/' + `linkedin-img.png`)"
            style="width: 24px; height: 24px"
          />
        </a>
        <a href="https://github.com/AxoyTO" target="_blank">
          <img
            :src="require('../assets/' + `github-img.png`)"
            style="width: 28px; height: 28px"
          />
        </a>
      </template>
      <a-card-meta title="Tevfik Oğuzhan Aksoy">
        <template slot="description">
          Student at
          <a
            href="https://en.wikipedia.org/wiki/Moscow_State_University"
            target="_blank"
          >
            Moscow State University
          </a>
        </template>
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
  methods: {},
  watch: {},
};
</script>

<style scoped>
.dev-tab-container {
  width: 50%;
  display: flex;
  justify-content: space-around;
}
</style>