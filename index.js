const express  = require('express')
const app = express()



app.get('/', (req, res) => {
	res.send('hola mundo')
})

app.get('/a/:id', (req, res) => {
	res.send('hola mundo')
	console.log(`nuevo prestamo por parte del id ${req.params.id}`)
})

var port = process.env.PORT || 3000

app.listen(port, console.log(`listen on port ${port}`))

