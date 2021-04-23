# Instalación


1. Inicialize MySql con la base de datos ```pixomaticglb```
2. Ejecute en la terminal en la carpeta root del proyecto los siguientes comandos:
    1. ```npm run install```
    2. ```npm run build```
    3. ```npm run start```


# Misión 1.A
- Completada con éxito
- Se ha añadido una columna de address para saber donde está la sede de una empresa

Modelo Companies:
- id: int;
- name: text;
- CIF: char(9);
- shortdesc: varchar(100);
- description: varchar(1000);
- address: varchar(100);
- email: varchar(100);
- CCC: CHAR(20);
- date: datetime;
- status: enum('OPEN', 'CLOSED');
- logo: varchar(2048);

Se ha añadido una restricción de unicidad al CIF.
Se ha añadido una restricción al CIF para verificar que es válido.

