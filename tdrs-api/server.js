require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); //cors module to for cross-origin requests
const port = 8080;

const app = express();
app.use(express.json());
app.use(cors());

const bandsRouter = require('./routes/bands');
app.use('/api/bands', bandsRouter);

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tdrs-db.67ypb2e.mongodb.net/tdrs-db?retryWrites=true&w=majority`);
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to Database'));


app.listen(port, () => console.log(`Server is listening on port ${port}`))