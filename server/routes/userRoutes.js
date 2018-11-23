const requireLogin = require('../../middlewares/requireLogin');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app, server) => {
    server.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    server.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    server.get('/api/user', requireLogin, async (req, res) => {
        //const user = await User.find({ _user: req.user.id });
        //console.log(user)
        res.send({user: 'hejhå'});
    });

    server.get('/user', requireLogin, async (req, res) => {
        const actualPage = '/User';
        const user = await User.findById(req.user.id);
        app.render(req, res, actualPage, {user});
    });

/*    server.get('/user', requireLogin, async (req, res) => {
        const user = await User.find({ _user: req.user.id });
        const actualPage = '/User';
        console.log(user)
        app.render(req, res, actualPage, user);
    });*/

};
