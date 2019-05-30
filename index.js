const express  = require('express')
const app  = express()
const firebase = require("firebase")
const pug = require('pug')
const http = require('http').Server(app)
const io = require('socket.io')(http)


	const events = require('events')
	var eventEmitter = new events.EventEmitter()

app.set('view engine', 'pug')
app.use(express.static('public'))

io.on('connection', (socket) => {
	eventEmitter.on('socket', (id) => {
		io.emit('test', {id : id})
	})
})


app.get('/api/:id', (req, res) => {
	io.emit('test', {id : req.params.id})
	res.end(req.params.id)
	// eventEmitter.emit('socket', req.params.id);
})

app.get('*', function (req, res) {
	res.render('index')
})


var port = process.env.PORT || 3000

http.listen(port, () => {
	console.log(`listen on port ${port}`)
})

