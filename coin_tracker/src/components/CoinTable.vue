<template>
  <div class="container">
    <div class="btns">
      <a-button type="primary" @click="refreshData">Refresh</a-button>
      <a-select
        default-value="USD"
        style="width: 120px; margin-right: 10px"
        @change="handleSelectedCurrency"
      >
        <a-select-option
          v-for="(currency, idx) in currencies"
          :key="idx"
          :value="currency.name"
        >
          <img
            :src="require('../assets/' + `${currency.name}-img.png`)"
            width="15px"
            height="15px"
          />
          {{ currency.name }}
        </a-select-option>
      </a-select>
    </div>
    <a-spin :spinning="loading" tip="Loading...">
      <a-table
        :columns="columns"
        :data-source="tableData"
        :rowKey="(record) => record.name"
      >
        <div slot="name" slot-scope="record, text">
          <img
            :src="require('../assets/' + `${text.name}-img.png`)"
            width="15px"
            height="15px"
          />
          {{ text.name }}
        </div>
        <div slot="value" slot-scope="record, text">
          {{
            text.value.toString().includes(".")
              ? text.value
                  .toFixed(2)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
              : text.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          }}
        </div>
        <div slot="market_cap" slot-scope="record, text">
          {{
            text.market_cap
              .toFixed(1)
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          }}$
        </div>
        <div slot="one_day_change" slot-scope="record, text">
          %{{ text.one_day_change.toFixed(2) }}
          <span>
            <a-icon
              v-if="text.one_day_change > 0"
              type="arrow-up"
              style="color: green"
            />
            <a-icon v-else type="arrow-down" style="color: red" />
          </span>
        </div>
        <div slot="volume" slot-scope="record, text">
          {{
            text.volume
              .toFixed(1)
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          }}$
        </div>
      </a-table>
    </a-spin>
  </div>
</template>
<script>
import SimplePriceService from "@/Services/simplePriceService.js";
const columns = [
  {
    title: "#",
    dataIndex: "order",
    width: 25,
    sorter: (a, b) => b.order - a.order,
  },
  {
    title: "Crypto",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    sorter: (a, b) => a.value - b.value,
    scopedSlots: { customRender: "value" },
  },
  {
    title: "Market Cap",
    dataIndex: "market_cap",
    key: "market_cap",
    sorter: (a, b) => a.market_cap - b.market_cap,
    scopedSlots: { customRender: "market_cap" },
  },
  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
    scopedSlots: { customRender: "volume" },
  },
  {
    title: "24hr Change",
    dataIndex: "one_day_change",
    key: "one_day_change",
    scopedSlots: { customRender: "one_day_change" },
  },
];

export default {
  mounted() {
    this.$nextTick(() => {
      this.fetchData();
    });
  },
  data() {
    return {
      columns,
      loading: false,
      tableData: [],
      currencies: [
        { name: "USD", id: "usd", symbol: "$" },
        { name: "EUR", id: "eur", symbol: "€" },
        { name: "TRY", id: "try", symbol: "₺" },
        { name: "RUB", id: "rub", symbol: "₽" },
      ],
      selectedCurrency: "USD",
    };
  },
  methods: {
    fetchData(currency = "usd") {
      this.loading = true;
      SimplePriceService.getSimplePrices(currency)
        .then((response) => {
          if (response.status === 200) {
            let tempArray = [];
            for (const [name, element] of Object.entries(response.data)) {
              let tempObject = {};
              if (name.includes("avalanche")) {
                // Because name for Avalanche is avalanche-2
                tempObject.name = "Avalanche";
              } else {
                tempObject.name =
                  name[0].toUpperCase() + name.slice(1, name.length);
              }
              switch (currency) {
                case "usd":
                  tempObject.value = element.usd;
                  tempObject.market_cap = element.usd_market_cap;
                  tempObject.volume = element.usd_24h_vol;
                  tempObject.one_day_change = element.usd_24h_change;
                  break;
                case "eur":
                  tempObject.value = element.eur;
                  tempObject.market_cap = element.eur_market_cap;
                  tempObject.volume = element.eur_24h_vol;
                  tempObject.one_day_change = element.eur_24h_change;
                  break;
                case "try":
                  tempObject.value = element.try;
                  tempObject.market_cap = element.try_market_cap;
                  tempObject.volume = element.try_24h_vol;
                  tempObject.one_day_change = element.try_24h_change;
                  break;
                case "rub":
                  tempObject.value = element.rub;
                  tempObject.market_cap = element.rub_market_cap;
                  tempObject.volume = element.rub_24h_vol;
                  tempObject.one_day_change = element.rub_24h_change;
                  break;
                default:
                  console.log("[ERR]: Currency not found.");
              }
              tempArray.push(tempObject);
            }
            this.processData(tempArray);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    processData(dataArray) {
      //Process and add 'order' field to data with resp to market_cap
      dataArray.sort((a, b) => b.market_cap - a.market_cap);
      dataArray.forEach((e, idx) => {
        e.order = idx + 1;
      });

      this.tableData = [...dataArray];
    },
    handleSelectedCurrency(value) {
      this.selectedCurrency = value;
    },
    rowKey() {},
    refreshData() {
      this.fetchData();
    },
  },
  watch: {
    selectedCurrency() {
      this.fetchData(
        this.currencies.find((e) => e.name === this.selectedCurrency).id
      );
    },
  },
};
</script>

<style scoped>
.container {
  width: 70%;
}
.btns {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
}
</style>