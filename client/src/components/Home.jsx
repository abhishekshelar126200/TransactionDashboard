// import React from 'react';
// import { Link } from 'react-router-dom';
// import analysis from '../assets/analysis.jpg';
// import Feature from './Feature';

// function Home() {
//   return (
//     <div className="min-vh-100 d-flex flex-column" id="home">
//       {/* Navigation */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
//         <div className="container">
//           <a className="navbar-brand fw-bold" href="#">Dashboard</a>
//           <button 
//             className="navbar-toggler" 
//             type="button" 
//             data-bs-toggle="collapse" 
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="#home">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#features">Features</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#about">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="flex-grow-1 d-flex align-items-center py-5 pt-5"
//             style={{
//               background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
//             }}>
//         <div className="container mt-5">
//           <div className="row align-items-center">
//             <div className="col-lg-6 order-lg-1 order-2">
//               <div className="pe-lg-5">
//                 <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn">
//                   Transform Your Data Into Actionable Insights
//                 </h1>
//                 <p className="lead mb-4 text-muted animate__animated animate__fadeIn animate__delay-1s">
//                   Unlock the power of your business data with our advanced analytics platform. 
//                   Make informed decisions faster and drive growth with real-time insights.
//                 </p>
//                 <div className="d-flex gap-3 animate__animated animate__fadeIn animate__delay-2s">
//                   <Link to='/table' className="btn btn-primary btn-lg px-4 py-2">
//                     Get Started
//                   </Link>
//                   <button className="btn btn-outline-secondary btn-lg px-4 py-2">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-5">
//               <div className="text-center text-lg-end">
//                 <img 
//                   src={analysis} 
//                   alt="Dashboard Preview" 
//                   className="rounded-4"
//                   style={{
//                     width: '90%',
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import analysis from '../assets/analysis.jpg';
import Feature from './Feature';

function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column" id="home">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">DataViz</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow-1 d-flex align-items-center py-5 pt-5"
            style={{
              background: 'linear-gradient(135deg, #eef2f3 0%, #d9e2ec 100%)'
            }}>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="pe-lg-5">
                <h1 className="display-4 fw-bold mb-4 text-primary animate__animated animate__fadeIn">
                  Transform Your Data Into Strategic Growth
                </h1>
                <p className="lead mb-4 text-muted animate__animated animate__fadeIn animate__delay-1s">
                  Empower your business with cutting-edge analytics. Gain deep insights, optimize decisions, 
                  and unlock new opportunities with real-time data visualization.
                </p>
                <div className="d-flex gap-3 animate__animated animate__fadeIn animate__delay-2s">
                  <Link to='/table' className="btn btn-primary btn-lg px-4 py-2 shadow-sm">
                    Get Started
                  </Link>
                  <button className="btn btn-outline-primary btn-lg px-4 py-2 shadow-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-5">
              <div className="text-center text-lg-end">
                <img 
                  src={analysis} 
                  alt="Data Visualization" 
                  className="rounded-4 shadow-lg"
                  style={{
                    width: '90%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
