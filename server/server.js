const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
//const bodyParser = require('body-parser');
const keys = require('./config/keys.js');
require('./models/User.js');
require('./models/Tabs.js');
// require('./models/Survey.js');
require('./services/passport.js');
//
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true });
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const requireLogin = require('../middlewares/requireLogin');




app.prepare()
    .then(() => {
        const server = express();

        server.use(
            cookieSession({
                maxAge: 30 * 24 * 60 * 60 * 1000,
                keys: [keys.cookieKey]
            })
        );

        server.use(passport.initialize());
        server.use(passport.session());

        require('./routes/authRoutes.js')(server);
        require('./routes/userRoutes.js')(app,server);
        // require('./routes/billingRoutes.js')(app);
        // require('./routes/surveyRoutes.js')(app);

/*        server.get('/api/user*', requireLogin, async (req, res) => {
            const queryParams = { id: req.params.id };
            res.send(queryParams)
        });*/


/*        server.get('/user/:id/skapa-artikel', requireLogin, (req, res) => {
            const actualPage = '/SkapaArtikel';
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage, queryParams)
        })*/

      server.get('/artiklar/skapa', requireLogin, (req, res) => {
        const actualPage = '/SkapaArtikel';
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams)
      })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
