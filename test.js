const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["C/C++", "Python", "HTML", "CSS", "Javascript", "Iot SKills"],
    datasets: [
      {
        label: "# of Votes",
        data: [3, 3, 6, 5, 4, 0],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
