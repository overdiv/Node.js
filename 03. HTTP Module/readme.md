# Node.js HTTP 모듈
**built-in HTTP module**

Node.js에는 HTTP(Hyper Text Transfer Protocol)를 통해 데이터를 전송 할 수 있게 해주는 내장 모듈이 있다.

HTTP 모듈을 포함 시키려면 다음 방법을 사용한다.
```js
var http = require('http');
```

## 웹 서버로서의 Node.js
HTTP 모듈은 서버 포트를 수신하고 클라이언트에 응답을 제공하는 HTTP 서버를 만들 수 있다.

`createServer()`를 사용하여 HTTP 서버를 만드는 방법 :
```js
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
	res.write('Hello World!'); //write a response to the client
	res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```
`http.createServer()` 메서드에 전달 된 함수는 누군가가 포트 8080에 액세스하려고 시도 할 때 실행된다.

위의 코드를 "demo_http.js"에 저장하고 파일을 시작한다.
```
C:\Users\Your Name>node demo_http.js
```

## HTTP 헤더 추가
HTTP 서버의 응답을 HTML로 표시하려면 올바른 유형의 HTTP 헤더를 포함해야 한다.
```js
var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World!');
	res.end();
}).listen(8080);
```

`res.writeHead()` 메소드의 첫 번째 인수는 상태 코드로써, 200은 모두 OK이고 두 번째 인수는 응답 헤더를 포함하는 객체다.	

## Query String 읽기
전달 된 `http.createServer()`함수에는 클라이언트의 요청을 나타내는 객체(http.IncomingMessage)와 같은 `req`인수가 있다.

이 객체에는 `url`이라는 속성이 있다. 이 속성은 도메인 이름 뒤에 오는 URL의 일부를 포함한다.
```js
var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(req.url);
	res.end();
}).listen(8080);
```

위의 코드를 "demo_http_url.js"에 저장하고 파일을 시작한다.
```
C:\Users\Your Name>node demo_http_url.js
```
이제 두 주소를 열 때 두 가지 다른 결과가 나타난다.

`http://localhost:8080/fire`
```
/fire
```

`http://localhost:8080/water`
```
/water
```

## Query String 분할
URL 모듈과 같이 쿼리 문자열을 읽을 수 있는 부분으로 쉽게 분리 할 수 있는 내장 모듈이 있다.

쿼리 문자열을 읽을 수있는 부분으로 나눈다.
```js
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + ' ' + q.month;
	res.end(txt);
}).listen(8080);
```

위의 코드를 "demo_querystring.js"에 저장하고 파일을 시작한다.
```
C:\Users\Your Name>node demo_querystring.js
```

주소: http://localhost:8080/?year=2018&month=December

결과는 다음과 같다 :
```
2018 December
```