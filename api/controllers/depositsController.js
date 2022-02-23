const deposits = require('../data/deposits.json');

const controller = {};


controller.listDeposits = (req, res) => {
  res.status(200).json(deposits);
}

module.exports = controller;