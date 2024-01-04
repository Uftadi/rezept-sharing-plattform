import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: false },
  ingredients: { type: String, required: false },
  steps: { type: String, required: false },
  time: { type: Number, required: false },
  difficulty: { type: String, required: false }
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, default: "Edie" },
  lastName: { type: String, default: "Flowers" },
  email: { type: String, default: "edieflowers@gmail.com" },
  recipes: [recipeSchema]
});

const UserSchema = mongoose.model('Users', userSchema);
export default UserSchema;