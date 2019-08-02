const Quiz = require('../models/quiz.model.js');
//Create Quiz
exports.create = (req, res) => {
   if(req.body.questions == []) {
        return res.status(400).send({
            message: "Quiz questions can not be empty"
        });
    }
    const quiz = new Quiz({
        name: req.body.name || "Unnamed Quiz", 
        teacherName : req.body.teacherName,
        published : req.body.published,
        questions: req.body.questions
    });
    quiz.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Quiz."
        });
    });
};

//Find Quiz
exports.findQuiz = async (req, res) => {
    const quiz = await Quiz.findById(req.query._id);
    if (!quiz) {
			return res.status(404).send('Quiz Not Found')
		}
    res.send(quiz);
};
//Find All Published Quizes
exports.findPublished = async (req, res) => {
    const quiz = await Quiz.find({ published : true});
    if (!quiz) {
			return res.status(404).send('No Quiz Found')
		}
    res.send(quiz);
};
//Find All Not Published Quizes
exports.findNotPublished = async (req, res) => {
    const quiz = await Quiz.find({ published : false});
    if (!quiz) {
			return res.status(404).send('No Quiz Found')
		}
    res.send(quiz);
};

exports.findAll = async (req, res) => {
    const quiz = await Quiz.find({});
    if (!quiz) {
			return res.status(404).send('No Quiz Found')
		}
    res.send(quiz);
};

exports.publishQuiz = async (req, res) => {
    const updated = await Quiz.findOneAndUpdate(
			{_id : req.body._id},
			{
				$set: {published : true} 
			},
			{
				new: true
			}
		)
    console.log(updated)
    res.send(updated);
};

exports.updateQuiz = async (req, res) => {
    const updated = await Quiz.findOneAndUpdate(
			{_id : req.query._id},
			{
				$set:  req.body
			},
			{
				new: true
			}
		)
    console.log(updated)
    res.send(updated);
};
//All Function to Delete all Quizs
exports.deleteAll = async (req, res) => {
    Quiz.remove({}, function(err){
    	if (err){
    		res.send('error')
    	}else{
    		res.send('done')
    	}
    });
};
