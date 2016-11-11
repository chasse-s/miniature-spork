var express = require('express')  
var app = express()  

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    var list = []
    for (var i = 0; i <= 100; i++) {
	if (isMultiple(i, 3) && isMultiple(i, 5))
	    list.push("invivox")
	else if (isMultiple(i, 3))
	    list.push("invi")
	else if (isMultiple(i, 5))
	    list.push("vox")
	else
	    list.push(i)
    }
    res.render('index', {list: list})
})

app.listen(8080, function () {  
    console.log('Server listening on port 8080...')
})

function isMultiple(number, multiple) {
    return (number % multiple == 0)
}
