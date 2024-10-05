const path = require('path');
const fs = require('fs');

const deleteInvalidPropertyObject = (data = {}, blackList = []) => {
    const nullList = [undefined, null, "", " ", NaN, 0, false];
    Object.keys(data).forEach(key => {
        if (blackList.includes(data[key])) Reflect.deleteProperty(data, key);
        if (typeof data[key] === "string") data[key] = data[key].trim();
        if (nullList.includes(data[key])) Reflect.deleteProperty(data, key);
    });
};

const deleteImageFile = (fileAddress) => {
    if (fileAddress) {        
        const pathFile = path.join(__dirname, "..", "..", fileAddress);
        if (fs.existsSync(pathFile)) fs.unlinkSync(pathFile);
    }
}

module.exports = {
    deleteInvalidPropertyObject,
    deleteImageFile
}