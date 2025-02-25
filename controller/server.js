import express from 'express';
import 'dotenv/config';

import logger from '../model/logger.js';
import homeRoute from '../routes/home/index.js';
import tickerPage from '../routes/companyPageData/index.js';
import rootCSS from '../model/fileBundling/css/rootStyleCSS.js';
import equitiesCSS from '../model/fileBundling/css/data/vfex/equities/equitiesStyleCSS.js';
import contactCSS from '../model/fileBundling/css/contact/contactStyleCSS.js';
import errorCSS from '../model/fileBundling/css/error/errorStyleCSS.js';
import buildScript from '../model/fileBundling/js/buildScript.js';

rootCSS();
equitiesCSS();
contactCSS();
errorCSS();
buildScript();

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

// entity data page route
app.use('/data/vfex/equities', tickerPage);

// contact page
app.get('/contact', async(req, res) => {
  res.status(200).render('contact');
});

// robots file
app.get('/robots.txt', async(req, res) => {
  res.status(200).sendFile('robots.txt');
});

// sitemap file
app.get('/sitemap.xml', async(req, res) => {
  res.status(200).sendFile('sitemap.xml');
});

// 404 page
app.all('*', async(req, res) => {
  res.status(404).render('404');
});

app.listen (PORT);