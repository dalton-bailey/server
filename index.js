import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

mongoose.set('useFindAndModify', false);

dotenv.config()

const port = process.env.PORT || 5050

const app = express()

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