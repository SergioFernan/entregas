const API = "https://fakeapi.net/products?limit=20"

async function getProducts() {
    try {
        const response = await fetch(API);
        const data = await response.json();
        let popular = []
        for (let i = 0; i < data.data.length; i++) {
            const element = data.data[i].rating;
            popularIndi(element.rate, element.count);
        }
        console.log(popular)
    } catch (error) {
        cosole.error("error al conectarse al FAKEAPI");
    }
}
getProducts()






function popularIndi(rate, count) {

    if (rate >= 4.7 && count >= 100) {
        popular.push(element)
    }
}





