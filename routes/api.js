const router = require("express").Router();
const db = require("../models");

router.get("/workouts", async (req, res) => {
  try {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ day: 1 })
      .then((data) => res.json(data));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/workouts", async (req, res) => {
  try {
    const newWorkout = await db.Workout.create(req.body);
    res.json(newWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const updatedWorkout = await db.Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    });
    res.json(updatedWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/workouts/range", async (req, res) => {
  try {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ day: 1 })
      .limit(7)
      .then((workout) => {
        res.json(workout);
        console.log(workout);
      });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
