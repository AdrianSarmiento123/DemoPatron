const express = require('express');
const router = express.Router();
const { reservas } = require('../models');

router.get('/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;
  const data = await reservas.findAll({ where: { usuarioId } });
  res.json(data);
});

module.exports = router;
