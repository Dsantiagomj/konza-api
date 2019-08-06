const uuidv1 = require('uuid/v1');

const tasks = [
  {
    _id: uuidv1(),
    title: 'Buy Milk',
    description: 'For breakfast',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
  {
    _id: uuidv1(),
    title: 'Buy Meat',
    description: 'For lunch',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  },
];

exports.create = (req, res, next) => {
  const { body = {} } = req;
  console.log(body);
  const { title = '', description = '' } = body;
  tasks.push({
    _id: uuidv1(),
    title,
    description,
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  });
  res.json(tasks);
};

exports.all = (req, res, next) => {
  const { query } = req;
  const {
    limit = 10, skip = 0, sortBy = 'created', direction = 'desc',
  } = query;
  const sortOrder = direction === 'desc' ? -1 : 1;
  const tasksClone = new Array(...tasks);
  const sortedTasks = tasksClone.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return 1 * sortOrder;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1 * sortOrder;
    }
    return 0;
  });

  const tasksLimited = sortedTasks.slice(Number(skip), Number(limit) + Number(skip));

  return res.json(tasksLimited);
};

exports.read = (req, res, next) => {
  const { params = {} } = req;
  const { id = 1 } = params;

  const selectedTask = tasks.find(task => task._id === id) || {};

  res.json(selectedTask);
};

exports.update = (req, res, next) => {
  const { body = {}, params } = req;
  const { title = '', description = '' } = body;
  const { id = 1 } = params;

  const updateTask = tasks.find(task => task._id === id);
  const newTask = {
    title,
    description,
    updated: new Date().toISOString(),
  };
  Object.assign(updateTask, newTask);
  res.json(tasks);
};

exports.delete = (req, res, next) => {
  const { params = {} } = req;
  const { id = 1 } = params;
  const deleteTask = tasks.find(task => task._id === id) || {};
  const deleteTaskIndex = tasks.indexOf(deleteTask);
  tasks.splice(deleteTaskIndex, 1);
  res.json(deleteTask);
};
