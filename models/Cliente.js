const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose.Schema;

/**
 * Metodo: Genera el esquema para la coleccion de objectos clientes
 * @param {Object} PropiedadesCliente - Recibe un objeto de propiedades el cual espeficia que campos debe contener la coleccion de objetos clientes
 * id -> Numero de identificacion del cliente[ Campo Obligatorio y unico ]
 * name -> Nombre del cliente [ Campo Obligatorio ]
 * company -> Nombre compañia del cliente [ Campo Obligatorio ]
 * position -> Rol dentro de la compañia [ Campo Obligatorio ]
 * tel -> Telefono de contacto del cliente [ Campo Obligatorio ]
 * email -> Correo electronico de contacto del cliente [ Campo Obligatorio ]
 * @author Sebastian Guevara <rlxsebas@gmail.com>
 * @version 1.0.0
 * Ultima Modificación:   07/25/2017 DD-MM-YYYY
 */

var schema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    company: { type: String, required: true },
    position: { type: String, required: true },
    tel: { type: Number, required: true },
    email: [{ type: String, required: true }]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("Cliente", schema);