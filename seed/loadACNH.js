import axios from "axios"
import { Fossil } from '../models/fossil.js'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const seedMongo = async () => {
  await mongoose.connect(`${process.env.DGM4790_CONNECTION_STRING}`,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
})

const options = {
  method: 'GET',
  url: 'https://acnhapi.com/v1a/fossils',
}
  
  try {
    const response = await axios.request(options)
    await addFossils(response.data)
    // console.log(response.data)
    await mongoose.connection.close() 
  } catch (error) {
    console.error(error)
  }
  
}

const addFossil = async (oneFossil) => {
    const fossil = new Fossil({
        name: oneFossil.name["name-USen"],
        price: oneFossil.price,
        image: oneFossil.image_uri,
    })
    await fossil.save() 
    console.log('Added successfuly')
}

const addFossils = async (fossilList) => {
  for (let fossil of fossilList) {
    await addFossil(fossil)
  }
}

seedMongo()