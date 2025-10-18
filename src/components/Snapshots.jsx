import "./Snapshots.css"

// import charts and data visualization components here
import {energyShare2023, energyTrend, renewablesShare } from "../data/energyCharts.js"
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

export default function Snapshots() {
  // 图表基础样式模板：黑底 + 白字 + 固定字体大小
  const baseChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#fff", font: { size: 12 } },
      },
    },
    scales: {
      x: {
        ticks: { color: "#ccc", font: { size: 12 } },
        grid: { color: "rgba(255,255,255,0.08)" },
      },
      y: {
        ticks: { color: "#ccc", font: { size: 12 } },
        grid: { color: "rgba(255,255,255,0.08)" },
      },
    },
  };
  return (
    <>
      <div className="snapshots__header">
        <h1 className="snapshots__title">Snapshots - Global Energy</h1>
        <p className="snapshots__subtitle">
          Explore insights from IEA data — <br/>
          comparing global energy sources, long-term consumption trends, and the rapid rise of renewables.
        </p>
      </div>
      <div className="charts__scroll">
        <div className="charts__group">
          {/* 1. Pie Chart: 2023 Energy Share*/}
          <div className="chart__card">
            <Pie
              data={energyShare2023}
              options={{
                ...baseChartOptions,
                plugins: {
                  ...baseChartOptions.plugins,
                  title: {
                    display: true,
                    text: "Share of Total Energy Supply (%)",
                    color: "#fff",
                    font: { size: 13 },
                  },
                },
                scales: undefined, // 饼图不需要坐标轴
              }}
            />
            <h3 className="chart__title">2023 Global Energy Supply Structure</h3>
          </div>
          {/* 2. Line Chart: Long-term Energy Trends*/}
          <div className="chart__card">
            <Line
              data={energyTrend}
              options={{
                ...baseChartOptions,
                plugins: {
                  ...baseChartOptions.plugins,
                  title: {
                    display: true,
                    text: "Global Energy Supply by Source (EJ)",
                    color: "#fff",
                    font: { size: 13 },
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Year",
                      color: "#ccc",
                      font: { size: 12 },
                    },
                    ticks: { color: "#ccc" },
                    grid: { color: "rgba(255,255,255,0.08)" },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Energy Supply (Exajoules, EJ)",
                      color: "#ccc",
                      font: { size: 12 },
                    },
                    ticks: { color: "#ccc" },
                    grid: { color: "rgba(255,255,255,0.08)" },
                  },
                },
              }}
            />
            <h3 className="chart__title">Energy Supply Trends (1990–2023)</h3>
          </div>
          {/* 3. Area Chart: Renewable Share*/}
          <div className="chart__card">
            <Line
              data={renewablesShare}
              options={{
                ...baseChartOptions,
                plugins: {
                  ...baseChartOptions.plugins,
                  title: {
                    display: true,
                    text: "Renewables Share of Total Energy Supply (%)",
                    color: "#fff",
                    font: { size: 13 },
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Year",
                      color: "#ccc",
                      font: { size: 12 },
                    },
                    ticks: { color: "#ccc" },
                    grid: { color: "rgba(255,255,255,0.08)" },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Share of Renewables (%)",
                      color: "#ccc",
                      font: { size: 12 },
                    },
                    ticks: { color: "#ccc" },
                    grid: { color: "rgba(255,255,255,0.08)" },
                  },
                },
              }}
            />
            <h3 className="chart__title">Renewable Energy Share Over Time</h3>
          </div>
        </div>
      </div>
    </>
  )
}
