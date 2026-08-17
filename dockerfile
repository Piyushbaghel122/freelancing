FROM node:18.19.1-alpine3.22

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000