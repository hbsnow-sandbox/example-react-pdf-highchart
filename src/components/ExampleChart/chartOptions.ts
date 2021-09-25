export const chartOptions: Highcharts.Options = {
  chart: {
    width: 600,
    height: 400,
  },
  title: {
    text: "Example Chart",
  },
  tooltip: { enabled: false },
  plotOptions: {
    series: {
      animation: false,
      enableMouseTracking: false,
      states: {
        hover: {
          enabled: false,
        },
      },
    },
  },
  xAxis: {
    title: { text: undefined },
    allowDecimals: false,
  },
  yAxis: {
    title: { text: undefined },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      type: "line",
      data: [0, 1, 2, 3, 4, 5],
    },
  ],
};
