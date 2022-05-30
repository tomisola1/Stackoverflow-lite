const {createQuestion, getAllQuestions, getSpecificQuestion, updateQuestions, deleteQuestion} = require("./questionsService")

const createQuestions = async(req, res) => {
    try {
        const payload = req.body
        const data = await createQuestion(payload)
        res.status(201).json(data)
    } catch (error) {
        console.log(error);
    }
}

const getQuestions = async(req, res) =>{
    try {
        const Questions = await getAllQuestions()
        res.status(200).json(Questions)
    } catch (error) {
        console.log(error)
    }
}

const getAQuestion = async(req, res) =>{
    try {
        const id = req.params.id
        const question = await getSpecificQuestion(id)
        res.status(200).json(question)
    } catch (error) {
        console.log(error)
    }
}

const updateAQuestions = async(req, res) =>{
    try {
        const id = req.params.id
        const payload = req.body
        const question = await updateQuestions(id, payload)
        res.status(200).json(question)
    } catch (error) {
        console.log(error)
    }
}

const deleteAQuestions = async(req, res) =>{
    try {
        const id = req.params.id
        const question = await deleteQuestion(id)
        res.status(200).json(question)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createQuestions,
    getQuestions,
    getAQuestion,
    updateAQuestions,
    deleteAQuestions
};