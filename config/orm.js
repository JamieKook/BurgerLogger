const db = require("../config/connection.js"); 
const connection = require ("../config/connectionS"); 

const orm = {
    // all: async function(table) {
    //     try {s
    //         const queryString = `SELECT * FROM ${table}`; 
    //         const {results}= await db.query({
    //             sql: queryString,
    //         }); 
    //         return results;  
    //     } catch (err){
    //         console.log(err); 
    //     }  
    // },

    all: function (table, cb){
        const queryString = `SELECT * FROM ${table}`; 
        connection.query(queryString, function (err, results){
            if (err) console.log(err); 
            cb(results); 
        })
    },

    // updateValue: async function(table, updateColumn, updatedValue, condition, conditionValue){
    //     try {
    //         const queryString = `UPDATE ${table} 
    //                             SET ${updateColumn} = ${updatedValue} 
    //                             WHERE ${condition} = ${conditionValue}`; 
    //         const {results} = await db.query({
    //             sql: queryString,
    //         }); 
    //         return results; 
    //     } catch (err) {
    //         console.log(err); 
    //     }
    // },

    updateValue: function(table, updateColumn, updatedValue, condition, conditionValue, cb){
            const queryString = `UPDATE ${table} 
                                SET ${updateColumn} = ${updatedValue} 
                                WHERE ${condition} = ${conditionValue}`; 
          connection.query(queryString, function(err, results){
              if (err) console.log(err); 
              cb(results); 
          })
    },

    // addNewValue: async function(table, columnName, columnValue){
    //     try{
    //         const queryString= `INSERT INTO ${table} (${columnName})
    //                             VALUES ("${columnValue}")`; 
    //         const {results} = await db.query({
    //             sql: queryString,
    //         }); 
    //         return results; 
    //     } catch (err) {
    //         console.log(err); 
    //     }
    // },

    addNewValue: function(table, columnName, columnValue, cb){
        const queryString= `INSERT INTO ${table} (${columnName})
                            VALUES ("${columnValue}")`; 
        connection.query(queryString, function (err, results){
            if (err) console.log(err); 
            cb(results); 
        })
    },

    // deleteTableRow: async function (table, condition, conditionValue){
    //     try{
    //         const queryString = `DELETE FROM ${table}
    //                             WHERE ${condition} = ${conditionValue}`; 
    //         const {results} = db.query({
    //             sql: queryString,
    //         });
    //     } catch(err) {
    //         console.log(err); 
    //     }
    // }

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