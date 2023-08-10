// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("Pie2");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Watchlisted", "Blocklisted"],
    datasets: [{
      data: [24, 4],
      backgroundColor: ['#ffc107', '#dc3545'],
    }],
  },
});

