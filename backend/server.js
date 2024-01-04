import express from "express"
import cors from 'cors'
import 'dotenv/config'
import { connectMongoose } from "./util/connectMongoose.js"

import rezeptRouter from "./router/rezeptRouter.js"

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));

app.use("/", rezeptRouter)

await connectMongoose()

app.listen(PORT, () => {
    console.log('Server läuft auf Port: ' + PORT)
})