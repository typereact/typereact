module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserChallenge', {
    numKeyStrokes: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      field: 'num_key_strokes'
    },
    keyStrokeListFewestKeyStrokes: {
      type: DataTypes.TEXT('medium'),
      field: 'key_stroke_list_fewest_key_strokes'
    },
    timeToComplete: {
      type: DataTypes.DECIMAL(13, 2).UNSIGNED,
      field: 'time_to_complete'
    },
    keyStrokeListBestTime: {
      type: DataTypes.TEXT('medium'),
      field: 'key_stroke_list_best_time'
    },
  }, {
    underscored: true
  })
}
