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

items.addItem('Pan', 'Grey stainless steel pan', '../images/pan.jpg', '2022-07-13');
items.addItem('Notebook', 'Spiral Notebook - ruled paper', '../images/notebook.jpg', '2019-02-01');
items.addItem('Bowls and a Teapot', 'A set of 6 white porcelain bowls with a teapot'
, '../images/bowls.jpg', '2021-12-20');
console.log(items);

export { ProductsController }