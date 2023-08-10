// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("Pie1");
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Admissions", "Finance", "Registrar", "Academic Offices", "Bookstore"],
        datasets: [{
            data: [19, 6, 0, 1, 11],
            backgroundColor: ['#FFA500', '#0000FF', '#FF00FF', '#00FFFF', '#D2691E'],
        }],
    },
});

