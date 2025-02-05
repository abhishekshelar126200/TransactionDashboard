// import React from 'react';

// function Feature() {
//   return (
//     <div className="min-vh-100 d-flex flex-column" id="features">
      
      

//       {/* Features Header */}
//       <header className="py-5 bg-light">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-lg-8">
//               <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn">
//                 Powerful Features for Your Business
//               </h1>
//               <p className="lead text-muted mb-0 animate__animated animate__fadeIn animate__delay-1s">
//                 Discover all the tools and capabilities that make DataVista the perfect choice for your data analytics needs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Features Section */}
//       <main className="flex-grow-1 py-5">
//         <div className="container">
//           {/* Primary Features */}
//           <div className="row g-4 mb-5">
//             <div className="col-md-6 col-lg-4">
//               <div className="card h-100 border-0 shadow-sm">
//                 <div className="card-body p-4">
//                   <div className="text-primary mb-3">
//                     <i className="bi bi-graph-up-arrow" style={{ fontSize: '2.5rem' }}></i>
//                   </div>
//                   <h3 className="h4 fw-bold">Advanced Analytics</h3>
//                   <p className="text-muted">
//                     Powerful data analysis tools with machine learning capabilities to uncover hidden patterns and trends in your data.
//                   </p>
//                   <ul className="list-unstyled mt-4">
//                     <li className="mb-2"><i className="bi bi-check2 text-primary me-2"></i>Predictive Analytics</li>
//                     <li className="mb-2"><i className="bi bi-check2 text-primary me-2"></i>Pattern Recognition</li>
//                     <li className="mb-2"><i className="bi bi-check2 text-primary me-2"></i>Trend Analysis</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 col-lg-4">
//               <div className="card h-100 border-0 shadow-sm">
//                 <div className="card-body p-4">
//                   <div className="text-primary mb-3">
//                     <i className="bi bi-speedometer2" style={{ fontSize: '2.5rem' }}></i>
//                   </div>
//                   <h3 className="h4 fw-bold">Real-Time Dashboard</h3>
//                   <p className="text-muted">
//                     Interactive dashboards that update in real-time, giving you immediate insights into your business performance.
//                   </p>
//                   <ul className="list-unstyled mt-4">
//                     <li className="mb-2"><i className="bi bi-check2 text-primary me-2"></i>Live Updates</li>
//                     <li className="mb-2"><i className="bi bi-check2 text-primary me-2"></i>Customizable Widgets</li>
//                     <li className="mb-2"><i className="bi bi-check2 text-primary me-2"></i>Data Visualization</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 col-lg-4">
//               <div className="card h-100 border-0 shadow-sm">
//                 <div className="card-body p-4">
//                   <div className="text-primary mb-3">
//                     <i className="bi bi-shield-check" style={{ fontSize: '2.5rem' }}></i>
//                   </div>
//                   <h3 className="h4 fw-bold">Enterprise Security</h3>
//                   <p className="text-muted">
//                     Bank-grade security measures to ensure your data remains protected and compliant with industry standards.
//                   </p>
//                   <ul className="list-unstyled mt-4">
//                     <li className="mb-2"><i className="bi bi-check2 text-primary me-2"></i>End-to-End Encryption</li>
//                     <li className="mb-2"><i className="bi bi-check2 text-primary me-2"></i>Role-Based Access</li>
//                     <li className="mb-2"><i className="bi bi-check2 text-primary me-2"></i>Audit Trails</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Additional Features Grid */}
//           <div className="row g-4">
//             {[
//               {
//                 icon: 'bi-cloud-arrow-up',
//                 title: 'Cloud Integration',
//                 description: 'Seamlessly connect with popular cloud services and data sources.'
//               },
//               {
//                 icon: 'bi-telephone',
//                 title: '24/7 Support',
//                 description: 'Round-the-clock technical support to help you succeed.'
//               },
//               {
//                 icon: 'bi-gear',
//                 title: 'Custom Solutions',
//                 description: 'Tailored solutions to meet your specific business needs.'
//               },
//               {
//                 icon: 'bi-file-earmark-text',
//                 title: 'Advanced Reporting',
//                 description: 'Generate comprehensive reports with just a few clicks.'
//               },
//               {
//                 icon: 'bi-people',
//                 title: 'Team Collaboration',
//                 description: 'Built-in tools for seamless team coordination and sharing.'
//               },
//               {
//                 icon: 'bi-phone',
//                 title: 'Mobile Access',
//                 description: 'Access your data on the go with our mobile-optimized platform.'
//               }
//             ].map((feature, index) => (
//               <div key={index} className="col-md-6 col-lg-4">
//                 <div className="d-flex align-items-start">
//                   <div className="text-primary me-3">
//                     <i className={`bi ${feature.icon}`} style={{ fontSize: '1.5rem' }}></i>
//                   </div>
//                   <div>
//                     <h4 className="h5 fw-bold mb-2">{feature.title}</h4>
//                     <p className="text-muted mb-0">{feature.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

      
//     </div>
//   );
// }

// export default Feature;

import React from 'react';

function Feature() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-gradient-light" id="features">
      {/* Features Header */}
      <header className="py-1 bg-primary text-white text-center shadow">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">Features</h1>
          <p className="lead animate__animated animate__fadeIn animate__delay-1s">
          Powerful Insights, Smarter Decisions: Unleashing the Full Potential of Transaction Analytics
          </p>
        </div>
      </header>

      {/* Main Features Section */}
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row g-4 mb-5">
            {[
  {
    "icon": "bi-database",
    "title": "🔄 Seamless Data Initialization",
    "description": "Fetch and store transaction data efficiently from a third-party API to initialize the database.",
    "details": ["✅ Automatic Data Fetching", "📂 Optimized Storage", "⚡ Efficient Indexing"]
  },
  {
    "icon": "bi-list-ul",
    "title": "🔍 Advanced Transaction Search",
    "description": "Easily search and filter transactions by title, description, or price with pagination support.",
    "details": ["🔎 Full-Text Search", "📊 Pagination & Sorting", "🎯 Flexible Filters"]
  },
  {
    "icon": "bi-graph-up",
    "title": "📊 Comprehensive Sales Statistics",
    "description": "Gain insights into monthly sales trends, including total sales, sold items, and unsold items.",
    "details": ["💰 Total Sales Calculation", "📦 Sold & Unsold Item Count", "📆 Month-Based Filtering"]
  },
  {
    "icon": "bi-bar-chart",
    "title": "📈 Price Range Distribution",
    "description": "Visualize sales distribution across different price ranges for better financial insights.",
    "details": ["📊 Custom Price Segments", "📉 Bar Chart Representation", "⏳ Real-Time Data Updates"]
  },
  {
    "icon": "bi-pie-chart",
    "title": "🧩 Category-Based Analysis",
    "description": "Analyze product sales based on categories and understand market trends effectively.",
    "details": ["📌 Unique Category Segmentation", "🔢 Item Count Per Category", "🥧 Pie Chart Visualization"]
  },
  {
    "icon": "bi-box-seam",
    "title": "📦 Unified Data Insights",
    "description": "Fetch and combine data from multiple APIs into a single response for streamlined analytics.",
    "details": ["📡 Aggregated API Response", "🚀 Optimized Data Retrieval", "⚙️ Performance-Driven Design"]
  },
  
]

.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-lg p-4 text-center">
                  <div className="text-primary mb-3">
                    <i className={`bi ${feature.icon}`} style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h3 className="h4 fw-bold">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                  <ul className="list-unstyled mt-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>{detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

         
          
          
        </div>
      </main>
    </div>
  );
}

export default Feature;