<template>
  <div>
    <a-tabs default-active-key="1" :animated="false">
      <a-tab-pane key="1" tab="Historical Data">
        <coin-track-chart />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Top Coins">
        <h1>Content of Tab Pane 2</h1>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import CoinTrackChart from "@/components/CoinTrackChart.vue";
export default {
  components: {
    CoinTrackChart,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>