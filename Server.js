require('dotenv').config({path:'./config/.env'})
const express = require('express');
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 3000;
const connectDB = require('./database/connection');
const app= express();
const usersRoute = require('./routers/userRouter')
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use(bodyparser.urlencoded({ extended : true}))

app.use('/user',usersRoute)


// Start the server on port 3000
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});