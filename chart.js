const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["C/C++", "Python", "HTML", "CSS", "Javascript", "Iot Skills"],
    datasets: [
      {
        label: "Capability",
        data: [4, 4, 8, 7, 6, 0],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
        },
      },
    },
  },
});
