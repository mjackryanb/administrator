var ctx = document.getElementById("Bar");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Admissions", "Finance", "Registrar", "Academic Offices", "Bookstore"],
    datasets: [{
      label: "Visitors for this month",
      backgroundColor: "#1C0D5A",
      borderColor: "#FFED05",
      data: [201, 54, 33, 10, 228],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1000,
          maxTicksLimit: 7
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
