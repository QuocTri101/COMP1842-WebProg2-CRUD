const mongoose = require('mongoose');
const Test = mongoose.model('Test');

exports.list_all_tests = (req, res) => {
  Test.find({}, (err, tests) => {
    if (err) res.send(err);
    res.json(tests);
  }).sort({ testDate: -1 }); 
};

exports.create_a_test = (req, res) => {
  const new_test = new Test(req.body);
  new_test.save((err, test) => {
    if (err) res.send(err);
    res.json(test);
  });
};