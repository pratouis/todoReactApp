const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

router.post('/add', (req, res) => {
  // console.log(req.body);
  const testTodo = new TodoItem({
    task: req.body.task
  });

  testTodo.save()
      .then(response => res.send(response))
      .catch(error => res.status(500).send(error));
});

module.exports = router;
