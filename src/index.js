const firebase = require('firebase')
const empty = require('empty-element')
const yo = require('yo-yo')
require('./homepage')

var firebaseConfig = {
	apiKey: 'AIzaSyCObtTk1lRkVuHSS-MzsjdvocmJ8jP0EEI',
	authDomain: 'conmutacion-d0375.firebaseapp.com',
	databaseURL: 'https://conmutacion-d0375.firebaseio.com',
	projectId: 'conmutacion-d0375',
	storageBucket: 'conmutacion-d0375.appspot.com',
	messagingSenderId: '682026443855',
	appId: '1:682026443855:web:2b46e0ab8d2d22f8'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var database = firebase.database()

const socket = io.connect('/', {
	'forceNew': true
})


socket.on('test', (data) => {
	return firebase.database().ref(`/${data.id}`).once('value').then(function(snapshot) {
		console.log(snapshot.val())
		if (snapshot.val() != null) {
			var container = document.getElementById('main-container')
			var el = yo` <div class="row">
			<br>
			    <form class="col s12">
			      <div class="row">
			        <div class="input-field col s12">
			          <input disabled value=${snapshot.val().nombre} placeholder="Nombre" id="nombre" type="text" class="validate">
			          <label for="nombre"></label>
			        </div>
			      </div>
			      <div class="row">
			        <div class="input-field col s12">
			          <input disabled value=${snapshot.val().id} id="id" type="number" class="validate">
			          <label for="id"></label>
			        </div>
			      </div>
			      <div class="row">
			        <div class="input-field col s12">
			          <input disabled value=${snapshot.val().carrera} id="carrera" type="text" class="validate">
			          <label for="carrera"></label>
			        </div>
			      </div>
			      <div class="row">
			        <div class="input-field col s12">
			          <input disabled value=${snapshot.val().email} id="email" type="email" class="validate">
			          <label for="email"></label>
			        </div>
			      </div>

					<textarea id="textarea1" class="materialize-textarea">${snapshot.val().equipos}</textarea>
						<label for="textarea1">Textarea</label>
					</div>
					<a class="waves-effect waves-light btn" onclick=${function () {
						var textarea1 = document.getElementById('textarea1')
						if (textarea1.value.length) {
							var updates = {};
							updates[`/${snapshot.val().id}/equipos`] = textarea1.value
							firebase.database().ref().update(updates)
							alert('Préstamo realizado satisfactoriamente')
							return empty(container).appendChild(yo`<div>
                                <h1><a id="Vinariam_0"></a>Vinariam</h1>
                                <p><img src="https://www.raspberrypi.org/app/uploads/2017/06/Powered-by-Raspberry-Pi-Logo_Outline-Colour-Screen-500x153.png" alt=""></p>
                                <p>Vinariam es un sistema de prestamo de equipos para estudiantes sencillo y veloz.</p>
                                <ul>
                                <li>Basado en Web</li>
                                <li>Interfaz sencilla</li>
                                <li>Magic</li>
                                </ul>
                                <h2><a id="Instalacin_11"></a>Instalación</h2>
                                <ol>
                                <li>
                                <p>Primero clone el proyecto de su respectivo repositorio y luego dirijace al directorio del mismo</p>
                                <pre><code class="language-bash">git <span class="hljs-built_in">clone</span> https://github.com/jorgelserve/conmutacion.git &amp;&amp; <span class="hljs-built_in">cd</span> conmutacion
                                </code></pre>
                                </li>
                                <li>
                                <p>Instale las dependencias</p>
                                <pre><code class="language-bash">npm install
                                </code></pre>
                                </li>
                                <li>
                                <p>Ejecute el programa</p>
                                <pre><code class="language-bash">npm run build &amp;&amp; npm start
                                </code></pre>
                                </li>
                                </ol>
                                <h1><a id="Autor_26"></a>Autor</h1>
                                <p><a href="https://github.com/jorgelserve">Jorge Luis Serna Velasquez</a></p>
                            </div>`)
						}
					}}>Prestar</a>
			    </form>
			  </div>`
			empty(container).appendChild(el)
		} else {
			alert('El usuario no existe')
		}
	})
	$(document).ready(function() {
		M.updateTextFields()
	})
	$(document).ready(function() {
		$('input#input_text, textarea#textarea2').characterCounter()
	})
})


 // <!-- Default with no input (automatically generated)  -->
 //  <div class="chips"></div>
 //  <div class="chips chips-initial"></div>
 //  <div class="chips chips-placeholder"></div>
 //  <div class="chips chips-autocomplete"></div>

 //  <!-- Customizable input  -->
 //  <div class="chips">
 //    <input class="custom-class">
 //  </div>
        
