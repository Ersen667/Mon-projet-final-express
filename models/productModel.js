const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le prix du produit'],
    trim:true,
  },
  price: {
    type: Number,
    required: [true, 'Le prix du produit'],
    min: [0,'Le prix ne peuvent pas inferieur a 0'],
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    default:'Divers',
  },
  instock: {
    type: Boolean,
    default: true,
  },
  createAt: {
    type: Date,
    default: Date.NOW
  },
  
});

module.exports = mongoose.model('Product', productSchema);
