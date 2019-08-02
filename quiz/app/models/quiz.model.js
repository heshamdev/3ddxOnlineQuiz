const mongoose = require('mongoose');
const QuizSchema = mongoose.Schema({
    name: {
    	type : String,
        required : true
          },
   teacherName : {
        type : String,
        default : '3D|Diagnostix'
   },
   published : {
    	type : Boolean,
    	default : false
    },
    questions: {
    	type : [{
    		quiz_name : String,
            content : String,
			      answer : Number,
            answers : [
                { 
                content : String,
                number : Number
                 }
            ]
    	}],
    	required : true
               },
});

module.exports = mongoose.model('Quiz', QuizSchema);