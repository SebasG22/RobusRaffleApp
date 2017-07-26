var express = require('express');
var router = express.Router();

const Cliente = require('./../models/Cliente');

/**
 * Ruta GET: Obtiener Clientes 
 * @param {Object} Request - Objecto Request incluye informacion acerca de la peticion
 * @param {Object} Response - Objecto para generar una respuesta 
 * @param {function} next - Callback para continuar con la siguiente linea de codigo - MiddleWare
 * Obtiene todos los clientes desde la base de datos, sino existe alguno envia un array vacio.
 * @author Sebastian Guevara <rlxsebas@gmail.com>
 * @version 1.0.0
 * date  07/25/2017 DD-MM-YYYY
 */

router.get('/obtenerClientes', function(req, res, next) {
    Cliente.find({}).then(function(clientes) {
        res.send({clientes:clientes,total:clientes.length});
    });
});

/**
 * Ruta POST: RegistrarCliente 
 * @param {Object} Request - Objecto Request incluye informacion acerca de la peticion
 * @param {Object} Response - Objecto para generar una respuesta 
 * @param {function} next - Callback para continuar con la siguiente linea de codigo - MiddleWare
 * Registra el cliente en la base de datos tomando los valores enviados en la peticion
 * Paso seguido, ejecuta el metodo guardar si ocurre un error envia un error de codigo 500 con la descripcion del error generado. 
 * @author Sebastian Guevara <rlxsebas@gmail.com>
 * @version 1.0.0
 * date  07/25/2017 DD-MM-YYYY
 */
router.post('/registrarCliente', (req, res, next) => {
    var cliente = new Cliente({
        id: req.body.id,
        name: req.body.name,
        company: req.body.company,
        position: req.body.position,
        tel: req.body.tel,
        email: req.body.email
    });

    cliente.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Ha ocurrido un error',
                error: err
            });
        }
        res.status(201).json({
            message: "Cliente creado satisfactoriamente",
            obj: result
        });
    });
});

/**
 * Ruta Delete: Eliminar Cliente 
 * @param {Object} Request - Objecto Request incluye informacion acerca de la peticion
 * @param {Object} Response - Objecto para generar una respuesta 
 * @param {function} next - Callback para continuar con la siguiente linea de codigo - MiddleWare
 * Busca el cliente y lo remueve en la base de datos dependiendo del parametro id del objecto resquest.
 * Si ocurre un error en la transaccion con la base de datos envia un error 500,y envia el mensaje de error.
 * Si el usuario no existe envio un error 500, y envia el mensaje de error con el valor 'El usuario no existe en la base de datos'.
 * Si no ingresa a ninguno de estas expeciones, sginfica que la transaccion culmino correctamente
 * @author Sebastian Guevara <rlxsebas@gmail.com>
 * @version 1.0.0
 * date  07/25/2017 DD-MM-YYYY
 */
router.delete('/:id', function(req, res, next) {
    Cliente.findOneAndRemove({id:req.params.id}, function(err, cliente) {
        if (err) {
            return res.status(500).json({
                title: 'Ha ocurrido un error',
                error: err
            });
        }

        if (!cliente) {
            return res.status(500).json({
                title: 'No se ha encontrado el cliente en la base de datos',
                error: { message: "No se ha encontrado el cliente en la base de datos" }
            });
        }
            res.status(201).json({
                message: 'Se ha removido el usuario de la base de datos',
                obj: cliente
            });
    });
})

module.exports = router;