var express = require('express');
var router = express.Router();
const Habit = require('../models/Habit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*router.get('/hola', function(req, res, next) {
  res.json({"mensaje": "Hola mundo" });
});*/

router.get('/habits', async(req, res,) => {
  try{
    const habits = await Habit.find();
  res.json(habits);
}catch(err){
  res.status(500).json({message: 'Error retrieving habits'});
}
});

router.post('/habits', async(req, res,) => {
  try{
    const {title, description} = req.body;
    const habit = new Habit({ title, description});
    await habit.save();
    res.json(habit);
}catch(err){
  res.status(400).json({message: 'Error creating habits'});
}
});

router.delete('/habits/:id', async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);

    // Verifica si el hábito existe antes de enviar la respuesta
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }

    res.json({ message: 'Habit deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting habit' });
  }
});


module.exports = router;
