const { person, createTables } = require('./db');

const init = async()=> {
    console.log('connecting to database');
    await person.connect();
    console.log('connected to database');
    await createTables();
    console.log('tables created');
};

init();