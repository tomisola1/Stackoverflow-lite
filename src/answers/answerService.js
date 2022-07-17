const text = require("body-parser/lib/types/text");
const model = require("../../models");


const createAnswers = async(body, id, userid) => {
    try {
        const {text} = body
        const questionId = id
        const existingQuestion = await model.Question.findOne({where:{id:questionId}})
        if(!existingQuestion){
            return 'This question does not exist'
        }
        const newData = {
            text,
            QuestionId:questionId,
            UserId:userid
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

const updateAnswers = async(body, questionid, answerid, userid) => {
    try {
        const answerId = answerid
        const questionId = questionid
        const userId = userid
        console.log(userId);
        const existingQuestion = await model.Question.findOne({where:{id:questionId}})
        if(!existingQuestion){
            return 'This question does not exist'
        }
        const existingAnswer = await model.Answer.findOne({where:{id:answerId, QuestionId:questionId}})
        if(!existingAnswer){
            return 'This answer does not exist'  
        }
        if(existingAnswer.UserId !== userId){
            return 'This is not the right author'    
        }
        const data = {
            text:body.text || text
        }
        const updatedData = await model.Answer.update(data,{where:{id:answerId}, returning:true,plain:true})
        return {
            message:'Answer updated',
            data:updatedData
        }
    } catch (error) {
        console.log(error);
    }
}

const acceptAnswers = async (body, questionid, answerid) => {
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

const upvoteAnswer = async (answerid) => {
    try {
        const answerId = answerid
        const existingAnswer = await model.Answer.findOne({where:{id:answerId}})
        if(!existingAnswer){
            return 'This answer does not exist'  
        }
        const data = {
            upvote: existingAnswer.upvote +1
        }
        const updatedData = await model.Answer.update(data,{where:{id:answerId}, returning:true,plain:true})
        return {
            message:`Answer's vote increased`,
            updatedData
        }
    } catch (error) {
        console.log(error);
    }
}

const downvoteAnswer = async (answerid) => {
    try {
        const answerId = answerid
        const existingAnswer = await model.Answer.findOne({where:{id:answerId}})
        if(!existingAnswer){
            return 'This answer does not exist'  
        }
        const data = {
            upvote: existingAnswer.upvote -1
        }
        const updatedData = await model.Answer.update(data,{where:{id:answerId}, returning:true,plain:true})
        return {
            message:`Answer's vote decreased`,
            updatedData
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createAnswers,
    acceptAnswers,
    updateAnswers,
    upvoteAnswer,
    downvoteAnswer
}