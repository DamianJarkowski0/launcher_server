module.exports.hasNumber = (data) => {
    return /\d/.test(data);
};

module.exports.forEachPromise = (fn, list, table, options = {}, callback = []) => {
    return list.reduce(function (promise, item) {
        return promise.then(function () {
            return fn(table, item, callback, options);
        });
    }, Promise.resolve());
};
