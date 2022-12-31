import { Router } from 'express'; // const { Router } = require('express')
import { fileListController, filesController } from '../controllers/files.js';
import catchHOF from '../utils/catchHOF.js';

const router = Router();

router.get('/files/data', catchHOF(filesController));
router.get('/files/list', catchHOF(fileListController));

export default router; // module.exports = router;
