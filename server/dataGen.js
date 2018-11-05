const faker = require('faker');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root@localhost:3306/', {
  logging: false
});

const sequelizeMain = new Sequelize('mysql://root@localhost:3306/airbnb', {
  logging: false
});

const Home = sequelizeMain.define('home', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  homeType: {
    type: Sequelize.STRING
  },
  summary: {
    type: Sequelize.STRING(500)
  },
  moreSummary: {
    type: Sequelize.STRING(2500)
  },
  HighLightOne: {
    type: Sequelize.STRING
  },
  HighLightTwo: {
    type: Sequelize.STRING
  },
  HighLightThree: {
    type: Sequelize.STRING
  },
  commentOne: {
    type: Sequelize.STRING
  },
  commentTwo: {
    type: Sequelize.STRING
  },
  commentThree: {
    type: Sequelize.STRING
  },
  GuestNo: {
    type: Sequelize.TINYINT
  },
  BedroomNo: {
    type: Sequelize.TINYINT
  },
  BedNo: {
    type: Sequelize.TINYINT
  },
  BathNo: {
    type: Sequelize.TINYINT
  },
  BadgeNo: {
    type: Sequelize.TINYINT
  },
  firstName: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  AmenityOne: {
    type: Sequelize.STRING
  },
  AmenityTwo: {
    type: Sequelize.STRING
  },
  AmenityThree: {
    type: Sequelize.STRING
  },
  AmenityFour: {
    type: Sequelize.STRING
  },
  AmenityOneDesc: {
    type: Sequelize.STRING
  },
  AmenityTwoDesc: {
    type: Sequelize.STRING
  },
  AmenityThreeDesc: {
    type: Sequelize.STRING
  },
  AmenityFourDesc: {
    type: Sequelize.STRING
  },
  Amenities: {
    type: Sequelize.STRING
  }
});

const dataGen = () => {
  const hundredRecords = [];
  for (let i = 0; i < 100; i += 1) {
    const home = {
      title: faker.company.catchPhrase(),
      homeType: faker.lorem.words(4),
      summary: faker.lorem.sentences(5, 2),
      moreSummary: faker.lorem.paragraph(25, 2),
      HighLightOne: faker.lorem.sentence(5),
      HighLightTwo: faker.lorem.sentence(5),
      HighLightThree: faker.lorem.sentence(5),
      commentOne: faker.lorem.words(2),
      commentTwo: faker.lorem.words(3),
      commentThree: faker.lorem.words(1),
      GuestNo: faker.random.number({ min: 1, max: 10 }),
      BedroomNo: faker.random.number({ min: 1, max: 10 }),
      BedNo: faker.random.number({ min: 1, max: 10 }),
      BathNo: faker.random.number({ min: 1, max: 30 }),
      BadgeNo: faker.random.number({ min: 1, max: 3 }),
      firstName: faker.name.firstName(),
      image: faker.image.avatar(),
      city: faker.address.city(),
      AmenityOne: faker.lorem.words(1),
      AmenityTwo: faker.lorem.words(1),
      AmenityThree: faker.lorem.words(1),
      AmenityFour: faker.lorem.words(1),
      AmenityOneDesc: faker.company.catchPhrase(),
      AmenityTwoDesc: faker.company.catchPhrase(),
      AmenityThreeDesc: faker.company.catchPhrase(),
      AmenityFourDesc: faker.company.catchPhrase(),
      Amenities: faker.lorem.words(Math.floor(Math.random() * 30) + 1)
    };
    hundredRecords.push(home);
  }
  return sequelize.query('CREATE DATABASE IF NOT EXISTS `airbnb`;').then(() => {
    Home.sync({ force: true }).then(() => Home.bulkCreate(hundredRecords));
  });
};

module.exports.dataGen = dataGen;
module.exports.home = Home;
