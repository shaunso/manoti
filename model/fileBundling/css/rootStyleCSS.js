import fs from 'fs';

const rootCSS = () => {
  const variables = fs.readFileSync('model/css/variables.css', {
    encoding: 'utf8',
    flag: 'r',
  });
  const universalStyles = fs.readFileSync('model/css/universal-styles.css', {
    encoding: 'utf8',
    flag: 'r',
  });
  const header = fs.readFileSync('model/css/header.css', {
    encoding: 'utf8',
    flag: 'r',
  });
  const body = fs.readFileSync('model/css/home.css', {
    encoding: 'utf8',
    flag: 'r',
  });
  const footer = fs.readFileSync('model/css/footer.css', {
    encoding: 'utf8',
    flag: 'r',
  });

  fs.writeFileSync('public/stylesheets/style.css', variables, err => {
    if (err) throw 'an error occured writing header.css to home page style.css file'
  });
  fs.appendFileSync('public/stylesheets/style.css', universalStyles, err => {
    if (err) throw 'an error occured writing home.css to home page style.css file'
  });
  fs.appendFileSync('public/stylesheets/style.css', header, err => {
    if (err) throw 'an error occured writing footer.css home page style.css file'
  });
  fs.appendFileSync('public/stylesheets/style.css', body, err => {
    if (err) throw 'an error occured writing home.css to home page style.css file'
  });
  fs.appendFileSync('public/stylesheets/style.css', footer, err => {
    if (err) throw 'an error occured writing footer.css home page style.css file'
  });
 }
 
 export default rootCSS