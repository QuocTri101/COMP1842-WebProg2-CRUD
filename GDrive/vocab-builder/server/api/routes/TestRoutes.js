const testBuilder = require('../controllers/TestController');

module.exports = (app) => {
  app.route('/history')
    .get(testBuilder.list_all_tests)
    .post(testBuilder.create_a_test);
};