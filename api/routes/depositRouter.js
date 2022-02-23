const getDeposits = app => {
  const controller = require('../controllers/depositsController');

  app.route('/api/v1/deposits').get(controller.listDeposits);
}

module.exports = getDeposits;