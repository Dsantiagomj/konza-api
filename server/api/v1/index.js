const router = require('express').Router();

const tasks = require('./tasks/routes.js');

router.use('/tasks', tasks);

module.exports = router;
