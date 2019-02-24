const express = require('express');
const app = express();

// middleware
app.locals.pretty = true;
app.use(express.static('public'));

app.set('view engine', 'pug');

app.set('views', './views');

app.get('/', (req, res) => {
	res.render('index', 
		{
			title: 'Pug Template', 
			hello_name : 'Pug template!',
			message: 'Hello there!',
			description: 'pug template page',
			time: Date()
		}
	);
});

app.get('/topic', (req, res) => {
	const topics = [
		'Javascript is...',
		'Nodejs is...',
		'Express is...'
	]

	const output = `
		<a href="/topic?id=0">Javascript</a><br>
		<a href="/topic?id=1">Nodejs</a><br>
		<a href="/topic?id=2">Express</a><br>
		${topics[req.query.id]}
	`
	res.send(output);
});

app.get('/dynamic', (req, res) => {
	let list = '';
	for(var i=0; i<5; i++){
		list += '<li>list</li>'
	}
	const time = Date();

	const output = `
	<!DOCTYPE html>
	<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Document</title>
	</head>
	<body>
		<h1>hello main html!</h1>
		<ul>
			${list}
		</ul>
		${time}
	</body>
	</html>
	`;
	res.send(output);
});

app.get('/route', (req, res) => {
	res.send('route page, <img src="/img/logo_express.png" width="200" alt="nodejs express">')
});

app.get('/login', (req, res) => {
	res.send('Login Page');
});

app.get('/main', (req, res) => {
	res.send('<h1 style="color:darkorange;">Main Page</h1>');
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
