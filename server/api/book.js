const router = require('express').Router();
const { Book } = require('../db/models')

module.exports = router;

router.get('/', (req, res, next) => {
  Book.findAll()
    .then( allBooks => res.json(allBooks))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
  Book.findById(req.params.id)
    .then( book => res.json(book))
    .catch(next);
})

router.post('/', (req, res, next) => {
  Book.create(req.body)
    .then( newBook => res.json(newBook))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
  Book.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(204))
    .catch(next)
})


