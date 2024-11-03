import { Router } from 'express';
import { submitForm, getForms } from '../controllers/formController';

const router = Router();

// Route to handle form submissions
router.post('/', submitForm);

// Route to get all forms
router.get('/', getForms);

export default router;
