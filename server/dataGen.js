const faker = require('faker');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root@localhost:3306/airbnb', {
  logging: false
});

const Home = sequelize.define('home', {
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
      GuestNo: faker.random.number({ min: 1, max: 30 }),
      BedroomNo: faker.random.number({ min: 1, max: 30 }),
      BedNo: faker.random.number({ min: 1, max: 30 }),
      BathNo: faker.random.number({ min: 1, max: 30 }),
      BadgeNo: faker.random.number({ min: 1, max: 3 }),
      firstName: faker.name.firstName(),
      city: faker.address.city(),
      AmenityOne: faker.lorem.words(1),
      AmenityTwo: faker.lorem.words(1),
      AmenityThree: faker.lorem.words(1),
      AmenityFour: faker.lorem.words(1),
      AmenityOneDesc: faker.company.catchPhrase(),
      AmenityTwoDesc: faker.company.catchPhrase(),
      AmenityThreeDesc: faker.company.catchPhrase(),
      AmenityFourDesc: faker.company.catchPhrase()
    };
    hundredRecords.push(home);
  }
  return Home.sync({ force: true }).then(() => Home.bulkCreate(hundredRecords));
};

dataGen();

module.exports.dataGen = dataGen;
module.exports.home = Home;
