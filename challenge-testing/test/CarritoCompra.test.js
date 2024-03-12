const CarritoCompra = require("./index");

/* constructor(): Inicializa el carrito como un array vacío.

agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado. */


describe("tests de CarritoCompra", ()=>{
    beforeEach(()=>{
        carritoCompra = new CarritoCompra()
    })

    it("El carrito deberia iniciar como un array vacio", ()=>{
        expect(carritoCompra.productos).toBeDefined();
        expect(carritoCompra.productos).toEqual([]);
    })

    
    it("Deberia incluir un metodo que reciba un objeto representando un producto y lo agregue al carrito", ()=>{
        let producto1 = {producto: "muzzarella", cantidad: 1, precio: 5000}
        let producto2 = {producto: "faina", cantidad: 4, precio: 600}
    
        carritoCompra.agregarProducto(producto1);
        carritoCompra.agregarProducto(producto2);

        expect(carritoCompra.productos).toContain(producto1);
        expect(carritoCompra.productos).toContain(producto2);
    })

    it("Deberia incluir un metodo que calcule el total de la compra sumando los precios de todos los productos en el carrito", ()=>{
        carritoCompra.agregarProducto({producto: "muzzarella", cantidad: 1, precio: 5000})
        carritoCompra.agregarProducto({producto: "faina", cantidad: 4, precio: 600})
        let subTotal = (5000 + 600 * 4)

        expect(carritoCompra.calcularPrecio).toBeDefined();
        expect(carritoCompra.calcularPrecio()).toEqual(subTotal)
    })

    it("Deberia incluir un metodo que aplique porcentajes de descuentoal total de la compra", ()=>{
        carritoCompra.agregarProducto({producto: "muzzarella", cantidad: 1, precio: 5000})
        carritoCompra.agregarProducto({producto: "faina", cantidad: 4, precio: 600})

        let descuento = 15
        let total = carritoCompra.calcularPrecio();

        let subTotalConDescuento = total - (total * (descuento/100))
        
        expect(carritoCompra.calcularDescuento).toBeDefined();
        expect(carritoCompra.calcularDescuento(15)).toEqual(subTotalConDescuento);
    })
})
