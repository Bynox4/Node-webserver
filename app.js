import * as url from 'url';
import express from 'express';
import hbs from 'hbs';
import * as dotenv from 'dotenv'
dotenv.config()

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Nelson Sanchez',
    title: 'Curso Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Nelson Sanchez',
    title: 'Curso Node'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Nelson Sanchez',
    title: 'Curso Node'
  });
})


app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
});

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })