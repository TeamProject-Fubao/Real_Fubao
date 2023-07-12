const cart = function (Sequelize, Database) {
  return Sequelize.define(
    "cart",
    {
      id: {
        type: Database.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Database.BIGINT,
        allowNull: false,
      },
      product_id: {
        type: Database.BIGINT,
        allowNull: false,
      },
      quantity: {
        type: Database.INTEGER,
        allowNull: false,
      },
    },
    {
      tablename: "cart",
      freezeTableName: true,
      timestamps: false,
    }
  );
};
module.exports = cart;
