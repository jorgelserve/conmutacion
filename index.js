const express  = require('express')
const app  = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const firebase = require("firebase")


	const events = require('events')
	var eventEmitter = new events.EventEmitter()

app.use('/', express.static('public'))

// var config = {
// 	apiKey: "AIzaSyCObtTk1lRkVuHSS-MzsjdvocmJ8jP0EEI",
// 	authDomain: "conmutacion-d0375.firebaseapp.com",
// 	databaseURL: "https://conmutacion-d0375.firebaseio.com/"
// }

// firebase.initializeApp(config);

// var database = firebase.database();

// return firebase.database().ref('/prueba3').once('value').then(function(snapshot) {
// 	console.log(snapshot.val())
// })



var id = 0



io.on('connection', (socket) => {
	// app.get('/api/:id', (req, res) => {
	// 	io.emit('test', {test : 'test'})
	// 	console.log(req.params.id)
	// 	res.send('OK')
	// })
	eventEmitter.on('socket', (id) => {
		return console.log('socket')
	})
})


app.get('/api/:id', (req, res) => {
	res.send('hola')
	eventEmitter.emit('socket', req.params.id);
})


var port = process.env.PORT || 3000

http.listen(port, () => {
	console.log(`listen on port ${port}`)
})

