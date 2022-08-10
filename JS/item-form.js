import { ProductsController } from "./itemsController.js"

const newProduct = new ProductsController(0);

const btn = document.getElementById("submit");

const newProductForm = (event) => {
  event.preventDefault();

  const newItemName = document.getElementById("newItemName");
  const newItemDescription = document.getElementById("newItemDescription");
  const newItemImageUrl = document.getElementById("newItemImageUrl");
  const newItemCreatedAt = document.getElementById("newItemCreatedAt");

  const name = newItemName.value;
  const description = newItemDescription.value;
  const imageUrl = newItemImageUrl.value;
  const createdAt = new Date().toLocaleDateString('en-US')
  
  /*
    Validation code here
*/

  newProduct.addItem(name, description, imageUrl, createdAt);

  newItemName.value = "";
  newItemDescription.value = "";
  newItemImageUrl.value = "";
  newItemCreatedAt.value = "";

};

btn.addEventListener("click", newProductForm);
