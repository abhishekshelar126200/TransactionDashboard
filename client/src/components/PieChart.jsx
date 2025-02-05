


// import React, { useState, useEffect } from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const Chart = ({ currMonth }) => {
//   const [circle, setPieChart] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December",
//   ];

//   // Fetch data from the API
//   const fetchPieChartData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await fetch(
//         `https://transactionapi-y297.onrender.com/transactionPieChart/${currMonth}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       setPieChart(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPieChartData();
//   }, [currMonth]);

//   if (loading) {
//     return (
//       <div className="text-center mt-3">
//         <p>Loading chart data...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-danger mt-3">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container text-center">
//       <h5 className="text-dark">
//         Item-Category Chart for {months[currMonth - 1]}
//       </h5>
//       <div className="row justify-content-center">
//         <div className="col-12 col-md-8 col-lg-6">
//           <ResponsiveContainer width="100%" height={400}>
//             <PieChart>
//               <Pie
//                 data={circle}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius="70%"
//                 fill="#8884d8"
//                 label
//               >
//                 {circle.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chart;

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const COLORS = [
  "#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6", 
  "#1abc9c", "#34495e", "#e67e22"
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const Chart = ({ currMonth }) => {
  const [pieData, setPieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currMonth || currMonth < 1 || currMonth > 12) return; // Validate month
    const fetchPieChartData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `/transactionPieChart/${currMonth}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("Invalid data format");
        setPieData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPieChartData();
  }, [currMonth]);

  // Custom tooltip for better styling
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div 
          className="custom-tooltip p-2 rounded-lg text-white" 
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          <p className="m-0">{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 bg-gray-100">
        <p className="text-lg text-blue-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96 bg-gray-100 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg">
      
      <h5 className="text-xl font-bold text-gray-800 text-center mb-4">
        Category Distribution - {months[currMonth - 1]}
      </h5>
      <div className="flex justify-center">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="70%"
              label={({ name, percent }) => `${name} (${(percent * 100)}%)`}
            >
              {pieData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Prop validation
Chart.propTypes = {
  currMonth: PropTypes.number.isRequired,
};

export default Chart;
