const deleteInvalidPropertyObject = (data = {}, blackList = []) => {
    const nullList = [undefined, null, "", " ", NaN, 0, false];
    Object.keys(data).forEach(key => {
        if (blackList.includes(data[key])) Reflect.deleteProperty(data, key);
        if (typeof data[key] === "string") data[key] = data[key].trim();
        if (nullList.includes(data[key])) Reflect.deleteProperty(data, key);
    });
}

module.exports = {
    deleteInvalidPropertyObject
}