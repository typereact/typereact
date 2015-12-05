module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Achievement', {
    achievementName: {
      type: DataTypes.STRING(20),
      field: 'achievement_name'
    },
    achievementDescription: {
      type: DataTypes.STRING(50),
      field: 'achievement_description'
    }
  }, {
    underscored: true
  })
}