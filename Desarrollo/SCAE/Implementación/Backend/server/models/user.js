'use strict'
module.exports = function (User) {
  require('./user/afterRemotes/index.js')(User);
}
