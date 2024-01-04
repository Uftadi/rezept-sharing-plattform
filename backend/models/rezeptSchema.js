import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  steps: { type: String, required: true },
  time: { type: Number, required: true },
  difficulty: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, default: "Edie" },
  lastName: { type: String, default: "Flowers" },
  email: { type: String, default: "edieflowers@gmail.com" },
  recipes: [recipeSchema]
});

const UserSchema = mongoose.model('Users', userSchema);
export default UserSchema;