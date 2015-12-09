var challengeController = require('./../database/controllers/challengeController.js');

module.exports = function(express) {
  var challengeRouter = express.Router();

  challengeRouter.use('/getChallenge', challengeController.getFirstChallenge)

  challengeRouter.use('/postChallenge', challengeController.postChallenge)

  return challengeRouter;
}