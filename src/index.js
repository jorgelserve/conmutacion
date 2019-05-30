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
							return empty(container)
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
        
