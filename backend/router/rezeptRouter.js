import {Router} from 'express'
import { getAllRecipes, createRecipe } from '../controller/rezeptControllers.js'
const rezeptRouter = Router()

rezeptRouter.get("/", getAllRecipes )
rezeptRouter.post("/", createRecipe)

export default rezeptRouter
