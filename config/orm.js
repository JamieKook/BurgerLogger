const connection = require ("../config/connection"); 

const orm = {

    all: function (table, cb){
        const queryString = `SELECT * FROM ${table}`; 
        connection.query(queryString, function (err, results){
            if (err) console.log(err); 
            cb(results); 
        })
    },

    updateValue: function(table, updateColumn, updatedValue, condition, conditionValue, cb){
            const queryString = `UPDATE ${table} 
                                SET ${updateColumn} = ${updatedValue} 
                                WHERE ${condition} = ${conditionValue}`; 
          connection.query(queryString, function(err, results){
              if (err) console.log(err); 
              cb(results); 
          })
    },

    addNewValue: function(table, columnName, columnValue, cb){
        const queryString= `INSERT INTO ${table} (${columnName})
                            VALUES ("${columnValue}")`; 
        connection.query(queryString, function (err, results){
            if (err) console.log(err); 
            cb(results); 
        })
    },

    deleteTableRow: function (table, condition, conditionValue, cb){
     
        const queryString = `DELETE FROM ${table}
                            WHERE ${condition} = ${conditionValue}`; 
        connection.query(queryString, function (err, results){
            if (err) console.log(err)
            cb(results); 
        })
}
}

module.exports = orm; 