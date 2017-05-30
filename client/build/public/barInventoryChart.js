var BarInventoryChart = function (barInventory){
  var container = document.getElementById("bar-inv-chart");

  var tempAmount = barInventory

  var chart = new Highcharts.Chart({
    chart: {
      type: "bar",
      renderTo: container
    },
    title: {
      text: ""
    },
    series: [
    {
      name: "Bar Inventory",
      data: [tempAmount],
      color: "#6600cc"
    }
    ],
    xAxis: {
      categories: [""]
    },
    yAxis: {
      title: {
        text: "Bar Drinks Remaining"
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  });

};

module.exports = BarInventoryChart;