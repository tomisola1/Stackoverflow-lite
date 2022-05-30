const express = require('express');
const {createQuestions,getQuestions, getAQuestion, updateAQuestions, deleteAQuestions} = require('../questions/questionsController');
const route = express.Router()

route.post('/', createQuestions)
route.get('/', getQuestions)
route.get('/:id', getAQuestion)
route.put('/:id/edit', updateAQuestions)
route.delete('/:id/delete', deleteAQuestions)

module.exports = route;