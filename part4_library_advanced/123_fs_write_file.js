const fs = require('fs');

const contents = 'hello\nbye\nėë';
fs.appendFile('./message.txt', contents, (err) => {
  if (err) {
    console.log(err);
  }
});
