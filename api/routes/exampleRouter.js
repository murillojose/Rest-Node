const exampleRouter = app => {
  const exampleController = require('../controllers/exampleController');

  app.route('/api/v1/example').get(exampleController.example);
}

module.exports = exampleRouter;