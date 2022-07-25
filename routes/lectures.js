import { Router } from 'express'
import * as lecturesCtrl from '../controllers/lectures.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, lecturesCtrl.create)
// router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)

export { router }