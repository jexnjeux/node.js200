const fs = require('fs');

//비동기 방식은 return이 없기 때문에 이후 실행할 로직을 callback함수를 이용해 넘겨준다.
fs.readFile('./message.txt', (err, data) => {
  if (err) throw err;
  console.log('async work01');
  console.log(data.toString());
});
