# Node.js
node.js는 오픈 소스 서버 환경이다.

node.js를 사용하면 서버에서 JavaScript를 실행할 수 있다.

node.js를 이용하여 서버를 구현하는 구조는 아래와 같다.
```js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
```