const express = require('express');
const router = express.Router();
const storage = [];
const testSchema = require('./mongo');

// if there are data send from the frontend via body, use req.body
// if there are data being send from the frontend via query string like, http://localhost:3000/api/v0/sample/?q=hi
// use req.query -> this would print {q: "hi"}

router.get('/', (req, res) => {
  console.log("test grab from db");
  testSchema.find({},'name address quote', function(err, lists) {
    if(err) throw err;
    console.log(lists);
    res.send({response : lists});
  });

});

router.post('/', (req, res) => {
  var test = new testSchema();

  test.name = req.body.name;
  test.address = req.body.address;
  test.quote = req.body.quote; 

  test.save(function(err) {
    if (err) throw err;
    console.log('test sent to db');
    testSchema.find({},'name address quote', function(err, lists) {
      if(err) throw err;
      res.send({response : lists});
    });
  });
});

router.put('/', (req, res) => {
  res.send({
    response: storage
  });
});

router.delete('/:id', (req, res) => {
  var id = req.params.id;
  testSchema.remove({"_id": id }, function(err, lists) {
    if(err) throw err;
    res.send({response : [lists]});
  });
});

module.exports = router;
