const partyService = require("../services/partyService");

module.exports = {
  list: async (req, res) => {
    let quest = await partyService.list(req.body.category, req.body.nbq);
    res.render("party.ejs", { quest: quest, level: req.body.level });
  },
  show: async (req, res) => {
    let quest = await partyService.show(req.body.id);
    res.render("party.ejs", { quest: quest });
  },
  create: (req, res) => {
    try {
      partyService.create(req.body.score);
      res.render("create.ejs");
    } catch (error) {
      res.render("create.ejs", { error: error });
    }

    res.render("party.ejs", { party: FAKE_DB.partys });
  },

  createForm: (req, res) => {
    res.render("create.ejs");
  },
};
