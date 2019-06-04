#!/usr/bin/env python

import requests
import serial
arduino = serial.Serial('/dev/ttyACM0', baudrate=9600, timeout=1.0)

while True:
    line = arduino.readline()
    if len(line) > 0:
        print(line)
        r = requests.get("http://vinariam.herokuapp.com/api/" + str(line[0:-2]))
