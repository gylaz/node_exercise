import express from 'express';
const { insertAdvice } = require('app/advice');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => res.send('API IS UP!'));

router.get('/get_advice', (req, res) => {
  if (!req.query || !req.query.inputWord) {
    throw 'Needs to include input word!';
  }
  const inputWord = req.query.inputWord;
  axios
    .get(`https://api.adviceslip.com/advice/search/${inputWord}`)
    .then(async (adviceResponse) => {
      // Store response in DB & return advice string
      const adviceObj = adviceResponse.data.slips[0];
      const props = {
        api_id: adviceObj.id,
        advice: adviceObj.advice,
        query: inputWord,
      };
      await insertAdvice(props);
      res.send(`${JSON.stringify(adviceObj.advice)}`);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.send(`Error: ${error}`);
    });
});

export default router;
