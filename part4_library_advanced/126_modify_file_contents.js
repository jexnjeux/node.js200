const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
  if (err) throw err;
  let contents = data.toString();
  contents = 'replaced';
  fs.writeFile('./message.txt', contents, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
