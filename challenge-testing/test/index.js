class CarritoCompra {
    constructor(){
        this.productos = []
    }

    agregarProducto = function(producto){
        this.productos.push(producto);
    }

    calcularPrecio = function(productos){
        let total = 0;
        this.productos.forEach(producto => {
            total += (producto.precio * producto.cantidad)
        });

        return total;
    }

    calcularDescuento = function(descuento){
        let totalConDescuento = this.calcularPrecio() - (this.calcularPrecio() * (descuento/100));
        return totalConDescuento;
    }
}

// const carritoCompra = new CarritoCompra;

// carritoCompra.agregarProducto({producto: "muzzarella", cantidad: 1, precio: 5000})
// carritoCompra.agregarProducto({producto: "faina", cantidad: 4, precio: 600})

// console.log(carritoCompra.calcularDescuento(15));
module.exports = CarritoCompra;