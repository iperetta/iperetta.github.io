import math
import random as rnd
from hashlib import sha256
import boba

alpha = list((a/10)*2*math.pi for a in range(11))
print(alpha)
print(list(map(math.cos, alpha)))
print(math.sin(2*math.pi))

def dado():
    """
    Simula dados de 6 faces
    """
    return rnd.randint(1, 6)

for i in range(10):
    print(dado())

print(sha256(b'Igor Peretta').hexdigest())

print(boba.divisaoInteira(15,6))