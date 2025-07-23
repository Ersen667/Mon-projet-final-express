const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Le nom du produit'],
    trim: true,
  },
  price:{
    number,
    required: [true, 'Le prix du produit'],
    min: [0, 'Le prix ne peut pas etre plus petit que 0'],
  },
  description:{
    type: String,
    trim: true,
    default: 'Aucune description',
  },
  category:{
    type: String,
    default: 'Divers',
  },
  instock:{
    type: Boolean,
    default: true,
  },
  createAt:{
    type: Date,
    default: Date.now,
  },
  
});

module.exports = mongoose.model('Product', productSchema);
