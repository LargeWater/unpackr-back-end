import { Router } from 'express'
import * as lecturesCtrl from '../controllers/lectures.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, lecturesCtrl.index)
// router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)

export { router }