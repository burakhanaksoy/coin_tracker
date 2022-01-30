<template>
  <div class="container">
    <div v-if="statusCode !== 200">
      <h1>Too Many Requests!</h1>
    </div>
    <div v-else>
      <a-spin :spinning="loading" tip="Loading...">
        <div class="refresh-btn">
          <a-button
            class="btn-class-primary"
            type="primary"
            @click="refreshData"
            >Refresh</a-button
          >
        </div>
        <div class="select-btns">
          <a-select
            default-value="Bitcoin"
            style="width: 120px; margin-right: 10px"
            @change="handleSelectedCoin"
          >
            <a-select-option
              v-for="(coin, idx) in coins"
              :key="idx"
              :value="coin.name"
            >
              <img
                :src="require('../assets/' + `${coin.name}-img.png`)"
                width="15px"
                height="15px"
              />
              {{ coin.name }}
            </a-select-option>
          </a-select>
          <a-select
            :default-value="selectedDay"
            style="width: 70px"
            @change="handleSelectedDay"
          >
            <a-select-option v-for="(day, idx) in days" :key="idx" :value="day">
              <center>
                {{ day + " D" }}
              </center>
            </a-select-option>
          </a-select>
        </div>
        <apexchart
          type="line"
          width="800"
          :options="options"
          :series="series"
        ></apexchart>
      </a-spin>
    </div>
  </div>
</template>


<script>
import CoinHistoryService from "@/Services/coinHistoryService.js";
import moment from "moment";
export default {
  name: "CoinTrackChart",
  props: {},
  data() {
    return {
      options: {
        chart: {
          foreColor: "white",
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
          id: "crypto-chart",
        },
        xaxis: {
          categories: [],
          title: {
            text: "Bitcoin Price",
            style: {
              color: "#000",
            },
          },
        },
        yaxis: {
          title: {
            text: "USD",
            style: {
              color: "#000",
            },
          },
        },
        markers: {
          size: 2,
        },
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        // responsive: [
        //   {
        //     breakpoint: 600,
        //     options: {
        //       plotOptions: {
        //         line: {
        //           horizontal: false,
        //         },
        //       },
        //     },
        //   },
        // ],
      },
      series: [
        {
          name: "USD$",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      coins: [
        { name: "Bitcoin", id: "bitcoin" },
        { name: "Ethereum", id: "ethereum" },
        { name: "Algorand", id: "algorand" },
        { name: "Avalanche", id: "avalanche-2" },
        { name: "Solana", id: "solana" },
      ],
      days: [7, 10, 30],
      dayStringArray: [],
      usdValues: [],
      selectedCoin: "Bitcoin",
      selectedDay: 7,
      loading: true,
      statusCode: 0,
      selectedImg: "Bitcoin-img.png",
      // theme: window.localStorage.getItem("theme"),
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchChartData();
    });
    this.$root.$on("update-theme", this.reDrawChart);
  },
  computed: {
    theme() {
      return window.localStorage.getItem("theme");
    },
  },

  methods: {
    fetchChartData(day = 7, coin = "bitcoin") {
      this.loading = true;
      this.dayStringArray = [];
      this.usdValues = [];
      for (let i = day; i > 0; i--) {
        let subtractedDay = moment().subtract("days", i).format("DD-MM-YYYY");
        this.dayStringArray.push(`date=${subtractedDay}`);
      }
      Promise.all(
        this.dayStringArray.map((e) =>
          CoinHistoryService.getCoinHistory(e, coin)
        )
      )
        .then((values) => {
          for (let e of values) {
            this.usdValues.push(e.data.market_data.current_price.usd);
          }
          this.statusCode = 200;
          this.reDrawChart();
        })
        .catch((err) => {
          this.statusCode = 429;
          console.warn(err);
        });
    },
    reDrawChart() {
      let processedStringArray = this.dayStringArray.map(
        (e) => e.split("=")[1]
      );
      this.options = {
        ...this.options,
        chart: {
          foreColor:
            window.localStorage.getItem("theme") === "light"
              ? "black"
              : "white",
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
          id: "crypto-chart",
        },
        xaxis: {
          categories: [...processedStringArray],
          title: {
            text: `${this.selectedCoin} Price`,
            style: {
              color:
                window.localStorage.getItem("theme") === "light"
                  ? "black"
                  : "white",
            },
          },
        },
        yaxis: {
          title: {
            text: "USD",
            style: {
              color:
                window.localStorage.getItem("theme") === "light"
                  ? "black"
                  : "white",
            },
          },
        },
        // responsive: [
        //   {
        //     breakpoint: 1200,
        //     options: {
        //       plotOptions: {
        //         line: {
        //           horizontal: false,
        //         },
        //       },
        //     },
        //   },
        // ],
      };
      this.series[0].data = this.usdValues.map((e) => parseFloat(e.toFixed(2)));
      this.loading = false;
    },
    handleSelectedCoin(value) {
      this.selectedCoin = value;
    },
    handleSelectedDay(value) {
      this.selectedDay = value;
    },
    refreshData() {
      this.fetchChartData(
        this.selectedDay,
        this.coins.find((e) => e.name === this.selectedCoin).id
      );
    },
  },
  watch: {
    selectedCoin() {
      this.fetchChartData(
        this.selectedDay,
        this.coins.find((e) => e.name === this.selectedCoin).id
      );
    },
    selectedDay() {
      this.fetchChartData(
        this.selectedDay,
        this.coins.find((e) => e.name === this.selectedCoin).id
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.refresh-btn {
  margin-right: 400px;
  display: inline;
}

.select-btns {
  display: inline;
}
</style>
