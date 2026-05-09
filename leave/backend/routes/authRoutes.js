const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/signup", async(req,res)=>{

    try{

        const {

            name,
            employeeId,
            department,
            password

        } = req.body;

        const existingUser = await User.findOne({

            employeeId

        });

        if(existingUser){

            return res.json({

                message:"User Already Exists"

            });

        }

        const hashedPassword = await bcrypt.hash(

            password,
            10

        );

        const user = new User({

            name,
            employeeId,
            department,
            password:hashedPassword

        });

        await user.save();

        res.json({

            message:"Signup Successful"

        });

    }
    catch(error){

        res.json(error);

    }

});

router.post("/login", async(req,res)=>{

    try{

        const {

            employeeId,
            password

        } = req.body;

        const user = await User.findOne({

            employeeId

        });

        if(!user){

            return res.json({

                message:"User Not Found"

            });

        }

        const isMatch = await bcrypt.compare(

            password,
            user.password

        );

        if(!isMatch){

            return res.json({

                message:"Invalid Password"

            });

        }

        res.json({

            message:"Login Successful",

            user

        });

    }
    catch(error){

        res.json(error);

    }

});

module.exports = router;