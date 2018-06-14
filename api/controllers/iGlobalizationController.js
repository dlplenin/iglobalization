function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    }
    if (typeof value !== 'string') {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});
}

export default {
  localeDictionary(locale, mockDictionary) {
    const lang = locale.toLowerCase();
    const requiredDictionary = mockDictionary || require('../messages/' + lang)[lang];
  
    return flattenMessages(requiredDictionary);
  }
};
