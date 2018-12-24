# Node.js 시작하기

## Node.js Download
공식 Node.js 웹 사이트에는 Node.js에 대한 설치 지침이 있다 :
[https://nodejs.org](https://nodejs.org) 

## Getting Started
컴퓨터에 Node.js를 다운로드하여 설치 한 후 웹 브라우저에 "Hello World"를 표시하기.


'myfirst.js'라는 Node.js 파일을 만들고 다음 코드를 추가.
```js
var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello World!');
}).listen(8080);
```
이제 사용자의 포트 8080에 액세스하려고 시도하면, 이 코드는 브라우저에 "Hello World!"라고 표시 하도록 지시한다.

## Command Line Interface
Node.js 파일은 컴퓨터의 CLI 프로그램에서 시작해야한다.

CLI를 여는 방법은 운영 체제에 따라 다르다. Windows 사용자의 경우 시작 버튼을 누르고 "명령 프롬프트"를 찾거나 검색 필드에 "cmd"라고 입력한다.

"myfirst.js"파일이있는 폴더로 이동하면 CLI 창이 다음과 같이 표시된다.
```
C:\Users\Your Name>_
```

## Node.js 파일 시작하기
작성한 파일은 Node.js에 의해 시작되어야 작업이 수행 될 수 있다.
```
C:\Users\Your Name>node myfirst.js
```
이제 컴퓨터가 서버로 작동하고 포트 8080에서 누군가 컴퓨터에 액세스하려고하면 "Hello World!"가 표시된다.
[http://localhost:8080](http://localhost:8080) 