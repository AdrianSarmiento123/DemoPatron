module.exports = (sequelize, DataTypes) => {
  const Reservas = sequelize.define('reservas', {
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
    espacio: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATEONLY, allowNull: false }
  });
  return Reservas;
};
