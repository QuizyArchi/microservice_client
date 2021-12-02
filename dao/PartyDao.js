const axios = require("axios");

module.exports = {
  list: async (category, nbq) => {
    try {
      let quest;
      await axios
        .get(
          `https://microservice-question.herokuapp.com/api/question/find?category=${category}&nbq=${nbq}`
        )
        .then((res) => {
          quest = res.data;
        });
      return quest;
    } catch (error) {
      console.log("Error " + error);
    }
  },

  show: async (id) => {
    try {
      let quest;
      await axios
        .get(`https://quizzy-party.herokuapp.com/party/1`)
        .then((res) => {
          quest = res.data;
        });
      return quest;
    } catch (error) {
      console.log("Error " + error);
    }
  },

  create: async (score) => {
    try {
      await axios.post(
        `https://quizzy-party.herokuapp.com/party/finish-party`,
        {
          score: score,
          user_id: 1,
          is_finish: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("Error " + error);
    }
  },
};
