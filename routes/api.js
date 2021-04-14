const router = require('express').Router();

router.get('/workouts', (req,res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
})

router.post('/workouts', (req, res) => {
    
})

router.put('/workouts', (req, res) => {

})

router.get('/workouts/range', (req,res) => {

})

module.exports = router;