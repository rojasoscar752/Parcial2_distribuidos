const express = require('express');
const app = express();
app.use(express.json());

const registros = {};

app.post('/reporte', (req, res) => {
  const serviceId = req.headers['x-service-id'];
  
  if (!serviceId) {
    return res.status(400).send('Falta X-Service-Name header');
  }

  registros[serviceId] = (registros[serviceId] || 0) + 1;
  
  console.log(`Registro recibido de ${serviceId}. Total: ${registros[serviceId]}`);
  res.json({ 
    servicio: serviceId,
    registros: registros[serviceId],
    timestamp: new Date().toISOString()
  });
});

app.get('/reporte/estado', (req, res) => {
  res.json({
    totalRegistros: Object.values(registros).reduce((a, b) => a + b, 0),
    servicios: registros,
    fecha: new Date().toISOString()
  });
});

app.listen(3000, () => {
  console.log('API analiticas  escuchando en puerto 3000');
});
