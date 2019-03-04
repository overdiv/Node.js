const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');

const app = express()
app.locals.pretty = true;

app.use(express.static('public_file'))
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', './views_file')
app.set('view engine', 'pug')

app.get('/topic/new', (req, res) => {
	fs.readdir('data', (err, files) => {
		if(err){
			console.log(err)
			res.status(500).send('Internal Server Error')
		}
		res.render('new', {
			topics: files
		})
	})
})

app.get(['/topic', '/topic/:id'], (req, res) => {
	fs.readdir('data', (err, files) => {
		if(err){
			console.log(err)
			res.status(500).send('Internal Server Error')
		}

		var id = req.params.id;

		if (id) {
			fs.readFile('data/' + id, 'utf8', (err, data) => {
				if (err) {
					console.log(err);
					res.status(500).send('Internal Server Error')
				}
				res.render('view', {
					topics: files,
					title: id,
					description: data
				})
			})
		} else {
			res.render('view', {
				topics: files,
				title: 'Welcome',
				description: 'Hello, Javascript for Server.'
			})
		}
	})
})

app.post('/topic', (req, res) => {
	var title = req.body.title;
	var description = req.body.description;
	fs.writeFile('data/'+title, description, function(err){
		if (err) {
			res.status(500).send('Internal Server Error')
			throw err;
		}
		//res.send('Success! Created File : ' + req.body.title)
		res.redirect('/topic/'+title);
	})	
})

app.listen(3000, function(){
	console.log('server connected 3000 port!')
})

