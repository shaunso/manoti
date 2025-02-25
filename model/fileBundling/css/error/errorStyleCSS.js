import fs from 'fs';

const errorCSS = () => {
  const variables = fs.readFileSync('public/stylesheets/variables.css', {
    encoding: 'utf8',
    flag: 'r',
  });
  const universalStyles = fs.readFileSync('public/stylesheets/universal-styles.css', {
    encoding: 'utf8',
    flag: 'r',
  });
  const header = fs.readFileSync('public/stylesheets/header.css', {
    encoding: 'utf8',
    flag: 'r',
  });
  const body = fs.readFileSync('public/stylesheets/error.css', {
    encoding: 'utf8',
    flag: 'r',
  });
  const footer = fs.readFileSync('public/stylesheets/footer.css', {
    encoding: 'utf8',
    flag: 'r',
  });

  fs.writeFileSync('public/stylesheets/error/style.css', variables, err => {
    if (err) throw 'an error occured writing header.css to home page style.css file'
  });
  fs.appendFileSync('public/stylesheets/error/style.css', universalStyles, err => {
    if (err) throw 'an error occured writing home.css to home page style.css file'
  });
  fs.appendFileSync('public/stylesheets/error/style.css', header, err => {
    if (err) throw 'an error occured writing footer.css home page style.css file'
  });  
  fs.appendFileSync('public/stylesheets/error/style.css', body, err => {
    if (err) throw 'an error occured writing home.css to home page style.css file'
  });
  fs.appendFileSync('public/stylesheets/error/style.css', footer, err => {
    if (err) throw 'an error occured writing footer.css home page style.css file'
  });
 }
 
 export default errorCSS