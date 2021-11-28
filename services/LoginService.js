const userDAO = require('../dao/UserDAO');

module.exports = {

    login: (email, password) => {
        return userDAO.findUserByEmailAndPassword(email, password);

    },

    register: (user) => {
        if (!user.email) {
            throw new Error('Données invalides');
        }
        return userDAO.create(user);
    }


}
