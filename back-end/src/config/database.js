module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "bcd127",
    database: process.env.NODE_ENV === "test" ? "dbGamesCenter_test" : "dbGamesCenter",
    define: {
        timestamp: true,
        underscored: true,        
    }
}