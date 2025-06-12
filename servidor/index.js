const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');

app.use(cors());
app.use(express.json());

// Rutas
app.use('/reservas', require('./routes/reservas'));
app.use('/pagos', require('./routes/pagos'));
app.use('/notificaciones', require('./routes/notificaciones'));
app.use('/api', require('./routes/gateway'));

// Iniciar servidor
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('✅ Backend y Gateway corriendo en http://localhost:3001');
  });
});
