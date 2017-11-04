/**
 * Libro.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {




  attributes: {
    nombre: {
      type: 'string'
    },
    stock: {
      type: 'integer'
    },
    stockAux: {
      type: 'integer'
    },
    version: {
      type: 'string'
    },
    estado: {
      type: 'string',
      defaultsTo: 'no'
    }
  }

};

