# Node.js는 무엇?
- 오픈 소스 서버 환경이다.
- 다양한 플랫폼 (Windows, Linux, Unix, Mac OS X 등)에서 실행된다.
- 서버에서 JavaScript를 실행할 수 있다.

## 왜 Node.js인가?
> Node.js는 비동기 프로그래밍을 사용한다.

웹 서버의 일반적인 작업은 서버에서 파일을 열고 클라이언트에 콘텐츠를 반환한다.

일반적인 Server Script Language(PHP or ASP...)가 파일 요청을 처리하는 방법은 다음과 같다.
1. 컴퓨터의 파일 시스템에 작업을 전송.
2. 파일 시스템이 열리고 파일을 읽는 동안 대기.
3. 클라이언트에 내용을 반환.
4. 다음 요청을 처리 할 준비를 마침.

Node.js가 파일 요청을 처리하는 방법은 다음과 같다.
1. 컴퓨터의 파일 시스템에 작업을 전송.
2. 다음 요청을 처리 할 준비를 마침.
3. 파일 시스템이 열리고 파일을 읽을 때 서버는 클라이언트에 내용을 반환.

Node.js는 대기를 제거하고 단순히 다음 요청으로 계속 진행한다.

Node.js는 메모리에 효율적으로 싱글 스레드, 논 블로킹, 비동기 프로그래밍을 실행한다.

## Node.js는 무엇을 할 수 있나?
- 동적 페이지 콘텐츠를 생성 할 수 있다.
- 서버에서 파일을 생성, 열기, 읽기, 쓰기, 삭제 및 닫을 수 있다.
- 폼 데이터를 수집 할 수 있다.
- 데이터베이스의 데이터를 추가, 삭제, 수정할 수 있다.

## Node.js 파일은 무엇?
- Node.js 파일에는 특정 이벤트에서 실행되는 작업이 포함되어 있다.
- 일반적인 이벤트는 서버의 포트에 액세스하는 것이다.
- 어떤 영향을 주기 전에 Node.js 파일을 서버에서 시작해야 한다.
- Node.js 파일 확장자는 `.js` 이다.

node.js를 이용하여 서버를 구현하는 구조는 아래와 같다.
```js
var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!');
}).listen(8080);
```