# https://repl.it/@AdrianSkar/Taller-programacion-desde-0

#_______________________________________________________________________

# print('Hello world');

# nm = input('nombre? ')
# print('Hola', nm)

# tortugas

import turtle

miTortuga1 = turtle.Turtle();
# miTortuga1.forward(50);
# miTortuga1.left(90);
# miTortuga1.forward(50);
# miTortuga1.left(90);
# miTortuga1.forward(50);
# miTortuga1.left(90);
# miTortuga1.forward(50);
# miTortuga1.left(90);

# for i in range(4):
# 	miTortuga1.forward(50);
# 	miTortuga1.left(90);

# for _ in range(12):
# 	miTortuga1.forward(50);
# 	miTortuga1.left(30);

# tipo = input('Triángulo o cuadrado (T/C): ');

# def triangulo(l):
# 	for _ in range(3):
# 		miTortuga1.forward(l);
# 		miTortuga1.left(120);
# def cuadrado(l):
# 	for i in range(4):
# 		miTortuga1.forward(l);
# 		miTortuga1.left(90);
# def octogono():
# 	for _ in range(12):
# 		miTortuga1.forward(50);
# 		miTortuga1.left(30);

# for i in range(6):
# 	triangulo(100)
# 	miTortuga1.forward(100)
# 	miTortuga1.left(60)

# if tipo == 'C':
# 	cuadrado()
# elif tipo == 'T':
# 	triangulo()
# else:
# 	octogono()


def poligono(numLados, l):
	for i in range(numLados):
		miTortuga1.forward(l)
		miTortuga1.left(360/numLados)

poligono(5, 50)


print('terminé');


# Tipos de datos:
	# - string
	# - bool
	# - num



