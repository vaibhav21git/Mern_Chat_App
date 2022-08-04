const mongoose = require('mongoose')

const chatmodel  = mongoose.Schema(
    {
      chatname  : {type : String ,
                    trim : true           
                  },
     isgroupchat : {type : Boolean , default : false},
     users : [
        {
            type : 
        }
     ]




    }
)




// chatname
// is grp chat
//users
// latest message
// group admin