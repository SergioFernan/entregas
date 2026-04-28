const API = "https://fakeapi.net/products"

async function getProducts() {
    try {
        const response = await fetch(API)
        const data = await response.json()

        sumaDePrecios(data.data)
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
        suma += producto.price;
    }
    console.log(`Suma de precios: ${suma}`);
}
