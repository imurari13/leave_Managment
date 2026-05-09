const express = require("express");

const router = express.Router();

const Leave = require("../models/Leave");

router.post("/apply", async(req,res)=>{

    try{

        const leave = new Leave(req.body);

        await leave.save();

        res.json({

            message:"Leave Applied"

        });

    }
    catch(error){

        res.json(error);

    }

});

router.get("/:employeeId", async(req,res)=>{

    try{

        const leaves = await Leave.find({

            employeeId:req.params.employeeId

        });

        res.json(leaves);

    }
    catch(error){

        res.json(error);

    }

});

module.exports = router;