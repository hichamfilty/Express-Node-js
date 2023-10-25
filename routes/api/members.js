const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

//route gets all members
router.get('/', (req, res) => {
  res.json(members);
});

//get a single member
router.get('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `member with ${req.params.id} is not found` });
  }
});
//create member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: req.body.status,
  };
  if (!newMember.name || !newMember.email) {
    res.status(400).json({ msg: 'please include name and email' });
  }
  members.push(newMember);
  res.json(members);
});
module.exports = router;


