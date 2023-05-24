
FROM node:18-alpine3.16

WORKDIR /docker_express_labs

COPY . .

RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]