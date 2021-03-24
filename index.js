import express from 'express'

const port = process.env.PORT || 5050

const app = express()

const main = () => {
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`)
    })
}

main()