import {Router} from 'express'
import { getAllRecipes } from '../controller/rezeptControllers.js'
const rezeptRouter = Router()

rezeptRouter.get("/", getAllRecipes )

export default rezeptRouter
