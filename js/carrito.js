function Producto(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
}

const listaProductos = [];

listaProductos.push(new Producto("Pincel Ancho", 250, "Faber Castell"));
listaProductos.push(new Producto("Pincel fino", 180, "Faber Castell"));
listaProductos.push(new Producto("Pintura para tela roja", 60, "Artist"));
listaProductos.push(new Producto("Pintura para tela negra", 60, "Artist"));
listaProductos.push(new Producto("Pintura para tela azul", 60, "Artist"));

const carritoFinal = [];
let seleccionar;
let continuar = 'si'; 
let cantidad = 0;
let total = 0;
let productoSeleccionado;

function ingreso() {
    const cliente = {
        nombreCliente: prompt("Ingrese su nombre"),
        direccionCliente: prompt("Ingrese su dirección para el envío")
    };

    alert(`Según nuestros datos registrados, usted es ${cliente.nombreCliente} y su dirección de envío es ${cliente.direccionCliente}`);

    const comenzarCompra = prompt("Si los datos son correctos, conteste 'si' para comenzar la compra");

    if (comenzarCompra && comenzarCompra.toLowerCase() === 'si') {
        alert('La compra ha comenzado.');
    } else {
        alert('La compra ha sido cancelada.');
    }
}

ingreso(); // Call the ingreso function to start the shopping process

function mostrarProductos() {
    do {
        const listadoDeProductos = listaProductos.map((productos, index) =>
            `${index + 1} - ${productos.nombre} $${productos.precio} ${productos.marca}`);

        seleccionar = parseInt(prompt('¿Qué producto desea elegir?' + '\n' + listadoDeProductos.join('\n') + "\nIngrese el número de producto que desea agregar al carrito"));

        if (isNaN(seleccionar) || seleccionar < 1 || seleccionar > listaProductos.length) {
            alert("Debe ingresar un número válido de producto.");
        } else {
            productoSeleccionado = listaProductos[seleccionar - 1];
            alert(`El artículo seleccionado es ${productoSeleccionado.nombre}`);

            cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar"));

            if (!isNaN(cantidad) && cantidad > 0) {
                carritoFinal.push({
                    nombre: productoSeleccionado.nombre,
                    precio: productoSeleccionado.precio,
                    cantidad: cantidad
                });
                alert(`Se han agregado ${cantidad} ${productoSeleccionado.nombre} al carrito.`);
            } else {
                alert("Debe ingresar una cantidad válida.");
            }

            continuar = prompt("¿Desea continuar comprando? (si/no)");
        }
    } while (continuar.toLowerCase() === 'si');

    total = carritoFinal.reduce((acum, articulo) => acum + articulo.precio * articulo.cantidad, 0);

    alert(`El total de su compra es: $${total}`);
}

mostrarProductos();