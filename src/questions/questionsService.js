const model = require("../../models")

const createQuestion = async(body) => {
    try {
        const {title, description, tags} = body
        const newQuestion = {
            title,
            description,
            tags
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

const getSpecificQuestion = async(params) =>{
    try {
        const id = params
        const question = await model.Question.findByPk(id)
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

const updateQuestions = async(params, body) =>{
    try {
        const id = params
        const foundQuestion = await model.Question.findByPk(id)
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

const deleteQuestion = async(params) =>{
    try {
        const id = params
        const foundQuestion = await model.Question.findByPk(id)
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
    getSpecificQuestion,
    updateQuestions,
    deleteQuestion
};