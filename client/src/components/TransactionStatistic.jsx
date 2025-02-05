

// import { useState, useEffect } from 'react';

// function TransactionStatistic({ currMonth }) {
//     const months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December",
//       ];
//     const [statistic, setStatistic] = useState({});

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const responseStatistic = await fetch(`https://transactionapi-y297.onrender.com/transactionStatistic/${currMonth}`);
//                 if (!responseStatistic.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const resultStatistic = await responseStatistic.json();
//                 setStatistic(resultStatistic);
//             } catch (error) {
//                 console.error("Error fetching transaction statistics:", error);
//             }
//         };

//         fetchData();
//     }, [currMonth]);

//     return (
//         <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
//             <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
//                 <h4 className="text-center mb-4">Transaction Statistics for-{months[currMonth-1]}</h4>
//                 <div className="row mb-3">
//                     <div className="col-6 text-start fw-bold">Total Sale:</div>
//                     <div className="col-6 text-end">{statistic.sale ?? 'N/A'}</div>
//                 </div>
//                 <div className="row mb-3">
//                     <div className="col-6 text-start fw-bold">Total Sold Items:</div>
//                     <div className="col-6 text-end">{statistic.sold ?? 'N/A'}</div>
//                 </div>
//                 <div className="row">
//                     <div className="col-6 text-start fw-bold">Total Not Sold Items:</div>
//                     <div className="col-6 text-end">{statistic.notSold ?? 'N/A'}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TransactionStatistic;

import React, { useState, useEffect } from 'react';
import { 
    TrendingUp, 
    ShoppingCart, 
    Package 
} from 'lucide-react';

function TransactionStatistic({ currMonth }) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [statistic, setStatistic] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const responseStatistic = await fetch(`/transactionStatistic/${currMonth}`);
                if (!responseStatistic.ok) {
                    throw new Error('Network response was not ok');
                }
                const resultStatistic = await responseStatistic.json();
                setStatistic(resultStatistic);
            } catch (error) {
                console.error("Error fetching transaction statistics:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currMonth]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            notation: 'compact',
            compactDisplay: 'short'
        }).format(amount);
    };

    const calculatePercentage = (part, total) => {
        return total > 0 ? ((part / total) * 100).toFixed(1) : 0;
    };

    const SkeletonCard = () => (
        <div className="col-12 col-md-4 mb-3">
            <div className="card border-0 p-3 position-relative overflow-hidden" 
                style={{ background: 'rgba(255,255,255,0.8)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div className="d-flex align-items-center">
                    <div className="skeleton-box rounded-circle p-3 me-3"></div>
                    <div className="w-100">
                        <div className="skeleton-box w-50 mb-2"></div>
                        <div className="skeleton-box w-75"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    const StatCard = ({ icon, title, value, percentage, color }) => (
        <div className="col-12 col-md-4 mb-3">
            <div className="card border-0 p-3 position-relative overflow-hidden" 
                style={{ background: 'rgba(255,255,255,0.8)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div className="d-flex align-items-center">
                    <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" 
                        style={{ background: `${color}10`, color: color }}>
                        {icon}
                    </div>
                    <div>
                        <h6 className="text-muted text-uppercase mb-1" style={{ fontSize: '0.75rem' }}>
                            {title}
                        </h6>
                        <div className="d-flex align-items-baseline">
                            <h4 className="mb-0 me-2 fw-bold" style={{ fontSize: '1.25rem' }}>
                                {value}
                            </h4>
                            {percentage !== undefined && (
                                <small className="text-muted" style={{ fontSize: '0.675rem', color: percentage >= 0 ? '#28a745' : '#dc3545' }}>
                                    {percentage >= 0 ? '▲' : '▼'} {Math.abs(percentage)}%
                                </small>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-100 d-flex flex-column" style={{ background: 'linear-gradient(135deg, #f4f5f7 0%, #e9ecef 100%)', fontFamily: "'Inter', sans-serif" }}>
            <main className="w-100 py-4">
                <div className="container-fluid px-4 px-md-5">
                    <div className="row mb-4 align-items-center">
                        <div className="col-12">
                            <h1 className="fw-bold mb-1" style={{ fontSize: '2rem', color: '#2c3e50' }}>
                                Transaction Insights
                            </h1>
                            <p className="text-muted mb-0" style={{ fontSize: '0.875rem', color: '#7f8c8d' }}>
                                Comprehensive overview of {months[currMonth - 1]} transactions
                            </p>
                        </div>
                    </div>

                    {loading ? (
                        <div className="row g-3">
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    ) : (
                        <div className="row g-3">
                            <StatCard 
                                icon={<TrendingUp size={20} />}
                                title="Total Sales"
                                value={`₹${statistic.sale}`}
                                percentage={calculatePercentage(statistic.sale, statistic.sale)}
                                color="#3498db"
                            />
                            <StatCard 
                                icon={<ShoppingCart size={20} />}
                                title="Sold Items"
                                value={statistic.sold}
                                percentage={calculatePercentage(statistic.sold, statistic.sold+statistic.notSold)}
                                color="#2ecc71"
                            />
                            <StatCard 
                                icon={<Package size={20} />}
                                title="Unsold Items"
                                value={statistic.notSold}
                                percentage={-calculatePercentage(statistic.notSold, statistic.sold+statistic.notSold)}
                                color="#e74c3c"
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default TransactionStatistic;