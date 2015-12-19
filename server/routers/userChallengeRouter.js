var userChallengeController = require('./../database/controllers/userChallengeController.js');

module.exports = function(express) {
  var userChallengeRouter = express.Router();

  userChallengeRouter.use('/topFive', userChallengeController.getTopFive)

  return userChallengeRouter;
}
