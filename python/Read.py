#!/usr/bin/env python

import requests
import serial
arduino = serial.Serial('/dev/cu.usbmodem14401', baudrate=9600, timeout=1.0)

while True:
    line = arduino.readline()
    print(line)
