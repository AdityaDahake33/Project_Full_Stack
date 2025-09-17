const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
require('dotenv').config(); // Add this line to load environment variables

const app = express();
//Middleware for authcontroller
app.use(express.json());
app.use(cookieParser());


app.get("/", (req,res) => {
    res.send("hello World");
})

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);

module.exports = app;