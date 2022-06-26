const text = require("body-parser/lib/types/text");
const model = require("../../models");


const createAnswers = async(body, id) => {
    try {
        const {text} = body
        const questionId = id
        const existingQuestion = await model.Question.findOne({where:{id:questionId}})
        if(!existingQuestion){
            return 'This question does not exist'
        }
        const newData = {
            text,
            QuestionId:questionId
        }
        const data = await model.Answer.create(newData)
        return {
            message:'Answer created successfully',
            data:data
        }
    } catch (error) {
        console.log(error);
    }
}

const updateAnswers = async(body, questionid, answerid) => {
    try {
        const answerId = answerid
        const questionId = questionid
        const existingQuestion = await model.Question.findOne({where:{id:questionId}})
        if(!existingQuestion){
            return 'This question does not exist'
        }
        const existingAnswer = await model.Answer.findOne({where:{id:answerId, QuestionId:questionId}})
        if(!existingAnswer){
            return 'This answer does not exist'  
        }
        const data = {
            text:body.text || text
        }
        const updatedData = await model.Answer.update(data,{where:{id:answerId}, returning:true,plain:true})
        return {
            message:'Answer accepted',
            data:updatedData
        }
    } catch (error) {
        console.log(error);
    }
}

const acceptAnswers = async (body, questionid, answerid, userid) => {
    try {
        const answerId = answerid
        const questionId = questionid
        const userId = userid
        const existingQuestion = await model.Question.findOne({where:{id:questionId}})
        if(existingQuestion.UserId !== userId){
            return 'This is not the right author'    
        }
        const existingAnswer = await model.Answer.findOne({where:{id:answerId, QuestionId:questionId}})
        if(!existingAnswer){
            return 'This answer does not exist'  
        }
        const data = {
            accepted:body.accepted || accepted
        }
        const updatedData = await model.Answer.update(data,{where:{id:answerId}, returning:true,plain:true})
        return {
            message:'Answer accepted',
            data:updatedData
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createAnswers,
    acceptAnswers,
    updateAnswers
}