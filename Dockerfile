FROM node:10

ENV PORT="9812"
ENV SHIBI_URL="https://api.thepublictransport.de/shibi/"

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 9812
CMD [ "yarn", "run", "prod" ]
