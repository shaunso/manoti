import fs from 'fs';

const dfhf = () => {
  const reader = fs.createReadStream('public/stylesheets/header.css', {
    flag: 'r',
    encoding: 'UTF-8',
  });
  const reader2 = fs.createReadStream('public/stylesheets/home.css', {
    flag: 'r',
    encoding: 'UTF-8',
  });
  const reader3 = fs.createReadStream('public/stylesheets/footer.css', {
    flag: 'r',
    encoding: 'UTF-8',
  });

  const writeStream1 = fs.createWriteStream('public/stylesheets/root/style.css', {
    flags: 'w'
  });
  const writeStream2 = fs.createWriteStream('public/stylesheets/root/style.css', {
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
 
 export { dfhf }