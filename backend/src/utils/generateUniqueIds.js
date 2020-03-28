const crypto = require('crypto');

module.exports = function generateUniqueIds() {

    return crypto.randomBytes(4).toString('HEX');
}