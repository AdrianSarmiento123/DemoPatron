module.exports = (sequelize, DataTypes) => {
  const Notificaciones = sequelize.define('notificaciones', {
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
    mensaje: { type: DataTypes.STRING, allowNull: false }
  });
  return Notificaciones;
};
