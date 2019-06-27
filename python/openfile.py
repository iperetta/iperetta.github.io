import os

BASEPATH = os.path.dirname(__file__)
print(BASEPATH)

with open(BASEPATH + '/regex.py', 'r') as f:
    texto = f.readlines()

for linha in texto:
    print(linha)

with open(BASEPATH + '/xxx.igor', 'w') as f:
    f.write('Este é um arquivo teste!\n')

with open(BASEPATH + '/regex.py', 'rb') as f:
    while True:
        byte = f.read(1)
        if not byte:
            break
        print(byte.hex())

with open(BASEPATH + '/xxx.txt', 'a') as f:
    f.write('Este é um arquivo teste!\n')
