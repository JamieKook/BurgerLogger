const {MySQL} = require("mysql-promisify"); 
let db = null; 
if (process.env.JAWSDB_URL){
     db = new MySQL(
     process.env.JAWSDB_URL
    )
} else {
     db= new MySQL({
        host: "localhost", 
        port: 3306,
        user: "jamie",
        password: "1234pass",
        database: "burger_logger_db"
    }); 
}


module.exports = db; 