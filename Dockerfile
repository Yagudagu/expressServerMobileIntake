FROM node:14-alpine3.15
RUN apk add dumb-init
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY "app.js" .
COPY "models/." ./models
COPY "controllers/." ./controllers
COPY "frontend/build/." ./frontend/build 

ENV NODE_ENV=production


CMD [ "dumb-init", "node", "app.js"]