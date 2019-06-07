const yo = require('yo-yo')


document.getElementById('header').appendChild(require('./header.js'))

document.getElementById('main-container').appendChild(yo`<div>
			<h1><a id="Vinariam_1"></a>Vinariam</h1>
		<p><img src="https://www.raspberrypi.org/app/uploads/2017/06/Powered-by-Raspberry-Pi-Logo_Outline-Colour-Screen-500x153.png" alt="" /></p>
		<p>Vinariam es un sistema de préstamo de equipos para estudiantes sencillo y veloz.</p>
		<ul>
			<li>Basado en Web</li>
			<li>Interfaz sencilla</li>
			<li>Magic</li>
		</ul>
		<h2><a id="Como_empezar_12"></a>Como empezar</h2>
		<ol>
			<li>
				<p>Tener Python instalado con los paquetes <code>requests</code> y <code>serial</code>, puedes ver los pasos para instalarlos en el siguiente <a href="https://github.com/jorgelserve/conmutacion/wiki/Como-instalar-request-y-serial-en-Python">link</a></p>
			</li>
			<li>
				<p>clonar el proyecto de su respectivo repositorio y luego dirijace al directorio del mismo</p>
				<pre></pre>
			</li>
			<li>
				<p>Suba el código de lector de tarjetas a una plataforma ARDUINO compatible que se encuentra en <a href="LectorRFID/LectorRFID.ino">LectorRFID/LectorRFID.ino</a></p>
			</li>
			<li>
				<p>Conecte el Arduino al raspberry y ejecute el código de python para leer serial.</p>
				<pre></pre>
			</li>
			<li>
				<p>Ingrese al este <a href="http://vinariam.herokuapp.com">link</a> para visualizar los datos</p>
			</li>
		</ol>
	</div>`)
