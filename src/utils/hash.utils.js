const bcrypt = require('bcrypt');

const HashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

const ComparePassword = (password, userPassword) => {
    return bcrypt.compareSync(password, userPassword);
}

module.exports = {
    HashPassword,
    ComparePassword
};