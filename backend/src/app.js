const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
require('dotenv').config(); // Add this line to load environment variables
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
//Middleware for authcontroller
app.use(express.json());
app.use(cookieParser());


app.get("/", (req,res) => {
    res.send("hello World");
})

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);

module.exports = app;