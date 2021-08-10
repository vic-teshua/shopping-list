// import DEPENDENCIES
const express = require('express');
require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// import ROUTES
const listRoutes = require('./routes/listRoutes');

const PORT = process.env.PORT || 3002;

// MIDDLEWARE
const corsOptions = {
	origin: '*',
	methods: 'GET, PUT, POST, DELETE, PATCH, HEAD',
};

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/shopping-list', listRoutes);

app.all('*', (req, res) => {
	res.status(500).send('Invalid path...');
});

// connection to DATABASE
mongoose
	.connect(process.env.DATABASE_LINK.replace('<PASSWORD>', process.env.DATABASE_PASSWORD), {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('Database connected!'))
	.catch(error => console.log(error, 'Database did not connect!'));

app.listen(PORT, () => console.log(`The server is listening on PORT ${PORT}`));
