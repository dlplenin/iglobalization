function _flatten(values) {
  return Array.isArray(values) ? [].concat(...values.map(_flatten)) : values;
}

const extend = {
  flatten: function () {
    return _flatten(this);
  },
  unique: function () {
    let data = JSON.stringify(this);
    data = JSON.parse(data);
    return [...new Set(data)];
  },
  indexBy: function (groupBy) {
    let result = {};
    this.forEach((item, index) => {
      const key = item[groupBy];
      result[key] = this[index];
    });
    return result;
  }
};

Object.assign(Array.prototype, extend);
