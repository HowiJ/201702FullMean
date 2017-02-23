var friend = require('./../controllers/friend.js');
module.exports = function(app) {
  app.get('/friends', function(req, res) {
    friend.index(req, res);
  })
  app.get('/friends/:id', function(req, res) {
    friend.show(req, res);
  })
  app.post('/friends', function(req, res) {
    friend.create(req, res);
  })
  app.put('/friends/:id', function(req, res) {
    friend.update(req, res);
  })
  app.delete('/friends/:id', function(req, res) {
    friend.delete(req, res);
  })
}