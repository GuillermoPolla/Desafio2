const ProductManager = require('./ProductManager');

const productManager = new ProductManager('./productos.json');

// Añadir un producto
productManager.addProduct({
    Title: 'Articulo',
    Description: 'Descripción',
    Price: 10.99,
    Thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_691113-MLU72203159568_102023-O.webp',
    Code: 'A123',
    Stock: 100
});

// Obtener todos los productos
const allProducts = productManager.getProduct();
console.log(allProducts);

// Obtener un producto por ID
const productById = productManager.getProductById(1);
console.log(productById);

// Actualizar un producto
productManager.updateProduct(1, { Price: 11.99 });

// Eliminar un producto
productManager.deleteProduct(1);
