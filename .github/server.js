const express = require('express');
const app = express();
const PORT = 3000;

// Dummy user data (in a real app, you'd query a database)
const users = [
    "John Doe",
    "Jane Smith",
    "Mark Taylor",
    "Alice Johnson",
    "Sam Harris"
];

// Serve the static files (index.html, etc.)
app.use(express.static('public'));

// Endpoint for searching names
app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = users.filter(user => user.toLowerCase().includes(query));
    res.json(results); // Return the search results as JSON
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
