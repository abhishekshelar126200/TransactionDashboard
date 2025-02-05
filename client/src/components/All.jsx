import { useState, useRef } from "react";
import Table from "./Table.jsx";
import { useNavigate } from "react-router-dom";
import TransactionStatistic from "./TransactionStatistic.jsx";
import Chart from "./PieChart.jsx";
import BarChart from "./BarChart.jsx";
import './style/All.css';
import { 
  Table as TableIcon, 
  BarChart as BarChartIcon, 
  PieChart as PieChartIcon, 
  TrendingUp, 
  HomeIcon
} from 'lucide-react';

function TransactionDashboard() {
  const [currMonth, setMonth] = useState(3);
  const navigate = useNavigate(); 

  // Create refs for each section
  const tableRef = useRef(null);
  const statisticRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  // Scroll to section smoothly and adjust for navbar height
  const scrollToSection = (ref) => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight; 
    const yOffset = ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  };

  const updateMonth = (month) => {
    setMonth(month);
    localStorage.setItem("month", month);
  };

  return (
    <div 
      className="container-fluid p-0" 
      style={{
        background: 'linear-gradient(135deg, #f4f5f7 0%, #e9ecef 100%)',
        fontFamily: "'Inter', sans-serif",
        minHeight: '100vh'
      }}
    >
      {/* Bootstrap Sticky Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container-fluid justify-content-center py-2">
          <a href="/" className="btn btn-outline-dark mx-2 d-flex align-items-center">
            <HomeIcon size={20} />
            <span className="ms-2 d-none d-md-inline">Home</span>
          </a>
          <button className="btn btn-outline-dark mx-2" onClick={() => scrollToSection(tableRef)}>
            <TableIcon size={20} /> <span className="ms-2 d-none d-md-inline">Transactions</span>
          </button>
          <button className="btn btn-outline-dark mx-2" onClick={() => scrollToSection(statisticRef)}>
            <TrendingUp size={20} /> <span className="ms-2 d-none d-md-inline">Statistics</span>
          </button>
          <button className="btn btn-outline-dark mx-2" onClick={() => scrollToSection(barChartRef)}>
            <BarChartIcon size={20} /> <span className="ms-2 d-none d-md-inline">Bar Chart</span>
          </button>
          <button className="btn btn-outline-dark mx-2" onClick={() => scrollToSection(pieChartRef)}>
            <PieChartIcon size={20} /> <span className="ms-2 d-none d-md-inline">Pie Chart</span>
          </button>
        </div>
      </nav>

      <div className="container-fluid px-2">

        {/* Main Content */}
        <main className="d-flex flex-column gap-4">
          
          {/* Transaction Table */}
          <div id="transactions" ref={tableRef} className="container mt-5 pt-5">
          <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#2c3e50",
            fontSize: "2rem",
          }}
        >
          Product Transactions
        </h2>

            <div className="w-100 p-3 rounded-4 shadow-sm bg-white">
              <Table updateMonth={updateMonth} />
            </div>
          </div>

          {/* Transaction Statistics */}
          <div id="statistics" ref={statisticRef} className="container mt-5 pt-5">
          <h2
                            className="text-center fw-bold mb-4"
                            style={{
                                color: "#2c3e50",
                                fontSize: "2rem",
                            }}
                            >
                            Transaction Insights
                            </h2>
            <div className="w-100 p-3 rounded-4 shadow-sm bg-white">
              <TransactionStatistic currMonth={localStorage.getItem('month') || 3} />
            </div>
          </div>

          {/* Bar Chart */}
         
          <div id="barChart" ref={barChartRef} className="container mt-5 pt-5">
          <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#2c3e50",
            fontSize: "2rem",
          }}
        >
          Bar Chart
        </h2>
            <div className="w-100 p-3 rounded-4 shadow-sm bg-white">
              <div className="border rounded-3 overflow-hidden">
                <BarChart currMonth={localStorage.getItem('month') || 3} />
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div id="pieChart" ref={pieChartRef} className="container mt-5 pt-5">
            <h2
                      className="text-center fw-bold mb-4"
                      style={{
                        color: "#2c3e50",
                        fontSize: "2rem",
                      }}
                    >
                      Pie Cart
                    </h2>
            <div className="w-100 p-3 rounded-4 shadow-sm bg-white">
              <div className="d-flex justify-content-center align-items-center rounded-3 overflow-hidden" style={{ height: "450px" }}>
                <Chart currMonth={localStorage.getItem('month') || 3} />
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default TransactionDashboard;
