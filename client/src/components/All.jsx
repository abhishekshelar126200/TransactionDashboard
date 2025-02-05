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
  const navigate = useNavigate(); // Add navigation hook

  // Create refs for each section
  const tableRef = useRef(null);
  const statisticRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const updateMonth = (month) => {
    setMonth(month);
    localStorage.setItem("month", month);
  };

  // Navigation Component
  const DashboardNavigation = () => {
    return (
      <nav 
        className="d-flex justify-content-center mb-4 py-2 position-sticky top-0 z-3 bg-light shadow-sm"
        style={{
          borderRadius: '50px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        }}
      >
        <a href="/" className="btn d-flex align-items-center mx-2 px-3 py-2">
          <HomeIcon size={20} />
          <span className="ms-2 d-none d-md-inline">Home</span>
        </a>
        <a href="#transactions" className="btn d-flex align-items-center mx-2 px-3 py-2">
          <TableIcon size={20} />
          <span className="ms-2 d-none d-md-inline">Transactions</span>
        </a>
        <a href="#statistics" className="btn d-flex align-items-center mx-2 px-3 py-2">
          <TrendingUp size={20} />
          <span className="ms-2 d-none d-md-inline">Statistics</span>
        </a>
        <a href="#barChart" className="btn d-flex align-items-center mx-2 px-3 py-2">
          <BarChartIcon size={20} />
          <span className="ms-2 d-none d-md-inline">Bar Chart</span>
        </a>
        <a href="#pieChart" className="btn d-flex align-items-center mx-2 px-3 py-2">
          <PieChartIcon size={20} />
          <span className="ms-2 d-none d-md-inline">Pie Chart</span>
        </a>
      </nav>
    );
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
      <div className="container-fluid px-3 px-md-5 py-4">
        {/* Header */}
        <header className="mb-4">
          <h1 
            className="text-center fw-bold mb-3" 
            style={{
              color: '#2c3e50', 
              fontSize: '2.5rem'
            }}
          >
            Transaction Dashboard
          </h1>
          <DashboardNavigation />
        </header>

        {/* Main Content */}
        <main className="d-flex flex-column gap-4">
          
          {/* Transaction Table */}
          <div id="transactions" ref={tableRef} className="w-100 mb-4 p-3 rounded-4 shadow-sm bg-white">
            <Table updateMonth={updateMonth} />
          </div>

          {/* Transaction Statistics */}
          <div id="statistics" ref={statisticRef} className="w-100 mb-4 p-3 rounded-4 shadow-sm bg-white">
            <TransactionStatistic currMonth={localStorage.getItem('month') || 3} />
          </div>

          {/* Bar Chart */}
          <div id="barChart" ref={barChartRef} className="w-100 mb-4 p-3 rounded-4 shadow-sm bg-white">
            <h5 className="text-center mb-3">Bar Chart Analysis</h5>
            <div className="border rounded-3 overflow-hidden">
              <BarChart currMonth={localStorage.getItem('month') || 3} />
            </div>
          </div>

          {/* Pie Chart */}
          <div id="pieChart" ref={pieChartRef} className="w-100 mb-4 p-3 rounded-4 shadow-sm bg-white">
            <h5 className="text-center mb-3">Pie Chart Insights</h5>
            <div className="d-flex justify-content-center align-items-center rounded-3 overflow-hidden" style={{ height: "450px" }}>
              <Chart currMonth={localStorage.getItem('month') || 3} />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default TransactionDashboard;
