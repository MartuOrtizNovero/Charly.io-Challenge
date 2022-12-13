
------------------------------------------------------ Challenge Charly.io ---------------------------------------------------------------

El repositorio se compone de dos carpetas principales:
Api y Client, donde podemos encontrar el back-end y el fron-end respectivamente.

Para poder levantar el servidor se debe ejecutar el comando npm run dev
y para levantar el fron-end se debe ejecutar el comando npm start.

Dentro de la carpeta api se encuentra el archivo app.js donde configuramos el servidor y el puerto donde estara escuchando.
Tambien se encuentra en archivo data.js con la informacion del array de objetos companies.

 Por ultimo encontramos 2 carpetas:
 1) Controllers: es una funcion que hace un llamado para obtener la info de data
 2) Routes: en el archivo index hacemos la ruta con el pedido get para obtener tal informacion

En client encontramos como carpeta principal src, dentro de la cual se encuentra la carpeta components con el componente principal Companies que renderiza toda la informacion solicitada.

En el archivo ApiInfo hacemos el llamado al endpoint para cargar la data.

