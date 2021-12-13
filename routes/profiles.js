import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

// Routes above this point DO NOT have access to req.user
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// Routes below this point DO have access to req.user
router.get("/", checkAuth, profilesCtrl.index)


export { router }
