const faker = require('faker')
const Sequelize = require('sequelize');
const Promise = require("bluebird");

const sequelize = new Sequelize('mysql://root@localhost:3306/airbnb');

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
        type: Sequelize.STRING(500)
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
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
});

const dataGen = () => {
    var hundredRecords = [];
    for (var i = 0; i < 100; i++) {
        var home = {
            title: faker.company.catchPhrase(),
            homeType: faker.lorem.words(4),
            summary: faker.lorem.paragraph(5),
            moreSummary: faker.lorem.paragraph(5),   
            HighLightOne: faker.lorem.sentence(5),  
            HighLightTwo: faker.lorem.sentence(5),  
            HighLightThree: faker.lorem.sentence(5, 10),  
            GuestNo: faker.random.number({min: 1, max: 30}),  
            firstName: faker.name.firstName()
        }
        hundredRecords.push(home);
    }
    Home.sync({force: true}).then(() => {
        // Table created
        Home.bulkCreate(hundredRecords)
    });
    //console.log(hundredRecords)
    // sequelize
    //     .authenticate()
    //     .then(() => {
    //         console.log('Connection has been established successfully.');
    //     })
    //     .catch(err => {
    //         console.error('Unable to connect to the database:', err);
    //     });
}

module.exports.dataGen = dataGen;