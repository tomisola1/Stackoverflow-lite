const {createAnswers, acceptAnswers, updateAnswers} = require("./answerService");


const createAnswer = async(req, res) => {
    try {
        const payload = req.body
        const questionId = req.params.id
        const answer = await createAnswers(payload, questionId)
        res.status(201).json(answer)
        return
    } catch (error) {
        console.log(error);
    }
}

const updateOrAcceptAnswer = async (req, res) => {
    try {
        const payload = req.body
        const questionId = req.params.questionid
        const answerId = req.params.answerid
        const {id} = req.user
        const acceptedAnswer = await acceptAnswers(payload, answerId, questionId, id)
        res.status(200).json(acceptedAnswer)
        const updatedAnswer = await updateAnswers(payload, questionId, answerId)
        res.status(200).json(updatedAnswer)
        return
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createAnswer,
    updateOrAcceptAnswer
}