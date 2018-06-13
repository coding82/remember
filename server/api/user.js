const router = require('express').Router();
const { User, Book } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll()
    .then( allUsers => res.json(allUsers))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, { include: [{model: Book}]})
    .then( user => res.json(user))
    .catch(next);
})

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then( newUser => res.json(newUser))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then( user => user.update(req.body))
    .then( updated => res.json(updated))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  User.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(204))
    .catch(next)
})
