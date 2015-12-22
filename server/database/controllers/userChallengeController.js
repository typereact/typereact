var db = require('./../dbconfig.js');
var UserChallenge = db.UserChallenge;
var User = db.User;
var Challenge = db.Challenge;

module.exports = {
  postUserChallenge: function(req, res, next) {
    Challenge.findById(req.body.challengeID).then(function(chal) {
      return chal.increment('numPlays');
    })

    var newUserChallenge = UserChallenge.build({
      numKeyStrokes: req.body.numKeyStrokes,
      timeToComplete: req.body.timeToComplete,
      userID: req.body.userID,
      challengeID: req.body.challengeID,
    })
    
    newUserChallenge.save().then(function(useChal) {
      res.send('success'); 
    })
  },

  getTop25Times: function(req, res, next) {
    var chalID = Number(req._parsedOriginalUrl.query)
    UserChallenge.findAll({
      where: {
        challengeID: chalID
      },
      limit: 25,
      order: 'timeToComplete ASC'
    }).then(function(times, err) {
      if(err) {
        res.send(err);
      }
      res.send(times);
    })
  },

  getTop25KeyStrokes: function(req, res, next) {
    var chalID = Number(req._parsedOriginalUrl.query)
    UserChallenge.findAll({
      where: {
        challengeID: chalID
      },
      limit: 25,
      order: 'numKeyStrokes ASC'
    }).then(function(times, err) {
      if(err) {
        res.send(err);
      }
      res.send(times);
    })
  }
}