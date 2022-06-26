const express = require('express');
const {createAnswer, acceptAnswer, updateOrAcceptAnswer} = require('../answers/answersController');
const auth = require('../middleware/authorization');
const {createQuestions,getQuestions, getAQuestion, updateAQuestions, deleteAQuestions} = require('../questions/questionsController');
const route = express.Router()

route.post('/', auth, createQuestions)
route.get('/', auth, getQuestions)
route.get('/:id', auth, getAQuestion)
route.put('/:id/edit', auth, updateAQuestions)
route.delete('/:id/delete', auth, deleteAQuestions)
route.post('/:id/answer', auth, createAnswer)
route.put('/:questionid/answer/:answerid',auth, updateOrAcceptAnswer)

module.exports = route;