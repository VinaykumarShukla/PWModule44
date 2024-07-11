function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage:
  const products = [
    { id: 1, name: "Product A", category: "Electronics" },
    { id: 2, name: "Product B", category: "Clothing" },
    { id: 3, name: "Product C", category: "Electronics" },
    { id: 4, name: "Product D", category: "Home Goods" },
    { id: 5, name: "Product E", category: "Clothing" }
  ];
  
  const filterElectronics = filterByCategory(products);
  const electronicsProducts = filterElectronics("Electronics");
  console.log(electronicsProducts);
  // Output:
  // [
  //   { id: 1, name: "Product A", category: "Electronics" },
  //   { id: 3, name: "Product C", category: "Electronics" }
  // ]
  
  const filterClothing = filterByCategory(products);
  const clothingProducts = filterClothing("Clothing");
  console.log(clothingProducts);
  // Output:
  // [
  //   { id: 2, name: "Product B", category: "Clothing" },
  //   { id: 5, name: "Product E", category: "Clothing" }
  // ]