import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send('API IS UP!'));

export default router;
