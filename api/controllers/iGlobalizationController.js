import {flattenMessages} from '../utils/flattenMessage';

export default {
  localeDictionary(locale, mockDictionary) {
    const lang = locale.toLowerCase();

    let requiredDictionary;

    try {
      requiredDictionary = mockDictionary || require('../messages/' + lang)[lang];
    } catch (error) {
      requiredDictionary = require('../messages/en-us')['en-us'];
    }

    return flattenMessages(requiredDictionary);
  }
};
