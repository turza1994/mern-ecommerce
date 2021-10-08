import Product from "../models/productModel.js"

const createProduct = async (req, res) => {
    const data = req.body;
    const product = new Product(data)
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
}

const getProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
}

export {
    getProducts,
    createProduct
}