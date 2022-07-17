const {createAnswers, acceptAnswers, updateAnswers, upvoteAnswer, downvoteAnswer} = require("./answerService");


const createAnswer = async(req, res) => {
    try {
        const payload = req.body
        const questionId = req.params.id
        const {id} = req.user
        const answer = await createAnswers(payload, questionId, id)
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
        if(payload.text){
            const updatedAnswer = await updateAnswers(payload, questionId, answerId, id)
            res.status(200).json(updatedAnswer)
            return
        }
        const acceptedAnswer = await acceptAnswers(payload, questionId, answerId)
        res.status(200).json(acceptedAnswer)
        return
    } catch (error) {
        console.log(error);
    }
}

const upvoteAnswers = async (req, res) => {
    try {
        const answerId = req.params.answerid
        const upvotedAnswer = await upvoteAnswer(answerId)
        res.status(200).json(upvotedAnswer)
        return
    } catch (error) {
        console.log(error);
    }
}

const downvoteAnswers = async (req, res) => {
    try {
        const answerId = req.params.answerid
        const downvotedAnswer = await downvoteAnswer(answerId)
        res.status(200).json(downvotedAnswer)
        return
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createAnswer,
    updateOrAcceptAnswer,
    upvoteAnswers,
    downvoteAnswers
}