var bodyParser  = require('body-parser'),
    express     = require('express'),
    path        = require('path'),
    app         = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bodyParser.json());

require(path.join(__dirname, './server/config/mongoose.js'));
require(path.join(__dirname, './server/config/routes.js'))(app);

app.listen(8000, function() {
  console.log('Full Mean 02/17 on 8000');
})