const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connecting database from mongodb web and import from .env
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection extablished successfully")
})


// import routes (users exercise)
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})




