FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 8080

CMD ["npm", "run", "preview", "--", "--port", "8080", "--host"]
