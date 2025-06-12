const express = require('express');
const axios = require('axios');
const router = express.Router();

// Ruta centralizada para obtener todo el dashboard del usuario
router.get('/dashboard/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;

  try {
    const [reservasRes, pagosRes, notificacionesRes] = await Promise.all([
      axios.get(`http://localhost:3001/reservas/${usuarioId}`),
      axios.get(`http://localhost:3001/pagos/${usuarioId}`),
      axios.get(`http://localhost:3001/notificaciones/${usuarioId}`)
    ]);

    res.json({
      usuarioId,
      reservas: reservasRes.data,
      pagos: pagosRes.data,
      notificaciones: notificacionesRes.data
    });
  } catch (error) {
    console.error("Error en gateway:", error.message);
    res.status(500).json({ error: 'Error al obtener datos del dashboard' });
  }
});

module.exports = router;
