const express = require('express');
const { upvoteAnswers, downvoteAnswers } = require('../answers/answersController');

const route = express.Router()

route.get('/answer/:answerid/upvote', upvoteAnswers)
route.get('/answer/:answerid/downvote', downvoteAnswers)

module.exports = route;