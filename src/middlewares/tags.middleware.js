const tags = (...fields) => (req, res, next) => {
    fields.forEach(field => {
        if (req.body[field]) {
            const value = Array.isArray(req.body[field]) 
            ? req.body[field].map(item => item.trim())
            : req.body[field].trim().split(",");

            req.body[field] = [...new Set(value)]
        }
    })
    
    next();
};

module.exports = tags