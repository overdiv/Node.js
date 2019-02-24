var fs = require ('fs');

// sync
console.log(1);

var data = fs.readFileSync('data.json', {encoding:'utf8'});

console.log(data);

// async
console.log(2);

fs.readFile('data.json', {encoding:'utf8'}, (err, data) => {
	console.log(3);
	console.log(data);
});

console.log(4);