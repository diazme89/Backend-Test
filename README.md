# Información acerca del proyecto - Backent-Test para Telecom

Backent-Test

Se requiere implementar una API que provea en formato JSON el estado del tiempo basado en
diferentes endpoints. 

Librerias usadas:
```
Supertest 
Should
ip-api 
Open Weather Map
```

Quick Start
``` 
$ npm install
$ npm start
```

Ruta base
/v1

Endpoints implementados
```
/location

Devuelve los datos de ubicación city según ip-api.

/current[/city]

City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo actual.

/forecast[/city]

City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo a 5 días 
```

Test
```
$ npm install
$ npm test
```