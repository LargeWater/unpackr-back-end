import { Router } from 'express'
import * as lecturesCtrl from '../controllers/lectures.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/', lecturesCtrl.index)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, lecturesCtrl.create)
router.delete('/:id', checkAuth, lecturesCtrl.delete)
router.put('/:id', checkAuth, lecturesCtrl.update)

export { router }