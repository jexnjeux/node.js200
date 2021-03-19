const http = require('http');

const server = http.createServer();

server.listen(5000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:5000');
});

const testClose = function () {
  server.close();
  console.log('서버가 종료되었습니다, http://127.0.0.1:5000');
};

setTimeout(testClose, 5000);