const express = require("express")
const router = express.Router()
const fs = require("fs")
const {getAllData, getDataById, deleteDataById, updateDataById, insertData} = require("../controller/controller")


router.post("/data", (req, res)=>{
    fs.readFile("./staticFiles/saralApi.json", "utf-8", (err, data)=>{
        if(err){
            console.log("error while reading", err)
        }else{
            JSON.parse(data).forEach(obj=>{
                knex("saralApi").insert(obj).then(res=>{
                }).catch(err=>{
                    console.log("error while inserting", err)
                })
            })
            res.send("all done")
        }
    })
})

router.post("/insertOne", insertData)

router.get("/data", getAllData)

router.get("/data/:id", getDataById)

router.delete("/delete/:id", deleteDataById)

router.put("/update/:id", updateDataById)


module.exports = router