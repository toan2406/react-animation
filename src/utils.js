const mapObject = (obj, cb) =>
  Object.keys(obj).reduce((r, k) => {
    r[k] = cb(obj[k], k);
    return r;
  }, {});

export { mapObject };
