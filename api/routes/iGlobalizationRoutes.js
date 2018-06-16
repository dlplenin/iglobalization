import {localeDictionary} from '../controllers/iGlobalizationController';

export default function (app) {
  console.log('app: ', app.route);
  app.route('/dictionay/:locale')
  .get((req, res) => {
    const locale = req.params.locale;
    
    res.json(localeDictionary(locale));
  });
}
