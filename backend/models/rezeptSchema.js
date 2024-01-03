import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
        firstName: {
            type: String,
            default: "Edie"
        },
        lastName: {
            type: String,
            default: "Flowers"
        },
        email: {
            type: String,
            default: "edieflowers@gmail.com"
        },
        recipes: [
            {
               title: {type: String, required: true},
               ingredients: {type: String, required: true},
               steps: {type: String, required: true},
               time: {type: Number, required: true},
               difficulty: {type: String, required: true}
            }
        ]
    })

const UserSchema = mongoose.model('Users', userSchema)

export default UserSchema