const socket = io.connect('/.', {
	'forceNew': true
})


socket.on('test', (data) => {
	console.log(data)
})