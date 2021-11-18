const { Product } = require('../models');

const productData = [
  {
    product_name: 'Baseballbat',
    price: 4.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'yeezys',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'young dolph grave stone',
    price: 300.420,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: '1011 bricksquad mix tape',
    price: 69.69,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'chiraqologst diarys',
    price: 69.69,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
