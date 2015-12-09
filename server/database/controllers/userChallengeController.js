var db = require('./../dbconfig.js');
var UserChallenge = db.UserChallenge;

module.exports = {
  postUserChallenge: function(req, res, next) {
    var newUserChallenge = UserChallenge.build({
      numKeyStrokes: 6,
      keyStrokeList: '1 ,2, 3, 4, 5, 6',
      timeToComplete: 30,
      user_id: 12,
      challenge_id: 2
    })

    // var newChallenge = Challenge.build({
    //   numKeyStrokes: req.body.numKeyStrokes,
    //   keyStrokeList: req.body.keyStrokeList,
    //   timeToComplete: req.body.timeToComplete,
    //   user_id: req.body.user_id,
    //   challenge_id: req.body.challenge_id,
    // })

    newUserChallenge.save().then(function(useChal) {
      console.log('posted chal score:', useChal)
      next();
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
}