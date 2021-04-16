const router = require('express').Router();
const path = require('path');
const views = path.join(__dirname,"../views")

router.get('/', (req, res) => {
    res.sendFile(path.join(views, 'index.html'))
})

router.get('/stats',(req,res) =>{
    res.sendFile(path.join(views, 'stats.html'))
})

router.get('/exercise', (req,res) => {
    res.sendFile(path.join(views, 'exercise.html'))
})

module.exports = router;
