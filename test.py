import math
import sys

def f(x):
    return math.sin(x) / 2*math.pi*x

print(sys.version)

print(f'Dentro de {f(1.5)}')
