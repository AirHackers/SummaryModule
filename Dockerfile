FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --only=production
RUN npm run gen
#RUN chmod +x ./wait-for

EXPOSE 3001

CMD ["npm", "start"]

#CMD ["./wait-for", "database:3306", "--", "npm", "start"]
