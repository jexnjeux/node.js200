const fs = require('fs');

const contents = 'hello\nbye\n안녕';
fs.appendFile('./message.txt', contents, (err) => {
  if (err) {
    console.log(err);
  }
});
