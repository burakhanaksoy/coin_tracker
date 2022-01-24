<template>
  <div>
    <a-tabs default-active-key="1" :animated="false">
      <a-tab-pane key="1" tab="Historical Data">
        <coin-track-chart />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Top Coins">
        <coin-table />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import CoinTrackChart from "@/components/CoinTrackChart.vue";
import CoinTable from "@/components/CoinTable.vue";
export default {
  components: {
    CoinTrackChart,
    CoinTable,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>