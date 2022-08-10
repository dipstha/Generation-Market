import { ProductsController } from "./itemsController.js"

const newProduct = new ProductsController(0);

const btn = document.getElementById("submit");

const newProductForm = (event) => {
  event.preventDefault();

  const newItemName = document.getElementById("newItemName");
  const newItemDescription = document.getElementById("newItemDescription");
  const newItemImageUrl = document.getElementById("newItemImageUrl");

  const name = newItemName.value;
  const description = newItemDescription.value;
  const imageUrl = newItemImageUrl.value;

  /*
    Validation code here
*/

  newProduct.addItem(name, description, imageUrl);

  newItemName.value = "";
  newItemDescription.value = "";
  newItemImageUrl.value = "";
};

btn.addEventListener("click", newProductForm);
