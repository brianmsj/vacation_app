const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mongodb://userhouse:data@ds137090.mlab.com:37090/housingdata';

const router = express.Router();
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const {Houses, User, Vacation} = require('./models');
const passport = require("passport"); //added this
const BearerStrategy = require("passport-http-bearer").Strategy; // a
const app = express();
// API endpoints go here!

passport.use(new BearerStrategy(
  function(token, done) {
    console.log(token);

    User.findOne({ accessToken: token }, function (err, user) {
      console.log('token is here',token)
      console.log('user is here', User)
      console.log(user)
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });
  }
));



app.get('/api/user', (req, res) => {
  User
    .find()
    .exec()
    .then(data => res.json(data)
    .catch(console.error)
  )}
);

//creates a new user in the user collection

app.post('/api/user', jsonParser, (req, res) => {
  console.log(req.body);
  User
  .create({
    name: req.body.name,
    id: req.body.id,
    profilePicURL: req.body.profilePicURL,
    accessToken: req.body.accessToken,
    expiresAt:req.body.expiresAt,
    email:req.body.email
  })
  .then(newPost =>{
    res.status(201).json(newPost)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message:'internal server error'});
  })

});


app.delete('/api/user/:id', (req , res) =>{
  User
  .findByIdAndRemove(req.params.id)
  .exec()
  .then(post => res.status(204).end())
  .catch(err => {console.error(err); res.status(500).json({message: 'Internal server error'})});
});

//==============Vacation endpoints==============================

app.get('/api/vacation',passport.authenticate('bearer', { session: false }), (req, res) => {
  Vacation
  .find()
  .exec()
  .then(data => res.json(data))
  .catch(console.error)
});


app.get('/api/vacation/:country', (req, res) => {
  var re = new RegExp(req.params.country, "i");
  Vacation
  .find({country:re})
  .exec()
  .then(data => {
    if(data.length === 1) {
      res.json(data)
    }
    else {
      console.log('country does not exist')
      res.json("country does not exist")}
    })
  .catch(console.error)
});


app.post('/api/vacation', jsonParser, (req, res) => {
  console.log(req.body);
  Vacation
  .create({
    country: req.body.country,
    city: req.body.city,
    description: req.body.description,
    videoUrl: req.body.videoUrl,
    soundUrl:req.body.soundUrl
  })
  .then(newPost =>{

    res.status(201).json(newPost)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message:'internal server error'});
  })

});

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
         mongoose.connect(DATABASE_URL, err => {
            if(err) {
              return reject(err);
        }
            console.log('Db connected');
            server = app.listen(port, () => {
                resolve();
            }).on('error', reject);
        });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
