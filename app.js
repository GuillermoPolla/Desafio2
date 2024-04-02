const ProductManager = require('./ProductManager');




const manager = new ProductManager();
manager.addProduct({ title: "Product 1", description: "Description 1", price: 10, thumbnail: "thumb1.jpg", code: "P1", stock: 100 });

// Actualizar un producto
manager.updateProduct(1, { price: 15 });

// Eliminar un producto
manager.deleteProduct(1);



console.log(manager.getProductById(1)); // Should display "Not found"
