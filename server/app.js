const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');
const Products = require('./models/transaction');
const cors = require('cors');
const app = express();
const axios = require('axios'); // Not used in the current code, consider removing
const path = require('path');


// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGODB_SECRET_KEY)
    .then(() => { console.log('Connect To Database'); })
    .catch(err => console.error("Database connection error:", err)); // Add error handling

app.use(cors()); // Enable Cross-Origin Resource Sharing for all routes

// Route for fetching transaction data for a given month, with optional search
app.get('/transactionTable/:month', async (req, res) => {
    const month = parseInt(req.params.month); // Parse month from request parameters
    const searchText = (req.query.q || "").toLowerCase(); // Get search query, default to empty string and lowercase it
    


    // Find transactions for the specified month
    const data = await Products.find({
        $expr: {
            $eq: [{ $month: "$dateOfSale" }, month]  // Match documents where the month matches
        }
    });

    // Divide the results into chunks of 4 for pagination (or display purposes)
    const divideResult = [];
    for (let i = 0; i < data.length; i += 10) {
        divideResult.push(data.slice(i, i + 10));
    }

    // Apply search filter if a search query is provided
    if (searchText) {
        const flattenItems = divideResult.flat(); // Flatten the array of arrays
        const result = flattenItems.filter(item =>
            item.title.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText) ||
            item.category.toLowerCase().includes(searchText) ||
            item.price.toString().includes(searchText) // Convert price to string for search
        );
        const actualResult = [];
        for (let i = 0; i < result.length; i += 5) { // Chunk the search results (adjust chunk size as needed)
            actualResult.push(result.slice(i, i + 5));
        }
        res.send(actualResult);
    } else {
        res.send(divideResult);
    }
});

// Route for calculating and returning transaction statistics for a given month
app.get('/transactionStatistic/:month', async (req, res) => {
    const month = parseInt(req.params.month);

    const data = await Products.find({
        $expr: {
            $eq: [{ $month: "$dateOfSale" }, month]
        }
    });

    let sale = 0;
    let sold = 0;
    let notSold = 0;

    data.forEach((product) => { // Use forEach for cleaner iteration
        if (product.sold) {
            sale += product.price;
            sold += 1;
        } else {
            notSold += 1;
        }
    });

    const statistic = {
        sale: sale,
        sold: sold,
        notSold: notSold
    };

    res.send(statistic);
});

// Route for generating data for a bar chart of price ranges for a given month
app.get('/transactionBarChart/:month', async (req, res) => {
    const month = parseInt(req.params.month);

    const data = await Products.find({
        $expr: {
            $eq: [{ $month: "$dateOfSale" }, month]
        }
    });

    const priceRanges = { '0-100': 0, '101-200': 0, '201-300': 0, '301-400': 0, '401-500': 0, '501-600': 0, '601-700': 0, '701-800': 0, '801-900': 0, '901-above': 0 };

    data.forEach((product) => { // Use forEach
        const price = product.price;
        if (price > 0 && price <= 100) priceRanges['0-100'] += 1;
        else if (price > 100 && price <= 200) priceRanges['101-200'] += 1;
        else if (price > 200 && price <= 300) priceRanges['201-300'] += 1;
        else if (price > 300 && price <= 400) priceRanges['301-400'] += 1;
        else if (price > 400 && price <= 500) priceRanges['401-500'] += 1;
        else if (price > 500 && price <= 600) priceRanges['501-600'] += 1;
        else if (price > 600 && price <= 700) priceRanges['601-700'] += 1;
        else if (price > 700 && price <= 800) priceRanges['701-800'] += 1;
        else if (price > 800 && price <= 900) priceRanges['801-900'] += 1;
        else if (price > 900) priceRanges['901-above'] += 1;
    });

    const tempLabels = Object.values(priceRanges); // Get the counts directly as an array
    res.send(tempLabels);
});

// Route for generating data for a pie chart of product categories for a given month
app.get('/transactionPieChart/:month', async (req, res) => {
    const month = parseInt(req.params.month);

    const data = await Products.find({
        $expr: {
            $eq: [{ $month: "$dateOfSale" }, month]
        }
    });

    const categoryCounts = {}; // Use an object to store category counts

    data.forEach((product) => {
        const category = product.category;
        categoryCounts[category] = (categoryCounts[category] || 0) + 1; // Increment or initialize count
    });

    const result = Object.entries(categoryCounts).map(([name, value]) => ({ name, value })); // Transform to desired format
    res.send(result);
});

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve the React app for all other routes (for client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the server
const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000
app.listen(port, () => console.log(`Server listening on port ${port}`)); // Use template literal for cleaner logging