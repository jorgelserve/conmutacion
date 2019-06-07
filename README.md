
# Vinariam


![](https://www.raspberrypi.org/app/uploads/2017/06/Powered-by-Raspberry-Pi-Logo_Outline-Colour-Screen-500x153.png)

Vinariam es un sistema de préstamo de equipos para estudiantes sencillo y veloz.

  - Basado en Web
  - Interfaz sencilla
  - Magic

## Como empezar
1. Tener Python instalado con los paquetes `requests`  y  `serial`, puedes ver los pasos para instalarlos en el siguiente [link](https://github.com/jorgelserve/conmutacion/wiki/Como-instalar-request-y-serial-en-Python)
2.  clonar el proyecto de su respectivo repositorio y luego dirijace al directorio del mismo
    ```bash
    git clone https://github.com/jorgelserve/conmutacion.git && cd conmutacion
    ```
3. Suba el código de lector de tarjetas a una plataforma ARDUINO compatible que se encuentra en [LectorRFID/LectorRFID.ino](LectorRFID/LectorRFID.ino)
4. Conecte el Arduino al raspberry y ejecute el código de python para leer serial.
     ```bash
    python python/Read.py
    ```

5. Ingrese al este [link](http://vinariam.herokuapp.com) para visualizar los datos

    
# Autor
[Jorge Luis Serna Velasquez](https://github.com/jorgelserve)
