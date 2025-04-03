FROM nginx:alpine

# No copiamos un nginx.conf personalizado; usaremos el default.
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia todos los archivos de la carpeta monitor (incluyendo index.html) a la raíz de Nginx
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
