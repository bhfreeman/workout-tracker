const router = require('express').Router();
const path = require('path');
const db = require('../models')

router.get('/', (req, res) => {
    res.sendsendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/stats',(req,res) =>{
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

router.get('/exercise', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

router.get('/api/workouts', (req,res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
})

router.post('/api/workouts', (req, res) => {
    
})

router.put('/api/workouts', (req, res) => {

})

router.get('/api/workouts/range', (req,res) => {

})

module.exports = router;