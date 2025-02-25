import fs from 'fs';

const buildContactScript = () => {
  const searchFunction = fs.readFileSync('model/js/searchFunction.js', {
    encoding: 'utf-8',
    flag: 'r',
  });

  const bundle = searchFunction ;

  fs.writeFileSync('public/js/contact/script.js', bundle, (err) => {
    if (err) throw 'an error occured while writing the script bundle'
  });
}

export default buildContactScript