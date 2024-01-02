import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    user: {
        userName: {
            name: String,
            required: true
        },

    }
})
const RecipesSchema = mongoose.model('Recipes', userSchema)

export default RecipesSchema