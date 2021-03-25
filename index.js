import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { fossilRouter } from './routes/fossil.route.js'

mongoose.set('useFindAndModify', false);

dotenv.config()

const port = process.env.PORT || 5050

const app = express()

app.use(cors())

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use('/fossil', fossilRouter)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

const main = async () => {
    await mongoose.connect(`${process.env.DGM4790_CONNECTION_STRING}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`)
    })
}

main()