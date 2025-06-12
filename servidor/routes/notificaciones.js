const express = require('express');
const router = express.Router();
const { notificaciones } = require('../models');

router.get('/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;
  const data = await notificaciones.findAll({ where: { usuarioId } });
  res.json(data);
});

module.exports = router;
