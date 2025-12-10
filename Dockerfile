FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV=production

# Expõe porta do frontend e do mock server
EXPOSE 8080 3000

# Script para rodar frontend e mock em paralelo
CMD ["sh", "-c", "npm run db & npm run preview -- --port 8080 --host"]
