module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserChallenge', {
    numKeyStrokes: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      field: 'num_key_strokes'
    },
    keyStrokeList: {
      type: DataTypes.TEXT('medium'),
      field: 'key_stroke_list'
    },
    timeToComplete: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      field: 'time_to_complete'
    }
  }, {
    underscored: true
  })
}
