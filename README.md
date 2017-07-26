# Robus Raffle App Backend - Restful

API Restful creada para la aplicacion Robus Raffle App para el manejo de clientes de la compañía.

Las rutas que han sido creadas y probadas son:

**Requerimientos**

* NodeJS instalado

**Despliegue**
1. npm install 
2. npm start 

**Api Rest Routes**

Las rutas creadas para esta aplicacion son:

1. [GET] (https://robusraffleapp.herokuapp.com/clientes/obtenerClientes) -> Obtiene todos los clientes en el sistema
2. [POST] (https://robusraffleapp.herokuapp.com/clientes/registrarCliente)  -> Guarda un nuevo cliente en el sistema - Recibe por parametros POST (id,name,company,psotion,tel,email);
3. [DELETE] (http://localhost:3000/clientes/idCliente) -> Elimina el cliente en la base de datos

**Recursos**

- **Tecnologias**
  - [ Node Js - NPM ](https://nodejs.org/es/)

- **Base de Datos**
  - [ Mongoose ](http://mongoosejs.com/) 
  - [ Mlab ](https://mlab.com/)

- **Sintaxis Documentacion**
  - [ JSDocs ](http://usejsdoc.org/)

- **Hosting**
  - [ Heroku ](https://dashboard.heroku.com/apps)


[Online Demo](https://robusraffleapp.herokuapp.com/) Prueba la version de Robus Raffle Backend