import { Router } from 'express'

export const fossilRouter = Router()

import { postAddFossil, fossils, deleteFossil, getFossilById, updateFossil, getMostExpensiveFossil } from '../controllers/fossil.controller.js'

fossilRouter.post('/', postAddFossil)

fossilRouter.get('/', fossils)

fossilRouter.delete('/delete', deleteFossil)

fossilRouter.get('/id', getFossilById)

fossilRouter.put('/update', updateFossil)

fossilRouter.get('/trex', getMostExpensiveFossil)