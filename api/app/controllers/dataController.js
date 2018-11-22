'use strict';

var mongoose = require('mongoose'),
  Data = mongoose.model('Data');



exports.list_all_datas = function(req, res) {
  Data.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.create_a_data = function(req, res) {
  var new_data = new Data(req.body);
  new_data.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_a_data = function(req, res) {
  Data.findById(req.params.dataId, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update_a_data = function(req, res) {
  Data.findOneAndUpdate({_id:req.params.dataId}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};
// Data.remove({}).exec(function(){});
exports.delete_a_data = function(req, res) {

  Data.remove({
    _id: req.params.dataId
  }, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Data successfully deleted' });
  });
};
