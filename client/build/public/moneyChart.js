// var player = require('../src/models/player_model.js');

var MoneyChart = function (playerWallet){
  var container = document.getElementById("money-chart");


  var chart = new Highcharts.Chart({
    chart: {
      type: "bar",
      renderTo: container,
      backgroundColor: "rgba(69, 53, 53, 0.3)",
    },
    title: {
      text: "",
    },
    series: [
    {
      name: "Your Money",
      data: [playerWallet],
      color: "#ffd24d"
    }
    ],
    xAxis: {
      categories: ["£"],
    },
    yAxis: {
      title: {
        text: "Your Money"
      },
      min: 0
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  });

};

module.exports = MoneyChart;