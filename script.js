class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}
let productOne = new Product(Toothbrush, 5.99);
let productTwo = new Product(Toothpaste, 8.99);
let productThree = new Product(Floss, .99);
let productFour = new Product(WaterPik, 53.99)
let productList = document.querySelector(".product-list")
let productObjects = [
    {
      name: "Toothbrush",
    },
    {
      name: "Toothpaste",
    },
    {
      name: "Floss",
    },
    {
      name: "WaterPik",
    },
  ];