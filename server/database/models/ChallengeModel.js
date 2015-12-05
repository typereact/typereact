module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Challenge', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    challengeUnsolved: {
      type: DataTypes.TEXT('medium'),
      field: 'challenge_unsolved'
    },
    challengeSolved: {
      type: DataTypes.TEXT('medium'),
      field: 'challenge_solved'
    },
    difficultyLevel: {
      type: DataTypes.STRING(15),
      field: 'difficulty_level'
    },
    goldMedalTime: {
      type: DataTypes.INTEGER(11),
      field: 'gold_medal_time'
    },
    silverMedalTime: {
      type: DataTypes.INTEGER(11),
      field: 'silver_medal_time'
    },
    bronzeMedalTime: {
      type: DataTypes.INTEGER(11),
      field: 'bronze_medal_time'
    },
  }, {
    underscored: true
  })
}
