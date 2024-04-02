class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(product) {
        // Verificar que todos los campos requeridos estén presentes
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error("All fields are mandatory");
            return;
        }

        // Verificar que no haya otro producto con el mismo código
        if (this.products.some(p => p.code === product.code)) {
            console.error("Product with same code already exists");
            return;
        }

        // Asignar un ID único al producto y agregarlo al arreglo de productos
        product.id = this.nextId++;
        this.products.push(product);
        console.log("Product added successfully");
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error("Not found");
        }
        return product;
    }

    updateProduct(id, updatedFields) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            console.error("Product not found");
            return;
        }

        this.products[index] = {
            ...this.products[index],
            ...updatedFields
        };

        console.log("Product updated successfully");
    }

    deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            console.error("Product not found");
            return;
        }

        this.products.splice(index, 1);
        console.log("Product deleted successfully");
    }
}

module.exports = ProductManager;
