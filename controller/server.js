import express from 'express';
import 'dotenv/config';

import logger from '../model/logger.js';
import homeRoute from '../routes/home/index.js';

const app = express();
const PORT = process.env.PORT || 6410;

app.set('view engine', 'ejs');

// sets express to trust data from nginx
app.set('trust proxy', true);

// static files
app.use( express.static('public') );

// log the timestamp the server receives a client request
app.use(logger);

// home page route
app.use('/', homeRoute);

// robots file
app.get('/robots.txt', async(req, res) => {
  res.status(200).sendFile('robots.txt');
});

// sitemap file
app.get('/sitemap.xml', async(req, res) => {
  res.status(200).sendFile('sitemap.xml');
});

// 404 page
app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen (PORT);