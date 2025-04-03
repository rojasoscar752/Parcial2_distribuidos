# Parcial2_distribuidos

#Configuración del cliente "Cliente_Service_X"
Se corren las 3 instancias de CLient_service_x cada 5 segundos
Se hace la petición al panel visual llamado monitor parra ver el servicio y los reportes
curl -I http://localhost/monitor

#Configuración del servicio-analitica


#Configuración del panel-visual
El panel-viisual quedo configurado como /monitor, debido a un problema dado por el strip


#Probar
Para probar se debe usar el comando docker compose up --build -d
para que el proceso se ejecute en segundo plano.
Luego, ir a http://localhost/monitor en el navegador para ver el panel-visual
