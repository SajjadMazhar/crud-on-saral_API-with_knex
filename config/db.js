require("dotenv").config()
const knex = require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:process.env.PASSWORD,
        database:"knex_crud",
        multipleStatements:true
    }
})

knex.schema.createTable("saralApi", table=>{
    table.increments("id")
    table.string("name")
    table.string("logo")
    table.string("notes")
    table.string("days_to_complete")
    table.string("short_description")
    table.string("type")
    table.string("course_type")
    table.string('lang_available')
}).then(()=>{
    console.log("connection estabilished with db")
}).catch(err=>{
    console.log(err.sqlMessage)
})

module.exports = knex;