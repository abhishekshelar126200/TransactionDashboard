

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ currMonth }) => {
  const [labelsData, setLabelsData] = useState([]);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/transactionBarChart/${currMonth}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setLabelsData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [currMonth]);

  const data = {
    labels: [
      "0-100", "101-200", "201-300", "301-400", "401-500", "501-600",
      "601-700", "701-800", "801-900", "901-above",
    ],
    datasets: [
      {
        label: `Stats for ${months[currMonth - 1]}`,
        data: labelsData,
        backgroundColor: [
          '#3498db', '#2ecc71', '#e74c3c', '#f39c12', 
          '#9b59b6', '#1abc9c', '#34495e', '#e67e22', 
          '#2980b9', '#27ae60'
        ],
        borderWidth: 1,
        borderRadius: 8,
        borderColor: [
          '#2980b9', '#27ae60', '#c0392b', '#d35400', 
          '#8e44ad', '#16a085', '#2c3e50', '#d35400', 
          '#1a5276', '#117864'
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Price Range Distribution - ${months[currMonth - 1]}`,
        font: {
          size: 18,
          family: "'Inter', sans-serif",
          weight: 'bold'
        },
        color: '#2c3e50'
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFont: {
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          family: "'Inter', sans-serif"
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Price Ranges (₹)", 
          font: {
            size: 14,
            family: "'Inter', sans-serif"
          },
          color: '#2c3e50'
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          },
          color: '#34495e'
        },
        grid: {
          display: false
        }
      },
      y: {
        title: {
          display: true,
          text: "Product Count", 
          font: {
            size: 14,
            family: "'Inter', sans-serif"
          },
          color: '#2c3e50'
        },
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          },
          color: '#34495e'
        },
        grid: {
          color: 'rgba(0,0,0,0.05)'
        }
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    }
  };

  return (
    <div 
      className="w-100 d-flex justify-content-center p-3" 
      style={{
        background: 'linear-gradient(135deg, #f4f5f7 0%, #e9ecef 100%)',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <div 
        className="rounded-4 shadow-sm w-100" 
        style={{ 
          maxWidth: "700px", 
          height: "450px",
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(10px)'
        }}
      >

        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;