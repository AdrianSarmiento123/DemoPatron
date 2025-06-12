module.exports = (sequelize, DataTypes) => {
  const Pagos = sequelize.define('pagos', {
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
    monto: { type: DataTypes.FLOAT, allowNull: false },
    estado: { type: DataTypes.STRING, allowNull: false }
  });
  return Pagos;
};
