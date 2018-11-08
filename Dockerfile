FROM node:11.1.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run gen

RUN npm run build

EXPOSE 3001

CMD [ "npm", "run", "start" ]

