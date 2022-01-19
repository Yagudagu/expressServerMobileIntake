FROM node:14 
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY "app.js" .

ENV NODE_ENV=production

CMD [ "node", "app.js"]