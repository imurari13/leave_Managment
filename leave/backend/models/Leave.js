const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({

    employeeId:{
        type:String,
        required:true
    },

    leaveType:{
        type:String,
        required:true
    },

    startDate:{
        type:String,
        required:true
    },

    endDate:{
        type:String,
        required:true
    },

    reason:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Pending"
    }

});

module.exports = mongoose.model("Leave", leaveSchema);