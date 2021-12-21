const knex = require("../config/db");

exports.getAllData = (req, res)=>{
    knex("saralApi").then((rows)=>{
        res.send(rows)
    }).catch(err=>{
        console.log("error while getting data: ", err)
    })
}

exports.getDataById = (req, res)=>{
    knex("saralApi").where({id:req.params.id}).then(row=>{
        res.send(row)
    }).catch(err=>{
        console.log("error while retrieving data: ", err)
    })
}

exports.deleteDataById = (req, res)=>{
    knex("saralApi").where({id:req.params.id}).del().then(()=>{
        res.send("deleted")
    }).catch(err=>{
        console.log("error while deleting: ", err)
    })
}

exports.updateDataById = (req, res)=>{
    knex("saralApi").where({id:req.params.id}).update(req.body).then(()=>{
        res.send("updated")
    }).catch(err=>{
        console.log("error while updating data", err)
    })
}

exports.insertData = (req, res)=>{
    knex("saralApi").insert(req.body).then(()=>{
        res.send("data inserted")
    }).catch(err=>{
        console.log("error while inserting data: ", err)
        
    })
}
