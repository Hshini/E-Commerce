const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  
  Category.findAll({
    include:[{
      model:Product
    }]
  })
  .then((answer)=>  {
    console.log(answer)
    res.json(answer)
  })
  .catch((err)=> {
    console.log(err)
    res.status(500).json(err)
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
    console.log(req.params.id)
  Category.findByPk(req.params.id,{
    include:[{
      model:Product
    }]
   })
  .then((answer)=>{
    res.json(answer)
  })
    .catch((err)=> {
    console.log(err)
    res.status(500).json(err)
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((answer)=>{
    res.json(answer)
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update (req.body,{
    where: {
      id: req.params.id
    }
  })
  .then((answer) => {
    res.json(answer)
  })
  .catch((err) => {
    console.log(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
 Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((answer) => {
    res.json(answer)
  })
  .catch((err) => {
    console.log(err)
  })
});

module.exports = router;
