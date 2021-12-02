const partyDAO = require("../dao/PartyDAO");

module.exports = {
  list: (category, nbq) => {
    return partyDAO.list(category, nbq);
  },

  show: (id) => {
    return partyDAO.show(id);
  },

  create: (body) => {
    return partyDAO.create(body);
  },
};
