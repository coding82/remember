const router = require('express').Router();
const User = require('../db/models/user');

router.post('/login', (req, res, next) => {
  return User.findOne({where: {email: req.body.email}})
    .then( user => {
      if(!user) res.status(401).send('User not found')
      else if(!user.correctPassword(req.body.password)) res.status(401).send('Incorrect Password')
      else req.login(user, err => err ? next(err) : res.json(user))
    })
    .catch(next);
})

router.post('/signup', (req, res, next) => {
  return User.create(req.body)
    .then(user => err ? next(err) : res.json(user))
    .catch( err => {
      if(err.name === 'SequelizeUniqueConstraintError') res.status(401).send('User already exists')
      else next(err)
    })
})

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

router.get('/me', (req, res) => {
  res.json(req.user);
})

module.exports = router;
