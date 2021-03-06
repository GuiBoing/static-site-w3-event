const data = {
  labels: ["\uf13b HTML", "\uf3b8 Javascript ", "\uf420 Angular", "\uf38b CSS"],
  datasets: [
    {
      label: "Months using tool:",
      backgroundColor: "#0B13D1",
      borderColor: "black",
      borderWidth: "1",
      borderSkipped: false,
      data: [7.5, 5.3, 0.8, 7]
    },
    {
      label: "Total months working with:",
      backgroundColor: "#8E00FD",
      borderColor: "black",
      borderWidth: "1",
      borderSkipped: false,
      data: [2, 2, 2, 2]
    },
    {
      label: "Cursos finalizados na área ",
      backgroundColor: "#F2AE00",
      borderColor: "black",
      borderWidth: "1",
      borderSkipped: false,
      data: [2, 3, 0, 2]
    }
  ]
};

const config = {
  type: "bar",
  data: data,
  options: {
    responsive:true,
    grouped: true,
    scales: {
      xAxes: [{
        gridLines:{
          display:false
        },
        ticks: {
          fontFamily: 'FontAwesome'
        }
      }],
      yAxes: [{
        gridLines:{
          display:false
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 35
        }
      }
    }
  }


};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);



Chart.defaults.global.defaultFontColor = "black";

