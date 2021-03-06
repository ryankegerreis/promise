const express = require('express');
const Goal = require('../models/Goal')
const Comment = require('../models/Comment')
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

//From Stackoverflow
// app.get('/auth/github/callback',
//   passport.authenticate('github', { successRedirect: '/', failureRedirect: '/login' }),
//   function (req, res) {
//     res.redirect('/');
//   });

//Route to get the goal by id
router.get('/goaldetails/:id', isLoggedIn, (req, res, next) => {
  Goal.findById(req.params.id)
    .then(goal => {
      res.json(goal);
    })
    .catch(err => next(err))
});


// Route to add a goal
router.post('/savegoal', isLoggedIn, (req, res, next) => {
  console.log('zebra')
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

router.post('/editgoal', isLoggedIn, (req, res, next) => {
  console.log('zebra')
  console.log(req.params, req.body, req.query)
  let { name, partner, date, description } = req.body
  Goal.findByIdAndUpdate(req.body._id, { name, partner, date, description, owner: req.user._id })
    .then(goalsFromDB => {
      res.json({
        Goal: 'Added',
        goalsFromDB
      });
    })
    .catch(err => next(err))
});


router.delete('/deletegoal/:id', isLoggedIn, (req, res, next) => {
  Goal.findByIdAndRemove({ _id: req.params.id })
    .then(goal => {
      res.json(goal);
    })
    .catch(err => next(err))
});

//Edit a goal
router.post('/editgoal', isLoggedIn, (req, res, next) => {
  let { name, partner, date, description } = req.body
  Goal.post({ name, partner, date, description, owner: req.user._id })
    .then(goalsFromDB => {
      res.json({
        Goal: 'Updated',
        goalsFromDB
      });
    })
    .catch(err => next(err))
});

router.post('/savecomment/:goalId', isLoggedIn, (req, res, next) => {
  let comment = req.body;
  comment.poster = req.user.username;
  comment.owner = req.user._id;
  comment.goalId = req.params.goalId;
  Comment.create(comment).then(commentFromDb => {
    res.json(commentFromDb);
  })
    .catch(err => console.log(err))
})

//Get Comments
router.get('/getcomment/:id', isLoggedIn, (req, res, next) => {
  Comment.find({ goalId: req.params.id })
    .then(comments => {
      res.json({ comments });
    })
    .catch(err => next(err))
});

module.exports = router;
