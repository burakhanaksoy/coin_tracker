<template>
  <div class="container">
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
      <div slot="value" slot-scope="record, text">{{ text.value }}$</div>
      <div slot="market_cap" slot-scope="record, text">
        {{ text.market_cap }}$
      </div>
    </a-table>
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
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    scopedSlots: { customRender: "value" },
  },
  {
    title: "Market Cap",
    dataIndex: "market_cap",
    key: "market_cap",
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    scopedSlots: { customRender: "market_cap" },
  },
  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
  },
  {
    title: "24hr Change",
    dataIndex: "one_day_change",
    key: "one_day_change",
  },
];

const data = [
  {
    key: "1",
    name: "Bitcoin",
    value: 32,
    market_cap: 21731278,
    order: 1,
    volume: 2139219,
    one_day_change: -2,
  },
  {
    key: "2",
    name: "Ethereum",
    value: 42,
    market_cap: 21731278,
    order: 2,
    volume: 2139219,
    one_day_change: -2,
  },
  {
    key: "3",
    name: "Avalanche",
    value: 32,
    market_cap: 21731278,
    order: 3,
    volume: 2139219,
    one_day_change: -2,
  },
  {
    key: "4",
    name: "Solana",
    value: 32,
    market_cap: 21731278,
    order: 4,
    volume: 2139219,
    one_day_change: -2,
  },
  {
    key: "5",
    name: "Algorand",
    value: 32,
    market_cap: 21731278,
    order: 5,
    volume: 2139219,
    one_day_change: -2,
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
      data,
      columns,
      tableData: [],
    };
  },
  methods: {
    fetchData() {
      SimplePriceService.getSimplePrices()
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
              tempObject.value = element.usd;
              tempObject.market_cap = element.usd_market_cap;
              tempObject.volume = element.usd_24h_vol;
              tempObject.one_day_change = element.usd_24h_change;
              tempArray.push(tempObject);
            }
            this.processData(tempArray);
          }
        })
        .catch((err) => {
          console.log(err);
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
    rowKey() {},
  },
};
</script>

<style scoped>
.container {
  width: 60%;
}
</style>