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
ENV JWT_SECRET=this-is-a-secret-that-i-am-using
ENV JWT_EXPIRES_IN=90d

#testing-this-again-another

CMD [ "dumb-init", "node", "app.js"]