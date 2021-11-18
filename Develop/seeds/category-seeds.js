const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'chicago cloths',
  },
  {
    category_name: 'california pants',
  },
  {
    category_name: 'boby shmurda',
  },
  {
    category_name: 'boston red soxs',
  },
  {
    category_name: 'crocs',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
