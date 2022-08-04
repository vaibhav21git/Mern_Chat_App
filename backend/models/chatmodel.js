const mongoose = require('mongoose')

const chatmodel  = mongoose.Schema(
    {
      chatname  : {type : String ,
                    trim : true           
                  },
     isgroupchat : {type : Boolean , default : false},
     users : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        }
     ],

     latestmessage : {
        type : mongoose.Schema.Types.ObjectId,
            ref : "Message",
     },
     groupadmin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
     }
    },
    {
        timestamps  : true,    
    }
)

const chat = mongoose.model("chat",chatmodel);

module.exports = chat;




// chatname
// is grp chat
//users
// latest message
// group admin