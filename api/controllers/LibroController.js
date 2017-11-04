/**
 * LibroController
 *
 * @description :: Server-side logic for managing libroes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    buscar: function (req, res) {
        Libro.find(function (err, libros) {
            if (err) console.log(err);
            return res.view('inicio', {
                libros: libros
            });
        });
    },
    add: function (req, res) {
        let param = {
            nombre: req.body.nombre,
            stock: req.body.stock,
            stockAux: req.body.stock,
            version: req.body.version,
        };
        Libro.create(param, function (err, libro) {
            if (err)
                console.log(err);
            res.redirect('');
        });
    },
    vender: function (req, res) {
        var id = req.params.id;
        Libro.findOne(id, function(err, libro) {
            if (err) return res.send(err, 500);
            libro.stockAux--;
            Libro.update(id, libro, function(err, libro) {
                if (err) return res.send(err, 500);
                return res.redirect('');
            });
        });
    },
    devolver: function (req, res) {
        var id = req.params.id;
        Libro.findOne(id, function(err, libro) {
            if (err) return res.send(err, 500);
            libro.stockAux++;
            Libro.update(id, libro, function(err, libro) {
                if (err) return res.send(err, 500);
                return res.redirect('');
            });
        });
    },

    editar: function (req, res) {
        var id = req.params.id;
        Libro.findOne(id, function libroEncontrado(err, libro) {
            if (err) return res.send(err, 500);
            libro.estado = libro.estado == 'si' ? 'no' : 'si';
            Libro.update(id, libro, function(err, libro) {
                if (err) return res.send(err, 500);
                return res.redirect('');
            });
        });
    },

    borrarDispo: function (req, res) {
        var id = req.params.id;
        Libro.findOne(id, function(err, libro) {
            if (err) return res.send(err, 500);

            if (libro.estado == 'si') {
                Libro.destroy(id, function(err) {
                    if (err) return res.send(err, 500);
                    return res.redirect('');
                });
            } else {
                libro.stockAux--;
                Libro.update(id, libro, function(err, libro) {
                    if (err) return res.send(err, 500);
                    return res.redirect('');
                });
            }

        });
    },
    
    eliminar: function (req, res) {
        var id = req.param('id');
        Libro.find(id, function(err, libro) {
            if (err) return res.send(err, 500);
            Libro.destroy(id, function(err) {
                if (err) return res.send(err, 500);
                return res.redirect('');
            });
        });
    }

};

