module.exports = {

    url: process.env.DATABASE_URL ||

        "postgres://postgres:bcd127@localhost:5432/seu_db_local",

    config: {

        dialect: "postgres",

        logging: console.log,

        define: {

            timestamp: true,

            underscored: true,

        },

    },

};

// module.exports = {
//     dialect: "mysql",
//     host: "localhost",
//     username: "root",
//     password: "bcd127",
//     database: process.env.NODE_ENV === "test" ? "dbGamesCenter_test" : "dbGamesCenter",
//     define: {
//         timestamp: true,
//         underscored: true,        
//     }
// }