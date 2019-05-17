const express  = require('express')
const app = express()


var id = 0

app.get('/', (req, res) => {
	if (!id) {
		res.send('No hay equipos prestados')
	} else {
		res.send(`${id} presto un equipo`)
	}
})

app.get('/a/:id', (req, res) => {
	res.send('hola mundo')
	if (id == 0) {
		id = req.params.id
		console.log(`nuevo prestamo por parte del id ${req.params.id}`)
	} else if (id == req.params.id){
		id = 0
		console.log(`${req.params.id} devolvio equipo`)
	}
	
})

var port = process.env.PORT || 3000

app.listen(port, console.log(`listen on port ${port}`))

