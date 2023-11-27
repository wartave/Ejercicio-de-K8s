FROM node:14

#directorio
WORKDIR /app

# archivos de la aplicacion
COPY package*.json ./
COPY index.js ./
COPY binarySearch.js ./
COPY bubbleSort.js ./


# Instalalacion de paquetes
RUN npm install

#puerto
EXPOSE 3001

# Comando para iniciar la aplicación
CMD [ "npm", "start" ]
