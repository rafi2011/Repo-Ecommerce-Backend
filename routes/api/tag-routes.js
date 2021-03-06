const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
      async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.param.id, {
      include: [{model: Product, through: Product, as: 'tag_id'}]
});
if (!tagData) {
    res.status(404).json({message: 'No tag found with this id'});
    return;
}

res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async(req, res) => {
  // create a new tag
  try{
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
    
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
