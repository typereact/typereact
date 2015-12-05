module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(11)
    },
    githubID: {
      type: DataTypes.STRING(30),
      field: 'github_id'
    },
    password: {
      type: DataTypes.STRING(11)
    },
    skillLevel: {
      type: DataTypes.STRING(11),
      unique: true,
      field: 'skill_level'
    },
    numericalRank: {
      type: DataTypes.INTEGER,
      field: 'numerical_rank'
    },
    shortcutPreference: {
      type: DataTypes.STRING(30),
      field: 'shortcut_preference'
    },
    macOrPC: {
      type: DataTypes.ENUM('mac','pc'),
      field: 'mac_or_pc'
    },
    code_submitted: {
      type: DataTypes.TEXT('medium')
    }
  }, {
    underscored: true
  });
}
