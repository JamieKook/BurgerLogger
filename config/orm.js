const db = require("../config/connection.js"); 

const orm = {
    all: async function(table) {
        try {
            const queryString = `SELECT * FROM ${table}`; 
            const {results}= await db.query({
                sql: queryString,
            }); 
            return results;  
        } catch (err){
            console.log(err); 
        }  
    },

    updateValue: async function(table, updateColumn, updatedValue, condition, conditionValue){
        try {
            const queryString = `UPDATE ${table} 
            SET ${updateColumn} = ${updatedValue} 
            WHERE ${condition} = ${conditionValue}`; 
            const {results} = await db.query({
                sql: queryString,
            }); 
            return results; 
        } catch (err) {
            console.log(err); 
        }
    },

    addNewValue: async function(table, columnName, columnValue){
        try{
            const queryString= `INSERT INTO ${table} (${columnName})
            VALUES ("${columnValue}")`; 
            const {results} = await db.query({
                sql: queryString,
            }); 
            return results; 
        } catch (err) {
            console.log(err); 
        }
    }
}

module.exports = orm; 