# Node.js Modules
*Node.js 모듈이란 무엇?*

모듈을 JavaScript 라이브러리와 동일하게 간주하자.

응용 프로그램에 포함 할 함수 집합이다.

## Built-in Modules
Node.js에는 추가 설치없이 사용할 수있는 내장 모듈 세트가 있다.

모듈 목록을 보려면 <a href="https://nodejs.org/api/" target="_blank">공식 문서</a>를 참조 할 것.

## 모듈 포함하기
모듈을 포함하려면 함수를 모듈 이름과 함께 사용한다.
```js
var http = require('http');
```

이제 애플리케이션은 HTTP 모듈에 액세스 할 수 있으며 서버를 만들 수 있다.
```js
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello World!');
}).listen(8080);
```

## 나만의 모듈 만들기
나만의 모듈을 만들어 응용 프로그램에 쉽게 포함시킬 수 있다.

다음 예제에서는 날짜 및 시간 객체를 반환하는 모듈을 생성한다.
```js
exports.myDateTime = function () {
	return Date();
};
```
`exports` 키워드를 사용하여 모듈 파일 외부에서 사용 가능한 속성 및 메서드로 만들고 "myfirstmodule.js"라는 파일명으로 저장한다.

## 나만의 모듈을 포함하기
이제 Node.js 파일에 모듈을 포함하고 사용할 수 있다.

Node.js 파일에서 "myfirstmodule"모듈을 사용한다.
```js
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The date and time are currently: " + dt.myDateTime());
	res.end();
}).listen(8080);
```
모듈을 사용하기 위해 `./`을 사용하였고, 이것은 Node.js파일과 같은 경로에 있다는 것을 의미한다.

위의 코드를 "server.js"파일에 저장하고 파일을 시작한다.

```
C:\Users\Your Name>node server.js
```

컴퓨터에서 동일한 단계를 수행 한 경우 예제와 동일한 결과가 표시된다. http://localhost:8080