const router = require('express').Router();

const tasks = require('./tasks/routes.js');
const users = require('./users/routes.js');
const projects = require('./projects/routes.js');

router.use('/tasks', tasks);
router.use('/users', users);
router.use('/projects', projects);

module.exports = router;
