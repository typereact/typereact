var userChallengeController = require('./../database/controllers/userChallengeController.js');

module.exports = function(express) {
  var userChallengeRouter = express.Router();

  userChallengeRouter.use('/toptwentyfivetimes', userChallengeController.getTop25Times);

  userChallengeRouter.use('/toptwentyfivekeystrokes', userChallengeController.getTop25KeyStrokes);

  userChallengeRouter.use('/postuserchallenge', userChallengeController.postUserChallenge)

  return userChallengeRouter;
}
