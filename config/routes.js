module.exports = function (app) {  
  //Controllers++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  var controller  = require('../controllers')
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  app.get('/', controller)
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}