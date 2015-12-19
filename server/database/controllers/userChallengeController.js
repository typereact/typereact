var db = require('./../dbconfig.js');
var UserChallenge = db.UserChallenge;
var User = db.User;
var Challenge = db.Challenge;

module.exports = {
  postUserChallenge: function(req, res, next) {
    // var newUserChallenge = UserChallenge.build({
    //   numKeyStrokes: 6,
    //   keyStrokeList: '1 ,2, 3, 4, 5, 6',
    //   timeToComplete: 30,
    //   user_id: 12,
    //   challenge_id: 2
    // })
    console.log('inside postUserChallenge');
    // console.log(req);
    var newUserChallenge = UserChallenge.build({
      numKeyStrokes: req.body.numKeyStrokes,
      timeToComplete: req.body.timeToComplete,
      userID: req.body.userID,
      challengeID: req.body.challengeID,
    })
    
    newUserChallenge.save().then(function(useChal) {
      console.log('posted chal score:', useChal)
      res.send('success'); 
    })
  },
  // getFirstChallenge: function(req, res, next) {
  //   Challenge.findOne({
  //     where: {
  //       id: {
  //         $gt: 0
  //       }
  //     }
  //   }).then(function(chal, err) {
  //     // if(chal = []) {
  //     //   res.send('chal is empty');
  //     // }
  //     // console.log('found one challenge', chal);
  //     console.log('this is the res',res);
  //     res.send(undefined)
  //   })
  // }

  getTopFive: function(req, res, next) {
    var chalID = Number(req._parsedOriginalUrl.query)
    UserChallenge.findAll({
      where: {
        challengeID: chalID
      },
      limit: 5,
      order: 'timeToComplete ASC'
    }).then(function(times, err) {
      if(err) {
        res.send(err);
      }
      res.send(times);
    })
  }
}