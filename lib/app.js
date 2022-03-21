const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/api/v1/mangaka', require('./controllers/mangaka'));
app.use('/api/v1/dog', require('./controllers/dog'));
app.use('/api/v1/games', require('./controllers/games'));
app.use('/api/v1/food', require('./controllers/food'));
app.use('/api/v1/bike', require('./controllers/bikes'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
