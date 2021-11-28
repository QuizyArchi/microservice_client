const partyDAO = require('../dao/PartyDAO');

module.exports = {
    list: (category, nbq) => {
        return partyDAO.list(category, nbq);
    },

    create: (body) => {
        return partyDAO.create(body);
    },
}
