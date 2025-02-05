import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Table({ updateMonth }) {
  const [selectedMonth, setMonth] = useState(localStorage.getItem("month") || 3);
  const [query, setQuery] = useState(localStorage.getItem("query") || "");
  const [page, setPages] = useState(1);
  const [currPage, setCurrPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    setData([]);
    setCurrPage(1);
    setLoading(true); // Show loader when data is being fetched
  };

  const incrementPage = () => {
    setCurrPage((prev) => (prev >= page ? 1 : prev + 1));
  };

  const decrementPage = () => {
    setCurrPage((prev) => (prev === 1 ? page : prev - 1));
  };

  const handleQuery = (event) => {
    setQuery(event.target.value);
    localStorage.setItem("query", event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responseTable = await fetch(
          `https://transactionapi-y297.onrender.com/transactionTable/${selectedMonth}?q=${query}`
        );
        if (!responseTable.ok) throw new Error("Network response was not ok");

        const resultTable = await responseTable.json();
        setData(resultTable);
        setPages(resultTable.length);
        updateMonth(selectedMonth);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedMonth, query]);

  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "linear-gradient(135deg, #f4f5f7 0%, #e9ecef 100%)",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#2c3e50",
            fontSize: "2rem",
          }}
        >
          Product Transactions
        </h2>

        <div className="row mb-4 align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
           
              <input
                className="form-control"
                type="search"
                onChange={handleQuery}
                value={query}
                placeholder="Search products..."
                style={{
                  borderRadius: "8px",
                  border: "1px solid #ced4da",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              />
            
          </div>
          <div className="col-md-6">
            
              <select
                onChange={handleMonthChange}
                value={selectedMonth}
                className="form-select"
                style={{
                  borderRadius: "8px",
                  border: "1px solid #ced4da",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
              >
                <option value="" disabled>
                  Select Month
                </option>
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>
          </div>
        </div>

        <div
          className="table-responsive shadow rounded p-3"
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
          }}
        >
          <table className="table table-hover">
            <thead
              className="table-primary"
              style={{
                background: "#3498db",
                color: "white",
              }}
            >
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Sold</th>
                <th>Month</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td><Skeleton width={30} /></td>
                    <td><Skeleton width={100} /></td>
                    <td><Skeleton width={60} /></td>
                    <td><Skeleton width={150} /></td>
                    <td><Skeleton width={80} /></td>
                    <td><Skeleton width={50} height={50} /></td>
                    <td><Skeleton width={50} /></td>
                    <td><Skeleton width={80} /></td>
                  </tr>
                ))
              ) : data && data.length > 0 ? (
                data[currPage - 1].map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td className="text-truncate" style={{ maxWidth: "200px" }}>
                      {product.description}
                    </td>
                    <td>{product.category}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid rounded"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{product.sold ? "Yes" : "No"}</td>
                    <td>{product.dateOfSale}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center fw-bold py-4">
                    No Records Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <div>
            <span className="fw-bold">Page:</span>
            <span
              className="mx-2 border px-3 py-1 rounded"
              style={{
                background: "#3498db",
                color: "white",
              }}
            >
              {currPage}
            </span>
            <span>/ {page}</span>
          </div>
          <div>
            <button onClick={decrementPage} className="btn btn-outline-primary mx-2">
              Previous
            </button>
            <button onClick={incrementPage} className="btn btn-outline-primary">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
