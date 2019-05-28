const express = require('express');
const Goal = require('../models/Goal')
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

// Route to get all goals
router.get('/goals', isLoggedIn, (req, res, next) => {
  Goal.find()
    .then(goals => {
      res.json(goals);
    })
    .catch(err => next(err))
});


router.get('/mygoals', isLoggedIn, (req, res, next) => {
  Goal.find({ owner: req.user._id })
    .then(goals => {
      res.json(goals);
    })
    .catch(err => next(err))
});

//Route to get the goal by id
router.get('/goaldetails/:id', isLoggedIn, (req, res, next) => {
  console.log('req.params.id')
  console.log(req.query)

  Goal.findById({ id: req.params.id })
    .then(goal => {
      res.json(goal);
      console.log('Goal is', goal)
    })
    .catch(err => next(err))
});


// Route to add a goal
router.post('/savegoal', isLoggedIn, (req, res, next) => {
  let { name, partner, date, description } = req.body
  Goal.create({ name, partner, date, description, owner: req.user._id })
    .then(goalsFromDB => {
      res.json({
        Goal: 'Added',
        goalsFromDB
      });
    })
    .catch(err => next(err))
});

module.exports = router;
