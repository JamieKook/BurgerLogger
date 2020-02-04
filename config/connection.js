const {MySQL} = require("mysql-promisify"); 


if (process.env.JAWSDB_URL){
    const db = new MySQL(
     process.env.JAWSDB_URL
    )
} else {
    const db= new MySQL({
        host: "localhost", 
        port: 3306,
        user: "jamie",
        password: "1234pass",
        database: "burger_logger_db"
    }); 
}


module.exports = db; 