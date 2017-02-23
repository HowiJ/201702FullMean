var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
  index: function(req, res) {
    Friend.find({}, function(err, data) {
      if(err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  show: function(req, res) {
    console.log(req.params);
    Friend.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  create: function(req, res) {
    console.log('Friends controller create:', req.body);


    var friend = new Friend(req.body);
    console.log(friend);
    friend.save(function(err) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json({placeholder: 'not done with create yet'});
      }
    })
  },
  update: function(req, res) {
    console.log(req.params, req.body);
    Friend.findOne({_id: req.params.id}, function(err, data) {
      for (var i in req.body) {
        if (data[i] && data[i] !== req.body[i]) {
          data[i] = req.body[i];
        }
      }
      data.save(function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
      })
    })
  },  
  delete: function(req, res) {
    Friend.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        Friend.remove(data, function(error, datum) {
          if (error) {
            console.log(error);
            res.json(error);
          } else {
            console.log(datum);
            res.json(datum);
          }
        })
      }
    })
  }
}