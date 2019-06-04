const yo = require('yo-yo')


document.getElementById('header').appendChild(require('./header.js'))

document.getElementById('main-container').appendChild(yo`<div>
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
    <pre><code class="language-bash">git <span class="hljs-built_in">clone</span> https://github.com/jorgelserve/conmutacion.git && <span class="hljs-built_in">cd</span> conmutacion
    </code></pre>
    </li>
    <li>
    <p>Instale las dependencias</p>
    <pre><code class="language-bash">npm install
    </code></pre>
    </li>
    <li>
    <p>Ejecute el programa</p>
    <pre><code class="language-bash">npm run build && npm start
    </code></pre>
    </li>
    </ol>
    <h1><a id="Autor_26"></a>Autor</h1>
    <p><a href="https://github.com/jorgelserve">Jorge Luis Serna Velasquez</a></p>
</div>
`)
