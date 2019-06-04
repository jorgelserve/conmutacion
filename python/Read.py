#!/usr/bin/env python

import requests
import serial
arduino = serial.Serial('/dev/ttyACM0', baudrate=9600, timeout=1.0)

while True:
    line = arduino.readline()
    line = line[0:-1]
    if len(line) > 0:
        print(line)
        r = requests.get("http://vinariam.herokuapp.com/api/" + str(line))
