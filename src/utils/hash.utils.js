const bcrypt = require('bcrypt');

const HashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.exports = HashPassword;