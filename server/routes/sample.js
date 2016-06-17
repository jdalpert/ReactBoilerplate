const express = require('express');
const router = express.Router();
const storage = [];

// if there are data send from the frontend via body, use req.body
// if there are data being send from the frontend via query string like, http://localhost:3000/api/v0/sample/?q=hi
// use req.query -> this would print {q: "hi"}

router.get('/', (req, res) => {
  res.send({
    response: storage
  });
});

router.post('/', (req, res) => {
  storage.push(req.body);
  console.log("Check 1");
  console.log(storage);
  res.send({
    response: storage
  });
});

router.put('/', (req, res) => {
  res.send({
    response: storage
  });
});

router.delete('/', (req, res) => {
  res.send({
    response: storage
  });
});

module.exports = router;
