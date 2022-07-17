const model = require("../../models")

const createQuestion = async(body, id) => {
    try {
        const {title, description, tags} = body
        const newQuestion = {
            title,
            description,
            tags,
            UserId:id
        }
        const data = await model.Question.create(newQuestion)
        return {
            message:'Question created successfully',
            data:data
        }
    } catch (error) {
       console.log(error); 
    }
}

const getAllQuestions = async(body) =>{
    try {
        const Questions = await model.Question.findAll()
        return {
            message: 'All questions',
            data:Questions
        }
    } catch (error) {
        console.log(error)
    }
}

const getAllQuestionsOfAUser = async(id) =>{
    try {
        const owner = id
        const Questions = await model.Question.findAll({where:{UserId: owner}})
        return {
            message: 'All questions',
            data:Questions
        }
    } catch (error) {
        console.log(error)
    }
}

const getSpecificQuestion = async(params, userId) =>{
    try {
        const questionId = params
        const owner = userId
        const question = await model.Question.findOne({where:{id:questionId, UserId:owner}})
        if(!question){
           return 'Question not found'
        }
        return {
            message: 'Question gotten',
            data: question
        }
    } catch (error) {
        console.log(error)
    }
}

const updateQuestions = async(params, body, userId) =>{
    try {
        const questionId = params
        const owner = userId
        const foundQuestion = await model.Question.findOne({where:{id:questionId, UserId:owner}})
        if(!foundQuestion){
            return 'Question not found'
        }
        const {title, description, tags} = foundQuestion
        const data = {
            title: body.title || title,
            description: body.description || description,
            tags: body.tags || tags
        }
        const updatedData = await model.Question.update(data,{where:{id:id}, returning:true,plain:true})
        return {
            message: 'Updated successful',
            data: updatedData
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteQuestion = async(params, userId) =>{
    try {
        const questionId = params
        const owner = userId
        const foundQuestion = await model.Question.findOne({where:{id:questionId, UserId:owner}})
        if(!foundQuestion){
            return 'Question not found'
        }
        await foundQuestion.destroy(id)
        return {
            message: 'Deleted successful'
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createQuestion,
    getAllQuestions,
    getAllQuestionsOfAUser,
    getSpecificQuestion,
    updateQuestions,
    deleteQuestion
};