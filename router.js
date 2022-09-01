import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send('ADVICE API IS ONLINE!'));

export default router;
