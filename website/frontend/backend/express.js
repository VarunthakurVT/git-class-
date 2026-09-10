const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to your Express.js API!" });
});

// Example API Route
app.get('/api/health', (req, res) => {
    res.json({ status: "UP", timestamp: new Date() });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running smoothly on http://localhost:${PORT}`);
});
