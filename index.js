const express  = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('hola mundo')
})

var port = process.env.PORT || 3000

app.listen(port, console.log(`listen on port ${port}`))

