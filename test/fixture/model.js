module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Test', {
    slug: {
      type: DataTypes.STRING,
    },
    content: DataTypes.TEXT,
    bla: DataTypes.ENUM('value', 'another value'),
    end: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          msg: "mh?",
        },
      }
    },
    active: DataTypes.BOOLEAN,
  });
}
