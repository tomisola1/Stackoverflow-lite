const {createQuestion, getAllQuestions, getSpecificQuestion, updateQuestions, deleteQuestion, getAllQuestionsOfAUser} = require("./questionsService")

const createQuestions = async(req, res) => {
    try {
        const payload = req.body
        const {id} = req.user
        const data = await createQuestion(payload, id)
        res.status(201).json(data)
        return
    } catch (error) {
        console.log(error);
    }
}

const getQuestions = async(req, res) =>{
    try {
        const Questions = await getAllQuestions()
        res.status(200).json(Questions)
        return
    } catch (error) {
        console.log(error)
    }
}

const getQuestionsOfAUser = async(req, res) =>{
    try {
        const {id} = req.user
        const questions = await getAllQuestionsOfAUser(id)
        res.status(200).json(questions)
        return
    } catch (error) {
        console.log(error)
    }
}

const getAQuestion = async(req, res) =>{
    try {
        const questionId = req.params.id
        const {id} = req.user
        const question = await getSpecificQuestion(questionId, id)
        res.status(200).json(question)
        return
    } catch (error) {
        console.log(error)
    }
}

const updateAQuestions = async(req, res) =>{
    try {
        const questionId = req.params.id
        const payload = req.body
        const {id} = req.user
        const question = await updateQuestions(questionId, payload, id)
        res.status(200).json(question)
        return
    } catch (error) {
        console.log(error)
    }
}

const deleteAQuestions = async(req, res) =>{
    try {
        const questionId = req.params.id
        const {id} = req.user
        const question = await deleteQuestion(questionId,id)
        res.status(200).json(question)
        return
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createQuestions,
    getQuestions,
    getQuestionsOfAUser,
    getAQuestion,
    updateAQuestions,
    deleteAQuestions
};