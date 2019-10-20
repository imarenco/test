FROM node:10-stretch

ADD ./package.json /app/package.json

WORKDIR /app
RUN npm install

ENV NODE_ENV=production
ENV PORT=8080

ADD ./ /app

EXPOSE 8080

CMD [ "node", "index.js" ]