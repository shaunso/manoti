import fs from 'fs';

const errorCSS = () => {
  const reader = fs.createReadStream('public/stylesheets/header.css', {
    flag: 'r',
    encoding: 'utf8',
  });
  const reader2 = fs.createReadStream('public/stylesheets/error.css', {
    flag: 'r',
    encoding: 'utf8',
  });
  const reader3 = fs.createReadStream('public/stylesheets/footer.css', {
    flag: 'r',
    encoding: 'utf8',
  });

  const writeStream1 = fs.createWriteStream('public/stylesheets/error/style.css', {
    flags: 'w'
  });
  const writeStream2 = fs.createWriteStream('public/stylesheets/error/style.css', {
    flags: 'a'
  });

 
  reader.on('data', function (chunk) {
    writeStream1.write(chunk.toString());
  });
  reader2.on('data', function (chunk) {
    writeStream2.write(chunk.toString());
  });
  reader3.on('data', function (chunk) {
    writeStream2.write(chunk.toString());
  });


 }
 
 export default errorCSS