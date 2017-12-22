'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateQuestion2 = exports.updateQuestion1 = undefined;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://heroku_dkz7q79x:3ghu22u424udc8674n7lucffhc@ds155684.mlab.com:55684/heroku_dkz7q79x';

var updateQuestion1 = exports.updateQuestion1 = function updateQuestion1(choice) {
  MongoClient.connect(url, function (err, db) {
    _assert2.default.equal(null, err);
    if (choice == "yes") {
      db.collection('results').update({ question: 1 }, { $inc: { yes: 1 } }, { upsert: true });
    } else {
      db.collection('results').update({ question: 1 }, { $inc: { no: 1 } }, { upsert: true });
    }
    db.close();
  });
};

var updateQuestion2 = exports.updateQuestion2 = function updateQuestion2(choice) {
  MongoClient.connect(url, function (err, db) {
    _assert2.default.equal(null, err);
    var obj = { $inc: {} };
    obj["$inc"][choice] = 1;
    db.collection('results').update({ question: 2 }, obj, { upsert: true });
    db.close();
  });
};
