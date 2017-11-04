$(document).ready(function () {

    $('#editarModal').on('show.bs.modal', function (evnt) {

        var nombre = $(evnt.relatedTarget).val();
        $('#nombreLibro').text(nombre);
    });
});

function validarVenta(id, stock, stockAux) {
    if (stockAux > 1) document.location = "/vender/" + id;
    else
        if (stockAux == 1) document.location = "/borrarDispo/" + id;
        else {
            swal({
                text: 'No hay libros disponibles',
                type: 'warning',
                confirmButtonText: 'Entendido'
            })
        }
}

function validarDevol(id, stock, stockAux) {
    if (stockAux < stock) document.location = "/devolver/" + id;
    else {
            swal({
                text: 'No se pueden devolver mas de lo que existia en un comienzo',
                type: 'warning',
                confirmButtonText: 'Entendido'
            })
        }
}

function validarOpcion(id) {
    document.location = "/editar/" + id;
}

