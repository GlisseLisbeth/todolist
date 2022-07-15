import { Sequelize } from "sequelize";

const db = new Sequelize('database_blogs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


export default db;