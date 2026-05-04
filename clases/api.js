const API = "https://fakeapi.net/products"

async function getProducts() {
    try {
        const response = await fetch(API)
        const data = await response.json()
        sumaDePrecios (data.data)
    } catch (error) {
        console.error("Error fetching products:", error)
        return []
    }
}

getProducts();

function sumaDePrecios(productos) {
    let suma = 0;
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        suma += producto.price * producto.stock;
        let sumaUnica = 0;
        sumaUnica = producto.price * producto.stock
        console.log(`el id ${producto.id} consta de ${producto.title} este tiene un precio de ${producto.price} por separado con ${producto.stock} productos en stock, el total del precio del stock es ${sumaUnica}`)
    }
    console.log(`Suma de precios de todos los productos incluyendo su stock es: ${suma}`);

}
