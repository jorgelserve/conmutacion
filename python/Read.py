#!/usr/bin/env python

import RPi.GPIO as GPIO
import requests
import time

from mfrc522 import SimpleMFRC522

reader = SimpleMFRC522()

while 1:
        try:
                id, text = reader.read()
                print(id)
                print(text)
                r = requests.get("http://192.168.1.60:3000/a/" + str(id))
        finally:
                GPIO.cleanup()

        time.sleep(3)