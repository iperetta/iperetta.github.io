import re

# telefone = re.compile(r'\([0]{0,1}(\d{2})\)\s*(\d{4,5})-(\d{4})')

# texto = """
# Meus telefones são (34)     3239-4778 ou (034)99277-0277.
# """

# info = telefone.findall(texto)

# for i in info:
#     print('0055'+''.join(i))

siglas = re.compile(r'[A-Z]{2,}')

texto = """
Os endereços da Internet são mais conhecidos pelos nomes associados 
aos endereços IP (por exemplo, o nome www.wikipedia.org está associado 
ao IP 208.80.152.130[4]). Para que isto seja possível, é necessário 
traduzir (resolver, em inglês, ou resolvedor) os nomes em endereços IP. 
O Domain Name System (DNS) é um mecanismo que converte nomes em endereços 
IP e vice-versa. Assim como o endereçamento CIDR, os nomes DNS são 
hierárquicos e permitem que faixas de espaços de nomes sejam delegados 
a outros DNS. Acessado a partir de feelt.ufu.br.
"""
info = siglas.findall(texto)
for i in info:
    print(i)

urls = re.compile(r'(([w]{3}\.){0,1}([a-zA-Z][a-zA-Z0-9]{0,}\.){1,}([a-zA-Z]{2,4}))')
info = urls.findall(texto)
for i in info:
    print(i[0])