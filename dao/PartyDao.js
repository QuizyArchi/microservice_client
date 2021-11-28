const axios = require("axios");

module.exports = {

    list: async (category, nbq) => {
        try {
            let quest;
            await axios.get(`https://microservice-question.herokuapp.com/api/question/find?category=${category}&nbq=${nbq}`).then((res) => { quest = res.data; })
            return quest;
        } catch (error) {
            console.log('Error ' + error);
        }
    },

    create: (body) => {
        // call microservice party and create a party
    },
}
