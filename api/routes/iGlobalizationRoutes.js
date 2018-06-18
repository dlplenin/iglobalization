import {localeDictionary} from '../controllers/iGlobalizationController';

export default app => {
  app.get('/dictionay/:locale', (req, res) => {
    const locale = req.params.locale;

    res.json(localeDictionary(locale));
  });
};
