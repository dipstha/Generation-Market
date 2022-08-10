class ProductsController {
    constructor(currentId = 0){
        this.products = [];
        this.currentId = currentId;
    }

    addItem(name, description, img, createdAt){
    
        const product = {
            id: this.currentId++,
            name: name,
            description: description,
            img: img,
            createdAt: createdAt
        };
        this.products.push(product);

        localStorage.setItem("products", JSON.stringify(this.products));
    }

    productsFromLocalStorage() {
        const storageproducts = localStorage.getItem("products")
        if (storageproducts) {
            const products = JSON.parse(storageproducts)
            for (let i = 0; i < products.length; i++) {
                const product = products[i];
                this.products.push(product);
            }
        }
    }
}

let items = new ProductsController();

items.addItem('Laptop', 'fastest comp with a huge RAM', '../images/compathome.jpg', '2022-07-13');
items.addItem('hammer', 'The best', '../images/comp.jpg', '2019-02-01');
items.addItem('Toys', 'Fun', '../images/outdoors.jpg', '2021-12-20');
console.log(items);

export { ProductsController }