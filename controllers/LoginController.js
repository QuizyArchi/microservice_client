const loginService = require('../services/LoginService');

module.exports = {

    loginForm: (req, res) => {
        res.render('login.ejs');
    },

    login: (req, res) => {
        let user = loginService.login(req.body.email, req.body.password);
        if (!user) {
            //res.render('login.ejs', { message: 'Utilisateur inconnu' });
            res.render('create.ejs');
        } else {
            res.render('create.ejs');
        }
    },

    registerForm: (req, res) => {
        res.render('register');
    },

    register: (req, res) => {
        try {
            loginService.register(req.body);
            //res.redirect('/party');
            res.render('create.ejs');
        } catch (e) {
            //res.render('register', { message: e.message });
            res.render('create.ejs');
        }
    },



}
