export default {
  flattenMessages(nestedMessages, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
      let value = nestedMessages[key];
      let prefixedKey = prefix ? `${prefix}.${key}` : key;
  
      if (typeof value === 'string') {
        messages[prefixedKey] = value;
      }
      if (typeof value !== 'string') {
        Object.assign(messages, exports.default.flattenMessages(value, prefixedKey));
      }
      return messages;
    }, {});
  }
};
