import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fossilSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    }
})

export const Fossil = mongoose.model('Fossil', fossilSchema)