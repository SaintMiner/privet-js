const message = "Privet";
const log = require('log-beautify');

class Privet {
    constructor(message) {
        log.warning(message);
    }
}

module.exports = new Privet(message);