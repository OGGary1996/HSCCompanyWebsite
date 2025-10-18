// src/data/energyCharts.js
export const energyShare2023 = {
  labels: ["Oil", "Coal", "Natural Gas", "Nuclear", "Hydro", "Renewables"],
  datasets: [
    {
      label: "Share (%)",
      data: [29.4, 25.3, 23.2, 4.2, 2.5, 15.4],
      backgroundColor: [
        "#FACC15", // Oil - amber
        "#9CA3AF", // Coal - gray
        "#38BDF8", // Gas - blue
        "#A855F7", // Nuclear - violet
        "#22D3EE", // Hydro - cyan
        "#4ADE80", // Renewables - green
      ],
      borderColor: "#ffffff",
      borderWidth: 0,
    },
  ],
};

export const energyTrend = {
  labels: ["1990", "2000", "2010", "2020", "2023"],
  datasets: [
    {
      label: "Oil (EJ)",
      data: [150, 160, 180, 185, 190],
      borderColor: "#FACC15",
      backgroundColor: "rgba(250, 204, 21, 0.1)",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Coal (EJ)",
      data: [110, 120, 140, 130, 135],
      borderColor: "#9CA3AF",
      backgroundColor: "rgba(156, 163, 175, 0.1)",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Natural Gas (EJ)",
      data: [70, 85, 110, 120, 125],
      borderColor: "#38BDF8",
      backgroundColor: "rgba(56, 189, 248, 0.1)",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Renewables (EJ)",
      data: [10, 15, 30, 55, 70],
      borderColor: "#4ADE80",
      backgroundColor: "rgba(74, 222, 128, 0.1)",
      fill: false,
      tension: 0.4,
    },
  ],
};

export const renewablesShare = {
  labels: ["2000", "2005", "2010", "2015", "2020", "2023"],
  datasets: [
    {
      label: "Renewables Share (%)",
      data: [5.5, 6.1, 7.8, 10.5, 13.8, 16.2],
      borderColor: "#4ADE80",
      backgroundColor: "rgba(74, 222, 128, 0.3)",
      fill: true,
      tension: 0.3,
    },
  ],
};