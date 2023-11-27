FROM node:14


WORKDIR /app

# archivos de la app
COPY package*.json ./
COPY index.js ./
COPY jumpSearch.js ./
COPY linearSearch.js ./

# Instalar dependencias
RUN npm install

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "npm", "start" ]
