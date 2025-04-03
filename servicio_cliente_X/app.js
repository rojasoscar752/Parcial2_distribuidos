const express = require('express');
const axios = require('axios');
const app = express();
const serviceId = process.env.SERVICE_ID || 'unknown';

// Configuración de la API de registro
const SERVICIO_ANALITICAS = 'http://servicio-analiticas:3000/reporte';
const AUTH = { username: 'admin', password: '1234' };

// Hacer peticiones periódicas al registro
setInterval(async () => {
  try {
    const response = await axios.post(REGISTRY_API, {}, {
      auth: AUTH,
      headers: { 'X-Client_Name': 'Oscar Rojas' }
    });
    console.log(`[${serviceId}] Registro exitoso:`, response.data);
  } catch (error) {
    console.error(`[${serviceId}] Error en registro:`, error.message);
  }
}, 5000); // Cada 5 segundos

app.get('/', (req, res) => {
  res.send(`Servicio cliente X - Instancia ${serviceId}`);
});

app.listen(3001, () => {
  console.log(`Cliente ${serviceId} escuchando en puerto 3001`);
});
