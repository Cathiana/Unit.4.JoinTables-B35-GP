const pg = require('pg');

const person = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/block35gp');

const createTables = async()=> {
    const SQL = `
    DROP TABLE IF EXISTS user_skills;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS skills;
    CREATE TABLE users(
        id UUID PRIMARY KEY,
        username VARCHAR(20) UNIQUE NOT NULL,
        password VARCHAR(20) NOT NULL
    );
    CREATE TABLE skills(
        id UUID PRIMARY KEY, 
        name VARCHAR(100) UNIQUE NOT NULL 
    );
    CREATE TABLE user_skills(
        id UUID PRIMARY KEY, 
        user_id UUID REFERENCES users(id) NOT NULL, 
        skill_id UUID REFERENCES skills(id) NOT NULL 
    );
    `;
    await person.query(SQL);
};

module.exports = {
    person,
    createTables
}