const Product = require('../models/productModel');
// Créer un produit
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//Recuperer tous les produits
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
//Recuperer un produit par son ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//Modifier un produit
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



//Supprimer un produit
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
