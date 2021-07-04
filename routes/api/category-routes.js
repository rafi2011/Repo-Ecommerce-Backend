const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    // find all categories
    // be sure to include its associated Products
    const catagoryData = await catagory.findAll(req.params.id, {
      include: [{model: Product, through: Product, as: 'catagory_id'}]
    });
    if (!catagorydata) {
      res.status(404).json({messge: 'No catagory found ith this id'});
    return;
    }
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
