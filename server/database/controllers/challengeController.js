var db = require('./../dbconfig.js');
var Challenge = db.Challenge;

module.exports = {
  postChallenge: function(req, res, next) {
    // var newChallenge = Challenge.build({
    //   challengeUnsolved: 'function() {unsolved challenge}',
    //   challengeSolved: 'function() {solved challenge}',
    //   difficultyLevel: 'extreme',
    //   goldMedalTime: 30,
    //   silverMedalTime: 45,
    //   bronzeMedalTime: 60
    // })
    //will need to attach challenge information to post request from front end
    var newChallenge = Challenge.build({
      challengeUnsolved: req.body.challengeUnsolved,
      challengeSolved: req.body.challengeSolved,
      difficultyLevel: req.body.difficultyLevel,
      goldMedalTime: req.body.goldMedalTime,
      silverMedalTime: req.body.silverMedalTime,
      bronzeMedalTime: req.body.bronzeMedalTime
    })

    newChallenge.save().then(function(user) {
      res.redirect('/');
    })
  },
  getFirstChallenge: function(req, res, next) {
    Challenge.findOne({
      where: {
        id: {
          $gt: 0
        }
      }
    }).then(function(chal, err) {
      if(chal === null) {
        res.send('no challenges in the database');
      }
      res.send(chal)
    })
  },
  getAllChallenges: function(req, res, next) {
    Challenge.findAll({
      where: {
        id: {
          $gt: 0
        }
      }
    }).then(function(chal, err) {
      if (chal === null) {
        res.send('no challenges retrieved')
      }
      res.send(chal)
    })
  }
}