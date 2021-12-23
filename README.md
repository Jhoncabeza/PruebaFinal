Prueba técnica para desarrollador FrontEnd haciendo uso de React JS
Resumen
En esta prueba vamos a desarrollar un sencillo pokedex, es decir, una app para consultar los distintos tipos
de pokemon y algunas características
Especificaciones
Se desarrollará una sencilla webapp usando React y el API de pokemon PokeAPI. El servicio tiene limitado
el número de peticiones así que usarlo con cuidado. Además, tenéis una copia del servicio también
disponible en bajo la URL http://pokeapi.salestock.net/api/v2/
La app debe tener las siguientes características:
● Debe tener un listado de pokemon, donde debe aparecer al menos su foto, nombre, número y tipo (o
tipos).
● Deben aparecer los 25 primeros pokemon (para tener la información detallada de cada uno,
tendremos que hacer una petición al servidor y recuerda que hay un límite).
● Los pokemon deben poder filtrarse por nombre.
● En el listado principal debe aparecer, si el pokemon es una evolución de otro, de cuál proviene.
● Usar el router de React para que, al hacer click sobre la tarjeta de un pokemon, aparezca una
pantalla de detalle con más información detallada de ese pokemon. Por ejemplo: altura, peso,
habilidades, imágenes del pokemon y sus evoluciones

Inspiración:
http://pokedex.org
FAQ:
1. Realizar la prueba en React JS.
2. Puede utilizar cualquier framework CSS.
3. Debe permitir realizar el registro e inicio de sesión de distintos usuarios. Integrar módulo de
autenticación haciendo uso de Firebase.
4. Debe tener inicio de sesión con google y facebook
5. Se debe evidenciar Redux en el manejo de los datos.