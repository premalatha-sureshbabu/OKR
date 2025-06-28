import express from 'express';
import { getOKRs, createOKR, updateOKR, deleteOKR } from '../controllers/okrController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();
router.route('/').get(protect, getOKRs).post(protect, createOKR);
router.route('/:id').put(protect, updateOKR).delete(protect, deleteOKR);

export default router;
